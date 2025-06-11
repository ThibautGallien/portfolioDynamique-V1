// app/[locale]/about/about-client.tsx
"use client";

import { motion } from "framer-motion";
import { useRouter } from "next/navigation";
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
  ExternalLink,
} from "lucide-react";

export function AboutPageClient() {
  const router = useRouter();

  /**
   * ------------------------------------------------------------------
   * Data
   * ------------------------------------------------------------------
   */
  const skills = [
    {
      category: "Frontend",
      items: ["React", "Next.js", "TypeScript", "TailwindCSS", "Framer Motion"],
    },
    {
      category: "Backend",
      items: ["Node.js", "MongoDB", "API REST"],
    },
    {
      category: "Outils",
      items: ["Git", "Vercel", "Figma", "Notion"],
    },
    {
      category: "Marketing",
      items: ["SEO", "Google Analytics", "Email Marketing", "Lead Gen"],
    },
  ];

  const timeline = [
    {
      year: "2024- Maintenant",
      title: "Développeur & Copywriter Freelance",
      description:
        "Activité freelance complète, alliant développement web moderne et copywriting stratégique.",
    },
    {
      year: "2023",
      title: "Community Manager - Tugan.ai",
      description:
        "Création de contenu, support client et gestion des affiliés pour une entreprise d'IA en marketing digital.",
    },
    {
      year: "2022",
      title: "Copywriter Freelance",
      description:
        "Lancement dans le copywriting freelance, spécialisation en emails marketing et pages de vente.",
    },
    {
      year: "2019-2021",
      title: "Institut Paul Bocuse",
      description:
        "Bachelor Management en Arts Culinaires - Approche créative et gestion de projets.",
    },
    {
      year: "2018-2019",
      title: "ISG Nantes",
      description:
        "Business & Management - Fondations en stratégie d'entreprise et marketing.",
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

  /**
   * ------------------------------------------------------------------
   * Helpers
   * ------------------------------------------------------------------
   */
  const redirectToContact = () => router.push("/contact");
  const openLinkedIn = () =>
    window.open("https://www.linkedin.com/in/thibaut-gallien/", "_blank");

  /**
   * ------------------------------------------------------------------
   * Render
   * ------------------------------------------------------------------
   */
  return (
    <main className="relative">
      {/* ------------------------------------------------------------ */}
      {/* Navigation */}
      {/* ------------------------------------------------------------ */}
      <Navigation />

      {/* ------------------------------------------------------------ */}
      {/* Hero Section */}
      {/* ------------------------------------------------------------ */}
      <section className="pt-24 pb-16 bg-gradient-to-b from-background to-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* ---------------------------------------------------- */}
              {/* Left — Intro */}
              {/* ---------------------------------------------------- */}
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
                  les idées en expériences digitales qui marquent. Avec plus de
                  3 ans d'expertise, je créé des solutions sur‑mesure qui
                  allient technique de pointe et approche marketing.
                </p>

                {/* Badges */}
                <div className="flex flex-wrap gap-4 mb-8">
                  <Badge variant="secondary" className="px-4 py-2">
                    <Code className="w-4 h-4 mr-2" />
                    Full‑Stack Developer
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <PenTool className="w-4 h-4 mr-2" />
                    Copywriter
                  </Badge>
                  <Badge variant="secondary" className="px-4 py-2">
                    <Coffee className="w-4 h-4 mr-2" />
                    Coffee Addict
                  </Badge>
                </div>

                {/* CTA buttons */}
                <div className="flex gap-4">
                  <Button
                    size="lg"
                    className="bg-gradient-to-r from-blue-500 to-purple-600"
                    onClick={redirectToContact}
                  >
                    Me contacter
                  </Button>
                  <Button size="lg" variant="outline" onClick={openLinkedIn}>
                    <ExternalLink className="w-4 h-4 mr-2" />
                    Mon LinkedIn
                  </Button>
                </div>
              </motion.div>

              {/* ---------------------------------------------------- */}
              {/* Right — Animated profile picture */}
              {/* ---------------------------------------------------- */}
              <motion.div
                className="relative"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <div className="relative mx-auto w-80 h-80">
                  {/* Decorative ring (conic‑gradient) */}
                  <motion.div
                    className="absolute inset-0"
                    style={{
                      background:
                        "conic-gradient(from 0deg, #3b82f6, #8b5cf6, #f97316, #3b82f6)",
                      borderRadius: "50%",
                    }}
                    animate={{
                      rotate: 360,
                      borderRadius: [
                        "50%",
                        "60% 40% 60% 40%",
                        "50%",
                        "40% 60% 40% 60%",
                        "50%",
                      ],
                    }}
                    transition={{
                      rotate: { duration: 4, repeat: Infinity, ease: "linear" },
                      borderRadius: {
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                      },
                    }}
                  />

                  {/* Image wrapper */}
                  <motion.div
                    className="absolute inset-0 p-1"
                    animate={{
                      scale: [1, 1.05, 1],
                      rotateY: [0, 8, 0, -8, 0],
                      rotateZ: [0, 2, 0, -2, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    <motion.div
                      className="w-full h-full overflow-hidden bg-white"
                      style={{ borderRadius: "50%" }}
                      animate={{
                        borderRadius: [
                          "50%",
                          "60% 40% 60% 40%",
                          "50%",
                          "40% 60% 40% 60%",
                          "50%",
                        ],
                      }}
                      transition={{
                        duration: 8,
                        repeat: Infinity,
                        ease: "easeInOut",
                        delay: 0.2,
                      }}
                    >
                      <motion.img
                        src="/images/thibaut-profile.jpg"
                        alt="Thibaut Gallien — Développeur Web & Copywriter"
                        className="w-full h-full object-cover"
                        animate={{
                          filter: [
                            "brightness(1) contrast(1) saturate(1) hue-rotate(0deg)",
                            "brightness(1.1) contrast(1.15) saturate(1.3) hue-rotate(5deg)",
                            "brightness(1) contrast(1) saturate(1) hue-rotate(0deg)",
                            "brightness(0.95) contrast(1.1) saturate(1.2) hue-rotate(-3deg)",
                            "brightness(1) contrast(1) saturate(1) hue-rotate(0deg)",
                          ],
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          filter: {
                            duration: 5,
                            repeat: Infinity,
                            ease: "easeInOut",
                          },
                          scale: {
                            duration: 3,
                            repeat: Infinity,
                            ease: "easeInOut",
                            delay: 1,
                          },
                        }}
                      />
                    </motion.div>
                  </motion.div>

                  {/* Floating badges */}
                  <motion.div
                    className="absolute -top-6 -right-6 bg-gradient-to-r from-blue-500 to-cyan-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl z-30"
                    animate={{
                      y: [0, -15, 0],
                      scale: [1, 1.2, 1],
                      rotate: [0, 10, 0],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                  >
                    💻 DEVELOPER
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-6 -left-6 bg-gradient-to-r from-purple-500 to-pink-400 text-white px-4 py-2 rounded-full text-sm font-bold shadow-2xl z-30"
                    animate={{
                      y: [0, 15, 0],
                      scale: [1, 1.2, 1],
                      rotate: [0, -10, 0],
                    }}
                    transition={{
                      duration: 3.5,
                      repeat: Infinity,
                      ease: "easeInOut",
                      delay: 1.5,
                    }}
                  >
                    ✍️ COPYWRITER
                  </motion.div>

                  {/* Decorative static blobs */}
                  <div className="absolute -top-4 -right-4 w-20 h-20 bg-blue-500/20 rounded-full blur-xl" />
                  <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-purple-500/20 rounded-full blur-xl" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Valeurs */}
      {/* ------------------------------------------------------------ */}
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
            {values.map(({ icon: Icon, title, description }, index) => (
              <motion.div
                key={title}
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
                    <h3 className="text-lg font-bold mb-3">{title}</h3>
                    <p className="text-muted-foreground text-sm">
                      {description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Compétences */}
      {/* ------------------------------------------------------------ */}
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
            {skills.map((group) => (
              <motion.div
                key={group.category}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
              >
                <Card className="h-full">
                  <CardContent className="p-6">
                    <h3 className="text-lg font-bold mb-4 text-primary">
                      {group.category}
                    </h3>
                    <ul className="space-y-2">
                      {group.items.map((skill) => (
                        <li key={skill} className="flex items-center text-sm">
                          <span className="w-2 h-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mr-3" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Timeline */}
      {/* ------------------------------------------------------------ */}
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

          <div className="max-w-4xl mx-auto relative">
            {/* Vertical line */}
            <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-blue-500 via-purple-500 to-orange-500 transform md:-translate-x-0.5" />

            {timeline.map((item, index) => (
              <motion.div
                key={item.title}
                className={`relative flex items-center mb-12 ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
              >
                {/* Dot */}
                <div className="absolute left-2 md:left-1/2 w-4 h-4 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full transform md:-translate-x-2 z-10" />

                {/* Card */}
                <div
                  className={`w-full md:w-5/12 ml-12 md:ml-0 ${index % 2 === 0 ? "md:mr-8" : "md:ml-8"}`}
                >
                  <Card className="hover:shadow-xl transition-all duration-300">
                    <CardContent className="p-6 space-y-3">
                      <div className="flex items-center">
                        <Calendar className="w-4 h-4 text-primary mr-2" />
                        <span className="text-primary font-bold">
                          {item.year}
                        </span>
                      </div>
                      <h3 className="text-xl font-bold">{item.title}</h3>
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
      </section>

      {/* ------------------------------------------------------------ */}
      {/* CTA */}
      {/* ------------------------------------------------------------ */}
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
              Vous avez un projet en tête ? Discutons de la façon dont je peux
              vous aider à le concrétiser.
            </p>
            <Button
              size="lg"
              className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 text-white px-8 py-3 text-lg"
              onClick={redirectToContact}
            >
              Démarrer un projet
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------------ */}
      {/* Footer */}
      {/* ------------------------------------------------------------ */}
      <Footer />
    </main>
  );
}
