"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import { Language } from "../data/translations";
import { ChevronDown } from "lucide-react";
import { FlagGB, FlagES, FlagPT } from "./FlagIcons";

export default function Header() {
    const [activeSection, setActiveSection] = useState("top");
    const [isLangOpen, setIsLangOpen] = useState(false);
    const { language, setLanguage, t } = useLanguage();
    const dropdownRef = useRef<HTMLDivElement>(null);

    const links = [
        { name: t("home"), href: "#top", id: "top", minWidth: "min-w-[55px] sm:min-w-[70px]" },
        { name: t("howItWorks"), href: "#how-it-works", id: "how-it-works", minWidth: "min-w-[110px] sm:min-w-[150px]" },
        { name: t("contact"), href: "#contact", id: "contact", minWidth: "min-w-[65px] sm:min-w-[90px]" },
    ];

    const languages: { code: Language; title: string; FlagComponent: React.ComponentType<{ className?: string }> }[] = [
        { code: "en", title: "English", FlagComponent: FlagGB },
        { code: "es", title: "Español", FlagComponent: FlagES },
        { code: "pt", title: "Português", FlagComponent: FlagPT },
    ];

    const currentLangObj = languages.find((l) => l.code === language) || languages[0];
    const ActiveFlag = currentLangObj.FlagComponent;

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
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-3 sm:p-6"
        >
            <div className="relative group flex items-center gap-2 sm:gap-4 max-w-full">
                {/* Artistic Background Blur */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700" />

                {/* Responsive Navigation Container */}
                <nav className="relative bg-white/70 backdrop-blur-md border border-white/20 px-3 py-2.5 sm:px-8 sm:py-3 rounded-full flex items-center gap-2 sm:gap-6 shadow-sm sm:min-w-[440px] justify-between overflow-x-auto no-scrollbar">
                    {links.map((link) => {
                        const isActive = activeSection === link.id;
                        return (
                            <a
                                key={link.id}
                                href={link.href}
                                onClick={(e) => scrollToSection(e, link.id)}
                                className={`
                   relative text-[11px] sm:text-sm uppercase tracking-widest transition-colors duration-300 cursor-pointer text-center inline-block whitespace-nowrap ${link.minWidth}
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

                {/* Responsive Flag SVG Dropdown Switcher */}
                <div ref={dropdownRef} className="relative shrink-0">
                    <button
                        onClick={() => setIsLangOpen(!isLangOpen)}
                        className="bg-white/70 backdrop-blur-md border border-white/20 px-2.5 py-2 sm:px-3.5 sm:py-2.5 rounded-full flex items-center gap-1.5 sm:gap-2 shadow-sm hover:bg-white/90 transition-all cursor-pointer w-[54px] sm:w-[64px] justify-center"
                        title={currentLangObj.title}
                    >
                        <ActiveFlag className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-xs shadow-xs" />
                        <ChevronDown className={`w-3 h-3 sm:w-3.5 sm:h-3.5 text-foreground/50 transition-transform duration-300 ${isLangOpen ? "rotate-180" : ""}`} />
                    </button>

                    <AnimatePresence>
                        {isLangOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                transition={{ duration: 0.2 }}
                                className="absolute right-0 mt-2 bg-white/90 backdrop-blur-md border border-white/30 rounded-2xl p-1.5 shadow-lg flex flex-col gap-1 w-[54px] sm:w-[64px] items-center z-50"
                            >
                                {languages.map((lang) => {
                                    const OptionFlag = lang.FlagComponent;
                                    return (
                                        <button
                                            key={lang.code}
                                            onClick={() => {
                                                setLanguage(lang.code);
                                                setIsLangOpen(false);
                                            }}
                                            className={`
                         w-9 h-7 sm:w-10 sm:h-8 rounded-xl flex items-center justify-center transition-all cursor-pointer p-1
                         ${language === lang.code
                                                    ? "bg-foreground/10 scale-105 shadow-xs"
                                                    : "hover:bg-foreground/5 opacity-75 hover:opacity-100"
                                                }
                       `}
                                            title={lang.title}
                                        >
                                            <OptionFlag className="w-5 h-3.5 sm:w-6 sm:h-4 rounded-xs shadow-xs" />
                                        </button>
                                    );
                                })}
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </motion.div>
    );
}
