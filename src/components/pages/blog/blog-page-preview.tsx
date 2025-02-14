"use client";

import { useLiveQuery } from "next-sanity/preview";

import { blogPostsQuery, categoriesQuery } from "@/sanity/sanity.queries";
import type { BlogPostPayload, CategoryPayload } from "@/types";

import { BlogPage, type BlogPageProps } from "./blog-page";

export function BlogPagePreview({
  postsData: initialPosts,
  categoriesData: initialCategories,
}: BlogPageProps) {

  const [postsData] = useLiveQuery<BlogPostPayload[] | null>(
    initialPosts,
    blogPostsQuery
  );

  const [categoriesData] = useLiveQuery<CategoryPayload[] | null>(
    initialCategories,
    categoriesQuery
  );

  // if (!pageData) {
  //   return (
  //     <div className="text-center">
  //       Please start editing your Blog document to see the preview!
  //     </div>
  //   );
  // }

  return (
    <BlogPage
      postsData={postsData}
      categoriesData={categoriesData}
    />
  );
}
