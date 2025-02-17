import { type Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { AboutPage } from "@/components/pages/about/about-page";
import { AboutPagePreview } from "@/components/pages/about/about-page-preview";
import { env } from "@/env";
import { getClient } from "@/sanity/sanity.client";
import { aboutPageQuery } from "@/sanity/sanity.queries";
import { type AboutPagePayload } from "@/types";
import { defineMetadata } from "@/utils/metadata";

export async function generateMetadata(): Promise<Metadata> {
  const preview = (await draftMode()).isEnabled
    ? { token: env.SANITY_API_READ_TOKEN }
    : undefined;
  const client = getClient(preview);

  const page = await client.fetch<AboutPagePayload | null>(aboutPageQuery);

  return defineMetadata({
    title: page?.seoTitle,
    description: page?.seoDescription,
  });
}

export default async function AboutPageRoute() {
  const preview = (await draftMode()).isEnabled
    ? { token: env.SANITY_API_READ_TOKEN }
    : undefined;

  const client = getClient(preview);
  const data = await client.fetch<AboutPagePayload | null>(aboutPageQuery);

  if (!data && !preview) {
    notFound();
  }

  return preview ? (
    <AboutPagePreview pageData={data} />
  ) : (
    <AboutPage pageData={data} />
  );
}
