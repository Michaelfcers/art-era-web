"use client";

import { useState, useCallback, useEffect } from "react";
import { Upload, Loader2 } from "lucide-react";
import { motion } from "framer-motion";
import { useLanguage } from "../context/LanguageContext";

interface UploadAreaProps {
    onImageSelected: (file: File) => void;
    isAnalyzing: boolean;
}

export default function UploadArea({ onImageSelected, isAnalyzing }: UploadAreaProps) {
    const [isDragging, setIsDragging] = useState(false);
    const { t } = useLanguage();

    const handleDragOver = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(true);
    }, []);

    const handleDragLeave = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
    }, []);

    const handleDrop = useCallback((e: React.DragEvent) => {
        e.preventDefault();
        setIsDragging(false);
        if (e.dataTransfer.files && e.dataTransfer.files[0]) {
            onImageSelected(e.dataTransfer.files[0]);
        }
    }, [onImageSelected]);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (e.target.files && e.target.files[0]) {
            onImageSelected(e.target.files[0]);
        }
    };

    // Support Ctrl + V / Clipboard Paste
    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            if (isAnalyzing) return;
            const items = e.clipboardData?.items;
            if (!items) return;

            for (let i = 0; i < items.length; i++) {
                if (items[i].type.startsWith("image/")) {
                    const file = items[i].getAsFile();
                    if (file) {
                        onImageSelected(file);
                        break;
                    }
                }
            }
        };

        window.addEventListener("paste", handlePaste);
        return () => window.removeEventListener("paste", handlePaste);
    }, [isAnalyzing, onImageSelected]);

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-3xl mx-auto"
        >
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
          relative border-2 border-dashed rounded-2xl p-16 sm:p-24 text-center transition-all duration-300 min-h-[360px] sm:min-h-[420px] flex items-center justify-center shadow-xs
          ${isDragging
                        ? "border-accent bg-accent/10 scale-[1.02] shadow-md"
                        : "border-foreground/20 hover:border-accent/60 hover:bg-foreground/[0.02]"
                    }
          ${isAnalyzing ? "pointer-events-none opacity-50" : "cursor-pointer"}
        `}
            >
                <input
                    type="file"
                    accept="image/*"
                    onChange={handleFileChange}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                    disabled={isAnalyzing}
                />

                <div className="flex flex-col items-center justify-center space-y-6 max-w-md mx-auto">
                    {isAnalyzing ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <Loader2 className="w-16 h-16 sm:w-20 sm:h-20 text-accent" />
                        </motion.div>
                    ) : (
                        <div className="p-5 rounded-full bg-accent/10 text-accent">
                            <Upload className="w-12 h-12 sm:w-16 sm:h-16" />
                        </div>
                    )}

                    <div className="space-y-3">
                        <h3 className="text-2xl sm:text-3xl font-serif font-medium text-foreground tracking-tight">
                            {isAnalyzing ? t("analyzingTitle") : t("uploadTitle")}
                        </h3>
                        <p className="text-base sm:text-lg font-sans text-foreground/60 leading-relaxed">
                            {isAnalyzing
                                ? t("analyzingSubtitle")
                                : t("uploadSubtitle")
                            }
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
