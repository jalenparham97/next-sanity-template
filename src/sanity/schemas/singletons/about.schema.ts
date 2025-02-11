import { IconUsersGroup } from '@tabler/icons-react';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const aboutSchema = defineType({
  name: 'aboutPage',
  title: 'About Page',
  type: 'document',
  icon: IconUsersGroup,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'aboutSection',
      title: 'About Section',
    },
    {
      name: 'teamSection',
      title: 'Team Section',
    },
  ],
  fields: [
    defineField({
      name: 'seoTitle',
      title: 'SEO title',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoDescription',
      title: 'SEO description',
      type: 'string',
      group: 'seo',
    }),
    defineField({
      name: 'seoImage',
      title: 'Image',
      type: 'image',
      group: 'seo',
    }),

    // About Section
    defineField({
      name: 'aboutHeader',
      title: 'About Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'aboutSection',
    }),
    defineField({
      name: 'aboutDescription',
      title: 'About Description',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'block',
        }),
      ],
      validation: (Rule) => Rule.required(),
      group: 'aboutSection',
    }),

    // Team Section
    defineField({
      name: 'teamSectionHeader',
      title: 'Team Section Header',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'teamSection',
    }),
    defineField({
      name: 'teamMembers',
      title: 'Team Members',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'inline',
          fields: [
            { type: 'string', name: 'name' },
            { type: 'string', name: 'occupation' },
            { type: 'image', name: 'image' },
          ],
        }),
      ],
      group: 'teamSection',
    }),
  ],
  preview: {
    select: {
      title: 'seoTitle',
    },
    prepare({ title }) {
      return {
        subtitle: 'About Page',
        title,
      };
    },
  },
});
