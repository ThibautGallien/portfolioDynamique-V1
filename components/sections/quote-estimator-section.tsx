// components/sections/quote-estimator-section.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ChatbotEstimator } from "@/components/ui/chatbot-estimator";
import {
  Calculator,
  MessageCircle,
  Zap,
  Clock,
  CheckCircle,
  ArrowRight,
  Bot,
  Euro,
  FileText,
} from "lucide-react";

export function QuoteEstimatorSection() {
  const [isOpen, setIsOpen] = useState(false);

  const benefits = [
    {
      icon: Clock,
      title: "Estimation en 2 minutes",
      description: "Obtenez votre devis personnalisé rapidement",
    },
    {
      icon: Euro,
      title: "Tarifs transparents",
      description: "Prix détaillés selon vos besoins exacts",
    },
    {
      icon: FileText,
      title: "PDF professionnel",
      description: "Devis détaillé envoyé par email",
    },
    {
      icon: CheckCircle,
      title: "Sans engagement",
      description: "100% gratuit, aucune obligation",
    },
  ];

  const features = [
    "🎯 Questions adaptées à votre projet",
    "💰 Calcul de prix en temps réel",
    "📄 Devis PDF détaillé par email",
    "🌍 Disponible en 3 langues",
    "⚡ Réponse instantanée",
    "🔒 Données sécurisées",
  ];

  if (isOpen) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-orange-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Button
              variant="outline"
              onClick={() => setIsOpen(false)}
              className="mb-4"
            >
              ← Retour
            </Button>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Estimateur de Devis Interactif
            </h2>
            <p className="text-muted-foreground">
              Répondez à quelques questions pour obtenir votre estimation
              personnalisée
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ChatbotEstimator />
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-orange-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Calculator className="w-8 h-8 text-white" />
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Estimateur de Devis Gratuit
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Découvrez le prix de votre projet en 2 minutes avec notre assistant
            intelligent. Estimation personnalisée et PDF détaillé envoyé
            instantanément !
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  {feature}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center max-w-6xl mx-auto">
          {/* Avantages */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold mb-8">
              Pourquoi utiliser notre estimateur ?
            </h3>

            <div className="space-y-6">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <motion.div
                    key={index}
                    className="flex items-start space-x-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.4, delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="w-12 h-12 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center flex-shrink-0">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-lg mb-2">
                        {benefit.title}
                      </h4>
                      <p className="text-muted-foreground">
                        {benefit.description}
                      </p>
                    </div>
                  </motion.div>
                );
              })}
            </div>

            <motion.div
              className="mt-8 p-6 bg-gradient-to-r from-green-500/10 to-emerald-500/10 rounded-2xl border border-green-500/20"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center mb-3">
                <CheckCircle className="w-5 h-5 text-green-600 mr-2" />
                <span className="font-semibold text-green-700">
                  100% Gratuit & Sans Engagement
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Aucune information de paiement requise. Estimation transparente
                pour vous aider à planifier votre projet en toute sérénité.
              </p>
            </motion.div>
          </motion.div>

          {/* CTA Principal */}
          <motion.div
            className="text-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-background/60 backdrop-blur-sm overflow-hidden">
              <CardContent className="p-8">
                <div className="w-20 h-20 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto mb-6">
                  <Bot className="w-10 h-10 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Prêt pour votre estimation ?
                </h3>

                <p className="text-muted-foreground mb-6">
                  Notre assistant intelligent va vous poser quelques questions
                  pour calculer le prix exact de votre projet.
                </p>

                <div className="space-y-3 mb-6">
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <Clock className="w-4 h-4 mr-2" />
                    Temps estimé : 2-3 minutes
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Questions : 5-8 selon votre projet
                  </div>
                  <div className="flex items-center justify-center text-sm text-muted-foreground">
                    <FileText className="w-4 h-4 mr-2" />
                    PDF envoyé instantanément
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => setIsOpen(true)}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Zap className="w-5 h-5 mr-2" />
                  Démarrer l'estimation gratuite
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  Aucune carte bancaire requise • Estimation instantanée • 100%
                  gratuit
                </p>
              </CardContent>
            </Card>

            {/* Témoignage rapide */}
            <motion.div
              className="mt-8 p-4 bg-muted/30 rounded-xl"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center justify-center mb-2">
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="w-4 h-4 text-yellow-400 fill-current">
                    ⭐
                  </div>
                ))}
              </div>
              <p className="text-sm text-muted-foreground italic">
                "Super pratique ! J'ai eu mon devis en 3 minutes, très détaillé
                et transparent sur les prix."
              </p>
              <p className="text-xs text-muted-foreground mt-1 font-medium">
                — Sarah M., E-commerce
              </p>
            </motion.div>
          </motion.div>
        </div>

        {/* Section processus */}
        <motion.div
          className="mt-20 text-center"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-bold mb-12">Comment ça marche ?</h3>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
            {[
              {
                step: "1",
                title: "Questions",
                desc: "Répondez à 5-8 questions sur votre projet",
                icon: MessageCircle,
              },
              {
                step: "2",
                title: "Calcul",
                desc: "Estimation automatique basée sur nos tarifs",
                icon: Calculator,
              },
              {
                step: "3",
                title: "Devis",
                desc: "PDF détaillé généré instantanément",
                icon: FileText,
              },
              {
                step: "4",
                title: "Contact",
                desc: "Échangeons sur votre projet si vous le souhaitez",
                icon: CheckCircle,
              },
            ].map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  className="text-center"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mx-auto">
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center text-white font-bold text-sm">
                      {item.step}
                    </div>
                  </div>
                  <h4 className="font-semibold mb-2">{item.title}</h4>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
