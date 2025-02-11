import { type SanityImageSource } from '@sanity/image-url/lib/types/types';
import type { TypedObject } from 'sanity';

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
