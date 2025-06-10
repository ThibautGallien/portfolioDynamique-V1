"use client";

import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Target, Globe, Wrench, CheckCircle } from "lucide-react";

const devServices = [
  {
    icon: Target,
    title: "Landing Page Optimisée",
    subtitle: '"Page à Impact"',
    description:
      "Landing page 100% responsive et ultra rapide orientée conversion avec structure copywriting intégrée.",
    features: [
      "Structure copywriting : promesse, bénéfices, preuves, CTA",
      "Design UX adapté à votre audience",
      "SEO technique optimisé",
      "Intégration formulaire/Calendly/Stripe",
      "Tracking et analytics",
      "CTA testés et positionnés stratégiquement",
      "Format responsive garanti",
    ],
    color: "from-blue-500 to-cyan-500",
    timeline: "3 à 5 jours",
    pricing: "Estimation basée sur vos besoins",
  },
  {
    icon: Globe,
    title: "Site Vitrine Professionnel",
    subtitle: '"Présence Pro Boostée"',
    description:
      "Site professionnel jusqu'à 5 pages avec CMS intégré pour une autonomie totale dans la gestion de contenu.",
    features: [
      "Jusqu'à 5 pages complètes",
      "CMS Sanity : modifiez sans coder",
      "SEO de base intégré",
      "Design responsive et rapide",
      "RGPD : mentions légales + cookies",
      "Intégration Google Maps/WhatsApp",
      "Rapport performance fourni",
    ],
    color: "from-green-500 to-teal-500",
    timeline: "7 à 10 jours",
    pricing: "Estimation basée sur vos besoins",
  },
  {
    icon: Wrench,
    title: "Maintenance Annuelle",
    subtitle: '"Tranquillité Totale"',
    description:
      "Service de maintenance complète pour assurer la sécurité, performance et évolution de votre site web.",
    features: [
      "Sauvegarde mensuelle complète",
      "Mises à jour techniques",
      "Corrections de bugs simples",
      "2 audits techniques/an",
      "Jusqu'à 4h de modifications/an",
      "Alerte proactive en cas de problème",
      "Support prioritaire",
    ],
    color: "from-purple-500 to-pink-500",
    timeline: "Service continu",
    pricing: "Estimation basée sur vos besoins",
  },
];

export function DevServicesSection() {
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
            Services Développement
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Solutions techniques sur mesure pour donner vie à vos projets
            digitaux. Du site vitrine à l'application complexe.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {devServices.map((service, index) => {
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

                    <p className="text-muted-foreground mb-6 flex-grow">
                      {service.description}
                    </p>

                    {/* Features List */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3 text-sm">Inclus :</h4>
                      <ul className="space-y-2">
                        {service.features.map((feature, featureIndex) => (
                          <motion.li
                            key={featureIndex}
                            className="flex items-start text-sm text-muted-foreground"
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

                    {/* Timeline and Pricing */}
                    <div className="mt-auto space-y-3">
                      <div className="flex items-center justify-between">
                        <Badge variant="secondary" className="text-xs">
                          ⏱️ {service.timeline}
                        </Badge>
                      </div>
                      <div
                        className={`text-base font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}
                      >
                        {service.pricing}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'un projet sur mesure ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Chaque projet est unique. Discutons de vos besoins spécifiques
              pour créer une solution technique parfaitement adaptée à vos
              objectifs.
            </p>
            <motion.button
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
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
