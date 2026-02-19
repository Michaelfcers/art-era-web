"use client";

import { useState, useCallback } from "react";
import { Upload, Loader2 } from "lucide-react";
import { motion } from "framer-motion";

interface UploadAreaProps {
    onImageSelected: (file: File) => void;
    isAnalyzing: boolean;
}

export default function UploadArea({ onImageSelected, isAnalyzing }: UploadAreaProps) {
    const [isDragging, setIsDragging] = useState(false);

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

    return (
        <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="w-full max-w-xl mx-auto"
        >
            <div
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                className={`
          relative border-2 border-dashed rounded-xl p-12 text-center transition-all duration-300
          ${isDragging
                        ? "border-accent bg-accent/5 scale-[1.02]"
                        : "border-foreground/20 hover:border-foreground/40 hover:bg-foreground/5"
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

                <div className="flex flex-col items-center justify-center space-y-4">
                    {isAnalyzing ? (
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                        >
                            <Loader2 className="w-12 h-12 text-accent" />
                        </motion.div>
                    ) : (
                        <Upload className="w-12 h-12 text-foreground/60" />
                    )}

                    <div className="space-y-2">
                        <h3 className="text-xl font-medium">
                            {isAnalyzing ? "Analyzing Masterpiece..." : "Upload Art Piece"}
                        </h3>
                        <p className="text-sm text-foreground/60">
                            {isAnalyzing
                                ? "Discerniing style, era, and technique"
                                : "Drag & drop or click to browse"
                            }
                        </p>
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
