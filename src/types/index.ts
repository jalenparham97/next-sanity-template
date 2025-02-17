import { type SanityImageSource } from "@sanity/image-url/lib/types/types";
import type { TypedObject } from "sanity";

export type SearchParams = { [key: string]: string | string[] | undefined };
export type AsyncSearchParams = Promise<SearchParams>;

export type HomePagePayload = {
  seoTitle: string;
  seoDescription: string;
  seoImage: string;
  heroSectionTitle: string;
  heroSectionDescription: string;
  heroSectionImage: string;
  featuresTitle: string;
  featuresDescription: string;
  features: {
    _key: string;
    name: string;
    description: string;
  }[];
};

export type AboutPagePayload = {
  seoTitle: string;
  seoDescription: string;
  seoImage: string;
  aboutHeader: string;
  aboutDescription: TypedObject;
  teamSectionHeader: string;
  teamMembers: {
    _key: string;
    name: string;
    occupation: string;
    image: SanityImageSource;
  }[];
};

export type BlogPostPayload = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  publishedAt: string;
  featuredImage: SanityImageSource;
  excerpt: string;
  author: {
    _key: string;
  } & AuthorPayload;
  categories: {
    _key: string;
    title: string;
    slug: {
      current: string;
    };
    description: string;
  }[];
  tags: string[];
  content: TypedObject[];
  seo: {
    metaTitle: string;
    metaDescription: string;
    ogImage: SanityImageSource;
  };
  status: string;
};

export type CategoryPayload = {
  _id: string;
  title: string;
  slug: {
    current: string;
  };
  description: string;
};

export type AuthorPayload = {
  _id: string;
  name: string;
  picture: SanityImageSource;
};
