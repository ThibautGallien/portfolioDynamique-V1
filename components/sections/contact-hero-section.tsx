'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export function ContactHeroSection() {
  const [currentText, setCurrentText] = useState('');
  const fullText = "Transformons votre vision en réalité digitale.";

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setCurrentText(fullText.substring(0, index));
        index++;
      } else {
        clearInterval(timer);
      }
    }, 100);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <motion.h1 
              className="text-5xl md:text-7xl font-bold mb-6"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                Contactez-moi
              </span>
            </motion.h1>

            {/* Effet typing */}
            <motion.div
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 h-16 flex items-center justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <span className="typing-text">
                {currentText}
                <motion.span
                  className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
                  animate={{ opacity: [1, 0, 1] }}
                  transition={{ duration: 1, repeat: Infinity }}
                />
              </span>
            </motion.div>

            <motion.p
              className="text-lg text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              Discutons de votre projet et découvrons ensemble comment 
              je peux vous aider à atteindre vos objectifs digitaux.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}