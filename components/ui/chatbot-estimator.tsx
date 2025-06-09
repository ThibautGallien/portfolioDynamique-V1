// components/ui/chatbot-estimator.tsx
"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Bot, Send, Sparkles } from "lucide-react";

interface ChatMessage {
  id: string;
  type: "bot" | "user";
  content: string;
  timestamp: Date;
  options?: QuestionOption[];
  inputType?: "text" | "email" | "tel" | "textarea" | "budget";
  step?: string;
}

interface QuestionOption {
  id: string;
  label: string;
  value: any;
  price?: number;
  description?: string;
  icon?: any;
}

interface UserData {
  service?: "dev" | "copy";
  prestationType?: string;
  features?: string[];
  hasDesign?: boolean;
  hasSite?: boolean;
  budget?: string;
  projectDetails?: string;
  offer?: string;
  product?: string;
  copyServices?: string[];
  firstName?: string;
  lastName?: string;
  email?: string;
  phone?: string;
  estimatedPrice?: number;
  breakdown?: any[];
}

const PRICING = {
  dev: {
    "site-vitrine": { base: 750, min: 600, max: 900 },
    "landing-page": { base: 400, min: 300, max: 500 },
    refonte: { base: 600, min: 400, max: 800 },
    maintenance: { base: 400, min: 300, max: 500 },
  },
  copy: {
    "page-vente": { base: 1150, min: 800, max: 1500 },
    "sequence-email": { base: 375, min: 250, max: 500 },
    newsletter: { base: 50, min: 50, max: 50 },
  },
  packs: {
    "starter-local": { base: 600, min: 600, max: 600 },
    "conversion-pro": { base: 1150, min: 1000, max: 1300 },
    "email-boost": { base: 450, min: 450, max: 450 },
  },
};

const MESSAGES = {
  fr: {
    welcome:
      "👋 Salut ! Je suis votre assistant devis. En quelques questions, je vais vous préparer une estimation personnalisée. C'est parti !",
    serviceQuestion: "Quel type de service vous intéresse ?",
    thankYou:
      "🎉 Parfait ! Votre devis personnalisé est prêt. Vous le recevrez par email dans quelques instants.",
    emailSent: "📧 Un PDF détaillé avec votre estimation vient d'être envoyé !",
  },
};

