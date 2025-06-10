// app/api/booking/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const bookingData = await request.json();
    const { type, date, time, firstName, lastName, email, phone, message } =
      bookingData;

    // Validation des données
    if (!type || !date || !time || !firstName || !lastName || !email) {
      return NextResponse.json(
        { error: "Données manquantes" },
        { status: 400 }
      );
    }

    // Déterminer le type de RDV
    const meetingTypes: Record<string, any> = {
      discovery: {
        title: "Appel Découverte",
        duration: "30 min",
        price: "Gratuit",
      },
      consultation: {
        title: "Consultation Technique",
        duration: "60 min",
        price: "80€",
      },
      coffee: {
        title: "Café Virtuel",
        duration: "15 min",
        price: "Gratuit",
      },
    };

    const selectedMeeting = meetingTypes[type];

    // Ici vous pouvez :
    // 1. Sauvegarder en base de données
    // 2. Intégrer avec Google Calendar API
    // 3. Envoyer des emails de confirmation

    // Envoi d'email de confirmation au client
    if (process.env.RESEND_API_KEY) {
      try {
        await resend.emails.send({
          from: "Thibaut Gallien <rdv@thibaut-gallien.com>",
          to: [email],
          subject: `Confirmation de votre ${selectedMeeting.title}`,
          html: `
            <!DOCTYPE html>
            <html>
            <head>
              <meta charset="UTF-8">
              <title>Confirmation de RDV</title>
              <style>
                body { font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; color: #333; }
                .header { background: linear-gradient(135deg, #0066FF, #8B5CF6); padding: 30px; text-align: center; color: white; }
                .content { padding: 30px; }
                .booking-details { background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0; }
                .cta { text-align: center; margin: 30px 0; }
                .button { display: inline-block; background: linear-gradient(135deg, #0066FF, #8B5CF6); color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold; }
              </style>
            </head>
            <body>
              <div class="header">
                <h1>Rendez-vous confirmé !</h1>
                <p>Thibaut Gallien - Développeur Web & Copywriter</p>
              </div>
              
              <div class="content">
                <p>Bonjour ${firstName},</p>
                
                <p>Merci d'avoir réservé un rendez-vous ! Voici les détails de notre rencontre :</p>
                
                <div class="booking-details">
                  <h3>📅 Détails du rendez-vous</h3>
                  <p><strong>Type :</strong> ${selectedMeeting.title} (${selectedMeeting.duration})</p>
                  <p><strong>Date :</strong> ${new Date(
                    date
                  ).toLocaleDateString("fr-FR", {
                    weekday: "long",
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}</p>
                  <p><strong>Heure :</strong> ${time}</p>
                  <p><strong>Prix :</strong> ${selectedMeeting.price}</p>
                </div>
                
                <h3>🎯 Prochaines étapes</h3>
                <ul>
                  <li>Je vous enverrai le lien de visioconférence 24h avant notre RDV</li>
                  <li>Préparez vos questions et objectifs</li>
                  <li>Si vous avez des documents à partager, envoyez-les moi à l'avance</li>
                </ul>
                
                ${
                  message
                    ? `
                <h3>💬 Votre message</h3>
                <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0066FF;">
                  <p><em>"${message}"</em></p>
                </div>
                `
                    : ""
                }
                
                <div class="cta">
                  <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=RDV%20-%20${selectedMeeting.title}&dates=${new Date(`${date}T${time}:00`).toISOString().replace(/[-:]/g, "").split(".")[0]}Z%2F${new Date(new Date(`${date}T${time}:00`).getTime() + 30 * 60000).toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=Rendez-vous%20avec%20Thibaut%20Gallien" class="button" target="_blank">
                    📅 Ajouter à Google Calendar
                  </a>
                </div>
                
                <p>Si vous avez besoin de reporter ou annuler ce rendez-vous, répondez simplement à cet email.</p>
                
                <p>À très bientôt !</p>
                <p><strong>Thibaut Gallien</strong><br>
                Développeur Web & Copywriter<br>
                📧 thibaut.gallien50@gmail.com<br>
                📱 +33 7 70 17 93 11</p>
              </div>
            </body>
            </html>
          `,
        });

        // Email de notification pour vous
        await resend.emails.send({
          from: "Nouveau RDV <rdv@thibaut-gallien.com>",
          to: ["thibaut.gallien50@gmail.com"],
          subject: `🗓️ Nouveau RDV - ${firstName} ${lastName} (${selectedMeeting.title})`,
          html: `
            <h2>Nouveau rendez-vous réservé</h2>
            <div style="background: #f8fafc; padding: 20px; border-radius: 8px; font-family: Arial, sans-serif;">
              <h3>👤 Informations client</h3>
              <p><strong>Nom :</strong> ${firstName} ${lastName}</p>
              <p><strong>Email :</strong> ${email}</p>
              <p><strong>Téléphone :</strong> ${phone || "Non renseigné"}</p>
              
              <h3>📅 Détails du RDV</h3>
              <p><strong>Type :</strong> ${selectedMeeting.title} (${selectedMeeting.duration})</p>
              <p><strong>Date :</strong> ${new Date(date).toLocaleDateString(
                "fr-FR",
                {
                  weekday: "long",
                  year: "numeric",
                  month: "long",
                  day: "numeric",
                }
              )}</p>
              <p><strong>Heure :</strong> ${time}</p>
              
              ${
                message
                  ? `
              <h3>💬 Message du client</h3>
              <div style="background: #f0f9ff; padding: 15px; border-radius: 8px; border-left: 4px solid #0066FF;">
                <p><em>"${message}"</em></p>
              </div>
              `
                  : ""
              }
              
              <p style="margin-top: 20px;">
                <a href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=RDV%20-%20${firstName}%20${lastName}&dates=${new Date(`${date}T${time}:00`).toISOString().replace(/[-:]/g, "").split(".")[0]}Z%2F${new Date(new Date(`${date}T${time}:00`).getTime() + 30 * 60000).toISOString().replace(/[-:]/g, "").split(".")[0]}Z&details=Type:%20${selectedMeeting.title}%0AClient:%20${firstName}%20${lastName}%0AEmail:%20${email}%0ATel:%20${phone}" 
                   style="background: #0066FF; color: white; padding: 10px 20px; text-decoration: none; border-radius: 5px;">
                  Ajouter à Google Calendar
                </a>
              </p>
            </div>
          `,
        });
      } catch (emailError) {
        console.error("Erreur envoi email:", emailError);
        // On continue même si l'email échoue
      }
    }

    // Ici vous pourriez aussi intégrer avec Google Calendar API
    // await createGoogleCalendarEvent(bookingData);

    return NextResponse.json({
      success: true,
      message: "Rendez-vous confirmé",
      booking: {
        type: selectedMeeting.title,
        date: new Date(date).toLocaleDateString("fr-FR"),
        time: time,
        client: `${firstName} ${lastName}`,
      },
    });
  } catch (error) {
    console.error("Erreur booking:", error);
    return NextResponse.json(
      { error: "Erreur serveur lors de la réservation" },
      { status: 500 }
    );
  }
}

// Optionnel : GET pour récupérer les créneaux disponibles
export async function GET() {
  // Ici vous pourriez récupérer les créneaux depuis votre calendrier Google
  // ou depuis une base de données

  const availableSlots = {
    "2024-12-16": ["09:00", "10:30", "14:00", "15:30"],
    "2024-12-17": ["09:30", "11:00", "14:30", "16:00"],
    "2024-12-18": ["09:00", "10:00", "13:30", "15:00"],
    "2024-12-19": ["10:30", "14:00", "15:30", "17:00"],
    "2024-12-20": ["09:00", "11:30", "14:00", "16:30"],
  };

  return NextResponse.json({ availableSlots });
}
