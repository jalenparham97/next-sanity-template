import { Container } from '@/components/ui/container';
import { HomePagePayload } from '@/types';

interface FeaturesProps {
  pageData: HomePagePayload | null;
}

export function Features({ pageData }: FeaturesProps) {
  // Default to an empty object to allow previews on non-existent documents
  const page = pageData;

  return (
    <section
      id="features"
      aria-label="Features for building a portfolio"
      className="py-20"
    >
      <Container>
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-2xl md:text-3xl font-bold leading-10 text-gray-800">
            {page?.featuresTitle}
          </h2>
          <p className="mt-6 text-lg text-gray-700 font-light tracking-wide">
            {page?.featuresDescription}
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-4 text-sm sm:grid-cols-2 lg:max-w-none lg:grid-cols-4"
        >
          {page?.features?.map((feature) => (
            <li
              key={feature._key}
              className="rounded-2xl border border-gray-200 p-6 shadow"
            >
              <h3 className="font-semibold text-lg">{feature.name}</h3>
              <p className="mt-2 text-gray-700 text-base font-light">
                {feature.description}
              </p>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
