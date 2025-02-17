import { Features } from "@/components/features";
import { Hero } from "@/components/hero";
import { AboutPagePayload } from "@/types";

export interface AboutPageProps {
  pageData: AboutPagePayload | null;
}

export function AboutPage({ pageData }: AboutPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const page = pageData;

  return (
    <section>
      <div>This is the about page</div>
      {/* <Hero
        title={page?.heroSectionTitle}
        description={page?.heroSectionDescription}
        imageURL={page?.heroSectionImage}
      />
      <Features pageData={page} /> */}
    </section>
  );
}