export function ChatbotEstimator() {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [currentInput, setCurrentInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [currentStep, setCurrentStep] = useState("welcome");
  const [userData, setUserData] = useState<UserData>({});
  const [isCompleted, setIsCompleted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    // Message de bienvenue
    setTimeout(() => {
      addBotMessage(MESSAGES.fr.welcome, "service");
    }, 1000);
  }, []);

  const addBotMessage = (
    content: string,
    nextStep?: string,
    options?: QuestionOption[],
    inputType?: string
  ) => {
    setIsTyping(true);
    setTimeout(() => {
      const message: ChatMessage = {
        id: Date.now().toString(),
        type: "bot",
        content,
        timestamp: new Date(),
        options,
        inputType: inputType as any,
        step: nextStep,
      };
      setMessages((prev) => [...prev, message]);
      setIsTyping(false);
      if (nextStep) setCurrentStep(nextStep);
    }, 1500);
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

        if (option.value === "dev") {
          addBotMessage(
            "Parfait ! Quel type de projet de développement avez-vous en tête ?",
            "dev-type",
            [
              {
                id: "site-vitrine",
                label: "🌐 Site vitrine (1-5 pages)",
                value: "site-vitrine",
                description: "Site professionnel avec CMS",
              },
              {
                id: "landing-page",
                label: "🎯 Landing Page",
                value: "landing-page",
                description: "Page unique optimisée conversion",
              },
              {
                id: "refonte",
                label: "🔄 Refonte de site",
                value: "refonte",
                description: "Amélioration d'un site existant",
              },
              {
                id: "pack-starter",
                label: "📦 Pack Starter Local",
                value: "starter-local",
                description: "Site 3 pages clé en main",
              },
              {
                id: "pack-conversion",
                label: "🚀 Pack Conversion Pro",
                value: "conversion-pro",
                description: "Landing + Page de vente",
              },
            ]
          );
        } else if (option.value === "copy") {
          addBotMessage(
            "Excellent ! Quel type de copywriting vous intéresse ?",
            "copy-type",
            [
              {
                id: "page-vente",
                label: "💰 Page de vente longue",
                value: "page-vente",
                description: "Recherche + Big Idea + Structure",
              },
              {
                id: "sequence-email",
                label: "📧 Séquence email (5-7 mails)",
                value: "sequence-email",
                description: "Storytelling + Relance + CTA",
              },
              {
                id: "newsletter",
                label: "📩 Newsletter à l'unité",
                value: "newsletter",
                description: "Mail de contenu ou vente",
              },
              {
                id: "pack-email",
                label: "📦 Pack Email Boost",
                value: "email-boost",
                description: "Séquence complète",
              },
            ]
          );
        }
        break;

      case "dev-type":
        newUserData.prestationType = option.value;
        setUserData(newUserData);

        if (option.value === "site-vitrine") {
          addBotMessage(
            "Combien de pages souhaitez-vous pour votre site vitrine ?",
            "dev-pages",
            [
              {
                id: "3-pages",
                label: "3 pages",
                value: 3,
                description: "Accueil + À propos + Contact",
              },
              {
                id: "4-pages",
                label: "4 pages",
                value: 4,
                description: "+ Services ou Portfolio",
              },
              {
                id: "5-pages",
                label: "5 pages",
                value: 5,
                description: "Site complet avec blog",
              },
            ]
          );
        } else if (option.value === "landing-page") {
          addBotMessage(
            "Souhaitez-vous inclure le copywriting de votre landing page ?",
            "dev-copywriting",
            [
              {
                id: "copy-yes",
                label: "✅ Oui, avec copywriting",
                value: true,
                description: "+150€ - Textes optimisés conversion",
              },
              {
                id: "copy-no",
                label: "❌ Non, j'ai déjà les textes",
                value: false,
                description: "Intégration uniquement",
              },
            ]
          );
        } else {
          addBotMessage(
            "Avez-vous déjà un design ou un site existant ?",
            "dev-existing",
            [
              {
                id: "has-design",
                label: "🎨 J'ai un design",
                value: "design",
                description: "Maquettes Figma/Sketch existantes",
              },
              {
                id: "has-site",
                label: "🌐 J'ai un site à refaire",
                value: "site",
                description: "Site existant à améliorer",
              },
              {
                id: "from-scratch",
                label: "✨ Partir de zéro",
                value: "scratch",
                description: "Création complète",
              },
            ]
          );
        }
        break;

      case "copy-type":
        newUserData.prestationType = option.value;
        setUserData(newUserData);

        if (option.value === "page-vente") {
          addBotMessage(
            "Parlez-moi de votre offre/produit à vendre :",
            "copy-offer",
            undefined,
            "textarea"
          );
        } else if (option.value === "sequence-email") {
          addBotMessage(
            "Quel est l'objectif de votre séquence email ?",
            "copy-email-goal",
            [
              {
                id: "onboarding",
                label: "👋 Onboarding clients",
                value: "onboarding",
                description: "Accueillir nouveaux clients",
              },
              {
                id: "nurturing",
                label: "🌱 Nurturing prospects",
                value: "nurturing",
                description: "Éduquer avant vente",
              },
              {
                id: "selling",
                label: "💸 Vendre un produit",
                value: "selling",
                description: "Séquence de vente directe",
              },
              {
                id: "retention",
                label: "💝 Fidélisation",
                value: "retention",
                description: "Garder clients actifs",
              },
            ]
          );
        } else {
          addBotMessage(
            "Quel budget avez-vous prévu pour ce projet ?",
            "budget"
          );
        }
        break;

      // Continuer selon le flow...
      default:
        calculateEstimate(newUserData);
    }
  };

  const processTextInput = (input: string) => {
    const newUserData = { ...userData };

    switch (currentStep) {
      case "copy-offer":
        newUserData.offer = input;
        setUserData(newUserData);
        addBotMessage(
          "Quel budget avez-vous prévu pour ce projet ?",
          "budget",
          [
            { id: "budget-low", label: "💰 500-1000€", value: "500-1000" },
            { id: "budget-mid", label: "💎 1000-2000€", value: "1000-2000" },
            { id: "budget-high", label: "🚀 2000€+", value: "2000+" },
            {
              id: "budget-open",
              label: "🤔 Selon vos recommandations",
              value: "open",
            },
          ]
        );
        break;

      case "budget":
        newUserData.budget = input;
        setUserData(newUserData);
        addBotMessage(
          "Parfait ! Maintenant, vos coordonnées pour recevoir le devis :",
          "contact-name",
          undefined,
          "text"
        );
        break;

      case "contact-name":
        const [firstName, ...lastNameParts] = input.split(" ");
        newUserData.firstName = firstName;
        newUserData.lastName = lastNameParts.join(" ");
        setUserData(newUserData);
        addBotMessage("Votre email :", "contact-email", undefined, "email");
        break;

      case "contact-email":
        newUserData.email = input;
        setUserData(newUserData);
        addBotMessage(
          "Votre téléphone (optionnel) :",
          "contact-phone",
          undefined,
          "tel"
        );
        break;

      case "contact-phone":
        newUserData.phone = input;
        setUserData(newUserData);
        calculateEstimate(newUserData);
        break;
    }
  };

  const calculateEstimate = (finalUserData: UserData) => {
    let estimate = 0;
    let breakdown = [];

    // Logique de calcul selon le type de prestation
    const { service, prestationType } = finalUserData;

    if (service === "dev" && prestationType) {
      const pricing =
        PRICING.dev[prestationType as keyof typeof PRICING.dev] ||
        PRICING.packs[prestationType as keyof typeof PRICING.packs];
      if (pricing) {
        estimate = pricing.base;
        breakdown.push({
          item: `${prestationType.replace("-", " ").toUpperCase()}`,
          price: pricing.base,
          description: "Développement complet avec responsive design",
        });
      }
    } else if (service === "copy" && prestationType) {
      const pricing =
        PRICING.copy[prestationType as keyof typeof PRICING.copy] ||
        PRICING.packs[prestationType as keyof typeof PRICING.packs];
      if (pricing) {
        estimate = pricing.base;
        breakdown.push({
          item: `${prestationType.replace("-", " ").toUpperCase()}`,
          price: pricing.base,
          description: "Copywriting optimisé conversion",
        });
      }
    }

    finalUserData.estimatedPrice = estimate;
    finalUserData.breakdown = breakdown;
    setUserData(finalUserData);

    // Afficher le résultat
    showFinalEstimate(finalUserData);
  };

  const showFinalEstimate = (finalData: UserData) => {
    addBotMessage(
      `🎉 Votre devis personnalisé est prêt ! 
      
Estimation: **${finalData.estimatedPrice}€**

📧 Je vous envoie le PDF détaillé par email avec :
• Détail des prestations
• Planning indicatif  
• Conditions de réalisation
• Mes coordonnées

Merci pour votre confiance ! 🚀`,
      "completed"
    );
    setIsCompleted(true);

    // Simuler l'envoi d'email
    setTimeout(() => {
      sendQuoteEmail(finalData);
    }, 2000);
  };

  const sendQuoteEmail = async (data: UserData) => {
    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          userData: data,
          language: "fr", // À adapter selon la langue actuelle
        }),
      });

      if (response.ok) {
        addBotMessage(
          "✅ Email envoyé avec succès ! Vérifiez votre boîte de réception (et vos spams).",
          "done"
        );
      } else {
        addBotMessage(
          "❌ Erreur lors de l'envoi. Contactez-moi directement à thibaut.gallien50@gmail.com",
          "error"
        );
      }
    } catch (error) {
      console.error("Erreur envoi email:", error);
      addBotMessage(
        "❌ Erreur technique. Contactez-moi directement à thibaut.gallien50@gmail.com",
        "error"
      );
    }
  };

  return (
    <Card className="w-full max-w-2xl mx-auto h-[600px] flex flex-col border-0 shadow-2xl bg-background/60 backdrop-blur-sm">
      <CardContent className="flex flex-col h-full p-0">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b bg-gradient-to-r from-blue-500/10 to-purple-500/10">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-r from-blue-500 to-purple-600 flex items-center justify-center">
              <Bot className="w-6 h-6 text-white" />
            </div>
            <div>
              <h3 className="font-semibold">Assistant Devis</h3>
              <p className="text-sm text-muted-foreground">En ligne</p>
            </div>
          </div>
          <Badge variant="secondary" className="bg-green-500/20 text-green-700">
            <Sparkles className="w-3 h-3 mr-1" />
            Gratuit
          </Badge>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          <AnimatePresence>
            {messages.map((message) => (
              <motion.div
                key={message.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className={`flex ${
                  message.type === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`max-w-[80%] ${
                    message.type === "user"
                      ? "bg-gradient-to-r from-blue-500 to-purple-600 text-white"
                      : "bg-muted"
                  } rounded-2xl p-4`}
                >
                  <p className="text-sm whitespace-pre-line">
                    {message.content}
                  </p>

                  {/* Options de réponse */}
                  {message.options && (
                    <div className="grid gap-2 mt-4">
                      {message.options.map((option) => (
                        <Button
                          key={option.id}
                          variant="outline"
                          size="sm"
                          onClick={() => handleOptionSelect(option)}
                          className="justify-start text-left h-auto p-3 hover:bg-primary/10"
                        >
                          <div>
                            <div className="font-medium">{option.label}</div>
                            {option.description && (
                              <div className="text-xs text-muted-foreground mt-1">
                                {option.description}
                              </div>
                            )}
                          </div>
                        </Button>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </AnimatePresence>

          {/* Typing indicator */}
          {isTyping && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="flex justify-start"
            >
              <div className="bg-muted rounded-2xl p-4">
                <div className="flex space-x-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-full animate-bounce" />
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.1s" }}
                  />
                  <div
                    className="w-2 h-2 bg-gray-400 rounded-full animate-bounce"
                    style={{ animationDelay: "0.2s" }}
                  />
                </div>
              </div>
            </motion.div>
          )}

          <div ref={messagesEndRef} />
        </div>

        {/* Input zone */}
        {!isCompleted && (
          <div className="border-t p-4">
            <div className="flex space-x-2">
              <Input
                value={currentInput}
                onChange={(e) => setCurrentInput(e.target.value)}
                onKeyPress={(e) => e.key === "Enter" && handleTextInput()}
                placeholder="Tapez votre réponse..."
                className="flex-1"
              />
              <Button
                onClick={handleTextInput}
                size="icon"
                className="bg-gradient-to-r from-blue-500 to-purple-600"
              >
                <Send className="w-4 h-4" />
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
