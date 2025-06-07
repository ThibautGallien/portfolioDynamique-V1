'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Eye, TrendingUp, Users } from 'lucide-react';

const copyProjects = [
  {
    id: 1,
    title: 'Campagne E-mail SaaS',
    description: 'Séquence d\'emails de bienvenue qui a augmenté l\'engagement de 340% et réduit le churn de 25%.',
    category: 'Email Marketing',
    metrics: { engagement: '+340%', conversion: '+25%', retention: '+65%' },
    tags: ['Email', 'SaaS', 'Onboarding', 'Conversion'],
    preview: 'Bienvenue dans votre nouvelle aventure ! Découvrez comment [Produit] va transformer votre façon de...',
    color: 'from-blue-500 to-cyan-500'
  },
  {
    id: 2,
    title: 'Page de Vente E-commerce',
    description: 'Landing page qui a généré 2M€ de revenus en 6 mois avec un taux de conversion de 8.5%.',
    category: 'Sales Page',
    metrics: { revenue: '2M€', conversion: '8.5%', traffic: '+420%' },
    tags: ['Landing Page', 'E-commerce', 'Conversion', 'ROI'],
    preview: 'Découvrez le secret que 10,000+ entrepreneurs utilisent pour doubler leurs ventes en 90 jours...',
    color: 'from-green-500 to-teal-500'
  },
  {
    id: 3,
    title: 'Contenu Blog B2B',
    description: 'Série d\'articles qui ont généré 500K vues organiques et 15,000 leads qualifiés.',
    category: 'Content Marketing',
    metrics: { views: '500K', leads: '15K', growth: '+280%' },
    tags: ['Blog', 'SEO', 'Lead Gen', 'B2B'],
    preview: 'Les 7 erreurs que 90% des startups commettent (et comment les éviter pour scaler rapidement)...',
    color: 'from-purple-500 to-pink-500'
  },
  {
    id: 4,
    title: 'Scripts Vidéo YouTube',
    description: 'Scripts pour chaîne business qui ont totalisé 2M de vues et 50K abonnés en 8 mois.',
    category: 'Video Scripts',
    metrics: { views: '2M', subscribers: '50K', engagement: '+85%' },
    tags: ['YouTube', 'Scripts', 'Business', 'Growth'],
    preview: 'Si vous regardez cette vidéo, c\'est que vous voulez vraiment changer votre vie financière...',
    color: 'from-orange-500 to-red-500'
  }
];

const categories = ['Tous', 'Email Marketing', 'Sales Page', 'Content Marketing', 'Video Scripts'];

export function CopyPortfolioSection() {
  const [selectedCategory, setSelectedCategory] = useState('Tous');
  const [selectedProject, setSelectedProject] = useState<typeof copyProjects[0] | null>(null);

  const filteredProjects = selectedCategory === 'Tous' 
    ? copyProjects 
    : copyProjects.filter(project => project.category === selectedCategory);

  return (
    <section className="py-20">
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
            Découvrez mes créations qui ont généré des millions d'euros de revenus 
            et transformé l'engagement de dizaines d'entreprises.
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
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
                <Card className="overflow-hidden hover:shadow-2xl transition-all duration-300 border-0 bg-background/60 backdrop-blur-sm h-full">
                  <div className={`h-2 bg-gradient-to-r ${project.color}`} />
                  
                  <CardContent className="p-6">
                    <div className="flex justify-between items-start mb-4">
                      <Badge variant="secondary" className="text-xs">
                        {project.category}
                      </Badge>
                      <Button
                        size="icon"
                        variant="ghost"
                        className="opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                        onClick={() => setSelectedProject(project)}
                        data-cursor-hover
                      >
                        <Eye className="w-4 h-4" />
                      </Button>
                    </div>
                    
                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                      {project.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-sm mb-4">
                      {project.description}
                    </p>

                    {/* Metrics */}
                    <div className="grid grid-cols-3 gap-4 mb-4">
                      {Object.entries(project.metrics).map(([key, value]) => (
                        <div key={key} className="text-center">
                          <div className={`text-lg font-bold bg-gradient-to-r ${project.color} bg-clip-text text-transparent`}>
                            {value}
                          </div>
                          <div className="text-xs text-muted-foreground capitalize">
                            {key}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Preview */}
                    <div className="bg-muted/50 rounded-lg p-3 mb-4">
                      <p className="text-sm italic text-muted-foreground line-clamp-2">
                        "{project.preview}"
                      </p>
                    </div>
                    
                    <div className="flex flex-wrap gap-2">
                      {project.tags.map((tag) => (
                        <Badge key={tag} variant="outline" className="text-xs">
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

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
                className="bg-background rounded-2xl p-6 max-w-3xl w-full max-h-[80vh] overflow-y-auto"
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.8, opacity: 0 }}
                onClick={(e) => e.stopPropagation()}
              >
                <div className={`h-1 bg-gradient-to-r ${selectedProject.color} rounded-full mb-6`} />
                
                <h3 className="text-2xl font-bold mb-4">{selectedProject.title}</h3>
                <p className="text-muted-foreground mb-6">{selectedProject.description}</p>
                
                {/* Detailed Metrics */}
                <div className="grid grid-cols-3 gap-6 mb-6">
                  {Object.entries(selectedProject.metrics).map(([key, value]) => (
                    <div key={key} className="text-center p-4 bg-muted/30 rounded-lg">
                      <div className={`text-2xl font-bold bg-gradient-to-r ${selectedProject.color} bg-clip-text text-transparent mb-2`}>
                        {value}
                      </div>
                      <div className="text-sm text-muted-foreground capitalize">
                        {key}
                      </div>
                    </div>
                  ))}
                </div>

                {/* Full Preview */}
                <div className="bg-muted/30 rounded-lg p-6 mb-6">
                  <h4 className="font-semibold mb-3">Aperçu du contenu :</h4>
                  <p className="text-muted-foreground italic">
                    "{selectedProject.preview}"
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-2 mb-6">
                  {selectedProject.tags.map((tag) => (
                    <Badge key={tag} variant="secondary">
                      {tag}
                    </Badge>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <Button className="flex-1" data-cursor-hover>
                    <TrendingUp className="w-4 h-4 mr-2" />
                    Voir le cas complet
                  </Button>
                  <Button variant="outline" className="flex-1" data-cursor-hover>
                    <Users className="w-4 h-4 mr-2" />
                    Projet similaire
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