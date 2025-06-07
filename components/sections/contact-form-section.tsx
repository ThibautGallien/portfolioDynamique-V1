'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import Confetti from 'react-confetti';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { Checkbox } from '@/components/ui/checkbox';
import { 
  ArrowRight, 
  ArrowLeft, 
  Check, 
  Code, 
  PenTool, 
  Mail, 
  Phone, 
  User,
  FileText,
  Calendar,
  Euro
} from 'lucide-react';
import { toast } from 'sonner';

const formSchema = z.object({
  service: z.enum(['dev', 'copy', 'both']),
  projectType: z.string().min(1, 'Veuillez sélectionner un type de projet'),
  budget: z.string().min(1, 'Veuillez sélectionner un budget'),
  timeline: z.string().min(1, 'Veuillez sélectionner un délai'),
  firstName: z.string().min(2, 'Le prénom doit contenir au moins 2 caractères'),
  lastName: z.string().min(2, 'Le nom doit contenir au moins 2 caractères'),
  email: z.string().email('Adresse email invalide'),
  phone: z.string().min(10, 'Numéro de téléphone invalide'),
  company: z.string().optional(),
  message: z.string().min(10, 'Le message doit contenir au moins 10 caractères'),
  newsletter: z.boolean().default(false),
});

type FormData = z.infer<typeof formSchema>;

const projectTypes = {
  dev: [
    'Site vitrine',
    'E-commerce',
    'Application web',
    'Refonte de site',
    'Maintenance/Support',
    'Autre'
  ],
  copy: [
    'Page de vente',
    'Email marketing',
    'Contenu blog',
    'Scripts vidéo',
    'Publicités',
    'Autre'
  ],
  both: [
    'Projet complet (Dev + Copy)',
    'Site + contenu',
    'E-commerce + marketing',
    'Stratégie globale',
    'Autre'
  ]
};

const budgetRanges = [
  '< 1 000€',
  '1 000€ - 5 000€',
  '5 000€ - 15 000€',
  '15 000€ - 30 000€',
  '> 30 000€'
];

const timelineOptions = [
  'Urgence (< 2 semaines)',
  'Rapide (2-4 semaines)',
  'Standard (1-2 mois)',
  'Flexible (2-3 mois)',
  'Pas de deadline'
];

