// components/sections/booking-section.tsx
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { BookingSystem } from "@/components/ui/booking-system";
import {
  Calendar,
  Clock,
  MessageCircle,
  Video,
  Coffee,
  ArrowRight,
  Sparkles,
  CheckCircle,
} from "lucide-react";

const meetingTypes = [
  {
    id: "discovery",
    title: "Appel Découverte",
    duration: "30 min",
    price: "Gratuit",
    icon: MessageCircle,
    description: "Discutons de votre projet et voir comment je peux vous aider",
    color: "from-blue-500 to-cyan-500",
    features: [
      "Analyse de vos besoins",
      "Conseils stratégiques",
      "Estimation budgétaire",
    ],
  },
  {
    id: "consultation",
    title: "Consultation Technique",
    duration: "60 min",
    price: "80€",
    icon: Video,
    description: "Audit approfondi et stratégie détaillée pour votre projet",
    color: "from-purple-500 to-pink-500",
    features: [
      "Audit technique complet",
      "Plan d'action détaillé",
      "Recommandations personnalisées",
    ],
  },
  {
    id: "coffee",
    title: "Café Virtuel",
    duration: "15 min",
    price: "Gratuit",
    icon: Coffee,
    description: "Discussion informelle pour faire connaissance",
    color: "from-orange-500 to-red-500",
    features: [
      "Discussion détendue",
      "Présentation mutuelle",
      "Questions générales",
    ],
  },
];

export function BookingSection() {
  const [showBooking, setShowBooking] = useState(false);

  const benefits = [
    "Réponse garantie sous 24h",
    "Conseils personnalisés",
    "Aucun engagement",
    "Support après RDV",
  ];

  if (showBooking) {
    return (
      <section className="py-20 bg-gradient-to-br from-blue-50/50 via-purple-50/50 to-orange-50/50 dark:from-blue-950/20 dark:via-purple-950/20 dark:to-orange-950/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
          >
            <div className="text-center mb-8">
              <Button
                variant="outline"
                onClick={() => setShowBooking(false)}
                className="mb-4"
              >
                ← Retour aux options
              </Button>
            </div>
            <BookingSystem />
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
              <Calendar className="w-8 h-8 text-white" />
            </div>
          </div>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Réservez votre créneau
          </h2>

          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Choisissez le format de rendez-vous qui vous convient le mieux.
            Discutons de votre projet et transformons vos idées en réalité.
          </p>

          <div className="flex flex-wrap justify-center gap-3 mb-8">
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Badge variant="secondary" className="px-4 py-2 text-sm">
                  <CheckCircle className="w-3 h-3 mr-1" />
                  {benefit}
                </Badge>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {meetingTypes.map((type, index) => {
              const Icon = type.icon;
              return (
                <motion.div
                  key={type.id}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                  className="h-full"
                >
                  <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm group">
                    <CardContent className="p-6 h-full flex flex-col">
                      <motion.div
                        className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${type.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.6 }}
                      >
                        <Icon className="w-8 h-8 text-white" />
                      </motion.div>

                      <h3 className="text-xl font-bold mb-3">{type.title}</h3>

                      <div className="flex gap-2 mb-4">
                        <Badge variant="secondary">
                          <Clock className="w-3 h-3 mr-1" />
                          {type.duration}
                        </Badge>
                        <Badge
                          variant={
                            type.price === "Gratuit" ? "default" : "outline"
                          }
                        >
                          {type.price}
                        </Badge>
                      </div>

                      <p className="text-muted-foreground mb-6 flex-grow">
                        {type.description}
                      </p>

                      <div className="mb-6">
                        <h4 className="font-medium mb-3 text-sm">Inclus :</h4>
                        <ul className="space-y-2">
                          {type.features.map((feature, featureIndex) => (
                            <li
                              key={featureIndex}
                              className="flex items-center text-sm text-muted-foreground"
                            >
                              <div
                                className={`w-2 h-2 rounded-full bg-gradient-to-r ${type.color} mr-3`}
                              />
                              {feature}
                            </li>
                          ))}
                        </ul>
                      </div>

                      <Button
                        onClick={() => setShowBooking(true)}
                        className={`w-full mt-auto bg-gradient-to-r ${type.color} hover:opacity-90 transition-opacity`}
                      >
                        Réserver ce créneau
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>

          <motion.div
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <Card className="border-0 shadow-2xl bg-background/60 backdrop-blur-sm max-w-2xl mx-auto">
              <CardContent className="p-8">
                <div className="w-16 h-16 rounded-full bg-gradient-to-r from-green-500 to-teal-500 flex items-center justify-center mx-auto mb-6">
                  <Sparkles className="w-8 h-8 text-white" />
                </div>

                <h3 className="text-2xl font-bold mb-4">
                  Pourquoi prendre rendez-vous ?
                </h3>

                <p className="text-muted-foreground mb-6">
                  Un simple appel peut transformer votre projet. Discutons de
                  vos objectifs, de vos défis et découvrons ensemble la
                  meilleure approche pour votre réussite.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      24h
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Délai de réponse
                    </div>
                  </div>
                  <div className="text-center p-4 bg-muted/30 rounded-lg">
                    <div className="text-2xl font-bold text-primary mb-1">
                      100%
                    </div>
                    <div className="text-xs text-muted-foreground">
                      Personnalisé
                    </div>
                  </div>
                </div>

                <Button
                  size="lg"
                  onClick={() => setShowBooking(true)}
                  className="w-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white py-6 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <Calendar className="w-5 h-5 mr-2" />
                  Choisir mon créneau maintenant
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>

                <p className="text-xs text-muted-foreground mt-4">
                  Aucune carte bancaire requise • Calendrier en temps réel •
                  Confirmation instantanée
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
