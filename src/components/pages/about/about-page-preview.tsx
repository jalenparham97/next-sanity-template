"use client";

import { useLiveQuery } from "next-sanity/preview";

import { aboutPageQuery } from "@/sanity/sanity.queries";
import type { AboutPagePayload } from "@/types";

import { AboutPage, type AboutPageProps } from "./about-page";

export function AboutPagePreview({ pageData: initialData }: AboutPageProps) {
  const [pageData] = useLiveQuery<AboutPagePayload | null>(
    initialData,
    aboutPageQuery,
  );

  if (!pageData) {
    return (
      <div className="text-center">
        Please start editing your About document to see the preview!
      </div>
    );
  }

  return <AboutPage pageData={pageData} />;
}
