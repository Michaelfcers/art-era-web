"use client";

import { motion } from "framer-motion";
import { Mail, Github, Heart } from "lucide-react";
import { useLanguage } from "../context/LanguageContext";

export default function Contact() {
  const { language } = useLanguage();

  const content = {
    en: {
      tagline: "Get in Touch",
      title: "Built for Art & Technology Lovers",
      subtitle: "Questions, feedback, or collaboration inquiries? Feel free to connect.",
      emailBtn: "Contact Creator",
      githubBtn: "View on GitHub",
      craftedWith: "Crafted with passion for Art History & AI"
    },
    es: {
      tagline: "Contacto",
      title: "Creado para Amantes del Arte y la Tecnología",
      subtitle: "¿Preguntas, sugerencias o ideas de colaboración? Estemos en contacto.",
      emailBtn: "Contactar Creador",
      githubBtn: "Ver en GitHub",
      craftedWith: "Creado con pasión por la Historia del Arte y la IA"
    },
    pt: {
      tagline: "Contacto",
      title: "Criado para Amantes de Arte e Tecnologia",
      subtitle: "Dúvidas, sugestões ou ideias de colaboração? Entre em contacto.",
      emailBtn: "Contactar Criador",
      githubBtn: "Ver no GitHub",
      craftedWith: "Criado com paixão pela História da Arte e IA"
    }
  };

  const current = content[language] || content.en;

  return (
    <section id="contact" className="w-full py-20 border-t border-foreground/10 relative z-10 scroll-mt-20">
      <div className="max-w-4xl mx-auto px-4 text-center space-y-8">
        <div className="space-y-3">
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
            className="text-3xl md:text-4xl font-serif text-foreground tracking-tight"
          >
            {current.title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-foreground/70 font-serif text-base max-w-xl mx-auto"
          >
            {current.subtitle}
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="flex flex-wrap items-center justify-center gap-4 pt-2"
        >
          <a
            href="mailto:contact@michaelrodcs.dev"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-foreground text-background font-sans text-xs uppercase tracking-widest hover:opacity-90 transition-opacity shadow-sm"
          >
            <Mail className="w-4 h-4" />
            <span>{current.emailBtn}</span>
          </a>

          <a
            href="https://github.com/michaelrodcs/art-era-style"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-foreground/30 text-foreground font-sans text-xs uppercase tracking-widest hover:bg-foreground/5 transition-colors shadow-sm"
          >
            <Github className="w-4 h-4" />
            <span>{current.githubBtn}</span>
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="pt-6 text-xs text-foreground/50 font-sans flex items-center justify-center gap-1.5"
        >
          <span>{current.craftedWith}</span>
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 inline" />
        </motion.div>
      </div>
    </section>
  );
}
