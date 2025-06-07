'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sophie Martin',
    role: 'Directrice Marketing',
    company: 'TechStart',
    content: 'Un travail exceptionnel ! Le site web créé a dépassé toutes nos attentes. L\'approche créative et technique est parfaite.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  },
  {
    id: 2,
    name: 'Marc Dubois',
    role: 'CEO',
    company: 'InnovateCorp',
    content: 'Les textes de copywriting ont transformé notre taux de conversion. Un vrai professionnel qui comprend les enjeux business.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  },
  {
    id: 3,
    name: 'Emma Laurent',
    role: 'Fondatrice',
    company: 'Creative Studio',
    content: 'Une collaboration fantastique ! Le niveau de créativité et d\'attention aux détails est remarquable. Je recommande vivement.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  },
  {
    id: 4,
    name: 'Thomas Bernard',
    role: 'Product Manager',
    company: 'DigitalFlow',
    content: 'Excellent travail sur notre plateforme e-commerce. Interface intuitive, performances optimales et résultats au rendez-vous.',
    rating: 5,
    avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&dpr=1'
  }
];

export function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setIsAutoPlaying(false);
  };

  const currentTestimonial = testimonials[currentIndex];

  return (
    <section className="py-20 bg-gradient-to-b from-background to-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-orange-600 bg-clip-text text-transparent">
            Témoignages Clients
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Découvrez ce que disent mes clients sur leur expérience de collaboration.
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          {/* Carrousel 3D */}
          <div className="relative perspective-1000">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentTestimonial.id}
                initial={{ rotateY: 90, opacity: 0 }}
                animate={{ rotateY: 0, opacity: 1 }}
                exit={{ rotateY: -90, opacity: 0 }}
                transition={{ duration: 0.6, ease: "easeInOut" }}
                className="transform-gpu"
              >
                <Card className="bg-background/80 backdrop-blur-sm border-0 shadow-2xl">
                  <CardContent className="p-8 md:p-12">
                    <div className="text-center">
                      {/* Rating */}
                      <motion.div 
                        className="flex justify-center mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.3, duration: 0.3 }}
                      >
                        {[...Array(currentTestimonial.rating)].map((_, i) => (
                          <motion.div
                            key={i}
                            initial={{ opacity: 0, scale: 0 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 0.4 + i * 0.1 }}
                          >
                            <Star className="w-6 h-6 fill-yellow-400 text-yellow-400 mx-1" />
                          </motion.div>
                        ))}
                      </motion.div>

                      {/* Testimonial Content */}
                      <motion.blockquote 
                        className="text-xl md:text-2xl text-foreground mb-8 leading-relaxed"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        "{currentTestimonial.content}"
                      </motion.blockquote>

                      {/* Client Info */}
                      <motion.div 
                        className="flex items-center justify-center space-x-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.4, duration: 0.5 }}
                      >
                        <Avatar className="w-16 h-16 border-2 border-primary/20">
                          <AvatarImage 
                            src={currentTestimonial.avatar} 
                            alt={currentTestimonial.name}
                          />
                          <AvatarFallback>
                            {currentTestimonial.name.split(' ').map(n => n[0]).join('')}
                          </AvatarFallback>
                        </Avatar>
                        <div className="text-left">
                          <h4 className="font-semibold text-lg">{currentTestimonial.name}</h4>
                          <p className="text-muted-foreground">
                            {currentTestimonial.role} • {currentTestimonial.company}
                          </p>
                        </div>
                      </motion.div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            </AnimatePresence>

            {/* Navigation Buttons */}
            <div className="flex justify-center items-center mt-8 space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:scale-110 transition-transform"
                data-cursor-hover
              >
                <ChevronLeft className="w-4 h-4" />
              </Button>

              {/* Indicators */}
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <motion.button
                    key={index}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentIndex 
                        ? 'bg-primary scale-125' 
                        : 'bg-muted-foreground/30 hover:bg-muted-foreground/60'
                    }`}
                    onClick={() => {
                      setCurrentIndex(index);
                      setIsAutoPlaying(false);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    data-cursor-hover
                  />
                ))}
              </div>

              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:scale-110 transition-transform"
                data-cursor-hover
              >
                <ChevronRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}