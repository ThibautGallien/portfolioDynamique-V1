// components/sections/copy-faq-section.tsx
"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  PenTool,
  Target,
  TrendingUp,
  Clock,
  Euro,
  FileText,
  Users,
  BarChart,
} from "lucide-react";

const copyFAQs = [
  {
    question: "Qu'est-ce que le copywriting et en quoi cela peut m'aider ?",
    answer:
      "Le copywriting est l'art d'écrire des textes persuasifs qui poussent à l'action. Contrairement à la rédaction classique, le copywriting vise à convertir : augmenter vos ventes, générer des leads, fidéliser vos clients. C'est un investissement qui peut multiplier votre chiffre d'affaires.",
    icon: PenTool,
  },
  {
    question: "Quels types de contenus copywriting proposez-vous ?",
    answer:
      "Je propose : pages de vente, emails marketing, publicités Facebook/Google, scripts vidéo, contenu de blog orienté conversion, newsletters, séquences d'onboarding, et fiches produits. Chaque contenu est optimisé pour votre audience et vos objectifs business.",
    icon: FileText,
  },
  {
    question: "Comment mesurez-vous l'efficacité de vos textes ?",
    answer:
      "Je me base sur des KPIs concrets : taux de conversion, taux d'ouverture/clic des emails, time on page, taux de rebond, et surtout le ROI généré. Je propose toujours des tests A/B pour optimiser les performances et fournir des rapports détaillés.",
    icon: BarChart,
  },
  {
    question: "Combien coûtent vos services de copywriting ?",
    answer:
      "Page de vente : 800-2000€, Email marketing (séquence) : 400-800€, Article de blog : 200-400€, Script vidéo : 300-600€, Audit + stratégie : 1200€. Les tarifs varient selon la complexité et les recherches nécessaires. Devis gratuit systématique.",
    icon: Euro,
  },
  {
    question: "Combien de temps faut-il pour voir des résultats ?",
    answer:
      "Les premiers résultats sont souvent visibles immédiatement (24-48h pour les emails, quelques jours pour les pages de vente). L'optimisation continue permet d'améliorer les performances sur 2-3 mois. Le copywriting a un impact direct et mesurable.",
    icon: TrendingUp,
  },
  {
    question: "Comment adaptez-vous votre style à mon entreprise ?",
    answer:
      "Je commence toujours par analyser votre marque, votre audience, vos concurrents et votre positionnement. Je m'imprègne de votre univers, vos valeurs, et votre tone of voice. Chaque texte respecte votre identité tout en optimisant la persuasion.",
    icon: Target,
  },
  {
    question: "Proposez-vous des révisions et du suivi ?",
    answer:
      "Oui ! Chaque projet inclut 2-3 révisions selon le type de contenu. Je propose aussi un suivi des performances sur 1 mois avec recommandations d'optimisation. Mon objectif est votre satisfaction et vos résultats business.",
    icon: Users,
  },
  {
    question: "Quel est votre processus de travail ?",
    answer:
      "1) Brief et analyse de votre cible, 2) Recherche marché/concurrence, 3) Rédaction de la première version, 4) Révisions selon vos retours, 5) Livraison finale + conseils d'implémentation, 6) Suivi des performances. Communication transparente à chaque étape.",
    icon: Clock,
  },
];

export function CopyFAQSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur mes services de copywriting
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8">
                <Accordion type="single" collapsible className="space-y-4">
                  {copyFAQs.map((faq, index) => {
                    const Icon = faq.icon;
                    return (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.4, delay: index * 0.1 }}
                        viewport={{ once: true }}
                      >
                        <AccordionItem
                          value={`item-${index}`}
                          className="border rounded-lg px-6 hover:shadow-md transition-all duration-300"
                        >
                          <AccordionTrigger className="text-left hover:no-underline py-6">
                            <div className="flex items-center">
                              {Icon && (
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-purple-500 to-pink-600 flex items-center justify-center mr-4 flex-shrink-0">
                                  <Icon className="w-5 h-5 text-white" />
                                </div>
                              )}
                              <span className="font-semibold text-lg">
                                {faq.question}
                              </span>
                            </div>
                          </AccordionTrigger>
                          <AccordionContent className="pb-6 pt-2">
                            <div className="ml-14 text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      </motion.div>
                    );
                  })}
                </Accordion>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Call to Action */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à booster vos conversions ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Discutons de votre stratégie de contenu et de la façon dont le
              copywriting peut transformer vos résultats business.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              Demander un audit gratuit
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
