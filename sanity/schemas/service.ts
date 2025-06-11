export default {
  name: "service",
  title: "Service",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "subtitle",
      title: "Sous-titre",
      type: "string",
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "features",
      title: "Fonctionnalités incluses",
      type: "array",
      of: [{ type: "string" }],
    },
    {
      name: "pricing",
      title: "Prix",
      type: "object",
      fields: [
        {
          name: "basePrice",
          title: "Prix de base",
          type: "number",
        },
        {
          name: "minPrice",
          title: "Prix minimum",
          type: "number",
        },
        {
          name: "maxPrice",
          title: "Prix maximum",
          type: "number",
        },
        {
          name: "unit",
          title: "Unité",
          type: "string",
          options: {
            list: [
              { title: "€", value: "eur" },
              { title: "€/mois", value: "eur_month" },
              { title: "€/an", value: "eur_year" },
            ],
          },
        },
      ],
    },
    {
      name: "timeline",
      title: "Délai de réalisation",
      type: "string",
    },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Développement", value: "development" },
          { title: "Copywriting", value: "copywriting" },
          { title: "Package", value: "package" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "featured",
      title: "Service mis en avant",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "category",
    },
  },
};
