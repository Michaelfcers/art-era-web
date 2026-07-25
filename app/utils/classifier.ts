import * as ort from "onnxruntime-web";
import { STYLE_TRANSLATIONS, Language } from "../data/translations";
import { REFERENCE_IMAGES, ArtStyle } from "../data/styles";

const MODEL_URL = "https://huggingface.co/michaelrodcs/art-style-convnext/resolve/main/art-style-convnext-quantized.onnx";

export const MODEL_CLASSES_KEYS = [
  'abstract_expressionism',
  'art_nouveau',
  'baroque',
  'color_field',
  'cubism',
  'early_renaissance',
  'expressionism',
  'fauvism',
  'high_renaissance',
  'impressionism',
  'mannerism',
  'minimalism',
  'naive_art',
  'northern_renaissance',
  'pop_art',
  'post_impressionism',
  'realism',
  'rococo',
  'romanticism',
  'symbolism',
  'ukiyo_e'
];

export interface PredictionResult {
  style: ArtStyle;
  confidence: number;
  allPredictions: { name: string; confidence: number }[];
}

let sessionInstance: ort.InferenceSession | null = null;

async function getSession(): Promise<ort.InferenceSession> {
  if (!sessionInstance) {
    ort.env.wasm.numThreads = 1;
    sessionInstance = await ort.InferenceSession.create(MODEL_URL, {
      executionProviders: ['wasm', 'webgl'],
    });
  }
  return sessionInstance;
}

function softmax(logits: number[]): number[] {
  const maxLogit = Math.max(...logits);
  const exps = logits.map((val) => Math.exp(val - maxLogit));
  const sumExps = exps.reduce((a, b) => a + b, 0);
  return exps.map((val) => val / sumExps);
}

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

      const mean = [0.485, 0.456, 0.406];
      const std = [0.229, 0.224, 0.225];

      const float32Data = new Float32Array(1 * 3 * 256 * 256);

      for (let i = 0; i < 256 * 256; i++) {
        const r = data[i * 4] / 255.0;
        const g = data[i * 4 + 1] / 255.0;
        const b = data[i * 4 + 2] / 255.0;

        float32Data[i] = (r - mean[0]) / std[0];
        float32Data[256 * 256 + i] = (g - mean[1]) / std[1];
        float32Data[256 * 256 * 2 + i] = (b - mean[2]) / std[2];
      }

      URL.revokeObjectURL(img.src);
      resolve(new ort.Tensor("float32", float32Data, [1, 3, 256, 256]));
    };

    img.onerror = (err) => reject(err);
  });
}

export async function classifyImage(file: File, lang: Language = 'en'): Promise<PredictionResult> {
  const session = await getSession();
  const inputTensor = await imageToTensor(file);

  const feeds: Record<string, ort.Tensor> = { input: inputTensor };
  const results = await session.run(feeds);

  const outputData = Array.from(results.output.data as Float32Array);
  const probabilities = softmax(outputData);

  const mapped = MODEL_CLASSES_KEYS.map((key, idx) => {
    const info = STYLE_TRANSLATIONS[key]?.[lang] || STYLE_TRANSLATIONS[key]?.['en'];
    const imageUrl = REFERENCE_IMAGES[key] || `/images/styles/${key}.jpg`;
    return {
      style: {
        id: key,
        name: info.name,
        era: info.era,
        description: info.description,
        keyCharacteristics: info.keyCharacteristics,
        imageUrl
      },
      confidence: probabilities[idx] * 100
    };
  });

  mapped.sort((a, b) => b.confidence - a.confidence);

  const top = mapped[0];

  return {
    style: top.style,
    confidence: top.confidence,
    allPredictions: mapped.map((m) => ({ name: m.style.name, confidence: m.confidence }))
  };
}
