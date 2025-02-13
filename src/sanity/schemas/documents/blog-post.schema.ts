import { IconArticle } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

export const blogPostSchema = defineType({
  name: "post",
  title: "Blog Post",
  type: "document",
  icon: IconArticle,
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: {
        source: "title",
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "publishedAt",
      title: "Published At",
      type: "datetime",
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "featuredImage",
      title: "Featured Image",
      type: "image",
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative Text",
        },
        {
          name: "caption",
          type: "string",
          title: "Caption",
        },
      ],
    }),
    defineField({
      name: "excerpt",
      title: "Excerpt",
      type: "text",
      rows: 3,
      validation: (Rule) => Rule.max(400),
    }),
    defineField({
      name: "author",
      title: "Author",
      type: "reference",
      to: { type: "author" },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "categories",
      title: "Categories",
      type: "array",
      of: [{ type: "reference", to: { type: "category" } }],
    }),
    // defineField({
    //   name: "tags",
    //   title: "Tags",
    //   type: "array",
    //   of: [{ type: "string" }],
    //   options: {
    //     layout: "tags",
    //   },
    // }),
    defineField({
      name: "content",
      title: "Content",
      type: "array",
      of: [
        {
          type: "block",
          // styles: [
          //   { title: "Normal", value: "normal" },
          //   { title: "H1", value: "h1" },
          //   { title: "H2", value: "h2" },
          //   { title: "H3", value: "h3" },
          //   { title: "H4", value: "h4" },
          //   { title: "Quote", value: "blockquote" },
          //   { title: "Caption", value: "figcaption" },
          // ],
          // lists: [{ title: "Bullet", value: "bullet" }],
          // marks: {
          //   decorators: [
          //     { title: "Strong", value: "strong" },
          //     { title: "Emphasis", value: "em" },
          //     {
          //       title: "Caption",
          //       value: "caption",
          //       icon: () => "CAP",
          //     },
          //     {
          //       title: "Inline Code",
          //       value: "inlineCode",
          //       icon: () => "</>",
          //     },
          //   ],
          //   annotations: [
          //     {
          //       title: "URL",
          //       name: "link",
          //       type: "object",
          //       fields: [
          //         {
          //           title: "URL",
          //           name: "href",
          //           type: "url",
          //         },
          //       ],
          //     },
          //   ],
          // },
        },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              type: "string",
              title: "Alternative Text",
            },
            {
              name: "caption",
              type: "string",
              title: "Caption",
            },
          ],
        },
        {
          type: "code",
        },
      ],
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: "seo",
      title: "SEO",
      type: "object",
      fields: [
        {
          name: "metaTitle",
          title: "Meta Title",
          type: "string",
        },
        {
          name: "metaDescription",
          title: "Meta Description",
          type: "text",
          rows: 3,
          validation: (Rule) => Rule.max(400),
        },
        {
          name: "ogImage",
          title: "Open Graph Image",
          type: "image",
        },
      ],
    }),
    defineField({
      name: "status",
      title: "Status",
      type: "string",
      options: {
        list: [
          { title: "Draft", value: "draft" },
          { title: "Published", value: "published" },
          { title: "Archived", value: "archived" },
        ],
      },
      initialValue: "draft",
    }),
  ],
  preview: {
    select: {
      title: "title",
      author: "author.name",
      media: "featuredImage",
    },
    prepare(selection) {
      const { author } = selection;
      return { ...selection, subtitle: author && `by ${author}` };
    },
  },
});
