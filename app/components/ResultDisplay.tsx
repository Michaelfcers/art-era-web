"use client";

import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import { ArtStyle, STYLE_TRANSLATIONS } from "../data/styles";
import { useLanguage } from "../context/LanguageContext";

interface ResultDisplayProps {
    style: ArtStyle;
    confidence?: number;
    userImage: string | null;
    onReset: () => void;
}

export default function ResultDisplay({ style, confidence, userImage, onReset }: ResultDisplayProps) {
    const { language, t } = useLanguage();

    // Get active translation for current language or fallback to default
    const translation = STYLE_TRANSLATIONS[style.id]?.[language] || {
        name: style.name,
        era: style.era,
        description: style.description,
        keyCharacteristics: style.keyCharacteristics
    };

    return (
        <div className="w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12 items-start"
            >
                {/* Images Section (Original Tilted Stacked Layout) */}
                <div className="space-y-8">
                    {/* User Uploaded Image */}
                    <div className="relative aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                        {userImage && (
                            <img
                                src={userImage}
                                alt="Your uploaded artwork"
                                className="object-cover w-full h-full"
                            />
                        )}
                        <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs font-serif tracking-wider uppercase text-neutral-900">
                            {t("original")}
                        </div>
                    </div>

                    {/* Reference Image */}
                    <div className="relative aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden shadow-lg transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 ml-8 -mt-20 border-4 border-white">
                        {style.imageUrl ? (
                            <img
                                src={style.imageUrl}
                                alt={translation.name}
                                className="object-cover w-full h-full"
                            />
                        ) : (
                            <div className="w-full h-full bg-accent/20 flex items-center justify-center text-foreground/40 italic p-6 text-center">
                                [{t("reference")} - {translation.name}]
                            </div>
                        )}
                        <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-xs font-serif tracking-wider uppercase text-neutral-900">
                            {t("reference")}
                        </div>
                    </div>
                </div>

                {/* Text Content */}
                <div className="flex flex-col justify-center h-full space-y-8 pt-8">
                    <div className="space-y-2">
                        <motion.p
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                            className="text-accent uppercase tracking-[0.2em] text-sm"
                        >
                            {t("detectedStyle")} {confidence !== undefined && `(${confidence.toFixed(1)}%)`}
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-5xl md:text-6xl font-serif"
                        >
                            {translation.name}
                        </motion.h2>
                        {translation.era && (
                            <p className="text-sm font-sans tracking-widest uppercase text-foreground/60 font-medium pt-1">
                                {t("era")}: {translation.era}
                            </p>
                        )}
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="prose prose-lg text-foreground/80 font-serif leading-relaxed space-y-4"
                    >
                        <p>{translation.description}</p>

                        {translation.keyCharacteristics && translation.keyCharacteristics.length > 0 && (
                            <div className="space-y-2 pt-2">
                                <p className="text-xs uppercase tracking-widest text-foreground/50 font-sans font-semibold">
                                    {t("keyCharacteristics")}
                                </p>
                                <ul className="list-disc list-inside text-sm space-y-1 font-sans text-foreground/75">
                                    {translation.keyCharacteristics.map((char, i) => (
                                        <li key={i}>{char}</li>
                                    ))}
                                </ul>
                            </div>
                        )}
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.9 }}
                    >
                        <button
                            onClick={onReset}
                            className="group flex items-center space-x-2 text-sm uppercase tracking-widest hover:text-accent transition-colors"
                        >
                            <RefreshCcw className="w-4 h-4 group-hover:rotate-180 transition-transform duration-500" />
                            <span>{t("analyzeAnother")}</span>
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
