import { TagIcon } from "@sanity/icons";
import { defineField, defineType } from "sanity";

export const categoryType = defineType({
  name: "category",
  title: "Catégorie",
  type: "document",
  icon: TagIcon,
  fields: [
    defineField({
      name: "title",
      title: "Nom",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "URL (slug)",
      type: "slug",
      options: {
        source: "title",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      title: "Description",
      type: "text",
      rows: 3,
    }),
    defineField({
      name: "color",
      title: "Couleur",
      type: "string",
      options: {
        list: [
          { title: "Bleu", value: "#3B82F6" },
          { title: "Violet", value: "#8B5CF6" },
          { title: "Vert", value: "#10B981" },
          { title: "Orange", value: "#F59E0B" },
          { title: "Rouge", value: "#EF4444" },
          { title: "Rose", value: "#EC4899" },
          { title: "Cyan", value: "#06B6D4" },
          { title: "Gris", value: "#6B7280" },
        ],
      },
    }),
    defineField({
      name: "image",
      title: "Image de catégorie",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        defineField({
          name: "alt",
          title: "Texte alternatif",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        defineField({
          name: "metaTitle",
          title: "Titre SEO",
          type: "string",
          validation: (rule) => rule.max(60),
        }),
        defineField({
          name: "metaDescription",
          title: "Description SEO",
          type: "text",
          validation: (rule) => rule.max(160),
        }),
      ],
      options: {
        collapsible: true,
        collapsed: true,
      },
    }),
    defineField({
      name: "featured",
      title: "Catégorie mise en avant",
      type: "boolean",
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
    },
  },
});
