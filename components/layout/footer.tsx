'use client';

import { motion } from 'framer-motion';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Mail, Linkedin, Github, Twitter } from 'lucide-react';

export function Footer() {
  const router = useRouter();

  const footerSections = [
    {
      title: 'Services',
      links: [
        { label: 'Développement Web', href: '/dev' },
        { label: 'Copywriting', href: '/copy' },
        { label: 'SEO & Performance', href: '/seo' },
        { label: 'Consultation', href: '/contact' }
      ]
    },
    {
      title: 'Portfolio',
      links: [
        { label: 'Projets Dev', href: '/dev#portfolio' },
        { label: 'Projets Copy', href: '/copy#portfolio' },
        { label: 'Études de cas', href: '/case-studies' },
        { label: 'Blog', href: '/blog' }
      ]
    },
    {
      title: 'Contact',
      links: [
        { label: 'Formulaire', href: '/contact' },
        { label: 'Email', href: 'mailto:contact@portfolio.com' },
        { label: 'LinkedIn', href: 'https://linkedin.com' },
        { label: 'Téléphone', href: 'tel:+33123456789' }
      ]
    }
  ];

  const socialLinks = [
    { icon: Mail, href: 'mailto:contact@portfolio.com', label: 'Email' },
    { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn' },
    { icon: Github, href: 'https://github.com', label: 'GitHub' },
    { icon: Twitter, href: 'https://twitter.com', label: 'Twitter' }
  ];

  return (
    <footer className="bg-muted/30 border-t border-border/50">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
          {/* Brand Section */}
          <motion.div
            className="lg:col-span-1"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3 className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500 bg-clip-text text-transparent mb-4">
              Portfolio Dynamique
            </h3>
            <p className="text-muted-foreground mb-6 max-w-sm">
              Créateur d'expériences digitales exceptionnelles. 
              Développeur web passionné et copywriter créatif.
            </p>
            
            {/* Social Links */}
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.1, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Button
                      variant="ghost"
                      size="icon"
                      className="rounded-full hover:bg-primary/10"
                      onClick={() => window.open(social.href, '_blank')}
                      data-cursor-hover
                    >
                      <Icon className="w-5 h-5" />
                    </Button>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* Footer Sections */}
          {footerSections.map((section, sectionIndex) => (
            <motion.div
              key={sectionIndex}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: (sectionIndex + 1) * 0.1 }}
              viewport={{ once: true }}
            >
              <h4 className="font-semibold text-foreground mb-4">
                {section.title}
              </h4>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <motion.button
                      className="text-muted-foreground hover:text-primary transition-colors text-left"
                      whileHover={{ x: 5 }}
                      onClick={() => {
                        if (link.href.startsWith('http') || link.href.startsWith('mailto') || link.href.startsWith('tel')) {
                          window.open(link.href, '_blank');
                        } else {
                          router.push(link.href);
                        }
                      }}
                      data-cursor-hover
                    >
                      {link.label}
                    </motion.button>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        <Separator className="mb-8" />

        {/* Bottom Footer */}
        <motion.div
          className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <p className="text-muted-foreground text-sm">
            © 2024 Portfolio Dynamique. Tous droits réservés.
          </p>
          
          <div className="flex space-x-6 text-sm">
            <motion.button
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
              data-cursor-hover
            >
              Mentions légales
            </motion.button>
            <motion.button
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
              data-cursor-hover
            >
              Politique de confidentialité
            </motion.button>
            <motion.button
              className="text-muted-foreground hover:text-primary transition-colors"
              whileHover={{ y: -2 }}
              data-cursor-hover
            >
              CGV
            </motion.button>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}