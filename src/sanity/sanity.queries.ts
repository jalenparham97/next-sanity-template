import { groq } from 'next-sanity';

export const homePageQuery = groq`
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
`;

export const aboutPageQuery = groq`
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
`;
