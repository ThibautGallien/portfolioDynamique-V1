'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Mail, MessageCircle, Calendar, ArrowRight } from 'lucide-react';

export function ContactSection() {
  const router = useRouter();

  const contactOptions = [
    {
      icon: Mail,
      title: 'Email Direct',
      description: 'Envoyez-moi un message pour discuter de votre projet',
      action: 'Envoyer un email',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: MessageCircle,
      title: 'Formulaire Détaillé',
      description: 'Répondez à quelques questions pour un devis personnalisé',
      action: 'Commencer le formulaire',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Calendar,
      title: 'Appel Découverte',
      description: 'Planifions un appel pour explorer vos besoins',
      action: 'Réserver un créneau',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20 bg-gradient-to-b from-muted/30 to-background">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Prêt à Commencer ?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Transformons votre vision en réalité digitale. 
            Choisissez la méthode de contact qui vous convient le mieux.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {contactOptions.map((option, index) => {
            const Icon = option.icon;
            
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                viewport={{ once: true }}
                whileHover={{ y: -10, scale: 1.02 }}
                className="relative group"
              >
                <div className="relative overflow-hidden rounded-2xl bg-background/60 backdrop-blur-sm border border-border/50 p-8 h-full hover:shadow-2xl transition-all duration-300">
                  {/* Gradient Background on Hover */}
                  <motion.div
                    className={`absolute inset-0 bg-gradient-to-br ${option.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}
                  />

                  <div className="relative z-10">
                    <motion.div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${option.gradient} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}
                      whileHover={{ rotate: 360 }}
                      transition={{ duration: 0.6 }}
                    >
                      <Icon className="w-8 h-8 text-white" />
                    </motion.div>

                    <h3 className="text-xl font-bold mb-4 group-hover:text-primary transition-colors">
                      {option.title}
                    </h3>
                    
                    <p className="text-muted-foreground mb-6">
                      {option.description}
                    </p>

                    <Button
                      className="w-full group-hover:bg-primary/10 group-hover:text-primary border-0"
                      variant="ghost"
                      onClick={() => router.push('/contact')}
                      data-cursor-hover
                    >
                      {option.action}
                      <ArrowRight className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          className="text-center mt-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          viewport={{ once: true }}
        >
          <Button
            size="lg"
            className="bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 hover:from-blue-600 hover:via-purple-600 hover:to-orange-600 text-white px-8 py-3 rounded-xl text-lg"
            onClick={() => router.push('/contact')}
            data-cursor-hover
          >
            Démarrer un projet maintenant
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
}