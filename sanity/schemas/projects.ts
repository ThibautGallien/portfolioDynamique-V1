export default {
  name: "project",
  title: "Projet",
  type: "document",
  fields: [
    {
      name: "title",
      title: "Titre",
      type: "string",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "description",
      title: "Description",
      type: "text",
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "longDescription",
      title: "Description détaillée",
      type: "array",
      of: [{ type: "block" }],
    },
    {
      name: "image",
      title: "Image principale",
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
      name: "gallery",
      title: "Galerie",
      type: "array",
      of: [
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Texte alternatif",
              type: "string",
            },
          ],
        },
      ],
    },
    {
      name: "tags",
      title: "Technologies",
      type: "array",
      of: [{ type: "string" }],
      options: {
        list: [
          { title: "React", value: "react" },
          { title: "Next.js", value: "nextjs" },
          { title: "TypeScript", value: "typescript" },
          { title: "TailwindCSS", value: "tailwindcss" },
          { title: "Node.js", value: "nodejs" },
          { title: "MongoDB", value: "mongodb" },
          { title: "PostgreSQL", value: "postgresql" },
        ],
      },
    },
    {
      name: "category",
      title: "Catégorie",
      type: "string",
      options: {
        list: [
          { title: "Développement", value: "development" },
          { title: "Copywriting", value: "copywriting" },
          { title: "Complet", value: "complete" },
        ],
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: "demoUrl",
      title: "URL de démonstration",
      type: "url",
    },
    {
      name: "githubUrl",
      title: "URL GitHub",
      type: "url",
    },
    {
      name: "featured",
      title: "Projet mis en avant",
      type: "boolean",
      initialValue: false,
    },
    {
      name: "publishedAt",
      title: "Date de publication",
      type: "datetime",
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: "title",
      media: "image",
      subtitle: "category",
    },
  },
};
