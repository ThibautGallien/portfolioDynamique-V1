// lib/pricing-config.ts

export const PRICING_CONFIG = {
  copywriting: {
    "sequence-email": {
      name: 'Séquence Email de Vente - "La Séquence Augmentée"',
      basePrice: 375,
      minPrice: 250,
      maxPrice: 500,
      timeline: "5 à 7 jours",
      description:
        "5 à 7 emails ultra ciblés pour vendre un produit ou convertir après une opt-in",
      includes: [
        "5 à 7 emails ultra ciblés pour vendre un produit ou convertir après une opt-in",
        "Recherche approfondie sur ton avatar, tes objections, ton marché (PDF fourni)",
        "Structuration stratégique selon AIDA / PAS / 4P / Storytelling",
        'Création d\'une "Big Idea" mémorable pour ancrer ton positionnement',
        "CTA optimisés (emplacement, fréquence, ancrage)",
        "Objets + preview text testés pour taux d'ouverture max",
        "Format responsive mobile + compatible avec tous les auto-répondeurs",
        "Ton adaptatif : autorité, émotion, pédagogie ou ultra direct",
        'Version "light" disponible pour réseaux sociaux',
      ],
      bonus: [
        '1 mail de relance ou "jour +7"',
        "Audit de ta séquence actuelle si existante",
        'PDF "structure email qui convertit + erreurs à éviter"',
      ],
      guarantee:
        "Tu ne paies que si tu fais mieux qu'avant. Sinon, tu repars avec ta séquence complète, offerte.",
    },
    newsletter: {
      name: 'Newsletter Hebdomadaire - "Le Canal de Confiance"',
      basePrice: 400,
      minPrice: 400,
      maxPrice: 400,
      timeline: "4 newsletters livrées chaque début de mois",
      description: "4 newsletters/mois prêtes à l'envoi",
      includes: [
        "4 newsletters/mois prêtes à l'envoi",
        "Angle éditorial défini selon ton avatar et ton positionnement",
        "Ton de marque, storytelling, pédagogie, preuves, anecdotes, punchlines",
        "Plan de contenu mensuel + système de recyclage (posts, threads, vidéos)",
        "CTA organiques ou directs en fonction du sujet",
        "Objets + preview text optimisés",
        "Mise en ligne + envoi automatisé compris (Brevo, ActiveCampaign, Systeme.io, etc.)",
        "Format responsive garanti",
      ],
      bonus: [
        "Calendrier éditorial chaque mois (PDF + notion si tu veux)",
        "Audit 1 fois/trim sur la performance email (si données dispo)",
      ],
      guarantee:
        "Si ton taux d'ouverture ou de clics ne progresse pas sur le mois, je retravaille tout gratuitement.",
    },
  },

  development: {
    "landing-page": {
      name: 'Landing Page Optimisée - "Page à Impact"',
      basePrice: 400,
      minPrice: 300,
      maxPrice: 500,
      timeline: "3 à 5 jours",
      description: "Landing page 100% responsive et ultra rapide",
      includes: [
        "Landing page 100% responsive et ultra rapide (Next.js + Vercel ou Systeme.io)",
        "Structure copywriting : promesse, bénéfices, preuves, CTA",
        "Intégration formulaire / Calendly / Stripe / vidéo",
        "Design UX adapté à ton audience",
        "SEO technique (balises, vitesse, accessibilité, responsive)",
        "CTA testés et stratégiquement positionnés",
        "Tracking (Plausible / GA4 / pixel FB possible)",
      ],
      bonus: [
        "Audit express de ton funnel",
        "1 angle alternatif pour A/B testing (texte fourni)",
        'PDF "Checklist landing page qui convertit"',
      ],
      guarantee:
        "Si ton taux de conversion est inférieur à ton ancienne LP (ou moyenne secteur), je la modifie gratuitement.",
    },

    "site-vitrine": {
      name: 'Site Vitrine 1-5 Pages - "Présence Pro Boostée"',
      basePrice: 750,
      minPrice: 600,
      maxPrice: 900,
      timeline: "7 à 10 jours",
      description: "Site professionnel jusqu'à 5 pages avec CMS",
      includes: [
        "Jusqu'à 5 pages (Accueil, À propos, Services, Contact, Témoignages)",
        "CMS Sanity : tu peux modifier ton contenu sans coder",
        "SEO de base (title, meta, Hn, alt, perf)",
        "Design responsive + rapide (Next.js + Tailwind + Vercel)",
        "RGPD : mentions légales + cookies",
      ],
      bonus: [
        "Audit SEO local avec recommandations concrètes",
        "Rapport Lighthouse (performance, accessibilité, SEO)",
        "Intégration Google Maps ou WhatsApp offerte",
      ],
      guarantee:
        "Si le site ne convertit pas ou n'est pas mieux référencé que l'ancien au bout de 30 jours, je corrige.",
    },

    maintenance: {
      name: 'Maintenance Annuelle - "Tranquillité Totale"',
      basePrice: 200,
      minPrice: 200,
      maxPrice: 200,
      timeline: "Démarrage immédiat après livraison du site",
      description: "Maintenance complète de votre site web",
      includes: [
        "Sauvegarde mensuelle (code + contenu)",
        "Mises à jour techniques de l'environnement (Next.js, Tailwind, Sanity)",
        "Corrections de bugs simples (<30 min)",
        "2 audits techniques/an (performance + accessibilité)",
        "Jusqu'à 4h de modifs/an offertes",
      ],
      bonus: ["1 alerte proactivité en cas de faille / bug visible"],
      guarantee:
        "Si une panne non résolue sous 48h t'empêche d'être joignable, je t'offre 1 mois de maintenance.",
    },
  },

  packages: {
    "offre-signature": {
      name: "Offre Signature - Site Vitrine Copywrité + LP + Séquence Email",
      basePrice: 1200,
      minPrice: 1200,
      maxPrice: 1500,
      timeline: "10 à 14 jours",
      description: "Solution complète : site + copywriting + email marketing",
      includes: [
        "Site vitrine 5 pages (design + intégration)",
        "Copywriting stratégique pour chaque page",
        "Landing page orientée conversion (avec opt-in ou RDV)",
        "Séquence mail de bienvenue (5 à 7 emails)",
        "CMS Sanity installé + tutoriel mini-guide",
        "Optimisation SEO complète",
        "Intégration formulaires, calendrier, WhatsApp, liens affiliés, Stripe, etc.",
        "Avatar client + fichier de recherche fourni",
        "Audit positionnement + recommandations branding",
        "Intégration de toute l'automatisation mailing si besoin",
        "Suivi sur 30 jours (hotfix + support email)",
      ],
      bonus: [
        'PDF "Plan de relance email 30 jours post-séquence"',
        "Audit mensuel offert 1 mois après le lancement",
        "Recommandations concrètes pour contenu réseaux ou SEO",
        "Positionnement différenciateur en 1 phrase (à inclure partout)",
      ],
      guarantee:
        "Si ton taux d'opt-in est inférieur à 20% sur 100 visites ou que ton audience ne clique pas, on corrige jusqu'à résultat.",
    },
  },
};

