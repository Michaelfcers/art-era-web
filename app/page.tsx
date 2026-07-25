"use client";

import { useState } from "react";
import UploadArea from "./components/UploadArea";
import ResultDisplay from "./components/ResultDisplay";
import Header from "./components/Header";
import { ArtStyle } from "./data/styles";
import { motion, AnimatePresence } from "framer-motion";
import { classifyImage } from "./utils/classifier";
import { useLanguage } from "./context/LanguageContext";

export default function Home() {
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [detectedStyle, setDetectedStyle] = useState<ArtStyle | null>(null);
  const [confidence, setConfidence] = useState<number | undefined>(undefined);
  const [userImage, setUserImage] = useState<string | null>(null);
  const { t } = useLanguage();

  const handleImageSelected = async (file: File) => {
    const imageUrl = URL.createObjectURL(file);
    setUserImage(imageUrl);
    setIsAnalyzing(true);

    try {
      const result = await classifyImage(file);
      setDetectedStyle(result.style);
      setConfidence(result.confidence);
    } catch (error) {
      console.error("Error classifying image:", error);
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleReset = () => {
    setDetectedStyle(null);
    setConfidence(undefined);
    setUserImage(null);
    setIsAnalyzing(false);
  };

  return (
    <div className="min-h-screen flex flex-col items-center p-8 sm:p-20 font-[var(--font-serif)] relative overflow-hidden">
      <Header />

      <main className="w-full max-w-6xl mx-auto flex flex-col items-center gap-16 mt-20 flex-grow justify-center relative z-10">

        <motion.header
          layout
          className="text-center space-y-4"
        >
          <motion.h1
            layout="position"
            className="text-5xl md:text-7xl tracking-tight font-medium bg-gradient-to-r from-gray-900 via-gray-700 to-gray-900 dark:from-gray-100 dark:via-gray-300 dark:to-gray-100 bg-clip-text text-transparent"
          >
            {t("title")}
          </motion.h1>
          <motion.p
            layout="position"
            className="text-accent uppercase tracking-widest text-sm font-sans"
          >
            {t("subtitle")}
          </motion.p>
        </motion.header>

        <AnimatePresence mode="wait">
          {!detectedStyle ? (
            <motion.div
              key="upload"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20, transition: { duration: 0.3 } }}
              className="w-full"
            >
              <UploadArea
                onImageSelected={handleImageSelected}
                isAnalyzing={isAnalyzing}
              />
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="w-full"
            >
              <ResultDisplay
                style={detectedStyle}
                confidence={confidence}
                userImage={userImage}
                onReset={handleReset}
              />
            </motion.div>
          )}
        </AnimatePresence>

      </main>

      <motion.footer
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1 }}
        className="w-full text-center py-8 text-xs text-foreground/40 uppercase tracking-widest mt-auto relative z-10 font-sans"
      >
        {t("footer")}
      </motion.footer>
    </div>
  );
}
