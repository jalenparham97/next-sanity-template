import { SanityImage } from '@/components/sanity-image';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

interface HeroProps {
  title?: string;
  description?: string;
  imageURL?: string;
}

export function Hero({ title, description, imageURL }: HeroProps) {
  return (
    <div className="pt-12 pb-20 text-center relative px-5">
      <h1 className="text-4xl max-w-3xl font-extrabold mx-auto md:text-6xl text-gray-800">
        {title}
      </h1>
      <p className="mx-auto mt-6 max-w-2xl text-lg md:text-xl font-light tracking-wide text-gray-600">
        {description}
      </p>
      <div className="mt-10 flex justify-center gap-x-6">
        <Link href="/">
          <Button size="lg">Get started free today</Button>
        </Link>
      </div>
      <div className="mt-16 flow-root sm:mt-24 mx-auto max-w-7xl">
        <div className="-m-2 rounded-xl bg-gray-900/5 p-2 ring-1 ring-inset ring-gray-900/10 lg:-m-4 lg:rounded-2xl lg:p-4">
          <SanityImage
            alt="App screenshot"
            width={2432}
            height={1442}
            src={imageURL ?? ''}
            className="rounded-xl shadow ring-1 ring-gray-900/10"
          />
        </div>
      </div>
    </div>
  );
}