export const CHATBOT_QUESTIONS = {
  fr: {
    welcome:
      "👋 Salut ! Je suis votre assistant devis. En quelques questions, je vais vous préparer une estimation personnalisée avec tous les détails de mes prestations. C'est parti !",

    serviceQuestion: "Quel type de service vous intéresse le plus ?",
    serviceOptions: [
      {
        id: "copywriting",
        label: "✍️ Copywriting",
        value: "copywriting",
        description: "Emails, newsletters, pages de vente",
      },
      {
        id: "development",
        label: "💻 Développement Web",
        value: "development",
        description: "Sites vitrine, landing pages, applications",
      },
      {
        id: "package",
        label: "🚀 Offre Complète",
        value: "package",
        description: "Site + Copywriting + Email Marketing",
      },
    ],

    copywritingOptions: [
      {
        id: "sequence-email",
        label: "📧 Séquence Email de Vente",
        value: "sequence-email",
        description: '"La Séquence Augmentée" - 250-500€',
      },
      {
        id: "newsletter",
        label: "📩 Newsletter Hebdomadaire",
        value: "newsletter",
        description: '"Le Canal de Confiance" - 400€/mois',
      },
    ],

    developmentOptions: [
      {
        id: "landing-page",
        label: "🎯 Landing Page Optimisée",
        value: "landing-page",
        description: '"Page à Impact" - 300-500€',
      },
      {
        id: "site-vitrine",
        label: "🌐 Site Vitrine",
        value: "site-vitrine",
        description: '"Présence Pro Boostée" - 600-900€',
      },
      {
        id: "maintenance",
        label: "🔧 Maintenance Annuelle",
        value: "maintenance",
        description: '"Tranquillité Totale" - 200€/an',
      },
    ],

    packageOptions: [
      {
        id: "offre-signature",
        label: "💎 Offre Signature",
        value: "offre-signature",
        description: "Site + Copy + Email - À partir de 1200€",
      },
    ],
  },
};
