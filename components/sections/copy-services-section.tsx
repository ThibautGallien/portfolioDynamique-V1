'use client';

import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Mail, FileText, Video, Megaphone, Target, Users } from 'lucide-react';

const copyServices = [
  {
    icon: Mail,
    title: 'Email Marketing',
    description: 'Séquences d\'emails qui convertissent, newsletters engageantes et campagnes automatisées.',
    features: ['Séquences de bienvenue', 'Emails de vente', 'Newsletters', 'Automation'],
    color: 'from-blue-500 to-cyan-500',
    pricing: 'À partir de 800€'
  },
  {
    icon: FileText,
    title: 'Pages de Vente',
    description: 'Landing pages haute conversion, pages produit persuasives et tunnels de vente optimisés.',
    features: ['Landing pages', 'Pages produit', 'Tunnels de vente', 'CTA optimisés'],
    color: 'from-green-500 to-teal-500',
    pricing: 'À partir de 1200€'
  },
  {
    icon: Video,
    title: 'Scripts Vidéo',
    description: 'Scripts pour YouTube, publicités vidéo, webinaires et présentations commerciales.',
    features: ['Scripts YouTube', 'Pub vidéo', 'Webinaires', 'Pitchs'],
    color: 'from-red-500 to-orange-500',
    pricing: 'À partir de 600€'
  },
  {
    icon: Megaphone,
    title: 'Publicités',
    description: 'Copies publicitaires Facebook, Google Ads, LinkedIn et campagnes multi-canaux.',
    features: ['Facebook Ads', 'Google Ads', 'LinkedIn Ads', 'Display'],
    color: 'from-purple-500 to-pink-500',
    pricing: 'À partir de 400€'
  },
  {
    icon: Target,
    title: 'Contenu de Blog',
    description: 'Articles SEO optimisés, guides pratiques et contenu éditorial qui engage.',
    features: ['Articles SEO', 'Guides', 'Case studies', 'Livres blancs'],
    color: 'from-indigo-500 to-purple-500',
    pricing: 'À partir de 200€'
  },
  {
    icon: Users,
    title: 'Stratégie de Contenu',
    description: 'Audit éditorial, calendrier de contenu et stratégie de communication globale.',
    features: ['Audit éditorial', 'Calendrier', 'Stratégie', 'Guidelines'],
    color: 'from-yellow-500 to-orange-500',
    pricing: 'À partir de 1500€'
  }
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
            Des mots qui vendent, des messages qui marquent. 
            Découvrez tous mes services de rédaction persuasive.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {service.title}
                    </h3>
                    
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
                            className="flex items-center text-sm text-muted-foreground"
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            transition={{ 
                              duration: 0.3, 
                              delay: index * 0.1 + featureIndex * 0.05 
                            }}
                            viewport={{ once: true }}
                          >
                            <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color} mr-3`} />
                            {feature}
                          </motion.li>
                        ))}
                      </ul>
                    </div>

                    {/* Pricing */}
                    <div className="mt-auto">
                      <div className={`text-lg font-bold bg-gradient-to-r ${service.color} bg-clip-text text-transparent`}>
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
          <div className="bg-gradient-to-r from-purple-500/10 via-pink-500/10 to-orange-500/10 rounded-2xl p-8 max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold mb-4">
              Besoin d'un projet sur mesure ?
            </h3>
            <p className="text-muted-foreground mb-6">
              Chaque entreprise est unique. Discutons de vos besoins spécifiques 
              pour créer une solution copywriting parfaitement adaptée.
            </p>
            <motion.button
              className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-500 text-white px-8 py-3 rounded-xl font-medium hover:shadow-lg transition-all duration-300"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              data-cursor-hover
            >
              Demander un devis personnalisé
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}