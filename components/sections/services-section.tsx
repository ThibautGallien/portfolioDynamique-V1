'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Code, PenTool, Smartphone, Globe, Lightbulb, Target } from 'lucide-react';

const services = [
  {
    icon: Code,
    title: 'Développement Web',
    description: 'Applications web modernes, sites vitrines performants et e-commerce sur mesure.',
    color: 'from-blue-500 to-cyan-500',
    route: '/dev'
  },
  {
    icon: PenTool,
    title: 'Copywriting',
    description: 'Contenus persuasifs qui convertissent, storytelling captivant et stratégie éditoriale.',
    color: 'from-purple-500 to-pink-500',
    route: '/copy'
  },
  {
    icon: Smartphone,
    title: 'Design Responsive',
    description: 'Interfaces utilisateur intuitives, adaptées à tous les appareils et écrans.',
    color: 'from-green-500 to-teal-500'
  },
  {
    icon: Globe,
    title: 'SEO & Performance',
    description: 'Optimisation pour les moteurs de recherche et performances exceptionnelles.',
    color: 'from-orange-500 to-red-500'
  },
  {
    icon: Lightbulb,
    title: 'Stratégie Créative',
    description: 'Conseils stratégiques pour maximiser l\'impact de votre présence digitale.',
    color: 'from-yellow-500 to-orange-500'
  },
  {
    icon: Target,
    title: 'Conversion Focus',
    description: 'Optimisation des parcours utilisateur pour maximiser vos conversions.',
    color: 'from-indigo-500 to-purple-500'
  }
];

export function ServicesSection() {
  const router = useRouter();

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
            Services & Expertises
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Une approche complète pour donner vie à vos projets digitaux, 
            de la conception à la réalisation.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => {
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
                <Card 
                  className="h-full hover:shadow-2xl transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm cursor-pointer group"
                  onClick={() => service.route && router.push(service.route)}
                  data-cursor-hover
                >
                  <CardContent className="p-6 h-full flex flex-col">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
                    <p className="text-muted-foreground flex-grow">
                      {service.description}
                    </p>

                    {service.route && (
                      <motion.div
                        className="mt-6"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.2 }}
                      >
                        <Button 
                          variant="ghost" 
                          className="w-full group-hover:bg-primary/10"
                        >
                          En savoir plus
                        </Button>
                      </motion.div>
                    )}
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
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl"
            onClick={() => router.push('/contact')}
            data-cursor-hover
          >
            Discutons de votre projet
          </Button>
        </motion.div>
      </div>
    </section>
  );
}