"use client";

import { useLiveQuery } from "next-sanity/preview";

import { blogPostsQuery, homePageQuery } from "@/sanity/sanity.queries";
import type { BlogPostPayload, HomePagePayload } from "@/types";

import { BlogPage, type BlogPageProps } from "./blog-page";

export function BlogPagePreview({
  pageData: initialData,
  postsData: initialPosts,
}: BlogPageProps) {
  const [pageData] = useLiveQuery<HomePagePayload | null>(
    initialData,
    homePageQuery,
  );

  const [postsData] = useLiveQuery<BlogPostPayload[] | null>(
    initialPosts,
    blogPostsQuery,
  );

  if (!pageData) {
    return (
      <div className="text-center">
        Please start editing your Blog document to see the preview!
      </div>
    );
  }

  return <BlogPage pageData={pageData} postsData={postsData} />;
}
