// components/sections/dev-faq-section.tsx
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
  HelpCircle,
  Clock,
  Euro,
  Code,
  Settings,
  Smartphone,
} from "lucide-react";

const devFAQs = [
  {
    question: "Quelles technologies utilisez-vous pour le développement ?",
    answer:
      "Je travaille principalement avec React, Next.js, TypeScript, Node.js, et les dernières technologies web. Pour les bases de données, j'utilise PostgreSQL, MongoDB selon les besoins. Je m'adapte également aux technologies existantes de votre entreprise.",
    icon: Code,
  },
  {
    question: "Combien de temps prend le développement d'un site web ?",
    answer:
      "Cela dépend de la complexité du projet. Un site vitrine simple prend 2-3 semaines, un site e-commerce 4-6 semaines, et une application web complexe peut prendre 2-3 mois. Je fournis toujours un planning détaillé après analyse de vos besoins.",
    icon: Clock,
  },
  {
    question: "Quels sont vos tarifs pour le développement web ?",
    answer:
      "Mes tarifs varient selon la complexité : chaque projet étant unique, je propose toujours une estimation personnalisée gratuite après étude de vos besoins spécifiques. Utilisez mon estimateur en ligne pour obtenir une première évaluation.",
    icon: Euro,
  },
  {
    question: "Proposez-vous la maintenance et les mises à jour ?",
    answer:
      "Oui, je propose plusieurs formules de maintenance : corrections de bugs (30 jours gratuits), mises à jour de sécurité, ajout de fonctionnalités, et support technique. Je peux aussi former votre équipe à la gestion du contenu.",
    icon: Settings,
  },
  {
    question: "Mes sites sont-ils responsive et optimisés mobile ?",
    answer:
      "Absolument ! Tous mes développements sont mobile-first et responsive. Je teste sur tous les appareils et navigateurs principaux. L'optimisation mobile est une priorité car plus de 60% du trafic web est mobile.",
    icon: Smartphone,
  },
  {
    question: "Comment se déroule le processus de développement ?",
    answer:
      "1) Analyse des besoins et estimation personnalisée, 2) Maquettes et validation UX/UI, 3) Développement avec points d'étape réguliers, 4) Tests et recette, 5) Mise en ligne et formation. Vous êtes impliqué à chaque étape avec des livrables concrets.",
    icon: HelpCircle,
  },
  {
    question: "Puis-je modifier le contenu de mon site moi-même ?",
    answer:
      "Oui ! J'intègre souvent des CMS comme Strapi, Sanity ou des interfaces d'administration custom. Je vous forme à la gestion de contenu et fournis une documentation complète. Vous restez autonome pour les modifications courantes.",
    icon: Settings,
  },
  {
    question: "Que se passe-t-il si je ne suis pas satisfait du résultat ?",
    answer:
      "Je m'engage sur votre satisfaction. Nous validons chaque étape ensemble et vous avez 3 révisions incluses. Si le résultat ne correspond pas au brief validé, je m'engage à corriger sans frais supplémentaires.",
    icon: Settings,
  },
];

export function DevFAQSection() {
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
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Questions Fréquentes
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Tout ce que vous devez savoir sur mes services de développement web
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
                  {devFAQs.map((faq, index) => {
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
                                <div className="w-10 h-10 rounded-lg bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center mr-4 flex-shrink-0">
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
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Vous avez d'autres questions ?
            </h3>
            <p className="text-muted-foreground mb-6">
              N'hésitez pas à me contacter pour discuter de votre projet. Je
              réponds généralement sous 24h.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-500 to-purple-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              Poser une question
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
