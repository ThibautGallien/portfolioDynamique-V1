// components/ui/chatbot-estimator-enhanced.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import {
  Send,
  Sparkles,
  Clock,
  CheckCircle,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

// Avatar animé avec différents moods
const AvatarMoods = {
  welcome: "👋",
  excited: "🤩",
  thinking: "🤔",
  confident: "😎",
  celebration: "🎉",
  typing: "💭",
  happy: "😊",
};

// Configuration des étapes et progress
const STEPS = ["Service", "Type", "Détails", "Budget", "Contact", "Devis"];

interface ChatMessage {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
  options?: QuestionOption[];
  inputType?: "text" | "email" | "tel" | "textarea" | "budget";
  step?: string;
  mood?: keyof typeof AvatarMoods;
  hasTypingEffect?: boolean;
  showProgress?: boolean;
}

interface QuestionOption {
  id: string;
  label: string;
  value: any;
  price?: number;
  description?: string;
  icon?: string;
  badge?: string;
  popularity?: number;
}

interface UserData {
  service?: "development" | "copywriting" | "package";
  prestationType?: string;
  projectDetails?: string;
  budget?: string;
  budgetType?: "exact" | "range" | "open" | "low";
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  estimatedPrice?: number;
  breakdown?: any[];
  prestationDetails?: any;
  hasUrgency?: boolean;
  referralSource?: string;
}

// Fonction pour simuler la vitesse de frappe humaine
const typeMessage = (message: string) => {
  return message.length * 50 + Math.random() * 1000;
};

// Détection d'intention
const detectIntent = (message: string) => {
  const urgentKeywords = ["urgent", "rapide", "vite", "pressé", "demain"];
  const budgetKeywords = ["pas cher", "économique", "serré", "budget"];

  if (
    urgentKeywords.some((keyword) => message.toLowerCase().includes(keyword))
  ) {
    return { priority: "high", suggestion: "Express +50%" };
  }

  if (
    budgetKeywords.some((keyword) => message.toLowerCase().includes(keyword))
  ) {
    return { priority: "budget", suggestion: "Version économique disponible" };
  }

  return null;
};

// Configuration des prestations avec social proof
const PRICING_CONFIG = {
  copywriting: {
    "sequence-email": {
      name: "Séquence Email de Vente",
      basePrice: 375,
      minPrice: 250,
      maxPrice: 500,
      timeline: "5-7 jours",
      popularity: 85,
      testimonial: "J'ai doublé mon taux de conversion !",
      testimonialAuthor: "Sarah M., E-commerce",
    },
    newsletter: {
      name: "Newsletter Hebdomadaire",
      basePrice: 400,
      minPrice: 400,
      maxPrice: 400,
      timeline: "Récurrent",
      popularity: 90,
      testimonial: "Mes clients adorent mes newsletters maintenant",
      testimonialAuthor: "Marc D., Coach",
    },
  },
  development: {
    "landing-page": {
      name: "Landing Page Optimisée",
      basePrice: 400,
      minPrice: 300,
      maxPrice: 500,
      timeline: "3-5 jours",
      popularity: 95,
      testimonial: "+300% de conversions en 2 semaines",
      testimonialAuthor: "Emma L., Startup",
    },
    "site-vitrine": {
      name: "Site Vitrine Pro",
      basePrice: 750,
      minPrice: 600,
      maxPrice: 900,
      timeline: "7-10 jours",
      popularity: 75,
      testimonial: "Enfin un site qui me ressemble !",
      testimonialAuthor: "Thomas B., Consultant",
    },
  },
  package: {
    "offre-signature": {
      name: "Offre Signature Complète",
      basePrice: 1200,
      minPrice: 1200,
      maxPrice: 1500,
      timeline: "10-14 jours",
      popularity: 100,
      testimonial: "ROI de 400% en 3 mois",
      testimonialAuthor: "Julie R., Entrepreneur",
    },
  },
};