export function ContactFormSection() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showConfetti, setShowConfetti] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    watch,
    setValue,
    trigger
  } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      newsletter: false
    }
  });

  const watchedValues = watch();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    
    // Simulation d'envoi
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    setShowConfetti(true);
    toast.success('Votre demande a été envoyée avec succès !', {
      description: 'Je vous recontacte dans les 24h pour discuter de votre projet.'
    });
    
    setTimeout(() => setShowConfetti(false), 5000);
    setIsSubmitting(false);
    setCurrentStep(5); // Étape de confirmation
  };

  const nextStep = async () => {
    const fieldsToValidate = getFieldsForStep(currentStep);
    const isStepValid = await trigger(fieldsToValidate);
    
    if (isStepValid) {
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => setCurrentStep(prev => prev - 1);

  const getFieldsForStep = (step: number): (keyof FormData)[] => {
    switch (step) {
      case 1: return ['service'];
      case 2: return ['projectType', 'budget', 'timeline'];
      case 3: return ['firstName', 'lastName', 'email', 'phone'];
      case 4: return ['message'];
      default: return [];
    }
  };

  const totalSteps = 4;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <section className="py-20">
      {showConfetti && (
        <Confetti
          width={window.innerWidth}
          height={window.innerHeight}
          recycle={false}
          numberOfPieces={200}
        />
      )}
      
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          {/* Progress Bar */}
          <motion.div
            className="mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex justify-between items-center mb-4">
              <span className="text-sm text-muted-foreground">
                Étape {currentStep} sur {totalSteps}
              </span>
              <span className="text-sm text-muted-foreground">
                {Math.round(progress)}% complété
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5 }}
              />
            </div>
          </motion.div>

          <Card className="border-0 shadow-2xl bg-background/60 backdrop-blur-sm">
            <CardContent className="p-8">
              <form onSubmit={handleSubmit(onSubmit)}>
                <AnimatePresence mode="wait">
                  {/* Étape 1: Choix du service */}
                  {currentStep === 1 && (
                    <motion.div
                      key="step1"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                    >
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        Quel service vous intéresse ?
                      </h3>
                      
                      <RadioGroup
                        value={watchedValues.service}
                        onValueChange={(value) => setValue('service', value as any)}
                        className="grid grid-cols-1 md:grid-cols-3 gap-4"
                      >
                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Label
                            htmlFor="dev"
                            className={`flex flex-col items-center p-6 border-2 rounded-xl cursor-pointer transition-all ${
                              watchedValues.service === 'dev' 
                                ? 'border-blue-500 bg-blue-500/10' 
                                : 'border-border hover:border-blue-300'
                            }`}
                          >
                            <RadioGroupItem value="dev" id="dev" className="sr-only" />
                            <Code className="w-12 h-12 mb-4 text-blue-500" />
                            <span className="font-semibold">Développement Web</span>
                            <span className="text-sm text-muted-foreground text-center mt-2">
                              Sites web, applications, e-commerce
                            </span>
                          </Label>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Label
                            htmlFor="copy"
                            className={`flex flex-col items-center p-6 border-2 rounded-xl cursor-pointer transition-all ${
                              watchedValues.service === 'copy' 
                                ? 'border-purple-500 bg-purple-500/10' 
                                : 'border-border hover:border-purple-300'
                            }`}
                          >
                            <RadioGroupItem value="copy" id="copy" className="sr-only" />
                            <PenTool className="w-12 h-12 mb-4 text-purple-500" />
                            <span className="font-semibold">Copywriting</span>
                            <span className="text-sm text-muted-foreground text-center mt-2">
                              Contenus, emails, pages de vente
                            </span>
                          </Label>
                        </motion.div>

                        <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                          <Label
                            htmlFor="both"
                            className={`flex flex-col items-center p-6 border-2 rounded-xl cursor-pointer transition-all ${
                              watchedValues.service === 'both' 
                                ? 'border-orange-500 bg-orange-500/10' 
                                : 'border-border hover:border-orange-300'
                            }`}
                          >
                            <RadioGroupItem value="both" id="both" className="sr-only" />
                            <div className="flex space-x-2 mb-4">
                              <Code className="w-6 h-6 text-orange-500" />
                              <PenTool className="w-6 h-6 text-orange-500" />
                            </div>
                            <span className="font-semibold">Les deux</span>
                            <span className="text-sm text-muted-foreground text-center mt-2">
                              Projet complet dev + copy
                            </span>
                          </Label>
                        </motion.div>
                      </RadioGroup>

                      {errors.service && (
                        <p className="text-red-500 text-sm mt-2">{errors.service.message}</p>
                      )}
                    </motion.div>
                  )}

                  {/* Étape 2: Détails du projet */}
                  {currentStep === 2 && (
                    <motion.div
                      key="step2"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        Parlez-moi de votre projet
                      </h3>

                      {/* Type de projet */}
                      <div>
                        <Label className="text-base font-medium mb-3 block">
                          <FileText className="w-5 h-5 inline mr-2" />
                          Type de projet
                        </Label>
                        <RadioGroup
                          value={watchedValues.projectType}
                          onValueChange={(value) => setValue('projectType', value)}
                          className="grid grid-cols-2 gap-3"
                        >
                          {projectTypes[watchedValues.service || 'dev'].map((type) => (
                            <Label
                              key={type}
                              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                                watchedValues.projectType === type 
                                  ? 'border-primary bg-primary/10' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <RadioGroupItem value={type} className="mr-3" />
                              <span className="text-sm">{type}</span>
                            </Label>
                          ))}
                        </RadioGroup>
                        {errors.projectType && (
                          <p className="text-red-500 text-sm mt-1">{errors.projectType.message}</p>
                        )}
                      </div>

                      {/* Budget */}
                      <div>
                        <Label className="text-base font-medium mb-3 block">
                          <Euro className="w-5 h-5 inline mr-2" />
                          Budget estimé
                        </Label>
                        <RadioGroup
                          value={watchedValues.budget}
                          onValueChange={(value) => setValue('budget', value)}
                          className="grid grid-cols-2 gap-3"
                        >
                          {budgetRanges.map((budget) => (
                            <Label
                              key={budget}
                              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                                watchedValues.budget === budget 
                                  ? 'border-primary bg-primary/10' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <RadioGroupItem value={budget} className="mr-3" />
                              <span className="text-sm">{budget}</span>
                            </Label>
                          ))}
                        </RadioGroup>
                        {errors.budget && (
                          <p className="text-red-500 text-sm mt-1">{errors.budget.message}</p>
                        )}
                      </div>

                      {/* Timeline */}
                      <div>
                        <Label className="text-base font-medium mb-3 block">
                          <Calendar className="w-5 h-5 inline mr-2" />
                          Délai souhaité
                        </Label>
                        <RadioGroup
                          value={watchedValues.timeline}
                          onValueChange={(value) => setValue('timeline', value)}
                          className="space-y-2"
                        >
                          {timelineOptions.map((timeline) => (
                            <Label
                              key={timeline}
                              className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                                watchedValues.timeline === timeline 
                                  ? 'border-primary bg-primary/10' 
                                  : 'border-border hover:border-primary/50'
                              }`}
                            >
                              <RadioGroupItem value={timeline} className="mr-3" />
                              <span className="text-sm">{timeline}</span>
                            </Label>
                          ))}
                        </RadioGroup>
                        {errors.timeline && (
                          <p className="text-red-500 text-sm mt-1">{errors.timeline.message}</p>
                        )}
                      </div>
                    </motion.div>
                  )}

                  {/* Étape 3: Informations personnelles */}
                  {currentStep === 3 && (
                    <motion.div
                      key="step3"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        Vos coordonnées
                      </h3>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <div>
                          <Label htmlFor="firstName" className="text-base font-medium mb-2 block">
                            <User className="w-4 h-4 inline mr-2" />
                            Prénom *
                          </Label>
                          <Input
                            id="firstName"
                            {...register('firstName')}
                            className="h-12"
                            placeholder="Votre prénom"
                          />
                          {errors.firstName && (
                            <p className="text-red-500 text-sm mt-1">{errors.firstName.message}</p>
                          )}
                        </div>

                        <div>
                          <Label htmlFor="lastName" className="text-base font-medium mb-2 block">
                            Nom *
                          </Label>
                          <Input
                            id="lastName"
                            {...register('lastName')}
                            className="h-12"
                            placeholder="Votre nom"
                          />
                          {errors.lastName && (
                            <p className="text-red-500 text-sm mt-1">{errors.lastName.message}</p>
                          )}
                        </div>
                      </div>

                      <div>
                        <Label htmlFor="email" className="text-base font-medium mb-2 block">
                          <Mail className="w-4 h-4 inline mr-2" />
                          Email *
                        </Label>
                        <Input
                          id="email"
                          type="email"
                          {...register('email')}
                          className="h-12"
                          placeholder="votre@email.com"
                        />
                        {errors.email && (
                          <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="phone" className="text-base font-medium mb-2 block">
                          <Phone className="w-4 h-4 inline mr-2" />
                          Téléphone *
                        </Label>
                        <Input
                          id="phone"
                          type="tel"
                          {...register('phone')}
                          className="h-12"
                          placeholder="06 12 34 56 78"
                        />
                        {errors.phone && (
                          <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>
                        )}
                      </div>

                      <div>
                        <Label htmlFor="company" className="text-base font-medium mb-2 block">
                          Entreprise (optionnel)
                        </Label>
                        <Input
                          id="company"
                          {...register('company')}
                          className="h-12"
                          placeholder="Nom de votre entreprise"
                        />
                      </div>
                    </motion.div>
                  )}

                  {/* Étape 4: Message */}
                  {currentStep === 4 && (
                    <motion.div
                      key="step4"
                      initial={{ opacity: 0, x: 50 }}
                      animate={{ opacity: 1, x: 0 }}
                      exit={{ opacity: 0, x: -50 }}
                      transition={{ duration: 0.3 }}
                      className="space-y-6"
                    >
                      <h3 className="text-2xl font-bold mb-6 text-center">
                        Décrivez votre projet
                      </h3>

                      <div>
                        <Label htmlFor="message" className="text-base font-medium mb-2 block">
                          Message détaillé *
                        </Label>
                        <Textarea
                          id="message"
                          {...register('message')}
                          className="min-h-32"
                          placeholder="Décrivez votre projet, vos objectifs, vos contraintes..."
                        />
                        {errors.message && (
                          <p className="text-red-500 text-sm mt-1">{errors.message.message}</p>
                        )}
                      </div>

                      <div className="flex items-center space-x-2">
                        <Checkbox
                          id="newsletter"
                          checked={watchedValues.newsletter}
                          onCheckedChange={(checked) => setValue('newsletter', checked as boolean)}
                        />
                        <Label htmlFor="newsletter" className="text-sm">
                          Je souhaite recevoir des conseils et actualités par email
                        </Label>
                      </div>

                      {/* Récapitulatif */}
                      <div className="bg-muted/30 rounded-lg p-6 mt-8">
                        <h4 className="font-semibold mb-4">Récapitulatif de votre demande :</h4>
                        <div className="space-y-2 text-sm">
                          <p><strong>Service :</strong> {
                            watchedValues.service === 'dev' ? 'Développement Web' :
                            watchedValues.service === 'copy' ? 'Copywriting' : 'Développement + Copywriting'
                          }</p>
                          <p><strong>Type :</strong> {watchedValues.projectType}</p>
                          <p><strong>Budget :</strong> {watchedValues.budget}</p>
                          <p><strong>Délai :</strong> {watchedValues.timeline}</p>
                          <p><strong>Contact :</strong> {watchedValues.firstName} {watchedValues.lastName}</p>
                        </div>
                      </div>
                    </motion.div>
                  )}

                  {/* Étape 5: Confirmation */}
                  {currentStep === 5 && (
                    <motion.div
                      key="step5"
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5 }}
                      className="text-center py-8"
                    >
                      <motion.div
                        className="w-20 h-20 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-6"
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <Check className="w-10 h-10 text-white" />
                      </motion.div>
                      
                      <h3 className="text-3xl font-bold mb-4">Merci !</h3>
                      <p className="text-lg text-muted-foreground mb-6">
                        Votre demande a été envoyée avec succès.
                      </p>
                      <p className="text-muted-foreground">
                        Je vous recontacte dans les 24h pour discuter de votre projet 
                        et vous proposer une solution sur mesure.
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>

                {/* Navigation */}
                {currentStep < 5 && (
                  <div className="flex justify-between mt-8">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={prevStep}
                      disabled={currentStep === 1}
                      className="flex items-center"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Précédent
                    </Button>

                    {currentStep < 4 ? (
                      <Button
                        type="button"
                        onClick={nextStep}
                        className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600"
                      >
                        Suivant
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    ) : (
                      <Button
                        type="submit"
                        disabled={isSubmitting}
                        className="flex items-center bg-gradient-to-r from-green-500 to-teal-600"
                      >
                        {isSubmitting ? 'Envoi...' : 'Envoyer ma demande'}
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Button>
                    )}
                  </div>
                )}
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}