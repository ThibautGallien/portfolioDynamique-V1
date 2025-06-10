// Supprimer l'ancienne configuration PRICING
// Elle est maintenant dans PRICING_CONFIG importé depuis pricing-config.ts// components/ui/chatbot-estimator.tsx
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
  service?: "development" | "copywriting" | "package";
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
  prestationDetails?: any;
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

import { PRICING_CONFIG, CHATBOT_QUESTIONS } from "@/lib/pricing-config";

const MESSAGES = CHATBOT_QUESTIONS;

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
    // Message de bienvenue avec options de service
    setTimeout(() => {
      addBotMessage(MESSAGES.fr.welcome, "service", MESSAGES.fr.serviceOptions);
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

        if (option.value === "development") {
          addBotMessage(
            "Parfait ! Quel type de projet de développement avez-vous en tête ?",
            "dev-type",
            MESSAGES.fr.developmentOptions
          );
        } else if (option.value === "copywriting") {
          addBotMessage(
            "Excellent ! Quel type de copywriting vous intéresse ?",
            "copy-type",
            MESSAGES.fr.copywritingOptions
          );
        } else if (option.value === "package") {
          addBotMessage(
            "Parfait choix ! Notre offre signature comprend tout ce dont vous avez besoin :",
            "package-type",
            MESSAGES.fr.packageOptions
          );
        }
        break;

      case "dev-type":
      case "copy-type":
      case "package-type":
        newUserData.prestationType = option.value;
        setUserData(newUserData);

        // Récupérer les détails de la prestation
        const serviceType =
          newUserData.service === "package" ? "packages" : newUserData.service;
        const prestationDetails =
          PRICING_CONFIG[serviceType as keyof typeof PRICING_CONFIG]?.[
            option.value
          ];

        if (prestationDetails) {
          addBotMessage(
            `Excellent choix ! Voici ce qui est inclus dans "${prestationDetails.name}" :

💰 **Prix :** ${prestationDetails.minPrice}€ - ${prestationDetails.maxPrice}€
⏱️ **Délais :** ${prestationDetails.timeline}

✅ **Prestations incluses :**
${prestationDetails.includes
  .slice(0, 3)
  .map((item: string) => `• ${item}`)
  .join("\n")}
... et bien plus encore !

Pour personnaliser votre devis, parlez-moi de votre projet :`,
            "project-details",
            undefined,
            "textarea"
          );
        }
        break;

      case "project-details":
        newUserData.projectDetails = currentInput;
        setUserData(newUserData);
        addBotMessage(
          "Quel budget avez-vous prévu pour ce projet ?",
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
              description: "Je cherche l'option la plus économique",
            },
          ]
        );
        break;

      case "budget":
        newUserData.budget = option.value;
        setUserData(newUserData);
        addBotMessage(
          "Parfait ! Maintenant vos coordonnées pour recevoir le devis détaillé :",
          "contact-name",
          undefined,
          "text"
        );
        break;

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
    let prestationDetails = null;

    const { service, prestationType } = finalUserData;

    // Récupérer les détails de la prestation
    if (service === "package") {
      prestationDetails =
        PRICING_CONFIG.packages[
          prestationType as keyof typeof PRICING_CONFIG.packages
        ];
    } else {
      const serviceKey = service as keyof typeof PRICING_CONFIG;
      prestationDetails =
        PRICING_CONFIG[serviceKey]?.[prestationType as string];
    }

    if (prestationDetails) {
      estimate = prestationDetails.basePrice;

      breakdown.push({
        item: prestationDetails.name,
        price: prestationDetails.basePrice,
        description: prestationDetails.description,
        includes: prestationDetails.includes,
        bonus: prestationDetails.bonus,
        guarantee: prestationDetails.guarantee,
        timeline: prestationDetails.timeline,
      });

      // Ajustements selon le budget
      if (finalUserData.budget === "low") {
        estimate = prestationDetails.minPrice;
        breakdown[0].price = prestationDetails.minPrice;
        breakdown[0].note = "Version optimisée selon votre budget";
      } else if (
        finalUserData.budget === "exact" ||
        finalUserData.budget === "range"
      ) {
        // Garder le prix de base
      } else if (finalUserData.budget === "open") {
        estimate = prestationDetails.maxPrice;
        breakdown[0].price = prestationDetails.maxPrice;
        breakdown[0].note = "Version premium avec toutes les options";
      }
    }

    finalUserData.estimatedPrice = estimate;
    finalUserData.breakdown = breakdown;
    finalUserData.prestationDetails = prestationDetails;
    setUserData(finalUserData);

    showFinalEstimate(finalUserData);
  };

  const showFinalEstimate = (finalData: UserData) => {
    const details = finalData.prestationDetails;

    addBotMessage(
      `🎉 Votre devis personnalisé est prêt !

💰 **${details?.name}**
**Prix : ${finalData.estimatedPrice}€**
⏱️ **Délais : ${details?.timeline}**

✅ **Inclus dans votre prestation :**
${details?.includes
  .slice(0, 4)
  .map((item: string) => `• ${item}`)
  .join("\n")}
... et ${details?.includes.length - 4 > 0 ? `${details.includes.length - 4} autres prestations` : "bien plus encore"} !

🎁 **Bonus offerts :**
${details?.bonus.map((item: string) => `• ${item}`).join("\n")}

🛡️ **Garantie :** ${details?.guarantee}

📧 Je vous envoie le PDF détaillé par email avec le breakdown complet !`,
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
                className={`flex ${message.type === "user" ? "justify-end" : "justify-start"}`}
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
