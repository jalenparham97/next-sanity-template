"use client";

import { CodeBlock } from "@/components/ui/code-block";
import { urlForImage } from "@/sanity/sanity.helpers";
import { PortableText } from "@portabletext/react";
import { getImageDimensions, SanityImageAsset } from "@sanity/asset-utils";
import Image from "next/image";
import { type TypedObject } from "sanity";

interface PortableTextImageProps {
  value: SanityImageAsset & {
    alt?: string;
  };
}

const PortableTextImageComponent = ({ value }: PortableTextImageProps) => {
  const { width, height } = getImageDimensions(value);
  return (
    <Image
      src={urlForImage(value).url()}
      alt={value.alt || ""}
      loading="lazy"
      width={width}
      height={height}
    />
  );
};

const portableTextComponents = {
  types: {
    image: PortableTextImageComponent,
    // Any other custom types you have in your content
    // Examples: mapLocation, contactForm, code, featuredProjects, latestNews, etc.
    code: ({ value }: { value: { language: string; code: string } }) => {
      return <CodeBlock language={value.language} code={value.code} />;
    },
  },
};

interface Props {
  value: TypedObject | TypedObject[];
}

export function SanityBlockRenderer({ value }: Props) {
  return <PortableText value={value} components={portableTextComponents} />;
}
