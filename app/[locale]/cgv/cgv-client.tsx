// app/[locale]/cgv/cgv-client.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

export function CgvPageClient() {
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
              Conditions Générales de Vente
            </motion.h1>
            <motion.p
              className="text-xl text-muted-foreground max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              Conditions applicables à tous mes services de développement web et
              copywriting
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
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 1 - Objet et champ d'application
                    </h2>
                    <p className="mb-6">
                      Les présentes conditions générales de vente s'appliquent à
                      tous les services proposés par{" "}
                      <strong>Thibaut Gallien</strong>, auto-entrepreneur,
                      spécialisé(e) dans le développement web et le copywriting.
                    </p>

                    <div className="bg-muted/30 rounded-lg p-6 mb-6">
                      <h3 className="text-lg font-semibold mb-3">
                        Services proposés :
                      </h3>
                      <ul className="list-disc pl-6 space-y-2">
                        <li>Développement de sites web et applications</li>
                        <li>Copywriting et rédaction de contenus</li>
                        <li>Optimisation SEO</li>
                        <li>Consultation et stratégie digitale</li>
                      </ul>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.8, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 2 - Devis et commande
                    </h2>
                    <p className="mb-6">
                      Tout devis est valable <strong>30 jours</strong> à compter
                      de sa date d'émission. La commande est ferme et définitive
                      dès acceptation du devis par le client par signature ou
                      email de confirmation.
                    </p>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 3 - Prix et modalités de paiement
                    </h2>

                    <h3 className="text-lg font-semibold mb-3">3.1 Prix</h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>Les prix sont exprimés en euros TTC</li>
                      <li>
                        Ils sont fermes et définitifs pour la durée du projet
                      </li>
                      <li>
                        Toute modification du cahier des charges initial fera
                        l'objet d'un avenant
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-3">
                      3.2 Modalités de paiement
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
                      <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-blue-500 mb-2">
                          30%
                        </div>
                        <div className="text-sm">Acompte à la commande</div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-purple-500 mb-2">
                          40%
                        </div>
                        <div className="text-sm">À la validation</div>
                      </div>
                      <div className="bg-orange-500/10 rounded-lg p-4 text-center">
                        <div className="text-2xl font-bold text-orange-500 mb-2">
                          30%
                        </div>
                        <div className="text-sm">Solde à la livraison</div>
                      </div>
                    </div>
                    <p>
                      Délai de paiement : <strong>30 jours</strong> à réception
                      de facture
                    </p>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.2, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 4 - Délais et livraison
                    </h2>
                    <p className="mb-6">
                      Les délais sont donnés à titre indicatif et courent à
                      compter de la réception de l'acompte et de tous les
                      éléments nécessaires à la réalisation du projet.
                    </p>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.4, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 5 - Propriété intellectuelle
                    </h2>

                    <h3 className="text-lg font-semibold mb-3">
                      5.1 Codes et développements
                    </h3>
                    <ul className="list-disc pl-6 mb-4 space-y-1">
                      <li>
                        Le code source reste la propriété du prestataire
                        jusqu'au paiement intégral
                      </li>
                      <li>
                        Licence d'utilisation accordée au client après paiement
                        complet
                      </li>
                      <li>
                        Les frameworks et bibliothèques tiers conservent leurs
                        licences respectives
                      </li>
                    </ul>

                    <h3 className="text-lg font-semibold mb-3">
                      5.2 Contenus copywriting
                    </h3>
                    <ul className="list-disc pl-6 mb-6 space-y-1">
                      <li>
                        Transfert de propriété au client après paiement intégral
                      </li>
                      <li>
                        Le prestataire conserve le droit de mentionner sa
                        participation dans son portfolio
                      </li>
                    </ul>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.6, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 6 - Maintenance et garantie
                    </h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      <div className="bg-green-500/10 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-green-500 mb-2">
                          3 mois
                        </div>
                        <div className="text-sm">Garantie vices cachés</div>
                      </div>
                      <div className="bg-blue-500/10 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-blue-500 mb-2">
                          30 jours
                        </div>
                        <div className="text-sm">Corrections de bugs</div>
                      </div>
                      <div className="bg-purple-500/10 rounded-lg p-4 text-center">
                        <div className="text-xl font-bold text-purple-500 mb-2">
                          Option
                        </div>
                        <div className="text-sm">Maintenance préventive</div>
                      </div>
                    </div>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 1.8, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 7 - Responsabilité
                    </h2>
                    <p className="mb-6">
                      La responsabilité du prestataire est limitée au montant du
                      contrat. Le client reste responsable du contenu qu'il
                      fournit et de la sauvegarde de ses données.
                    </p>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 8 - Résiliation
                    </h2>
                    <p className="mb-6">
                      En cas de non-paiement, le prestataire se réserve le droit
                      de suspendre ou résilier le contrat après mise en demeure
                      restée sans effet sous <strong>15 jours</strong>.
                    </p>
                  </motion.div>

                  <Separator className="my-8" />

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 2.2, duration: 0.6 }}
                  >
                    <h2 className="text-2xl font-bold mb-4 text-primary">
                      Article 9 - Litiges
                    </h2>
                    <p className="mb-6">
                      En cas de litige, les parties s'efforceront de trouver une
                      solution amiable. À défaut, les tribunaux de{" "}
                      <strong>Cherbourg</strong> seront compétents.
                    </p>
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
