"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../data/translations";
import { Globe } from "lucide-react";

export default function Header() {
    const [activeLink, setActiveLink] = useState("Home");
    const { language, setLanguage, t } = useLanguage();

    const links = [
        { name: t("home"), href: "/" },
        { name: t("howItWorks"), href: "#how-it-works" },
        { name: t("contact"), href: "#contact" },
    ];

    const languages: { code: Language; label: string; flag: string }[] = [
        { code: "en", label: "EN", flag: "🇬🇧" },
        { code: "es", label: "ES", flag: "🇪🇸" },
        { code: "pt", label: "PT", flag: "🇵🇹" },
    ];

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
        >
            <div className="relative group flex items-center gap-4">
                {/* Artistic Background Blur */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700" />

                {/* Navigation Container */}
                <nav className="relative bg-white/70 backdrop-blur-md border border-white/20 px-8 py-3 rounded-full flex items-center gap-8 shadow-sm">
                    {links.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            onClick={() => setActiveLink(link.name)}
                            className={`
                 relative text-sm uppercase tracking-widest transition-colors duration-300
                 ${activeLink === link.name ? "text-foreground font-medium" : "text-foreground/60 hover:text-foreground"}
               `}
                        >
                            {link.name}
                            {activeLink === link.name && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                                />
                            )}
                        </Link>
                    ))}
                </nav>

                {/* Language Switcher Selector */}
                <div className="relative bg-white/70 backdrop-blur-md border border-white/20 px-4 py-2.5 rounded-full flex items-center gap-2 shadow-sm">
                    <Globe className="w-3.5 h-3.5 text-foreground/50" />
                    <div className="flex items-center gap-1">
                        {languages.map((lang) => (
                            <button
                                key={lang.code}
                                onClick={() => setLanguage(lang.code)}
                                className={`
                    px-2 py-0.5 rounded-full text-xs font-sans font-medium transition-all duration-200 flex items-center gap-1
                    ${language === lang.code
                                        ? "bg-foreground text-background shadow-xs font-semibold"
                                        : "text-foreground/60 hover:text-foreground hover:bg-foreground/5"
                                    }
                  `}
                                title={lang.label}
                            >
                                <span>{lang.flag}</span>
                                <span>{lang.label}</span>
                            </button>
                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
}
