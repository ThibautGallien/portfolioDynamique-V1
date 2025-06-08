// app/[locale]/politique-confidentialite/privacy-client.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Shield,
  Eye,
  Clock,
  Lock,
  UserCheck,
  AlertTriangle,
} from "lucide-react";

export function PrivacyPageClient() {
  const dataTypes = [
    {
      icon: UserCheck,
      title: "Données d'identité",
      items: [
        "Nom, prénom",
        "Adresse email",
        "Numéro de téléphone",
        "Entreprise (optionnel)",
      ],
    },
    {
      icon: Eye,
      title: "Données techniques",
      items: [
        "Adresse IP",
        "Type de navigateur",
        "Pages visitées",
        "Durée de visite",
      ],
    },
    {
      icon: Shield,
      title: "Données de contact",
      items: ["Message/description du projet", "Préférences de communication"],
    },
  ];

  const rights = [
    {
      name: "Droit d'accès",
      description: "Connaître les données que nous avons sur vous",
    },
    {
      name: "Droit de rectification",
      description: "Corriger des informations inexactes",
    },
    {
      name: "Droit d'effacement",
      description: "Demander la suppression de vos données",
    },
    {
      name: "Droit à la limitation",
      description: "Limiter le traitement de vos données",
    },
    {
      name: "Droit à la portabilité",
      description: "Récupérer vos données dans un format lisible",
    },
    {
      name: "Droit d'opposition",
      description: "Vous opposer au traitement de vos données",
    },
  ];

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.h1
              className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
            >
              Politique de Confidentialité
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Protection et traitement de vos données personnelles - Conforme
              RGPD
            </motion.p>
          </div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <Card className="border-0 shadow-2xl bg-background/60 backdrop-blur-sm">
              <CardContent className="p-8 md:p-12">
                <div className="prose prose-lg max-w-none dark:prose-invert">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.6, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <Shield className="w-6 h-6 mr-3" />
                      Responsable du traitement
                    </h2>
                    <div className="bg-muted/30 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        [Votre Nom/Raison Sociale]
                      </h3>
                      <ul className="space-y-2 text-muted-foreground">
                        <li>
                          <strong>Adresse :</strong> [Votre adresse]
                        </li>
                        <li>
                          <strong>Email :</strong> [Votre email]
                        </li>
                        <li>
                          <strong>Téléphone :</strong> [Votre téléphone]
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-primary">
                      Données collectées
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                      {dataTypes.map((type, index) => {
                        const Icon = type.icon;
                        return (
                          <div
                            key={index}
                            className="bg-muted/30 rounded-lg p-6"
                          >
                            <div className="flex items-center mb-4">
                              <Icon className="w-5 h-5 text-primary mr-2" />
                              <h3 className="font-semibold">{type.title}</h3>
                            </div>
                            <ul className="space-y-2 text-sm">
                              {type.items.map((item, idx) => (
                                <li key={idx} className="flex items-center">
                                  <div className="w-2 h-2 bg-primary rounded-full mr-2" />
                                  {item}
                                </li>
                              ))}
                            </ul>
                          </div>
                        );
                      })}
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Finalités du traitement
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-blue-500/10 rounded-lg p-4">
                        <div className="font-semibold text-blue-600 mb-2">
                          Gestion commerciale
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Traitement des demandes de contact et propositions
                          commerciales
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4">
                        <div className="font-semibold text-green-600 mb-2">
                          Communication
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Envoi d'informations sur nos services (avec
                          consentement)
                        </div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4">
                        <div className="font-semibold text-purple-600 mb-2">
                          Analyse statistique
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Amélioration de l'expérience utilisateur du site web
                        </div>
                      </div>
                      <div className="bg-orange-500/10 rounded-lg p-4">
                        <div className="font-semibold text-orange-600 mb-2">
                          Obligations légales
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Respect des obligations comptables et fiscales
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Base légale
                    </h2>
                    <ul className="space-y-3 mb-6">
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3 mt-2" />
                        <div>
                          <strong>
                            Exécution de mesures précontractuelles
                          </strong>{" "}
                          (art. 6.1.b RGPD)
                          <br />
                          <span className="text-muted-foreground text-sm">
                            Pour traiter vos demandes de devis et propositions
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-green-500 rounded-full mr-3 mt-2" />
                        <div>
                          <strong>Intérêt légitime</strong> (art. 6.1.f RGPD)
                          <br />
                          <span className="text-muted-foreground text-sm">
                            Pour l'analyse du site et l'amélioration de nos
                            services
                          </span>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="w-2 h-2 bg-purple-500 rounded-full mr-3 mt-2" />
                        <div>
                          <strong>Consentement</strong> (art. 6.1.a RGPD)
                          <br />
                          <span className="text-muted-foreground text-sm">
                            Pour l'envoi de newsletters et communications
                            marketing
                          </span>
                        </div>
                      </li>
                    </ul>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <Clock className="w-6 h-6 mr-3" />
                      Conservation des données
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-muted/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-500 mb-2">
                          3 ans
                        </div>
                        <div className="text-sm">Données de contact</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          À compter du dernier contact
                        </div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-green-500 mb-2">
                          13 mois
                        </div>
                        <div className="text-sm">Données de navigation</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Maximum pour les cookies
                        </div>
                      </div>
                      <div className="bg-muted/30 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-500 mb-2">
                          5 ans
                        </div>
                        <div className="text-sm">Données clients</div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Après fin du contrat
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-6 text-primary">
                      Vos droits
                    </h2>
                    <p className="mb-6">
                      Conformément au RGPD, vous disposez des droits suivants :
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      {rights.map((right, index) => (
                        <div key={index} className="bg-muted/30 rounded-lg p-4">
                          <div className="font-semibold text-primary mb-2">
                            {right.name}
                          </div>
                          <div className="text-sm text-muted-foreground">
                            {right.description}
                          </div>
                        </div>
                      ))}
                    </div>
                    <div className="bg-blue-500/10 border border-blue-500/20 rounded-lg p-4">
                      <strong>Pour exercer vos droits :</strong> Contactez-nous
                      à <strong>[votre email]</strong>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Cookies
                    </h2>
                    <p className="mb-4">
                      Le site utilise des cookies techniques nécessaires au
                      fonctionnement et des cookies d'analyse (Google Analytics)
                      avec votre consentement.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      <div className="bg-green-500/10 rounded-lg p-4">
                        <div className="font-semibold text-green-600 mb-2">
                          Cookies techniques
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Nécessaires au fonctionnement du site
                        </div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-4">
                        <div className="font-semibold text-blue-600 mb-2">
                          Cookies analytiques
                        </div>
                        <div className="text-sm text-muted-foreground">
                          Avec votre consentement uniquement
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <Lock className="w-6 h-6 mr-3" />
                      Sécurité
                    </h2>
                    <p className="mb-6">
                      Nous mettons en œuvre des mesures techniques et
                      organisationnelles appropriées pour protéger vos données
                      contre tout accès non autorisé, altération, divulgation ou
                      destruction.
                    </p>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-red-500/10 rounded-lg p-4 text-center">
                        <Shield className="w-8 h-8 text-red-500 mx-auto mb-2" />
                        <div className="font-semibold text-red-600">
                          Chiffrement
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          HTTPS/SSL
                        </div>
                      </div>
                      <div className="bg-yellow-500/10 rounded-lg p-4 text-center">
                        <Lock className="w-8 h-8 text-yellow-600 mx-auto mb-2" />
                        <div className="font-semibold text-yellow-600">
                          Accès restreint
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Personnel autorisé
                        </div>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4 text-center">
                        <AlertTriangle className="w-8 h-8 text-green-600 mx-auto mb-2" />
                        <div className="font-semibold text-green-600">
                          Surveillance
                        </div>
                        <div className="text-xs text-muted-foreground mt-1">
                          Monitoring continu
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <div className="bg-orange-500/10 border border-orange-500/20 rounded-lg p-6 mt-8">
                    <h3 className="text-lg font-semibold mb-3 text-orange-600 flex items-center">
                      <AlertTriangle className="w-5 h-5 mr-2" />
                      Document à personnaliser
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      N'oubliez pas de remplacer tous les éléments entre
                      crochets par vos informations réelles et d'adapter cette
                      politique selon vos pratiques spécifiques de traitement
                      des données.
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
