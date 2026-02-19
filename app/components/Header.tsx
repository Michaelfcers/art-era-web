"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { useState } from "react";

export default function Header() {
    const [activeLink, setActiveLink] = useState("Home");

    const links = [
        { name: "Home", href: "/" },
        { name: "How it Works", href: "#how-it-works" },
        { name: "Contact", href: "#contact" },
    ];

    return (
        <motion.div
            initial={{ y: -100, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="fixed top-0 left-0 right-0 z-50 flex justify-center p-6"
        >
            <div className="relative group">
                {/* Artistic Background Blur - Colorful & Minimalist */}
                <div className="absolute -inset-4 bg-gradient-to-r from-pink-300 via-purple-300 to-indigo-300 rounded-full opacity-20 blur-xl group-hover:opacity-40 transition-opacity duration-700" />

                {/* Glassmorphism Container */}
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
            </div>
        </motion.div>
    );
}
