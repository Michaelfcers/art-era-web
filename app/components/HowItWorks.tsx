"use client";

import { motion } from "framer-motion";
import { Upload, Cpu, Palette, ShieldCheck } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function HowItWorks() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Transparent Technology",
      title: "How Art Era Detector Works",
      subtitle: "State-of-the-art computer vision running directly inside your browser.",
      privacyNote: "Your images stay on your device — no files are ever sent to an external server.",
      steps: [
        {
          number: "01",
          icon: Upload,
          title: "Select Artwork",
          description: "Drag and drop or upload any painting, drawing, or photograph you want to analyze."
        },
        {
          number: "02",
          icon: Cpu,
          title: "Client-Side Inference",
          description: "Our ConvNeXt Tiny neural network executes instantly in your browser using WebAssembly & ONNX Runtime."
        },
        {
          number: "03",
          icon: Palette,
          title: "Instant Art History",
          description: "Discover the movement, historical era, key visual traits, and reference masterpieces."
        }
      ]
    },
    es: {
      tagline: "Tecnología Transparente",
      title: "Cómo Funciona Art Era Detector",
      subtitle: "Visión por computador de última generación ejecutándose directamente en tu navegador.",
      privacyNote: "Tus imágenes no salen de tu dispositivo — no se envían archivos a ningún servidor externo.",
      steps: [
        {
          number: "01",
          icon: Upload,
          title: "Selecciona tu Obra",
          description: "Arrastra y suelta o sube cualquier pintura, dibujo o fotografía que desees analizar."
        },
        {
          number: "02",
          icon: Cpu,
          title: "Inferencia Local",
          description: "Nuestra red neuronal ConvNeXt Tiny se ejecuta al instante en tu navegador mediante WebAssembly y ONNX."
        },
        {
          number: "03",
          icon: Palette,
          title: "Historia del Arte Instantánea",
          description: "Descubre el movimiento, época histórica, rasgos visuales clave y obras de referencia."
        }
      ]
    },
    pt: {
      tagline: "Tecnologia Transparente",
      title: "Como Funciona o Art Era Detector",
      subtitle: "Visão computacional de última geração em execução direta no seu navegador.",
      privacyNote: "As suas imagens permanecem no seu dispositivo — nenhum ficheiro é enviado para servidores externos.",
      steps: [
        {
          number: "01",
          icon: Upload,
          title: "Selecione a sua Obra",
          description: "Arraste e solte ou carregue qualquer pintura, desenho ou fotografia que deseje analisar."
        },
        {
          number: "02",
          icon: Cpu,
          title: "Inferência Local",
          description: "A nossa rede neuronal ConvNeXt Tiny executa instantaneamente no seu navegador com WebAssembly e ONNX."
        },
        {
          number: "03",
          icon: Palette,
          title: "História de Arte Instantânea",
          description: "Descubra o movimento, época histórica, características visuais principais e obras de referência."
        }
      ]
    }
  };

  const current = content[language] || content.en;

  return (
    <section id="how-it-works" className="w-full py-24 border-t border-foreground/10 relative z-10 scroll-mt-20">
      <div className="max-w-6xl mx-auto px-4 space-y-16">

        {/* Section Header */}
        <div className="text-center space-y-4 max-w-2xl mx-auto">
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-accent uppercase tracking-[0.25em] text-xs font-sans font-semibold"
          >
            {current.tagline}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-5xl font-serif text-foreground tracking-tight"
          >
            {current.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 font-serif text-base md:text-lg leading-relaxed"
          >
            {current.subtitle}
          </motion.p>
        </div>

        {/* Steps Grid */}
        <div className="grid md:grid-cols-3 gap-8 relative">
          {current.steps.map((step, idx) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.15 }}
                className="relative bg-neutral-50 dark:bg-neutral-900/50 border border-neutral-200 dark:border-neutral-800 p-8 rounded-2xl flex flex-col space-y-4 hover:border-accent/40 transition-colors duration-300 group shadow-xs"
              >
                <div className="flex items-center justify-between">
                  <span className="text-3xl font-serif font-bold text-accent/50 group-hover:text-accent transition-colors">
                    {step.number}
                  </span>
                  <div className="p-3 rounded-full bg-accent/10 text-accent group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-6 h-6" />
                  </div>
                </div>

                <div className="space-y-2 pt-2">
                  <h3 className="text-xl font-serif font-semibold text-foreground">
                    {step.title}
                  </h3>
                  <p className="text-sm text-foreground/70 font-sans leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Privacy Highlight Badge */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          className="flex items-center justify-center gap-3 text-xs text-foreground/60 font-sans bg-accent/5 border border-accent/20 max-w-xl mx-auto py-3 px-6 rounded-full text-center"
        >
          <ShieldCheck className="w-4 h-4 text-accent shrink-0" />
          <span>{current.privacyNote}</span>
        </motion.div>

      </div>
    </section>
  );
}
