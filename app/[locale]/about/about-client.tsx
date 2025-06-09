// app/[locale]/about/about-client.tsx
"use client";

import { motion } from "framer-motion";
import { Navigation } from "@/components/layout/navigation";
import { Footer } from "@/components/layout/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  User,
  Code,
  PenTool,
  Award,
  MapPin,
  Calendar,
  Coffee,
  Heart,
  Download,
  ExternalLink,
} from "lucide-react";

export function AboutPageClient() {
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "Express", "PostgreSQL", "MongoDB", "API REST"],
    },
    {
      category: "Outils",
      items: ["Git", "Docker", "Vercel", "Figma", "VS Code"],
    },
    {
      category: "Marketing",
      items: ["SEO", "Google Analytics", "Email Marketing", "Conversion"],
    },
  ];

  const timeline = [
    {
      year: "2024",
      title: "Freelance Full-Stack",
      description:
        "Lancement de mon activité freelance, spécialisé en développement web et copywriting.",
    },
    {
      year: "2023",
      title: "Lead Developer",
      description:
        "Direction d'équipe technique dans une startup, développement d'applications SaaS.",
    },
    {
      year: "2022",
      title: "Développeur Senior",
      description:
        "Expertise en React/Next.js, architecture de projets complexes et mentorat junior.",
    },
    {
      year: "2021",
      title: "Formation Copywriting",
      description:
        "Spécialisation en rédaction persuasive et marketing digital.",
    },
  ];

  const values = [
    {
      icon: Code,
      title: "Excellence Technique",
      description:
        "Code propre, performances optimales et technologies modernes.",
    },
    {
      icon: Heart,
      title: "Passion du Craft",
      description:
        "Amour du développement et recherche constante de perfection.",
    },
    {
      icon: User,
      title: "Approche Humaine",
      description: "Écoute, collaboration et communication transparente.",
    },
    {
      icon: Award,
      title: "Résultats Mesurables",
      description: "Solutions concrètes qui génèrent de la valeur business.",
    },
  ];

  return (
    <main className="relative">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Contenu textuel */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <div className="flex items-center mb-6">
                  <MapPin className="w-5 h-5 text-muted-foreground mr-2" />
                  <span className="text-muted-foreground">
                    Cherbourg, Normandie
                  </span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-400 via-purple-400 to-orange-400 bg-clip-text text-transparent">
                  À propos de moi
                </h1>

                <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
                  Développeur web passionné et copywriter créatif, je transforme
                  les idées en expériences digitales qui marquent. Avec plus de
                  3 ans d'expertise, je créé des solutions sur mesure qui
                  allient technique de pointe et approche marketing.
                </p>

                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Code className="w-4 h-4 mr-2" />
                    Full-Stack Developer
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <PenTool className="w-4 h-4 mr-2" />
                    Copywriter
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Coffee className="w-4 h-4 mr-2" />
                    Coffee Addict
                  </Badge>
                </div>

                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600"
                  >
                    <Download className="w-4 h-4 mr-2" />
                    Télécharger CV
                  </Button>
                  <Button size="lg" variant="outline">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Mon LinkedIn
                  </Button>
                </div>
              </motion.div>

              {/* Image/Avatar */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative mx-auto w-80 h-80 rounded-3xl bg-gradient-to-br from-blue-500/20 via-purple-500/20 to-orange-500/20 p-1">
                  <div className="w-full h-full rounded-3xl bg-background flex items-center justify-center">
                    <div className="text-8xl">👨‍💻</div>
                  </div>
                  {/* Éléments décoratifs */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl"></div>
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl"></div>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Valeurs Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Mes valeurs</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Les principes qui guident mon travail et mes collaborations
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileHover={{ y: -10 }}
                >
                  <Card className="h-full text-center hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6">
                      <div className="w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-lg font-bold mb-3">{value.title}</h3>
                      <p className="text-muted-foreground text-sm">
                        {value.description}
                      </p>
                    </CardContent>
                  </Card>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Compétences Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Compétences & Technologies
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Un arsenal technique complet pour réaliser vos projets les plus
              ambitieux
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {skills.map((skillGroup, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-primary">
                      {skillGroup.category}
                    </h3>
                    <div className="space-y-2">
                      {skillGroup.items.map((skill, skillIndex) => (
                        <div
                          key={skillIndex}
                          className="flex items-center text-sm"
                        >
                          <div className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3" />
                          {skill}
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center mb-16"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Mon Parcours
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              L'évolution de ma carrière et mes moments clés
            </p>
          </motion.div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Ligne verticale */}
              <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 transform md:-translate-x-0.5"></div>

              {timeline.map((item, index) => (
                <motion.div
                  key={index}
                  className={`relative flex items-center mb-12 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  viewport={{ once: true }}
                >
                  {/* Point sur la timeline */}
                  <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform md:-translate-x-2 z-10"></div>

                  {/* Contenu */}
                  <div
                    className={`w-full md:w-5/12 ml-12 md:ml-0 ${
                      index % 2 === 0 ? "md:mr-8" : "md:ml-8"
                    }`}
                  >
                    <Card className="hover:shadow-xl transition-all duration-300">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-3">
                          <Calendar className="w-4 h-4 text-primary mr-2" />
                          <span className="text-primary font-bold">
                            {item.year}
                          </span>
                        </div>
                        <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                        <p className="text-muted-foreground">
                          {item.description}
                        </p>
                      </CardContent>
                    </Card>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-orange-500/10">
        <div className="container mx-auto px-4">
          <motion.div
            className="text-center max-w-4xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Travaillons ensemble
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Vous avez un projet en tête ? Discutons de la façon dont je peux
              vous aider à le concrétiser.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white px-8 py-3 text-lg"
            >
              Démarrer un projet
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