export function ChatbotEstimatorEnhanced() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState("welcome");
  const [userData, setUserData] = useState<UserData>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const [currentMood, setCurrentMood] =
    useState<keyof typeof AvatarMoods>("welcome");
  const [showConfetti, setShowConfetti] = useState(false);
  const [urgencyTimer, setUrgencyTimer] = useState<number | null>(null);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Message de bienvenue avec animation
    setTimeout(() => {
      setCurrentMood("excited");
      addBotMessage(
        `🎉 Bonjour ! Je suis votre assistant devis intelligent.

✨ En 2 minutes, je vais vous préparer une estimation personnalisée avec :
• Prix détaillé et transparent
• PDF professionnel envoyé par email
• Bonus et garanties inclus
• Conseils d'optimisation

🚀 Plus de 500 entrepreneurs m'ont fait confiance !

Quel service vous intéresse le plus ?`,
        "service",
        [
          {
            id: "development",
            label: "💻 Développement Web",
            value: "development",
            description: "Sites vitrine, landing pages, applications",
            badge: "⭐ Populaire",
            popularity: 85,
          },
          {
            id: "copywriting",
            label: "✍️ Copywriting",
            value: "copywriting",
            description: "Emails, newsletters, pages de vente",
            badge: "🔥 Tendance",
            popularity: 90,
          },
          {
            id: "package",
            label: "🚀 Offre Complète",
            value: "package",
            description: "Site + Copy + Email Marketing",
            badge: "💎 Premium",
            popularity: 95,
          },
        ],
        undefined,
        "excited",
        true
      );
    }, 1000);

    // Timer d'urgence après 2 minutes
    const timer = setTimeout(() => {
      if (!isCompleted && currentStep !== "welcome") {
        setUrgencyTimer(2);
        addBotMessage(
          "⚡ Attention : seulement 2 créneaux disponibles ce mois-ci ! Finalisez votre devis pour réserver votre place.",
          undefined,
          undefined,
          undefined,
          "excited"
        );
      }
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  const addBotMessage = (
    content: string,
    nextStep?: string,
    options?: QuestionOption[],
    inputType?: string,
    mood: keyof typeof AvatarMoods = "confident",
    hasTypingEffect: boolean = false,
    showProgress: boolean = false
  ) => {
    setIsTyping(true);
    setCurrentMood("typing");

    const typingTime = hasTypingEffect ? typeMessage(content) : 1500;

    setTimeout(() => {
      const message: ChatMessage = {
        id: Date.now().toString(),
        type: "bot",
        content,
        timestamp: new Date(),
        options,
        inputType: inputType as any,
        step: nextStep,
        mood,
        hasTypingEffect,
        showProgress,
      };

      setMessages((prev) => [...prev, message]);
      setIsTyping(false);
      setCurrentMood(mood);
      if (nextStep) setCurrentStep(nextStep);
    }, typingTime);
  };

  const addUserMessage = (content: string) => {
    const message: ChatMessage = {
      id: Date.now().toString(),
      type: "user",
      content,
      timestamp: new Date(),
    };
    setMessages((prev) => [...prev, message]);
  };

  const handleOptionSelect = (option: QuestionOption) => {
    addUserMessage(option.label);
    processUserChoice(option);
  };

  const handleTextInput = () => {
    if (!currentInput.trim()) return;

    // Détection d'intention
    const intent = detectIntent(currentInput);
    if (intent) {
      setUserData((prev) => ({
        ...prev,
        hasUrgency: intent.priority === "high",
      }));
    }

    addUserMessage(currentInput);
    processTextInput(currentInput);
    setCurrentInput("");
  };

  const processUserChoice = (option: QuestionOption) => {
    const newUserData = { ...userData };

    switch (currentStep) {
      case "service":
        newUserData.service = option.value;
        setUserData(newUserData);

        if (option.value === "development") {
          addBotMessage(
            `Excellent choix ! Le développement web représente 85% de mes projets.

🎯 Quel type de projet avez-vous en tête ?`,
            "dev-type",
            [
              {
                id: "landing-page",
                label: "🎯 Landing Page Optimisée",
                value: "landing-page",
                description: "Page à Impact - 300-500€ - 3-5 jours",
                badge: "⚡ Rapide",
                popularity: 95,
              },
              {
                id: "site-vitrine",
                label: "🌐 Site Vitrine Pro",
                value: "site-vitrine",
                description: "Présence Pro - 600-900€ - 7-10 jours",
                badge: "⭐ Complet",
                popularity: 75,
              },
            ],
            undefined,
            "confident",
            true,
            true
          );
        } else if (option.value === "copywriting") {
          addBotMessage(
            `Parfait ! Le copywriting booste le ROI de +300% en moyenne.

✍️ Quel type de contenu vous intéresse ?`,
            "copy-type",
            [
              {
                id: "sequence-email",
                label: "📧 Séquence Email de Vente",
                value: "sequence-email",
                description: "La Séquence Augmentée - 250-500€",
                badge: "🔥 Bestseller",
                popularity: 85,
              },
              {
                id: "newsletter",
                label: "📩 Newsletter Hebdomadaire",
                value: "newsletter",
                description: "Le Canal de Confiance - 400€/mois",
                badge: "💎 Récurrent",
                popularity: 90,
              },
            ],
            undefined,
            "excited"
          );
        } else if (option.value === "package") {
          addBotMessage(
            `🚀 L'offre signature ! 95% de mes clients la choisissent.

💎 Voici ce que vous obtenez :`,
            "package-details",
            [
              {
                id: "offre-signature",
                label: "💎 Offre Signature Complète",
                value: "offre-signature",
                description: "Site + Copy + Email - À partir de 1200€",
                badge: "🏆 Bestseller",
                popularity: 100,
              },
            ],
            undefined,
            "celebration"
          );
        }
        break;

      case "dev-type":
      case "copy-type":
      case "package-details":
        newUserData.prestationType = option.value;
        setUserData(newUserData);

        const prestationDetails = getPrestationDetails(
          newUserData.service,
          option.value
        );

        if (prestationDetails) {
          const socialProof = prestationDetails.testimonial
            ? `\n\n💬 "${prestationDetails.testimonial}" - ${prestationDetails.testimonialAuthor}`
            : "";

          addBotMessage(
            `✨ Excellent choix ! "${prestationDetails.name}"

💰 **Prix :** ${prestationDetails.minPrice}€ - ${prestationDetails.maxPrice}€
⏱️ **Délais :** ${prestationDetails.timeline}
📈 **Popularité :** ${prestationDetails.popularity}% de satisfaction${socialProof}

🎯 Pour personnaliser votre devis, parlez-moi de votre projet :`,
            "project-details",
            undefined,
            "textarea",
            "confident",
            true
          );
        }
        break;

      case "budget":
        newUserData.budget = option.value;
        newUserData.budgetType = option.value;
        setUserData(newUserData);
        addBotMessage(
          `Parfait ! J'ai toutes les infos pour calculer votre devis personnalisé.

👤 Vos coordonnées pour recevoir le PDF détaillé :`,
          "contact-name",
          undefined,
          "text",
          "happy"
        );
        break;

      default:
        calculateEstimate(newUserData);
    }
  };

  const processTextInput = (input: string) => {
    const newUserData = { ...userData };

    switch (currentStep) {
      case "project-details":
        newUserData.projectDetails = input;
        setUserData(newUserData);

        // Questions intelligentes basées sur le projet
        const smartQuestions = generateSmartQuestions(newUserData);

        addBotMessage(
          `Merci pour ces détails ! ${smartQuestions}

💰 Quel budget avez-vous prévu ?`,
          "budget",
          [
            {
              id: "budget-exact",
              label: "💰 Budget précis en tête",
              value: "exact",
              description: "Je connais mon budget",
            },
            {
              id: "budget-range",
              label: "💎 Fourchette approximative",
              value: "range",
              description: "J'ai une idée générale",
            },
            {
              id: "budget-open",
              label: "🤔 Selon vos recommandations",
              value: "open",
              description: "Je vous fais confiance",
            },
            {
              id: "budget-low",
              label: "🎯 Budget serré",
              value: "low",
              description: "L'option la plus économique",
            },
          ],
          undefined,
          "thinking"
        );
        break;

      case "contact-name":
        const [firstName, ...lastNameParts] = input.split(" ");
        newUserData.firstName = firstName;
        newUserData.lastName = lastNameParts.join(" ");
        setUserData(newUserData);
        addBotMessage(
          `Ravi de vous rencontrer ${firstName} ! 👋

📧 Votre email pour recevoir le devis :`,
          "contact-email",
          undefined,
          "email",
          "happy"
        );
        break;

      case "contact-email":
        newUserData.email = input;
        setUserData(newUserData);
        addBotMessage(
          `📱 Votre téléphone (optionnel) :`,
          "contact-phone",
          undefined,
          "tel",
          "confident"
        );
        break;

      case "contact-phone":
        newUserData.phone = input;
        setUserData(newUserData);
        calculateEstimate(newUserData);
        break;
    }
  };

  const generateSmartQuestions = (userData: UserData) => {
    if (
      userData.service === "development" &&
      userData.projectDetails?.includes("e-commerce")
    ) {
      return "Je vois que c'est pour de l'e-commerce, parfait !";
    }
    if (userData.projectDetails?.includes("urgent")) {
      return "J'ai noté l'urgence, on peut accélérer le processus.";
    }
    return "Votre projet a l'air très intéressant !";
  };

  const getPrestationDetails = (
    service: string | undefined,
    prestationType: string
  ) => {
    if (!service) return null;

    const serviceKey = service === "package" ? "package" : service;
    return PRICING_CONFIG[serviceKey as keyof typeof PRICING_CONFIG]?.[
      prestationType
    ];
  };

  const calculateEstimate = (finalUserData: UserData) => {
    let estimate = 0;
    let breakdown = [];
    let prestationDetails = getPrestationDetails(
      finalUserData.service,
      finalUserData.prestationType
    );

    if (prestationDetails) {
      estimate = prestationDetails.basePrice;

      // Ajustements selon le budget
      if (finalUserData.budgetType === "low") {
        estimate = prestationDetails.minPrice;
      } else if (finalUserData.budgetType === "open") {
        estimate = prestationDetails.maxPrice;
      }

      // Bonus urgence
      if (finalUserData.hasUrgency) {
        estimate = Math.round(estimate * 1.5);
      }

      breakdown.push({
        item: prestationDetails.name,
        price: estimate,
        description: `Prestation ${prestationDetails.timeline}`,
        urgency: finalUserData.hasUrgency,
      });
    }

    finalUserData.estimatedPrice = estimate;
    finalUserData.breakdown = breakdown;
    finalUserData.prestationDetails = prestationDetails;
    setUserData(finalUserData);

    showFinalEstimate(finalUserData);
  };

  const showFinalEstimate = (finalData: UserData) => {
    setCurrentMood("celebration");
    setShowConfetti(true);

    const details = finalData.prestationDetails;
    const urgencyText = finalData.hasUrgency
      ? "\n⚡ **URGENT** - Livraison express (+50%)"
      : "";

    addBotMessage(
      `🎉 ${finalData.firstName}, votre devis personnalisé est prêt !

💎 **${details?.name}**
💰 **Prix final : ${finalData.estimatedPrice}€**${urgencyText}
⏱️ **Délais : ${details?.timeline}**
📈 **ROI estimé : +300% en 3 mois**

🎁 **BONUS OFFERTS :**
✅ Garantie satisfaction 30 jours
✅ 2 révisions incluses  
✅ Support prioritaire
✅ Formation à la gestion

🛡️ **Garantie résultats :** Si vous ne voyez pas d'amélioration, je corrige gratuitement !

📧 PDF détaillé envoyé dans 30 secondes...`,
      "completed",
      undefined,
      undefined,
      "celebration"
    );

    setIsCompleted(true);
    setTimeout(() => setShowConfetti(false), 5000);

    // Simuler l'envoi d'email
    setTimeout(() => {
      sendQuoteEmail(finalData);
    }, 2000);
  };

  const sendQuoteEmail = async (data: UserData) => {
    try {
      addBotMessage(
        `✅ **Email envoyé avec succès !**

📧 Vérifiez votre boîte de réception : ${data.email}
📱 Je vous appelle dans 24h pour finaliser

🚀 **Prochaines étapes :**
1. Validation du devis (48h)
2. Acompte 30% pour démarrer
3. Livraison selon planning
4. Formation & support

💬 Questions ? Répondez à l'email ou appelez-moi !

**Thibaut** 📞 07 70 17 93 11`,
        "done",
        undefined,
        undefined,
        "happy"
      );
    } catch (error) {
      addBotMessage(
        "❌ Erreur technique. Contactez-moi directement : thibaut.gallien50@gmail.com",
        "error",
        undefined,
        undefined,
        "thinking"
      );
    }
  };

  const getCurrentStepIndex = () => {
    const stepMap: { [key: string]: number } = {
      welcome: 0,
      service: 0,
      "dev-type": 1,
      "copy-type": 1,
      "package-details": 1,
      "project-details": 2,
      budget: 3,
      "contact-name": 4,
      "contact-email": 4,
      "contact-phone": 4,
      completed: 5,
      done: 5,
    };
    return stepMap[currentStep] || 0;
  };

  const progress = ((getCurrentStepIndex() + 1) / STEPS.length) * 100;

  return (
    <Card className="w-full max-w-2xl mx-auto h-[700px] flex flex-col border-0 shadow-2xl bg-background/60 backdrop-blur-sm relative">
      {showConfetti && (
        <div className="absolute inset-0 pointer-events-none">
          {/* Animation confetti simple */}
          <div className="absolute top-0 left-1/2 text-4xl animate-bounce">
            🎉
          </div>
          <div className="absolute top-0 right-1/4 text-3xl animate-bounce delay-100">
            ✨
          </div>
          <div className="absolute top-0 left-1/4 text-3xl animate-bounce delay-200">
            🎊
          </div>
        </div>
      )}

      <CardContent className="flex flex-col h-full p-0">
        {/* Header avec avatar animé */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="flex items-center space-x-3">
            <motion.div
              className="w-12 h-12 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center text-2xl"
              animate={{ scale: isTyping ? [1, 1.1, 1] : 1 }}
              transition={{ duration: 0.5, repeat: isTyping ? Infinity : 0 }}
            >
              {AvatarMoods[currentMood]}
            </motion.div>
            <div>
              <h3 className="font-semibold flex items-center">
                Assistant Devis IA
                <Sparkles className="w-4 h-4 ml-1 text-yellow-500" />
              </h3>
              <p className="text-sm text-muted-foreground flex items-center">
                <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse" />
                En ligne • 500+ devis envoyés
              </p>
            </div>
          </div>

          <div className="flex items-center space-x-2">
            {urgencyTimer && (
              <Badge variant="destructive" className="animate-pulse">
                <AlertTriangle className="w-3 h-3 mr-1" />
                {urgencyTimer} places restantes
              </Badge>
            )}
            <Badge
              variant="secondary"
              className="bg-green-500/20 text-green-700"
            >
              <CheckCircle className="w-3 h-3 mr-1" />
              Gratuit
            </Badge>
          </div>
        </div>

        {/* Progress bar animée */}
        {!isCompleted && (
          <div className="px-4 py-2 bg-muted/20">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs font-medium">
                {STEPS[getCurrentStepIndex()]} ({getCurrentStepIndex() + 1}/
                {STEPS.length})
              </span>
              <span className="text-xs text-muted-foreground">
                {Math.round(progress)}% complété
              </span>
            </div>
            <div className="w-full bg-muted rounded-full h-2">
              <motion.div
                className="h-2 rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-orange-500"
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 0.5, ease: "easeInOut" }}
              />
            </div>
          </div>
        )}

        {/* Messages avec animations */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message, index) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
              >
                <div
                  className={`max-w-[85%] ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-muted border"
                  } rounded-2xl p-4 relative`}
                >
                  {message.type === "bot" && message.mood && (
                    <div className="absolute -top-2 -left-2 text-lg">
                      {AvatarMoods[message.mood]}
                    </div>
                  )}

                  <div className="text-sm whitespace-pre-line leading-relaxed">
                    {message.content}
                  </div>

                  {/* Options avec animations et social proof */}
                  {message.options && (
                    <div className="grid gap-3 mt-4">
                      {message.options.map((option, idx) => (
                        <motion.div
                          key={option.id}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ delay: idx * 0.1 }}
                          whileHover={{ scale: 1.02, x: 5 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <Button
                            variant="outline"
                            onClick={() => handleOptionSelect(option)}
                            className="justify-start text-left h-auto p-4 hover:bg-primary/10 hover:border-primary/50 transition-all duration-300 w-full"
                          >
                            <div className="flex-1">
                              <div className="flex items-center justify-between mb-1">
                                <span className="font-medium">
                                  {option.label}
                                </span>
                                {option.badge && (
                                  <Badge
                                    variant="secondary"
                                    className="text-xs ml-2"
                                  >
                                    {option.badge}
                                  </Badge>
                                )}
                              </div>
                              {option.description && (
                                <div className="text-xs text-muted-foreground">
                                  {option.description}
                                </div>
                              )}
                              {option.popularity && (
                                <div className="flex items-center mt-2">
                                  <TrendingUp className="w-3 h-3 text-green-500 mr-1" />
                                  <span className="text-xs text-green-600">
                                    {option.popularity}% de satisfaction
                                  </span>
                                </div>
                              )}
                            </div>
                          </Button>
                        </motion.div>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator amélioré */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              className="flex justify-start"
            >
              <div className="bg-muted rounded-2xl p-4 flex items-center space-x-2">
                <div className="text-lg">{AvatarMoods.thinking}</div>
                <div className="flex space-x-1">
                  {[0, 1, 2].map((i) => (
                    <motion.div
                      key={i}
                      className="w-2 h-2 bg-blue-500 rounded-full"
                      animate={{ y: [0, -8, 0] }}
                      transition={{
                        duration: 0.6,
                        repeat: Infinity,
                        delay: i * 0.2,
                      }}
                    />
                  ))}
                </div>
                <span className="text-xs text-muted-foreground ml-2">
                  Assistant réfléchit...
                </span>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input zone améliorée */}
        {!isCompleted && (
          <div className="border-t p-4 bg-muted/20">
            <div className="flex space-x-2">
              <div className="flex-1 relative">
                <Input
                  value={currentInput}
                  onChange={(e) => setCurrentInput(e.target.value)}
                  onKeyPress={(e) => e.key === "Enter" && handleTextInput()}
                  placeholder="Tapez votre réponse..."
                  className="flex-1 pr-12"
                />
                <motion.div
                  className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground"
                  animate={{ opacity: currentInput ? 0 : 1 }}
                  transition={{ duration: 0.2 }}
                >
                  <Sparkles className="w-4 h-4" />
                </motion.div>
              </div>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button
                  onClick={handleTextInput}
                  size="icon"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700"
                  disabled={!currentInput.trim()}
                >
                  <Send className="w-4 h-4" />
                </Button>
              </motion.div>
            </div>

            {/* Suggestions intelligentes */}
            {currentStep === "project-details" && (
              <div className="flex flex-wrap gap-2 mt-2">
                {[
                  "Site e-commerce avec paiement",
                  "Landing page pour ma startup",
                  "Newsletter pour mes clients",
                  "Refonte complète de mon site",
                ].map((suggestion, idx) => (
                  <motion.button
                    key={idx}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: idx * 0.1 }}
                    onClick={() => setCurrentInput(suggestion)}
                    className="text-xs px-2 py-1 bg-muted hover:bg-muted/80 rounded-full transition-colors"
                  >
                    {suggestion}
                  </motion.button>
                ))}
              </div>
            )}
          </div>
        )}

        {/* Call to action final */}
        {isCompleted && (
          <motion.div
            className="p-4 bg-gradient-to-r from-green-500/10 to-emerald-500/10 border-t"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <div className="text-center">
              <div className="flex justify-center space-x-4 mb-3">
                <div className="flex items-center text-sm text-green-600">
                  <CheckCircle className="w-4 h-4 mr-1" />
                  Devis envoyé
                </div>
                <div className="flex items-center text-sm text-blue-600">
                  <Clock className="w-4 h-4 mr-1" />
                  Réponse 24h
                </div>
                <div className="flex items-center text-sm text-purple-600">
                  <Shield className="w-4 h-4 mr-1" />
                  Garantie résultats
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="flex items-center"
                  onClick={() => window.open("tel:0770179311")}
                >
                  <Phone className="w-3 h-3 mr-2" />
                  Appeler
                </Button>
                <Button
                  size="sm"
                  className="bg-gradient-to-r from-blue-500 to-purple-600 flex items-center"
                  onClick={() =>
                    window.open("mailto:thibaut.gallien50@gmail.com")
                  }
                >
                  <Mail className="w-3 h-3 mr-2" />
                  Email
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </CardContent>
    </Card>
  );
}
