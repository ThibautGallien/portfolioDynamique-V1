import { defineField, defineType } from "sanity";
import { DocumentTextIcon } from "@sanity/icons";

export const postType = defineType({
  name: "post",
  title: "Article de Blog",
  type: "document",
  icon: DocumentTextIcon,
  fields: [
    // Contenu principal
    defineField({
      name: "title",
      title: "Titre",
      type: "string",
      validation: (rule) =>
        rule.required().max(80).warning("Idéal pour le SEO : 50-60 caractères"),
    }),
    defineField({
      name: "slug",
      title: "URL (slug)",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
        slugify: (input: string) =>
          input
            .toLowerCase()
            .replace(/\s+/g, "-")
            .replace(/[àáâãäå]/g, "a")
            .replace(/[èéêë]/g, "e")
            .replace(/[ìíîï]/g, "i")
            .replace(/[òóôõö]/g, "o")
            .replace(/[ùúûü]/g, "u")
            .replace(/[ç]/g, "c")
            .slice(0, 96),
      },
      validation: (rule) => rule.required(),
    }),

    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Titre SEO (meta title)",
          type: "string",
          validation: (rule) =>
            rule.max(60).warning("Idéal : 50-60 caractères"),
          description: "Si vide, utilisera le titre principal",
        }),
        defineField({
          name: "metaDescription",
          title: "Description SEO (meta description)",
          type: "text",
          rows: 3,
          validation: (rule) =>
            rule
              .required()
              .min(120)
              .max(160)
              .warning("Idéal : 140-160 caractères"),
        }),
        defineField({
          name: "keywords",
          title: "Mots-clés",
          type: "array",
          of: [{ type: "string" }],
          options: {
            layout: "tags",
          },
        }),
        defineField({
          name: "canonicalUrl",
          title: "URL Canonique",
          type: "url",
          description:
            "Laisser vide sauf si republication d'un article existant",
        }),
      ],
      options: {
        collapsible: true,
        collapsed: false,
      },
    }),

    // Images
    defineField({
      name: "mainImage",
      title: "Image principale",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif (ALT)",
          type: "string",
          validation: (rule) => rule.required(),
          description: "Important pour l'accessibilité et le SEO",
        }),
        defineField({
          name: "caption",
          title: "Légende",
          type: "string",
        }),
      ],
      validation: (rule) => rule.required(),
    }),

    // Contenu
    defineField({
      name: "excerpt",
      title: "Extrait",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required().min(50).max(200),
      description: "Résumé de l'article (utilisé dans les listes et partages)",
    }),
    defineField({
      name: "body",
      title: "Contenu",
      type: "blockContent",
      validation: (rule) => rule.required(),
    }),

    // Catégorisation
    defineField({
      name: "categories",
      title: "Catégories",
      type: "array",
      of: [
        {
          type: "reference",
          to: [{ type: "category" }],
        },
      ],
      validation: (rule) => rule.min(1).max(3),
    }),
    defineField({
      name: "tags",
      title: "Tags",
      type: "array",
      of: [{ type: "string" }],
      options: {
        layout: "tags",
      },
    }),

    // Auteur et dates
    defineField({
      name: "author",
      title: "Auteur",
      type: "reference",
      to: [{ type: "author" }],
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      initialValue: () => new Date().toISOString(),
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "updatedAt",
      title: "Dernière mise à jour",
      type: "datetime",
      readOnly: true,
    }),

    // Statut et visibilité
    defineField({
      name: "status",
      title: "Statut",
      type: "string",
      options: {
        list: [
          { title: "Brouillon", value: "draft" },
          { title: "En révision", value: "review" },
          { title: "Publié", value: "published" },
          { title: "Archivé", value: "archived" },
        ],
        layout: "radio",
      },
      initialValue: "draft",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "featured",
      title: "Article mis en avant",
      type: "boolean",
      initialValue: false,
      description: "Affiché en premier dans les listes",
    }),

    // Configuration d'affichage
    defineField({
      name: "showOnPages",
      title: "Afficher sur les pages",
      type: "array",
      of: [
        {
          type: "string",
          options: {
            list: [
              { title: "Page d'accueil", value: "home" },
              { title: "Page blog", value: "blog" },
              { title: "Page développement", value: "dev" },
              { title: "Page copywriting", value: "copy" },
              { title: "Newsletter", value: "newsletter" },
            ],
          },
        },
      ],
      initialValue: ["blog"],
    }),

    // Temps de lecture estimé
    defineField({
      name: "readingTime",
      title: "Temps de lecture (minutes)",
      type: "number",
      description: "Calculé automatiquement ou manuel",
      validation: (rule) => rule.min(1).max(60),
    }),

    // Réseaux sociaux
    defineField({
      name: "socialMedia",
      title: "Réseaux sociaux",
      type: "object",
      fields: [
        defineField({
          name: "ogImage",
          title: "Image Open Graph (Facebook/LinkedIn)",
          type: "image",
          options: {
            hotspot: true,
          },
          description:
            "Format recommandé : 1200x630px. Si vide, utilisera l'image principale",
        }),
        defineField({
          name: "twitterCard",
          title: "Type de carte Twitter",
          type: "string",
          options: {
            list: [
              { title: "Résumé", value: "summary" },
              { title: "Grande image", value: "summary_large_image" },
            ],
          },
          initialValue: "summary_large_image",
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),

    // Options avancées
    defineField({
      name: "advanced",
      title: "Options avancées",
      type: "object",
      fields: [
        defineField({
          name: "noIndex",
          title: "Exclure des moteurs de recherche",
          type: "boolean",
          initialValue: false,
          description: "Ajoute noindex, nofollow",
        }),
        defineField({
          name: "customCSS",
          title: "CSS personnalisé",
          type: "text",
          rows: 10,
          description: "CSS personnalisé pour cet article",
        }),
        defineField({
          name: "relatedPosts",
          title: "Articles liés",
          type: "array",
          of: [
            {
              type: "reference",
              to: [{ type: "post" }],
            },
          ],
          validation: (rule) => rule.max(3),
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
  ],

  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "mainImage",
      status: "status",
      publishedAt: "publishedAt",
    },
    prepare(selection) {
      const { author, status, publishedAt } = selection;
      const statusEmoji = {
        draft: "📝",
        review: "👁️",
        published: "✅",
        archived: "📦",
      };

      return {
        ...selection,
        subtitle: `${statusEmoji[status as keyof typeof statusEmoji] || ""} ${author ? `par ${author}` : ""} ${publishedAt ? `• ${new Date(publishedAt).toLocaleDateString("fr-FR")}` : ""}`,
      };
    },
  },

  orderings: [
    {
      title: "Date de publication, desc",
      name: "publishedAtDesc",
      by: [{ field: "publishedAt", direction: "desc" }],
    },
    {
      title: "Titre A-Z",
      name: "titleAsc",
      by: [{ field: "title", direction: "asc" }],
    },
  ],
});
