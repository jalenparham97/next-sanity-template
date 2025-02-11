import { IconHome } from '@tabler/icons-react';
import { defineArrayMember, defineField, defineType } from 'sanity';

export const homeSchema = defineType({
  name: 'homePage',
  title: 'Home Page',
  type: 'document',
  icon: IconHome,
  // Uncomment below to have edits publish automatically as you type
  // liveEdit: true,
  groups: [
    {
      name: 'seo',
      title: 'SEO',
    },
    {
      name: 'heroSection',
      title: 'Hero Section',
    },
    {
      name: 'featuresSection',
      title: 'Features Section',
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

    // Hero Section
    defineField({
      name: 'heroSectionTitle',
      title: 'Hero Section Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'heroSection',
    }),
    defineField({
      name: 'heroSectionDescription',
      title: 'Hero Section Description',
      type: 'string',
      group: 'heroSection',
    }),
    defineField({
      name: 'heroSectionImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      group: 'heroSection',
    }),

    // Services Section
    defineField({
      name: 'featuresTitle',
      title: 'Features Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
      group: 'featuresSection',
    }),
    defineField({
      name: 'featuresDescription',
      title: 'Features Description',
      type: 'text',
      group: 'featuresSection',
    }),
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'inline',
          fields: [
            { type: 'string', name: 'name' },
            { type: 'text', name: 'description' },
          ],
        }),
      ],
      group: 'featuresSection',
    }),
  ],
  preview: {
    select: {
      title: 'seoTitle',
    },
    prepare({ title }) {
      return {
        subtitle: 'Home Page',
        title,
      };
    },
  },
});
