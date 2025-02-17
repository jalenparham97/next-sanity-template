import { IconUser } from "@tabler/icons-react";
import { defineField, defineType } from "sanity";

export const authorSchema = defineType({
  name: "author",
  title: "Author",
  icon: IconUser,
  type: "document",
  fields: [
    defineField({
      name: "name",
      title: "Name",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "picture",
      title: "Picture",
      type: "image",
      fields: [
        {
          name: "alt",
          type: "string",
          title: "Alternative text",
          description: "Important for SEO and accessiblity.",
          validation: (rule) => {
            return rule.custom((alt, context) => {
              const doc = context.document as {
                picture?: { asset?: { _ref?: string } };
              };
              if (doc?.picture?.asset?._ref && !alt) {
                return "Required";
              }
              return true;
            });
          },
        },
      ],
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
  ],
});
