import { Features } from '@/components/features';
import { Hero } from '@/components/hero';
import { HomePagePayload } from '@/types';

export interface HomePageProps {
  pageData: HomePagePayload | null;
}

export function HomePage({ pageData }: HomePageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const page = pageData;

  return (
    <section>
      <Hero
        title={page?.heroSectionTitle}
        description={page?.heroSectionDescription}
        imageURL={page?.heroSectionImage}
      />
      <Features pageData={page} />
    </section>
  );
}
