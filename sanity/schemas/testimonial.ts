export default {
  name: "testimonial",
  title: "Témoignage",
  type: "document",
  fields: [
    {
      name: "name",
      title: "Nom",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "role",
      title: "Poste",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "company",
      title: "Entreprise",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "content",
      title: "Témoignage",
      type: "text",
      validation: (Rule: any) => Rule.required().min(50).max(500),
    },
    {
      name: "rating",
      title: "Note",
      type: "number",
      validation: (Rule: any) => Rule.required().min(1).max(5),
      initialValue: 5,
    },
    {
      name: "avatar",
      title: "Photo",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          title: "Texte alternatif",
          type: "string",
        },
      ],
    },
    {
      name: "featured",
      title: "Témoignage mis en avant",
      type: "boolean",
      initialValue: false,
    },
  ],
  preview: {
    select: {
      title: "name",
      subtitle: "company",
      media: "avatar",
    },
  },
};
