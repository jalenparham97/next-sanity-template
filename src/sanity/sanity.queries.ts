import { defineQuery, groq } from "next-sanity";

export const homePageQuery = defineQuery(`
  *[_type == "homePage"][0]{
    _id,
    seoTitle,
    seoDescription,
    heroSectionBackgroundImage,
    heroSectionImage,
    heroSectionTitle,
    heroSectionDescription,
    featuresTitle,
    featuresDescription,
    features,
  }
`);

export const aboutPageQuery = defineQuery(`
  *[_type == "aboutPage"][0]{
    _id,
    seoTitle,
    seoDescription,
    seoImage,
    heroSectionTitle,
    heroSectionBackgroundImage,
    aboutHeader,
    aboutDescription,
    teamSectionHeader,
    teamMembers,
  }
`);

export const blogPostsQuery = defineQuery(`
  *[_type == "post"]{
    _id,
    title,
    slug,
    publishedAt,
    featuredImage,
    excerpt,
    author->{
      name,
      picture
    },
    categories[]->{
      title,
      slug,
      description
    },
    tags,
    content,
    seo{
      metaTitle,
      metaDescription,
      ogImage
    },
    status
  }
`);

export const blogPostQuery = defineQuery(`
  *[_type == "post" && slug.current == $slug][0]{
    _id,
    title,
    slug,
    publishedAt,
    featuredImage,
    excerpt,
    author->{
      name,
      picture
    },
    categories[]->{
      title,
      slug,
      description
    },
    tags,
    content,
    seo{
      metaTitle,
      metaDescription,
      ogImage
    },
    status
  }
`);

export const categoriesQuery = defineQuery(`
  *[_type == "category"]{
    _id,
    title,
    slug,
    description
  }
`);

export const authorsQuery = defineQuery(`
  *[_type == "author"][0]{
    _id,
    name,
    picture
  }
`);
