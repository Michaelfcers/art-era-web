"use client";

import { motion } from "framer-motion";
import { RefreshCcw } from "lucide-react";
import { ArtStyle } from "../data/styles";
import Image from "next/image";

interface ResultDisplayProps {
    style: ArtStyle;
    userImage: string | null;
    onReset: () => void;
}

export default function ResultDisplay({ style, userImage, onReset }: ResultDisplayProps) {
    return (
        <div className="w-full max-w-4xl mx-auto">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="grid md:grid-cols-2 gap-12 items-start"
            >
                {/* Images Section */}
                <div className="space-y-8">
                    {/* User Image */}
                    <div className="relative aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden shadow-lg transform rotate-[-2deg] hover:rotate-0 transition-transform duration-500">
                        {userImage && (
                            <img
                                src={userImage}
                                alt="Your uploaded artwork"
                                className="object-cover w-full h-full"
                            />
                        )}
                        <div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 text-xs font-serif tracking-wider uppercase">
                            Original
                        </div>
                    </div>

                    {/* Reference Image (Placeholder logic) */}
                    <div className="relative aspect-[3/4] bg-neutral-100 rounded-lg overflow-hidden shadow-lg transform rotate-[2deg] hover:rotate-0 transition-transform duration-500 ml-8 -mt-20 border-4 border-white">
                        {/* Note: In a real app, this would be the style.imageUrl */}
                        <div className="w-full h-full bg-accent/20 flex items-center justify-center text-foreground/40 italic p-6 text-center">
                            [Reference Image for {style.name}]
                        </div>
                        <div className="absolute bottom-4 right-4 bg-white/90 px-3 py-1 text-xs font-serif tracking-wider uppercase">
                            Reference
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
                            Detected Style
                        </motion.p>
                        <motion.h2
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.5 }}
                            className="text-5xl md:text-6xl font-serif"
                        >
                            {style.name}
                        </motion.h2>
                    </div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.7 }}
                        className="prose prose-lg text-foreground/80 font-serif leading-relaxed"
                    >
                        <p>{style.description}</p>
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
                            <span>Analyze Another Piece</span>
                        </button>
                    </motion.div>
                </div>
            </motion.div>
        </div>
    );
}
