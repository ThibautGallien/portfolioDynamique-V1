// components/ui/booking-system.tsx
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  Clock,
  User,
  Mail,
  Phone,
  MessageCircle,
  Video,
  Coffee,
  CheckCircle,
  ArrowRight,
  ArrowLeft,
} from "lucide-react";

const meetingTypes = [
  {
    id: "discovery",
    title: "Appel Découverte",
    duration: "30 min",
    price: "Gratuit",
    icon: MessageCircle,
    description: "Discutons de votre projet et voir comment je peux vous aider",
    color: "from-blue-500 to-cyan-500",
  },
  {
    id: "consultation",
    title: "Consultation Technique",
    duration: "60 min",
    price: "80€",
    icon: Video,
    description: "Audit approfondi et stratégie détaillée pour votre projet",
    color: "from-purple-500 to-pink-500",
  },
  {
    id: "coffee",
    title: "Café Virtuel",
    duration: "15 min",
    price: "Gratuit",
    icon: Coffee,
    description: "Discussion informelle pour faire connaissance",
    color: "from-orange-500 to-red-500",
  },
];

// Créneaux disponibles (à connecter avec votre calendrier)
const availableSlots: Record<string, string[]> = {
  "2024-12-16": ["09:00", "10:30", "14:00", "15:30"],
  "2024-12-17": ["09:30", "11:00", "14:30", "16:00"],
  "2024-12-18": ["09:00", "10:00", "13:30", "15:00"],
  "2024-12-19": ["10:30", "14:00", "15:30", "17:00"],
  "2024-12-20": ["09:00", "11:30", "14:00", "16:30"],
};

interface FormData {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  message: string;
}

