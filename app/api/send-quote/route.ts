// app/api/send-quote/route.ts
import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";
import { QuoteEmailTemplate } from "@/components/emails/quote-email-template";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const { userData, language = "fr" } = await request.json();

    // Validation des données
    if (!userData.email || !userData.firstName) {
      return NextResponse.json(
        { error: "Email et prénom requis" },
        { status: 400 }
      );
    }

    // Génération du contenu du devis selon la langue
    const quoteContent = generateQuoteContent(userData, language);

    // Envoi de l'email avec Resend
    const { data, error } = await resend.emails.send({
      from: "Thibaut Gallien <contact@thibaut-gallien.com>",
      to: [userData.email],
      subject: getEmailSubject(language, userData.estimatedPrice),
      react: QuoteEmailTemplate({
        userData,
        quoteContent,
        language,
      }),
      attachments: [
        {
          filename: `devis-${userData.firstName}-${Date.now()}.pdf`,
          content: await generatePDF(userData, quoteContent, language),
        },
      ],
    });

    if (error) {
      console.error("Erreur Resend:", error);
      return NextResponse.json(
        { error: "Erreur lors de l'envoi" },
        { status: 500 }
      );
    }

    // Sauvegarde optionnelle en base de données
    await saveQuoteRequest(userData);

    return NextResponse.json({
      success: true,
      messageId: data?.id,
      estimatedPrice: userData.estimatedPrice,
    });
  } catch (error) {
    console.error("Erreur API:", error);
    return NextResponse.json({ error: "Erreur serveur" }, { status: 500 });
  }
}

function generateQuoteContent(userData: any, language: string) {
  const { service, prestationType, estimatedPrice, breakdown } = userData;

  const content = {
    fr: {
      title: "Devis Personnalisé",
      greeting: `Bonjour ${userData.firstName},`,
      intro:
        "Merci pour votre intérêt ! Voici votre estimation personnalisée :",
      serviceTitle: "Service demandé",
      priceTitle: "Estimation",
      breakdownTitle: "Détail des prestations",
      includes: "Prestations incluses",
      timeline: "Délai indicatif",
      nextSteps: "Prochaines étapes",
      contact: "Me contacter",
      footer: "Cette estimation est valable 30 jours et sans engagement.",
    },
    en: {
      title: "Personalized Quote",
      greeting: `Hello ${userData.firstName},`,
      intro: "Thank you for your interest! Here is your personalized estimate:",
      serviceTitle: "Requested Service",
      priceTitle: "Estimate",
      breakdownTitle: "Service Breakdown",
      includes: "Included Services",
      timeline: "Indicative Timeline",
      nextSteps: "Next Steps",
      contact: "Contact me",
      footer: "This estimate is valid for 30 days and without commitment.",
    },
    ja: {
      title: "パーソナライズされた見積もり",
      greeting: `こんにちは ${userData.firstName}さん、`,
      intro:
        "ご関心をお寄せいただきありがとうございます！パーソナライズされた見積もりをご覧ください：",
      serviceTitle: "ご依頼サービス",
      priceTitle: "見積もり",
      breakdownTitle: "サービス詳細",
      includes: "含まれるサービス",
      timeline: "予定期間",
      nextSteps: "次のステップ",
      contact: "お問い合わせ",
      footer: "この見積もりは30日間有効で、義務はありません。",
    },
  };

  return content[language as keyof typeof content] || content.fr;
}

function getEmailSubject(language: string, price: number): string {
  const subjects = {
    fr: `Votre devis personnalisé - ${price}€`,
    en: `Your personalized quote - €${price}`,
    ja: `パーソナライズされた見積もり - €${price}`,
  };

  return subjects[language as keyof typeof subjects] || subjects.fr;
}

