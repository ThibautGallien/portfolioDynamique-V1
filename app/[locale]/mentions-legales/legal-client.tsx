// app/[locale]/mentions-legales/legal-client.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Building,
  Globe,
  User,
  Server,
  ExternalLink,
  AlertTriangle,
  Mail,
} from "lucide-react";

export function LegalPageClient() {
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
              Mentions Légales
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Informations légales obligatoires concernant ce site web
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
                      <Building className="w-6 h-6 mr-3" />
                      Éditeur du site
                    </h2>
                    <div className="bg-muted/30 rounded-lg p-6 mb-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <h3 className="text-lg font-semibold mb-3">
                            Thibaut Gallien
                          </h3>
                          <ul className="space-y-2 text-muted-foreground">
                            <li>
                              <strong>Statut :</strong> Auto-entrepreneur
                            </li>
                            <li>
                              <strong>SIRET :</strong> 88466443400013
                            </li>
                            <li>
                              <strong>Adresse :</strong> 3 rue Max Dormoy, 50120
                              Cherbourg-en-Cotentin
                            </li>
                          </ul>
                        </div>
                        <div>
                          <h4 className="font-semibold mb-3">Contact</h4>
                          <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center">
                              <Mail className="w-4 h-4 mr-2" />
                              thibaut.gallien50@gmail.com
                            </li>
                            <li>
                              <strong>Téléphone :</strong> 07 70 17 93 11
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <Server className="w-6 h-6 mr-3" />
                      Hébergement
                    </h2>
                    <div className="bg-muted/30 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        Vercel Inc.
                      </h3>
                      <ul className="space-y-2 text-muted-foreground mb-4">
                        <li>
                          <strong>Adresse :</strong> 340 S Lemon Ave #4133,
                          Walnut, CA 91789, USA
                        </li>
                        <li>
                          <strong>Téléphone :</strong> (559) 288-7060
                        </li>
                      </ul>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <User className="w-6 h-6 mr-3" />
                      Directeur de publication
                    </h2>
                    <div className="bg-muted/30 rounded-lg p-6 mb-6">
                      <p className="text-muted-foreground">
                        <strong>Thibaut Gallien</strong>
                      </p>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Conception et réalisation
                    </h2>
                    <div className="bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10 rounded-lg p-6 mb-6">
                      <p className="text-center">
                        Site web conçu et développé par{" "}
                        <strong>Thibaut Gallien</strong>
                      </p>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Propriété intellectuelle
                    </h2>
                    <p className="mb-6">
                      L'ensemble du site (structure, textes, images, sons,
                      vidéos, etc.) est protégé par le droit d'auteur. Toute
                      reproduction, même partielle, est interdite sans
                      autorisation préalable.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                      <div className="bg-red-500/10 rounded-lg p-4">
                        <h3 className="font-semibold text-red-600 mb-2">
                          Interdit
                        </h3>
                        <ul className="text-sm space-y-1">
                          <li>• Reproduction des contenus</li>
                          <li>• Copie des images</li>
                          <li>• Utilisation du code source</li>
                        </ul>
                      </div>
                      <div className="bg-green-500/10 rounded-lg p-4">
                        <h3 className="font-semibold text-green-600 mb-2">
                          Autorisé
                        </h3>
                        <ul className="text-sm space-y-1">
                          <li>• Navigation normale</li>
                          <li>• Liens vers le site</li>
                          <li>• Consultation personnelle</li>
                        </ul>
                      </div>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <ExternalLink className="w-6 h-6 mr-3" />
                      Liens hypertextes
                    </h2>
                    <p className="mb-6">
                      Les liens vers d'autres sites web sont fournis à titre
                      informatif. Je ne suis pas responsables du contenu de ces
                      sites tiers.
                    </p>

                    <div className="bg-yellow-500/10 border border-yellow-500/20 rounded-lg p-4">
                      <div className="flex items-start">
                        <AlertTriangle className="w-5 h-5 text-yellow-600 mr-3 mt-0.5" />
                        <div>
                          <strong className="text-yellow-600">
                            Avertissement
                          </strong>
                          <p className="text-sm text-muted-foreground mt-1">
                            Les sites externes peuvent avoir des politiques de
                            confidentialité et des conditions d'utilisation
                            différentes.
                          </p>
                        </div>
                      </div>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary flex items-center">
                      <Globe className="w-6 h-6 mr-3" />
                      Droit applicable
                    </h2>
                    <div className="bg-muted/30 rounded-lg p-6 mb-6">
                      <p className="mb-4">
                        Le présent site est soumis au{" "}
                        <strong>droit français</strong>. En cas de litige, les
                        tribunaux français seront seuls compétents.
                      </p>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div className="bg-blue-500/10 rounded-lg p-4">
                          <h3 className="font-semibold text-blue-600 mb-2">
                            Juridiction
                          </h3>
                          <p className="text-sm">
                            Tribunaux français compétents
                          </p>
                        </div>
                        <div className="bg-purple-500/10 rounded-lg p-4">
                          <h3 className="font-semibold text-purple-600 mb-2">
                            Droit applicable
                          </h3>
                          <p className="text-sm">Législation française</p>
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
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Contact pour signalement
                    </h2>
                    <div className="bg-red-500/10 border border-red-500/20 rounded-lg p-6">
                      <p className="mb-3">
                        <strong>Pour signaler un contenu illicite :</strong>
                      </p>
                      <div className="flex items-center">
                        <Mail className="w-5 h-5 text-red-600 mr-3" />
                        <span className="font-mono">
                          thibaut.gallien50@gmail.com
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground mt-3">
                        Je m'engage à traiter rapidement tout signalement
                        justifié.
                      </p>
                    </div>
                  </motion.div>
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
