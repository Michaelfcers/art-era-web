import * as ort from "onnxruntime-web";

// Model configuration
const MODEL_URL = "https://huggingface.co/michaelrodcs/art-style-convnext/resolve/main/art-style-convnext-quantized.onnx";

// 21 Classes in exact order from model training
export const MODEL_CLASSES = [
  { id: 'abstract_expressionism', name: 'Abstract Expressionism', description: 'Spontaneous, automatic, or subconscious creation.' },
  { id: 'art_nouveau', name: 'Art Nouveau Modern', description: 'Inspired by natural forms, curved lines of plants and flowers.' },
  { id: 'baroque', name: 'Baroque', description: 'Exaggerated motion and clear detail used to produce drama and grandeur.' },
  { id: 'color_field', name: 'Color Field Painting', description: 'Large fields of flat, solid color spread across the canvas.' },
  { id: 'cubism', name: 'Cubism', description: 'Objects are analyzed, broken up and reassembled in an abstracted form.' },
  { id: 'early_renaissance', name: 'Early Renaissance', description: 'Striving for realism, linear perspective, and classical humanism.' },
  { id: 'expressionism', name: 'Expressionism', description: 'Art that seeks to convey emotional experience rather than physical reality.' },
  { id: 'fauvism', name: 'Fauvism', description: 'Vibrant, non-naturalistic color with fierce and brushwork style.' },
  { id: 'high_renaissance', name: 'High Renaissance', description: 'Harmonious proportion, balance, and mastery of perspective and light.' },
  { id: 'impressionism', name: 'Impressionism', description: 'Capturing the sensory effect of light and fleeting moments.' },
  { id: 'mannerism', name: 'Mannerism Late Renaissance', description: 'Elongated forms, exaggerated poses, and dramatic lighting.' },
  { id: 'minimalism', name: 'Minimalism', description: 'Exposing the essence of a subject through minimal geometric forms.' },
  { id: 'naive_art', name: 'Naive Art Primitivism', description: 'Childlike simplicity in execution and vision, free of formal rules.' },
  { id: 'northern_renaissance', name: 'Northern Renaissance', description: 'Minute detail, oil painting realism, and deep symbolism.' },
  { id: 'pop_art', name: 'Pop Art', description: 'Challenging fine art traditions with popular imagery and mass culture.' },
  { id: 'post_impressionism', name: 'Post Impressionism', description: 'Extending Impressionism while rejecting its limitations: vivid colors and thick application of paint.' },
  { id: 'realism', name: 'Realism', description: 'Representing subject matter truthfully without artificiality.' },
  { id: 'rococo', name: 'Rococo', description: 'Elaborate, ornate decoration, pastel colors, and playful themes.' },
  { id: 'romanticism', name: 'Romanticism', description: 'Emphasis on intense emotion, individualism, and nature.' },
  { id: 'symbolism', name: 'Symbolism', description: 'Representing absolute truths through metaphorical imagery.' },
  { id: 'ukiyo_e', name: 'Ukiyo-e', description: 'Japanese woodblock prints depicting the floating world.' }
];

export interface PredictionResult {
  style: {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
  };
  confidence: number;
  allPredictions: { name: string; confidence: number }[];
}

let sessionInstance: ort.InferenceSession | null = null;

// Helper to load or return cached ONNX inference session
async function getSession(): Promise<ort.InferenceSession> {
  if (!sessionInstance) {
    // Configure WebGL / WASM execution provider
    ort.env.wasm.numThreads = 1;
    sessionInstance = await ort.InferenceSession.create(MODEL_URL, {
      executionProviders: ['wasm', 'webgl'],
    });
  }
  return sessionInstance;
}

// Apply Softmax to raw logits
function softmax(logits: number[]): number[] {
  const maxLogit = Math.max(...logits);
  const exps = logits.map((val) => Math.exp(val - maxLogit));
  const sumExps = exps.reduce((a, b) => a + b, 0);
  return exps.map((val) => val / sumExps);
}

// Convert HTML File to 256x256 Float32Array Tensor with ImageNet normalization
async function imageToTensor(file: File): Promise<ort.Tensor> {
  return new Promise((resolve, reject) => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = URL.createObjectURL(file);

    img.onload = () => {
      const canvas = document.createElement("canvas");
      canvas.width = 256;
      canvas.height = 256;
      const ctx = canvas.getContext("2d");

      if (!ctx) {
        reject(new Error("Could not get canvas context"));
        return;
      }

      ctx.drawImage(img, 0, 0, 256, 256);
      const imgData = ctx.getImageData(0, 0, 256, 256);
      const { data } = imgData;

      // ImageNet Normalization values
      const mean = [0.485, 0.456, 0.406];
      const std = [0.229, 0.224, 0.225];

      // Form shape: [1, 3, 256, 256] (CHW format)
      const float32Data = new Float32Array(1 * 3 * 256 * 256);

      for (let i = 0; i < 256 * 256; i++) {
        const r = data[i * 4] / 255.0;
        const g = data[i * 4 + 1] / 255.0;
        const b = data[i * 4 + 2] / 255.0;

        // Channel 0: Red
        float32Data[i] = (r - mean[0]) / std[0];
        // Channel 1: Green
        float32Data[256 * 256 + i] = (g - mean[1]) / std[1];
        // Channel 2: Blue
        float32Data[256 * 256 * 2 + i] = (b - mean[2]) / std[2];
      }

      URL.revokeObjectURL(img.src);
      resolve(new ort.Tensor("float32", float32Data, [1, 3, 256, 256]));
    };

    img.onerror = (err) => reject(err);
  });
}

// Main classification function
export async function classifyImage(file: File): Promise<PredictionResult> {
  const session = await getSession();
  const inputTensor = await imageToTensor(file);

  const feeds: Record<string, ort.Tensor> = { input: inputTensor };
  const results = await session.run(feeds);

  const outputData = Array.from(results.output.data as Float32Array);
  const probabilities = softmax(outputData);

  // Map probabilities to classes
  const mapped = MODEL_CLASSES.map((cls, idx) => ({
    style: {
      id: cls.id,
      name: cls.name,
      description: cls.description,
      imageUrl: `/images/styles/${cls.id}.jpg`
    },
    confidence: probabilities[idx] * 100
  }));

  // Sort descending
  mapped.sort((a, b) => b.confidence - a.confidence);

  const top = mapped[0];

  return {
    style: top.style,
    confidence: top.confidence,
    allPredictions: mapped.map((m) => ({ name: m.style.name, confidence: m.confidence }))
  };
}