async function generatePDF(
  userData: any,
  content: any,
  language: string
): Promise<Buffer> {
  // Ici on utiliserait une lib comme Puppeteer, jsPDF, ou @react-pdf/renderer
  // Pour la démo, on retourne un buffer vide
  // En production, il faudrait générer un vrai PDF avec:

  const pdfContent = `
<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <title>${content.title}</title>
    <style>
        body { font-family: Arial, sans-serif; margin: 40px; color: #333; }
        .header { text-align: center; margin-bottom: 40px; border-bottom: 2px solid #0066FF; padding-bottom: 20px; }
        .logo { font-size: 24px; font-weight: bold; color: #0066FF; margin-bottom: 10px; }
        .section { margin: 30px 0; }
        .price-highlight { background: linear-gradient(135deg, #0066FF, #8B5CF6); color: white; padding: 20px; border-radius: 10px; text-align: center; font-size: 24px; font-weight: bold; }
        .breakdown-item { display: flex; justify-content: space-between; padding: 10px 0; border-bottom: 1px solid #eee; }
        .footer { margin-top: 40px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666; }
    </style>
</head>
<body>
    <div class="header">
        <div class="logo">Thibaut Gallien</div>
        <h1>${content.title}</h1>
        <p>Développeur Web & Copywriter</p>
    </div>

    <div class="section">
        <h2>${content.greeting}</h2>
        <p>${content.intro}</p>
    </div>

    <div class="section">
        <h3>${content.serviceTitle}</h3>
        <p><strong>${
          userData.service === "dev" ? "Développement Web" : "Copywriting"
        }</strong></p>
        <p>Type: ${userData.prestationType}</p>
    </div>

    <div class="section">
        <div class="price-highlight">
            ${content.priceTitle}: ${userData.estimatedPrice}€
        </div>
    </div>

    <div class="section">
        <h3>${content.breakdownTitle}</h3>
        ${
          userData.breakdown
            ?.map(
              (item: any) => `
            <div class="breakdown-item">
                <span>${item.item}</span>
                <span>${item.price}€</span>
            </div>
            <p style="font-size: 12px; color: #666; margin: 5px 0;">${item.description}</p>
        `
            )
            .join("") || ""
        }
    </div>

    <div class="section">
        <h3>${content.includes}</h3>
        <ul>
            ${getIncludedServices(
              userData.service,
              userData.prestationType,
              language
            )
              .map((service: string) => `<li>${service}</li>`)
              .join("")}
        </ul>
    </div>

    <div class="section">
        <h3>${content.nextSteps}</h3>
        <ol>
            <li>Validation de votre projet</li>
            <li>Signature du devis</li>
            <li>Acompte de 30%</li>
            <li>Démarrage des travaux</li>
        </ol>
    </div>

    <div class="section">
        <h3>${content.contact}</h3>
        <p>Email: thibaut.gallien50@gmail.com</p>
        <p>Téléphone: +33 7 70 17 93 11</p>
        <p>LinkedIn: linkedin.com/in/thibaut-gallien</p>
    </div>

    <div class="footer">
        <p>${content.footer}</p>
        <p>Thibaut Gallien - Développeur Web & Copywriter - Cherbourg, Normandie</p>
    </div>
</body>
</html>`;

  // En production, utiliser Puppeteer pour convertir HTML en PDF
  // const browser = await puppeteer.launch();
  // const page = await browser.newPage();
  // await page.setContent(pdfContent);
  // const pdf = await page.pdf({ format: 'A4' });
  // await browser.close();
  // return pdf;

  // Pour la démo, retourner le HTML comme buffer
  return Buffer.from(pdfContent, "utf-8");
}

function getIncludedServices(
  service: string,
  prestationType: string,
  language: string
): string[] {
  const services = {
    dev: {
      "site-vitrine": {
        fr: [
          "Design responsive tous écrans",
          "CMS Sanity pour gestion contenu",
          "Optimisation SEO de base",
          "Formulaire de contact",
          "Hébergement 1 mois offert",
          "Formation à la gestion",
          "Support 30 jours",
        ],
        en: [
          "Responsive design all screens",
          "Sanity CMS for content management",
          "Basic SEO optimization",
          "Contact form",
          "1 month free hosting",
          "Management training",
          "30 days support",
        ],
      },
      "landing-page": {
        fr: [
          "Design optimisé conversion",
          "Intégration Next.js",
          "Optimisations performance",
          "Analytics intégrées",
          "Tests A/B recommandés",
          "Support 30 jours",
        ],
      },
    },
    copy: {
      "page-vente": {
        fr: [
          "Recherche marché approfondie",
          "Big Idea unique",
          "Structure de conversion",
          "Gestion des objections",
          "Call-to-actions optimisés",
          "2 révisions incluses",
          "Conseils d'implémentation",
        ],
      },
    },
  };

  const defaultServices = {
    fr: ["Prestation personnalisée", "Support inclus", "Révisions comprises"],
    en: ["Custom service", "Support included", "Revisions included"],
  };

  return (
    services[service as keyof typeof services]?.[prestationType]?.[
      language as "fr" | "en"
    ] ||
    defaultServices[language as "fr" | "en"] ||
    defaultServices.fr
  );
}

async function saveQuoteRequest(userData: any) {
  // Ici on pourrait sauvegarder en base de données
  // Ou envoyer à un webhook, Airtable, Google Sheets, etc.
  console.log("Sauvegarde demande de devis:", {
    email: userData.email,
    service: userData.service,
    price: userData.estimatedPrice,
    timestamp: new Date().toISOString(),
  });
}
