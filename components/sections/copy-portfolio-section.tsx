"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Eye, Mail, TrendingUp, Users } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "Séquence Email E-commerce",
    description:
      "Séquence de 7 emails pour une boutique e-commerce qui a généré +300% de conversions post-achat.",
    category: "Email Marketing",
    results: "+300% conversions",
    clientType: "E-commerce mode",
    tags: ["Séquence email", "E-commerce", "Conversion", "Relance"],
    preview:
      "Objet : Sarah, votre commande vous attend... 👗\n\nBonjour Sarah,\n\nVotre panier contient encore cette magnifique robe qui vous faisait de l'œil...\n\n[Continuation avec urgence et bénéfices]",
  },
  {
    id: 2,
    title: "Newsletter Entrepreneur",
    description:
      "Newsletter hebdomadaire pour un coach en entrepreneuriat. Taux d'ouverture de 45% maintenu sur 6 mois.",
    category: "Newsletter",
    results: "45% taux d'ouverture",
    clientType: "Coach entrepreneur",
    tags: ["Newsletter", "Coaching", "Engagement", "Storytelling"],
    preview:
      "Objet : L'erreur à 10 000€ que j'ai faite (et comment l'éviter)\n\nSalut [Prénom],\n\nLa semaine dernière, j'ai perdu 10 000€ en 30 secondes.\n\nEt tout ça à cause d'une décision prise sur un coup de tête...",
  },
  {
    id: 3,
    title: "Page de Vente SaaS",
    description:
      "Page de vente pour une solution SaaS B2B. Conversion de 12% sur le trafic froid.",
    category: "Page de vente",
    results: "12% conversion",
    clientType: "SaaS B2B",
    tags: ["Landing page", "SaaS", "B2B", "Lead generation"],
    preview:
      "Titre : Transformez vos prospects en clients en 7 jours (ou remboursé)\n\nVous perdez 67% de vos prospects parce qu'ils disparaissent entre le premier contact et la vente...\n\n[Structure : Problème → Solution → Preuves → CTA]",
  },
  {
    id: 4,
    title: "Séquence Onboarding SaaS",
    description:
      "5 emails d'onboarding pour réduire le churn et améliorer l'activation utilisateur de 40%.",
    category: "Email Marketing",
    results: "+40% activation",
    clientType: "Startup SaaS",
    tags: ["Onboarding", "SaaS", "Rétention", "Activation"],
    preview:
      "Objet : Bienvenue ! Voici vos 3 premières étapes 🚀\n\nFélicitations [Prénom] !\n\nVous venez de rejoindre plus de 10 000 entreprises qui utilisent [Produit] pour...\n\n[Guide étape par étape]",
  },
  {
    id: 5,
    title: "Campagne Email Immobilier",
    description:
      "Séquence de nurturing pour une agence immobilière. 25% d'augmentation des RDV qualifiés.",
    category: "Email Marketing",
    results: "+25% RDV qualifiés",
    clientType: "Agence immobilière",
    tags: ["Immobilier", "Nurturing", "Lead generation", "B2C"],
    preview:
      "Objet : [Prénom], ces 3 erreurs vous font perdre 50 000€\n\nBonjour [Prénom],\n\nVendre ou acheter un bien immobilier est probablement la décision financière la plus importante de votre vie...\n\n[Éducation + expertise + urgence]",
  },
  {
    id: 6,
    title: "Newsletter InfoProduit",
    description:
      "Newsletter pour un créateur d'infoproduits. Taux de clic de 18% et génération de 50K€/mois.",
    category: "Newsletter",
    results: "50K€/mois générés",
    clientType: "Créateur digital",
    tags: ["Infoproduit", "Newsletter", "Monétisation", "Personal branding"],
    preview:
      "Objet : Le secret des créateurs à 100K€/mois\n\nSalut [Prénom],\n\nTu veux savoir la différence entre un créateur qui galère à 1000€/mois et celui qui génère 100K€ ?\n\n[Storytelling personnel + insights]",
  },
];

const categories = ["Tous", "Email Marketing", "Newsletter", "Page de vente"];

