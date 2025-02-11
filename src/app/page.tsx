import { type Metadata } from 'next';
import { draftMode } from 'next/headers';
import { notFound } from 'next/navigation';

import { HomePage } from '@/components/pages/home/home-page';
import { HomePagePreview } from '@/components/pages/home/home-page-preview';
import { env } from '@/env';
import { getClient } from '@/sanity/sanity.client';
import { homePageQuery } from '@/sanity/sanity.queries';
import { type HomePagePayload } from '@/types';
import { defineMetadata } from '@/utils/metadata';

export async function generateMetadata(): Promise<Metadata> {
  const preview = (await draftMode()).isEnabled
    ? { token: env.SANITY_API_READ_TOKEN }
    : undefined;
  const client = getClient(preview);

  const page = await client.fetch<HomePagePayload | null>(homePageQuery);

  return defineMetadata({
    title: page?.seoTitle,
    description: page?.seoDescription,
  });
}

export default async function HomePageRoute() {
  const preview = (await draftMode()).isEnabled
    ? { token: env.SANITY_API_READ_TOKEN }
    : undefined;

  const client = getClient(preview);
  const data = await client.fetch<HomePagePayload | null>(homePageQuery);

  if (!data && !preview) {
    notFound();
  }

  return preview ? (
    <HomePagePreview pageData={data} />
  ) : (
    <HomePage pageData={data} />
  );
}
