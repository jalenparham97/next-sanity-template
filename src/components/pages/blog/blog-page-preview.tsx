'use client';

import { useLiveQuery } from 'next-sanity/preview';

import { homePageQuery } from '@/sanity/sanity.queries';
import type { HomePagePayload } from '@/types';

import { BlogPage, type BlogPageProps } from './blog-page';

export function BlogPagePreview({ pageData: initialData }: BlogPageProps) {
  const [pageData] = useLiveQuery<HomePagePayload | null>(
    initialData,
    homePageQuery
  );

  if (!pageData) {
    return (
      <div className="text-center">
        Please start editing your Blog document to see the preview!
      </div>
    );
  }

  return <BlogPage pageData={pageData} />;
}
