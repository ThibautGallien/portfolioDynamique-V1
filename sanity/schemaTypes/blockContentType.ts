import { defineType, defineArrayMember } from "sanity";
import { ImageIcon, CodeBlockIcon } from "@sanity/icons";

export const blockContentType = defineType({
  title: "Contenu",
  name: "blockContent",
  type: "array",
  of: [
    defineArrayMember({
      type: "block",
      styles: [
        { title: "Normal", value: "normal" },
        { title: "H1", value: "h1" },
        { title: "H2", value: "h2" },
        { title: "H3", value: "h3" },
        { title: "H4", value: "h4" },
        { title: "Citation", value: "blockquote" },
      ],
      lists: [
        { title: "Puces", value: "bullet" },
        { title: "Numérotée", value: "number" },
      ],
      marks: {
        decorators: [
          { title: "Gras", value: "strong" },
          { title: "Italique", value: "em" },
          { title: "Code", value: "code" },
          { title: "Souligné", value: "underline" },
          { title: "Barré", value: "strike-through" },
        ],
        annotations: [
          {
            title: "Lien",
            name: "link",
            type: "object",
            fields: [
              {
                title: "URL",
                name: "href",
                type: "url",
                validation: (rule) => rule.required(),
              },
              {
                title: "Ouvrir dans un nouvel onglet",
                name: "blank",
                type: "boolean",
                initialValue: false,
              },
            ],
          },
          {
            title: "Lien interne",
            name: "internalLink",
            type: "object",
            fields: [
              {
                title: "Page",
                name: "reference",
                type: "reference",
                to: [
                  { type: "post" },
                  // Vous pouvez ajouter d'autres types de pages
                ],
              },
            ],
          },
        ],
      },
    }),

    // Images avec options avancées
    defineArrayMember({
      type: "image",
      icon: ImageIcon,
      options: { hotspot: true },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Texte alternatif",
          validation: (rule) => rule.required(),
        },
        {
          name: "caption",
          type: "string",
          title: "Légende",
        },
        {
          name: "size",
          type: "string",
          title: "Taille d'affichage",
          options: {
            list: [
              { title: "Normale", value: "normal" },
              { title: "Grande", value: "large" },
              { title: "Pleine largeur", value: "fullWidth" },
            ],
          },
          initialValue: "normal",
        },
      ],
    }),

    // Bloc de code (version simplifiée)
    defineArrayMember({
      type: "object",
      name: "codeBlock",
      title: "Bloc de code",
      icon: CodeBlockIcon,
      fields: [
        {
          name: "language",
          type: "string",
          title: "Langage",
          options: {
            list: [
              { title: "JavaScript", value: "javascript" },
              { title: "TypeScript", value: "typescript" },
              { title: "HTML", value: "html" },
              { title: "CSS", value: "css" },
              { title: "React JSX", value: "jsx" },
              { title: "Python", value: "python" },
              { title: "JSON", value: "json" },
              { title: "Bash", value: "bash" },
              { title: "SQL", value: "sql" },
            ],
          },
          initialValue: "javascript",
        },
        {
          name: "filename",
          type: "string",
          title: "Nom du fichier (optionnel)",
        },
        {
          name: "code",
          type: "text",
          title: "Code",
          validation: (rule) => rule.required(),
        },
      ],
      preview: {
        select: {
          language: "language",
          filename: "filename",
        },
        prepare({ language, filename }) {
          return {
            title: `Code ${language}`,
            subtitle: filename || "Bloc de code",
          };
        },
      },
    }),

    // Citation avec auteur
    defineArrayMember({
      type: "object",
      name: "quote",
      title: "Citation",
      fields: [
        {
          name: "text",
          type: "text",
          title: "Citation",
          validation: (rule) => rule.required(),
        },
        {
          name: "author",
          type: "string",
          title: "Auteur",
        },
        {
          name: "source",
          type: "string",
          title: "Source",
        },
      ],
      preview: {
        select: {
          title: "text",
          subtitle: "author",
        },
        prepare({ title, subtitle }) {
          return {
            title: `"${title}"`,
            subtitle: subtitle ? `— ${subtitle}` : "",
          };
        },
      },
    }),

    // Vidéo YouTube
    defineArrayMember({
      type: "object",
      name: "youtube",
      title: "Vidéo YouTube",
      fields: [
        {
          name: "url",
          type: "url",
          title: "URL YouTube",
          validation: (rule) => rule.required(),
        },
        {
          name: "caption",
          type: "string",
          title: "Légende",
        },
      ],
      preview: {
        select: {
          title: "url",
        },
        prepare({ title }) {
          return {
            title: "Vidéo YouTube",
            subtitle: title,
          };
        },
      },
    }),

    // Encadré/Alerte
    defineArrayMember({
      type: "object",
      name: "callout",
      title: "Encadré",
      fields: [
        {
          name: "type",
          type: "string",
          title: "Type",
          options: {
            list: [
              { title: "Information", value: "info" },
              { title: "Attention", value: "warning" },
              { title: "Erreur", value: "error" },
              { title: "Succès", value: "success" },
              { title: "Conseil", value: "tip" },
            ],
          },
          initialValue: "info",
        },
        {
          name: "content",
          type: "blockContent",
          title: "Contenu",
        },
      ],
      preview: {
        select: {
          type: "type",
          content: "content",
        },
        prepare({ type, content }) {
          const emoji = {
            info: "ℹ️",
            warning: "⚠️",
            error: "❌",
            success: "✅",
            tip: "💡",
          };
          return {
            title: `${emoji[type as keyof typeof emoji]} Encadré ${type}`,
            subtitle: content?.[0]?.children?.[0]?.text || "",
          };
        },
      },
    }),

    // Tableau simple
    defineArrayMember({
      type: "object",
      name: "table",
      title: "Tableau",
      fields: [
        {
          name: "caption",
          type: "string",
          title: "Titre du tableau",
        },
        {
          name: "rows",
          type: "array",
          title: "Lignes",
          of: [
            {
              type: "object",
              fields: [
                {
                  name: "cells",
                  type: "array",
                  title: "Cellules",
                  of: [{ type: "string" }],
                },
              ],
            },
          ],
        },
      ],
    }),
  ],
});