export function BookingSystem() {
  const [currentStep, setCurrentStep] = useState(1);
  const [selectedType, setSelectedType] = useState("");
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const nextWeekDays = Array.from({ length: 5 }, (_, i) => {
    const date = new Date();
    date.setDate(date.getDate() + i + 1);
    return {
      date: date.toISOString().split("T")[0],
      day: date.toLocaleDateString("fr-FR", { weekday: "short" }),
      dayNumber: date.getDate(),
      month: date.toLocaleDateString("fr-FR", { month: "short" }),
    };
  });

  const handleTypeSelect = (type: string) => {
    setSelectedType(type);
    setCurrentStep(2);
  };

  const handleDateSelect = (date: string) => {
    setSelectedDate(date);
  };

  const handleTimeSelect = (time: string) => {
    setSelectedTime(time);
    setCurrentStep(3);
  };

  const handleFormSubmit = async () => {
    // Validation simple
    if (!formData.firstName || !formData.lastName || !formData.email) {
      alert("Veuillez remplir tous les champs obligatoires");
      return;
    }

    const bookingData = {
      type: selectedType,
      date: selectedDate,
      time: selectedTime,
      ...formData,
    };

    try {
      // Appel API pour sauvegarder le RDV
      const response = await fetch("/api/booking", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(bookingData),
      });

      if (response.ok) {
        setIsSubmitted(true);
        setCurrentStep(4);
      } else {
        alert("Erreur lors de la réservation. Veuillez réessayer.");
      }
    } catch (error) {
      console.error("Erreur lors de la réservation:", error);
      alert("Erreur lors de la réservation. Veuillez réessayer.");
    }
  };

  const generateGoogleCalendarLink = () => {
    const selectedMeeting = meetingTypes.find((m) => m.id === selectedType);
    const startDate = new Date(`${selectedDate}T${selectedTime}:00`);
    const endDate = new Date(
      startDate.getTime() +
        (selectedMeeting?.duration === "60 min" ? 60 : 30) * 60000
    );

    const formatDate = (date: Date) =>
      date.toISOString().replace(/[-:]/g, "").split(".")[0] + "Z";

    const params = new URLSearchParams({
      action: "TEMPLATE",
      text: `Rendez-vous - ${selectedMeeting?.title}`,
      dates: `${formatDate(startDate)}/${formatDate(endDate)}`,
      details: `Rendez-vous avec ${formData.firstName} ${formData.lastName}\n\nType: ${selectedMeeting?.title}\nEmail: ${formData.email}\nTéléphone: ${formData.phone}\n\nMessage: ${formData.message}`,
      location: "Visioconférence (lien à envoyer)",
    });

    return `https://calendar.google.com/calendar/render?${params}`;
  };

  const totalSteps = 3;
  const progress = (currentStep / totalSteps) * 100;

  return (
    <div className="max-w-4xl mx-auto">
      <Card className="border-0 shadow-2xl bg-background/60 backdrop-blur-sm">
        <CardContent className="p-8">
          {/* Progress Bar */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-4">
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
          </div>

          <AnimatePresence mode="wait">
            {/* Étape 1: Choix du type de RDV */}
            {currentStep === 1 && (
              <motion.div
                key="step1"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Quel type de rendez-vous vous intéresse ?
                  </h2>
                  <p className="text-muted-foreground">
                    Choisissez le format qui correspond le mieux à vos besoins
                  </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {meetingTypes.map((type) => {
                    const Icon = type.icon;
                    return (
                      <motion.div
                        key={type.id}
                        whileHover={{ scale: 1.02, y: -5 }}
                        whileTap={{ scale: 0.98 }}
                        onClick={() => handleTypeSelect(type.id)}
                        className="cursor-pointer"
                      >
                        <Card className="h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50">
                          <CardContent className="p-6 text-center">
                            <div
                              className={`w-16 h-16 rounded-full bg-gradient-to-r ${type.color} flex items-center justify-center mx-auto mb-4`}
                            >
                              <Icon className="w-8 h-8 text-white" />
                            </div>

                            <h3 className="text-xl font-bold mb-2">
                              {type.title}
                            </h3>

                            <div className="flex justify-center gap-2 mb-4">
                              <Badge variant="secondary">
                                <Clock className="w-3 h-3 mr-1" />
                                {type.duration}
                              </Badge>
                              <Badge
                                variant={
                                  type.price === "Gratuit"
                                    ? "default"
                                    : "outline"
                                }
                              >
                                {type.price}
                              </Badge>
                            </div>

                            <p className="text-sm text-muted-foreground">
                              {type.description}
                            </p>
                          </CardContent>
                        </Card>
                      </motion.div>
                    );
                  })}
                </div>
              </motion.div>
            )}

            {/* Étape 2: Choix de la date et heure */}
            {currentStep === 2 && (
              <motion.div
                key="step2"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.3 }}
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">
                    Choisissez votre créneau
                  </h2>
                  <p className="text-muted-foreground">
                    Sélectionnez le jour et l'heure qui vous conviennent
                  </p>
                </div>

                {/* Sélection de la date */}
                <div className="grid grid-cols-5 gap-4 mb-8">
                  {nextWeekDays.map((day) => (
                    <motion.div
                      key={day.date}
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleDateSelect(day.date)}
                      className={`p-4 rounded-lg border-2 cursor-pointer text-center transition-all ${
                        selectedDate === day.date
                          ? "border-primary bg-primary/10"
                          : "border-border hover:border-primary/50"
                      }`}
                    >
                      <div className="text-sm text-muted-foreground">
                        {day.day}
                      </div>
                      <div className="text-2xl font-bold">{day.dayNumber}</div>
                      <div className="text-sm text-muted-foreground">
                        {day.month}
                      </div>
                    </motion.div>
                  ))}
                </div>

                {/* Sélection de l'heure */}
                {selectedDate && (
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <h3 className="text-xl font-semibold mb-4 text-center">
                      Créneaux disponibles
                    </h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {(availableSlots[selectedDate] || []).map((time) => (
                        <Button
                          key={time}
                          variant={
                            selectedTime === time ? "default" : "outline"
                          }
                          onClick={() => handleTimeSelect(time)}
                          className="h-12"
                        >
                          <Clock className="w-4 h-4 mr-2" />
                          {time}
                        </Button>
                      ))}
                    </div>
                  </motion.div>
                )}

                <div className="flex justify-between mt-8">
                  <Button
                    variant="outline"
                    onClick={() => setCurrentStep(1)}
                    className="flex items-center"
                  >
                    <ArrowLeft className="w-4 h-4 mr-2" />
                    Retour
                  </Button>
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
              >
                <div className="text-center mb-8">
                  <h2 className="text-3xl font-bold mb-4">Vos informations</h2>
                  <p className="text-muted-foreground">
                    Pour finaliser votre réservation
                  </p>
                </div>

                {/* Récapitulatif */}
                <div className="bg-muted/30 rounded-lg p-6 mb-8">
                  <h3 className="font-semibold mb-4">
                    Récapitulatif de votre réservation :
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
                    <div>
                      <strong>Type :</strong>{" "}
                      {meetingTypes.find((m) => m.id === selectedType)?.title}
                    </div>
                    <div>
                      <strong>Date :</strong>{" "}
                      {new Date(selectedDate).toLocaleDateString("fr-FR")}
                    </div>
                    <div>
                      <strong>Heure :</strong> {selectedTime}
                    </div>
                  </div>
                </div>

                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        <User className="w-4 h-4 inline mr-2" />
                        Prénom *
                      </label>
                      <Input
                        required
                        value={formData.firstName}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            firstName: e.target.value,
                          })
                        }
                        placeholder="Votre prénom"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium mb-2">
                        Nom *
                      </label>
                      <Input
                        required
                        value={formData.lastName}
                        onChange={(e) =>
                          setFormData({ ...formData, lastName: e.target.value })
                        }
                        placeholder="Votre nom"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Mail className="w-4 h-4 inline mr-2" />
                      Email *
                    </label>
                    <Input
                      type="email"
                      required
                      value={formData.email}
                      onChange={(e) =>
                        setFormData({ ...formData, email: e.target.value })
                      }
                      placeholder="votre@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      <Phone className="w-4 h-4 inline mr-2" />
                      Téléphone
                    </label>
                    <Input
                      type="tel"
                      value={formData.phone}
                      onChange={(e) =>
                        setFormData({ ...formData, phone: e.target.value })
                      }
                      placeholder="06 12 34 56 78"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">
                      Message (optionnel)
                    </label>
                    <Textarea
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Décrivez brièvement votre projet ou vos questions..."
                      rows={4}
                    />
                  </div>

                  <div className="flex justify-between">
                    <Button
                      type="button"
                      variant="outline"
                      onClick={() => setCurrentStep(2)}
                      className="flex items-center"
                    >
                      <ArrowLeft className="w-4 h-4 mr-2" />
                      Retour
                    </Button>

                    <Button
                      type="button"
                      className="flex items-center bg-gradient-to-r from-blue-500 to-purple-600"
                      disabled={isSubmitted}
                      onClick={handleFormSubmit}
                    >
                      {isSubmitted ? "Confirmation..." : "Confirmer le RDV"}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </div>
                </div>
              </motion.div>
            )}

            {/* Étape 4: Confirmation */}
            {currentStep === 4 && (
              <motion.div
                key="step4"
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
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>

                <h3 className="text-3xl font-bold mb-4">
                  Rendez-vous confirmé !
                </h3>

                <div className="bg-muted/30 rounded-lg p-6 mb-6 max-w-md mx-auto">
                  <p className="font-semibold mb-2">
                    {meetingTypes.find((m) => m.id === selectedType)?.title}
                  </p>
                  <p className="text-muted-foreground">
                    📅{" "}
                    {new Date(selectedDate).toLocaleDateString("fr-FR", {
                      weekday: "long",
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })}
                  </p>
                  <p className="text-muted-foreground">🕒 {selectedTime}</p>
                </div>

                <p className="text-muted-foreground mb-6">
                  Un email de confirmation avec le lien de visioconférence vous
                  sera envoyé à <strong>{formData.email}</strong>
                </p>

                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    onClick={() =>
                      window.open(generateGoogleCalendarLink(), "_blank")
                    }
                    variant="outline"
                    className="flex items-center"
                  >
                    <Calendar className="w-4 h-4 mr-2" />
                    Ajouter à Google Calendar
                  </Button>

                  <Button
                    onClick={() => {
                      setCurrentStep(1);
                      setSelectedType("");
                      setSelectedDate("");
                      setSelectedTime("");
                      setFormData({
                        firstName: "",
                        lastName: "",
                        email: "",
                        phone: "",
                        message: "",
                      });
                      setIsSubmitted(false);
                    }}
                    className="bg-gradient-to-r from-blue-500 to-purple-600"
                  >
                    Prendre un autre RDV
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </CardContent>
      </Card>
    </div>
  );
}
