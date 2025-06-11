"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { PenTool, Target, TrendingUp, ArrowRight } from "lucide-react";

export function CopyHeroSection() {
  const skills = [
    { icon: PenTool, label: "Emails", color: "from-purple-500 to-pink-500" },
    {
      icon: Target,
      label: "Pages de vente",
      color: "from-blue-500 to-cyan-500",
    },
    {
      icon: TrendingUp,
      label: "Conversion",
      color: "from-orange-500 to-red-500",
    },
  ];

  const scrollToPortfolio = () => {
    const portfolioSection = document.getElementById("portfolio");
    if (portfolioSection) {
      portfolioSection.scrollIntoView({ behavior: "smooth" });
    }
  };

  const scrollToEstimator = () => {
    const estimatorSection = document.getElementById("estimator");
    if (estimatorSection) {
      estimatorSection.scrollIntoView({ behavior: "smooth" });
    }
  };

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
              <span className="bg-gradient-to-r from-purple-400 via-pink-400 to-orange-400 bg-clip-text text-transparent">
                Copywriter Expert
              </span>
            </motion.h1>

            <motion.p
              className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Je crée des contenus persuasifs qui transforment vos prospects en
              clients. Séquences email, newsletters et pages de vente qui
              convertissent vraiment.
            </motion.p>

            {/* Skills Icons */}
            <motion.div
              className="flex flex-wrap justify-center gap-6 mb-12"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
            >
              {skills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r ${skill.color} text-white`}
                    initial={{ opacity: 0, scale: 0 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                    whileHover={{ scale: 1.05, y: -2 }}
                  >
                    <Icon className="w-5 h-5" />
                    <span className="font-medium">{skill.label}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
            >
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-500 to-pink-600 hover:from-purple-600 hover:to-pink-700 text-white px-8 py-3 rounded-xl"
                onClick={scrollToPortfolio}
                data-cursor-hover
              >
                Voir mes créations
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="px-8 py-3 rounded-xl"
                onClick={scrollToEstimator}
                data-cursor-hover
              >
                Obtenir un devis personnalisé
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
