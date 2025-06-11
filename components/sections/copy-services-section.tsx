"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Mail, Clock, FileText, CheckCircle } from "lucide-react";

const copyServices = [
  {
    icon: Mail,
    title: "Séquence Email de Vente",
    subtitle: '"La Séquence Augmentée"',
    description:
      "5 à 7 emails ultra ciblés pour vendre un produit ou convertir après une opt-in.",
    features: [
      "Recherche approfondie sur ton avatar, tes objections, ton marché (PDF fourni)",
      "Structuration stratégique selon AIDA / PAS / 4P / Storytelling",
      'Création d\'une "Big Idea" mémorable pour ancrer ton positionnement',
      "CTA optimisés (emplacement, fréquence, ancrage)",
      "Objets + preview text testés pour taux d'ouverture max",
      "Format responsive mobile + compatible avec tous les auto-répondeurs",
      "Ton adaptatif : autorité, émotion, pédagogie ou ultra direct",
      'Version "light" disponible pour réseaux sociaux',
    ],
    bonus: [
      '1 mail de relance ou "jour +7"',
      "Audit de ta séquence actuelle si existante",
      'PDF "structure email qui convertit + erreurs à éviter"',
    ],
    color: "from-purple-500 to-pink-500",
    timeline: "5 à 7 jours",
    pricing: "250€ - 500€",
    guarantee:
      "Tu ne paies que si tu fais mieux qu'avant. Sinon, tu repars avec ta séquence complète, offerte.",
  },
  {
    icon: Clock,
    title: "Newsletter Hebdomadaire",
    subtitle: '"Le Canal de Confiance"',
    description:
      "4 newsletters/mois prêtes à l'envoi pour créer une relation de confiance avec ton audience.",
    features: [
      "4 newsletters/mois prêtes à l'envoi",
      "Angle éditorial défini selon ton avatar et ton positionnement",
      "Ton de marque, storytelling, pédagogie, preuves, anecdotes, punchlines",
      "Plan de contenu mensuel + système de recyclage (posts, threads, vidéos)",
      "CTA organiques ou directs en fonction du sujet",
      "Objets + preview text optimisés",
      "Mise en ligne + envoi automatisé compris (Brevo, ActiveCampaign, Systeme.io, etc.)",
      "Format responsive garanti",
    ],
    bonus: [
      "Calendrier éditorial chaque mois (PDF + notion si tu veux)",
      "Audit 1 fois/trim sur la performance email (si données dispo)",
    ],
    color: "from-blue-500 to-cyan-500",
    timeline: "4 newsletters livrées chaque début de mois",
    pricing: "400€/mois",
    guarantee:
      "Si ton taux d'ouverture ou de clics ne progresse pas sur le mois, je retravaille tout gratuitement.",
  },
  {
    icon: FileText,
    title: "Page de Vente",
    subtitle: '"La Conversion Machine"',
    description:
      "Page de vente ultra-persuasive qui transforme tes visiteurs en clients payants.",
    features: [
      "Recherche approfondie de ton marché et de tes concurrents",
      "Structure copywriting éprouvée (AIDA, PAS, StoryBrand)",
      "Rédaction complète de la page de vente",
      "Headlines accrocheurs testés sur plusieurs variations",
      "Gestion des objections point par point",
      "Call-to-actions optimisés et positionnés stratégiquement",
      "Version mobile responsive",
      "Intégration avec ton système de paiement",
    ],
    bonus: [
      "2 variations de headlines pour A/B test",
      "Email de suivi post-achat",
      'PDF "Les 10 erreurs qui tuent tes conversions"',
    ],
    color: "from-orange-500 to-red-500",
    timeline: "7 à 10 jours",
    pricing: "800€ - 2000€",
    guarantee:
      "Si ton taux de conversion n'augmente pas, je reprends la page gratuitement.",
  },
];

export function CopyServicesSection() {
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
            Services Copywriting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Contenus persuasifs qui transforment vos prospects en clients.
            Emails, newsletters et pages de vente avec garantie résultats.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {copyServices.map((service, index) => {
            const Icon = service.icon;

            return (
              <motion.div
                key={index}
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
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>

                    <p className="text-sm font-medium text-primary mb-4">
                      {service.subtitle}
                    </p>

                    <p className="text-muted-foreground mb-6">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6 flex-grow">
                      <h4 className="font-medium mb-3 text-sm">✅ Inclus :</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-start text-xs text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{
                              duration: 0.3,
                              delay: index * 0.1 + featureIndex * 0.05,
                            }}
                            viewport={{ once: true }}
                          >
                            <CheckCircle className="w-3 h-3 text-green-500 mr-2 mt-0.5 flex-shrink-0" />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Bonus Section */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-sm text-orange-600">
                        🎁 Bonus :
                      </h4>
                      <ul className="space-y-1">
                        {service.bonus.map((bonus, bonusIndex) => (
                          <li
                            key={bonusIndex}
                            className="text-xs text-muted-foreground flex items-start"
                          >
                            <span className="text-orange-500 mr-2">•</span>
                            {bonus}
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Timeline, Pricing and Guarantee */}
                    <div className="mt-auto space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          ⏱️ {service.timeline}
                        </Badge>
                        <Badge variant="outline" className="text-xs">
                          💰 {service.pricing}
                        </Badge>
                      </div>

                      {/* Guarantee */}
                      <div className="bg-green-500/10 border border-green-500/20 rounded-lg p-3">
                        <h5 className="font-medium text-green-700 text-xs mb-1">
                          🛡️ Garantie Résultats
                        </h5>
                        <p className="text-xs text-green-600 leading-relaxed">
                          {service.guarantee}
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
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
              onClick={() => {
                const estimatorSection = document.getElementById("estimator");
                estimatorSection?.scrollIntoView({ behavior: "smooth" });
              }}
              data-cursor-hover
            >
              Obtenir un devis personnalisé
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
