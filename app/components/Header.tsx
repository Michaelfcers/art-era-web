"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../data/translations";
import { ChevronDown } from "lucide-react";

export default function Header() {
    const [activeSection, setActiveSection] = useState("top");
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const links = [
        { name: t("home"), href: "#top", id: "top" },
        { name: t("howItWorks"), href: "#how-it-works", id: "how-it-works" },
        { name: t("contact"), href: "#contact", id: "contact" },
    ];

    const languages: { code: Language; flag: string; title: string }[] = [
        { code: "en", flag: "🇬🇧", title: "English" },
        { code: "es", flag: "🇪🇸", title: "Español" },
        { code: "pt", flag: "🇵🇹", title: "Português" },
    ];

    const currentLangObj = languages.find((l) => l.code === language) || languages[0];

    useEffect(() => {
        const handleScroll = () => {
            const sections = ["top", "how-it-works", "contact"];
            const scrollPosition = window.scrollY + 200;

            for (const sectionId of sections) {
                const element = document.getElementById(sectionId);
                if (element) {
                    const top = element.offsetTop;
                    const height = element.offsetHeight;
                    if (scrollPosition >= top && scrollPosition < top + height) {
                        setActiveSection(sectionId);
                        break;
                    }
                }
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close dropdown on outside click
    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
                setIsLangOpen(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
        e.preventDefault();
        setActiveSection(id);
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

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
                    {links.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className={`
                   relative text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer
                   ${isActive ? "text-foreground font-medium" : "text-foreground/60 hover:text-foreground"}
                 `}
                            >
                                {link.name}
                                {isActive && (
                                    <motion.div
                                        layoutId="underline"
                                        className="absolute -bottom-1 left-0 right-0 h-px bg-accent"
                                    />
                                )}
                            </a>
                        );
                    })}
                </nav>

                {/* Flag-Only Dropdown Switcher */}
                <div ref={dropdownRef} className="relative">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="bg-white/70 backdrop-blur-md border border-white/20 px-3.5 py-2.5 rounded-full flex items-center gap-1.5 shadow-sm text-base hover:bg-white/90 transition-all cursor-pointer"
                        title={currentLangObj.title}
                    >
                        <span className="text-lg leading-none">{currentLangObj.flag}</span>
                        <ChevronDown className={`w-3.5 h-3.5 text-foreground/50 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 bg-white/90 backdrop-blur-md border border-white/30 rounded-2xl p-1.5 shadow-lg flex flex-col gap-1 min-w-[56px] items-center z-50"
                            >
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            setLanguage(lang.code);
                                            setIsLangOpen(false);
                                        }}
                                        className={`
                       w-10 h-10 rounded-xl text-xl flex items-center justify-center transition-all cursor-pointer
                       ${language === lang.code
                                                ? "bg-foreground/10 scale-110 shadow-xs"
                                                : "hover:bg-foreground/5 opacity-75 hover:opacity-100"
                                            }
                     `}
                                        title={lang.title}
                                    >
                                        <span>{lang.flag}</span>
                                    </button>
                                ))}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
