// components/emails/quote-email-template.tsx
import * as React from "react";

interface QuoteEmailTemplateProps {
  userData: {
    firstName: string;
    lastName?: string;
    email: string;
    service: "dev" | "copy";
    prestationType: string;
    estimatedPrice: number;
    breakdown?: Array<{
      item: string;
      price: number;
      description: string;
    }>;
  };
  quoteContent: any;
  language: string;
}

export const QuoteEmailTemplate: React.FC<QuoteEmailTemplateProps> = ({
  userData,
  quoteContent,
  language,
}) => (
  <div
    style={{
      fontFamily: "Arial, sans-serif",
      maxWidth: "600px",
      margin: "0 auto",
    }}
  >
    {/* Header */}
    <div
      style={{
        background: "linear-gradient(135deg, #0066FF, #8B5CF6)",
        padding: "30px",
        textAlign: "center",
        color: "white",
      }}
    >
      <h1 style={{ margin: "0 0 10px 0", fontSize: "28px" }}>
        Thibaut Gallien
      </h1>
      <p style={{ margin: "0", opacity: "0.9" }}>
        Développeur Web & Copywriter
      </p>
    </div>

    {/* Content */}
    <div style={{ padding: "30px", backgroundColor: "#ffffff" }}>
      <h2 style={{ color: "#333", marginBottom: "20px" }}>
        {quoteContent.greeting}
      </h2>

      <p style={{ color: "#666", lineHeight: "1.6", marginBottom: "30px" }}>
        {quoteContent.intro}
      </p>

      {/* Service Details */}
      <div
        style={{
          backgroundColor: "#f8fafc",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
        }}
      >
        <h3 style={{ color: "#333", marginBottom: "15px" }}>
          {quoteContent.serviceTitle}
        </h3>
        <p style={{ margin: "5px 0" }}>
          <strong>Type:</strong>{" "}
          {userData.service === "dev" ? "Développement Web" : "Copywriting"}
        </p>
        <p style={{ margin: "5px 0" }}>
          <strong>Prestation:</strong>{" "}
          {userData.prestationType?.replace("-", " ")}
        </p>
      </div>

      {/* Price Highlight */}
      <div
        style={{
          background: "linear-gradient(135deg, #0066FF, #8B5CF6)",
          color: "white",
          padding: "25px",
          borderRadius: "12px",
          textAlign: "center",
          marginBottom: "30px",
        }}
      >
        <h2 style={{ margin: "0", fontSize: "32px" }}>
          {userData.estimatedPrice}€
        </h2>
        <p style={{ margin: "5px 0 0 0", opacity: "0.9" }}>
          {quoteContent.priceTitle}
        </p>
      </div>

      {/* Breakdown */}
      {userData.breakdown && userData.breakdown.length > 0 && (
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ color: "#333", marginBottom: "15px" }}>
            {quoteContent.breakdownTitle}
          </h3>
          {userData.breakdown.map((item, index) => (
            <div
              key={index}
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: "12px 0",
                borderBottom: "1px solid #eee",
              }}
            >
              <div>
                <strong>{item.item}</strong>
                <p
                  style={{
                    margin: "5px 0 0 0",
                    fontSize: "12px",
                    color: "#666",
                  }}
                >
                  {item.description}
                </p>
              </div>
              <span style={{ fontWeight: "bold", color: "#0066FF" }}>
                {item.price}€
              </span>
            </div>
          ))}
        </div>
      )}

      {/* Next Steps */}
      <div
        style={{
          backgroundColor: "#f0f9ff",
          padding: "20px",
          borderRadius: "8px",
          marginBottom: "30px",
          borderLeft: "4px solid #0066FF",
        }}
      >
        <h3 style={{ color: "#333", marginBottom: "15px" }}>
          {quoteContent.nextSteps}
        </h3>
        <ol style={{ color: "#666", lineHeight: "1.6", paddingLeft: "20px" }}>
          <li>Validation de votre projet</li>
          <li>Signature du devis</li>
          <li>Acompte de 30%</li>
          <li>Démarrage des travaux</li>
        </ol>
      </div>

      {/* Contact */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <h3 style={{ color: "#333", marginBottom: "15px" }}>
          {quoteContent.contact}
        </h3>
        <p style={{ color: "#666", margin: "5px 0" }}>
          📧 thibaut.gallien50@gmail.com
        </p>
        <p style={{ color: "#666", margin: "5px 0" }}>📱 +33 7 70 17 93 11</p>
        <p style={{ color: "#666", margin: "5px 0" }}>
          💼 linkedin.com/in/thibaut-gallien
        </p>
      </div>

      {/* CTA Button */}
      <div style={{ textAlign: "center", marginBottom: "30px" }}>
        <a
          href="mailto:thibaut.gallien50@gmail.com?subject=Validation%20devis&body=Bonjour%20Thibaut,%0A%0AJe%20souhaite%20valider%20le%20devis%20que%20vous%20avez%20envoyé."
          style={{
            display: "inline-block",
            background: "linear-gradient(135deg, #0066FF, #8B5CF6)",
            color: "white",
            padding: "15px 30px",
            textDecoration: "none",
            borderRadius: "8px",
            fontWeight: "bold",
          }}
        >
          Valider ce devis
        </a>
      </div>

      {/* Footer */}
      <div
        style={{
          borderTop: "1px solid #eee",
          paddingTop: "20px",
          fontSize: "12px",
          color: "#666",
          textAlign: "center",
        }}
      >
        <p>{quoteContent.footer}</p>
        <p style={{ margin: "10px 0 0 0" }}>
          Thibaut Gallien - Développeur Web & Copywriter
          <br />
          Cherbourg, Normandie
        </p>
      </div>
    </div>
  </div>
);