export function CopyPortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState("Tous");
  const [selectedProject, setSelectedProject] = useState<
    (typeof projects)[0] | null
  >(null);

  const filteredProjects =
    selectedCategory === "Tous"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <section id="portfolio" className="py-20">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-600 via-pink-600 to-orange-600 bg-clip-text text-transparent">
            Portfolio Copywriting
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez mes créations qui ont généré des millions d'euros de
            revenus pour mes clients. Emails, newsletters et pages de vente qui
            convertissent.
          </p>
        </motion.div>

        {/* Filter Categories */}
        <motion.div
          className="flex flex-wrap justify-center gap-4 mb-12"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
        >
          {categories.map((category) => (
            <Button
              key={category}
              variant={selectedCategory === category ? "default" : "outline"}
              onClick={() => setSelectedCategory(category)}
              className="rounded-full px-6"
              data-cursor-hover
            >
              {category}
            </Button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence>
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.8 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -10 }}
                className="group"
              >
                <Card className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm">
                  <div className="relative overflow-hidden bg-gradient-to-br from-purple-500/10 via-pink-500/10 to-orange-500/10 p-6 min-h-[120px] flex items-center justify-center">
                    <div className="text-center">
                      <h3 className="text-lg font-bold mb-2">
                        {project.title}
                      </h3>
                      <Badge variant="secondary" className="mb-2">
                        {project.category}
                      </Badge>
                      <div className="text-sm text-green-600 font-semibold">
                        {project.results}
                      </div>
                    </div>
                    <div className="absolute top-4 right-4 flex space-x-2">
                      <Button
                        size="icon"
                        variant="secondary"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => setSelectedProject(project)}
                        data-cursor-hover
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>

                  <CardContent className="p-6">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {project.tags.slice(0, 3).map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>

                    <p className="text-muted-foreground text-sm mb-4 line-clamp-3">
                      {project.description}
                    </p>

                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-4">
                      <span className="flex items-center">
                        <Users className="w-3 h-3 mr-1" />
                        {project.clientType}
                      </span>
                      <span className="flex items-center">
                        <TrendingUp className="w-3 h-3 mr-1" />
                        Conversion
                      </span>
                    </div>

                    <Button
                      size="sm"
                      variant="outline"
                      className="w-full"
                      onClick={() => setSelectedProject(project)}
                      data-cursor-hover
                    >
                      <Eye className="w-4 h-4 mr-2" />
                      Voir l'aperçu
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* CTA Section */}
        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Prêt à obtenir des résultats similaires ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Ces créations ont généré des millions d'euros pour mes clients.
              Discutons de votre projet pour créer du contenu qui convertit
              vraiment.
            </p>
            <Button
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              data-cursor-hover
            >
              <Mail className="w-4 h-4 mr-2" />
              Me contacter maintenant
            </Button>
          </div>
        </motion.div>

        {/* Modal pour les détails du projet */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                className="bg-background rounded-2xl p-6 max-w-2xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="text-2xl font-bold mb-2">
                      {selectedProject.title}
                    </h3>
                    <Badge variant="secondary" className="mb-2">
                      {selectedProject.category}
                    </Badge>
                    <div className="text-green-600 font-semibold">
                      Résultat : {selectedProject.results}
                    </div>
                  </div>
                  <Button
                    variant="ghost"
                    size="icon"
                    onClick={() => setSelectedProject(null)}
                  >
                    ×
                  </Button>
                </div>

                <p className="text-muted-foreground mb-6">
                  {selectedProject.description}
                </p>

                <div className="bg-muted/30 rounded-lg p-4 mb-6">
                  <h4 className="font-semibold mb-3">Aperçu du contenu :</h4>
                  <div className="text-sm whitespace-pre-line font-mono bg-background rounded p-3">
                    {selectedProject.preview}
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="outline">
                      {tag}
                    </Badge>
                  ))}
                </div>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground mb-4">
                    Ce contenu a été créé pour préserver la confidentialité
                    client. Demandez des exemples spécifiques lors de notre
                    échange.
                  </p>
                  <Button className="bg-gradient-to-r from-purple-500 to-pink-600">
                    <Mail className="w-4 h-4 mr-2" />
                    Discuter de mon projet
                  </Button>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
