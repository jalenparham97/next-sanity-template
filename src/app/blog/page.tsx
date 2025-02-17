import { type Metadata } from "next";
import { draftMode } from "next/headers";
import { notFound } from "next/navigation";

import { BlogPage } from "@/components/pages/blog/blog-page";
import { BlogPagePreview } from "@/components/pages/blog/blog-page-preview";
import { env } from "@/env";
import { getClient } from "@/sanity/sanity.client";
import {
  blogPostsQuery,
  categoriesQuery,
  homePageQuery,
} from "@/sanity/sanity.queries";
import {
  BlogPostPayload,
  CategoryPayload,
  type HomePagePayload,
} from "@/types";
import { defineMetadata } from "@/utils/metadata";
import { Suspense } from "react";

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

export default async function BlogPageRoute() {
  const preview = (await draftMode()).isEnabled
    ? { token: env.SANITY_API_READ_TOKEN }
    : undefined;

  const client = getClient(preview);
  const posts = await client.fetch<BlogPostPayload[] | null>(blogPostsQuery);
  const categories = await client.fetch<CategoryPayload[] | null>(
    categoriesQuery,
  );

  // if (!data && !preview) {
  //   notFound();
  // }

  return preview ? (
    <Suspense>
      <BlogPagePreview postsData={posts} categoriesData={categories} />
    </Suspense>
  ) : (
    <Suspense>
      <BlogPage postsData={posts} categoriesData={categories} />
    </Suspense>
  );
}
