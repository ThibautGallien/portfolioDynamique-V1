"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { SkipForward } from "lucide-react";

interface AnimatedLoaderProps {
  progress: number;
  onSkip: () => void;
}

export function AnimatedLoader({ progress, onSkip }: AnimatedLoaderProps) {
  const [currentText, setCurrentText] = useState("");
  const fullText = "Création de votre expérience...";

  useEffect(() => {
    if (progress < 100) {
      const textProgress = Math.floor((progress / 100) * fullText.length);
      setCurrentText(fullText.substring(0, textProgress));
    }
  }, [progress, fullText]);

  return (
    <motion.div
      className="fixed inset-0 bg-black flex items-center justify-center z-50"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="text-center">
        {/* SVG Animé de plume qui écrit */}
        <motion.svg
          width="200"
          height="200"
          viewBox="0 0 200 200"
          className="mb-8"
        >
          <motion.path
            d="M50 150 Q100 50 150 150"
            stroke="url(#gradient)"
            strokeWidth="3"
            fill="none"
            strokeLinecap="round"
            initial={{ pathLength: 0 }}
            animate={{ pathLength: progress / 100 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#0066FF" />
              <stop offset="50%" stopColor="#8B5CF6" />
              <stop offset="100%" stopColor="#FF6B35" />
            </linearGradient>
          </defs>

          {/* Plume animée */}
          <motion.g
            initial={{ x: 50, y: 150 }}
            animate={{
              x: 50 + (progress / 100) * 100,
              y: 150 - Math.sin((progress / 100) * Math.PI) * 100,
            }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <path
              d="M0 0 L-10 -20 L0 -15 L10 -20 Z"
              fill="url(#gradient)"
              transform="rotate(45)"
            />
          </motion.g>
        </motion.svg>

        {/* Texte animé */}
        <motion.h2
          className="text-2xl font-bold text-white mb-4 h-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          {currentText}
          <motion.span
            className="inline-block w-0.5 h-6 bg-blue-400 ml-1"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity }}
          />
        </motion.h2>

        {/* Barre de progression */}
        <div className="w-80 h-2 bg-gray-800 rounded-full overflow-hidden mb-6">
          <motion.div
            className="h-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            transition={{ duration: 0.3 }}
          />
        </div>

        {/* Pourcentage */}
        <motion.p
          className="text-lg text-gray-300 mb-8"
          key={Math.floor(progress)}
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.2 }}
        >
          {Math.floor(progress)}%
        </motion.p>

        {/* Bouton Skip */}
        <Button
          variant="outline"
          onClick={onSkip}
          className="border-gray-600 text-gray-300 hover:text-white hover:border-white transition-colors"
        >
          <SkipForward className="w-4 h-4 mr-2" />
          Passer l'animation
        </Button>
      </div>
    </motion.div>
  );
}
