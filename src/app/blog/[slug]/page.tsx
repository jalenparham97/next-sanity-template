import { SanityBlockRenderer } from "@/components/sanity-block-renderer";
import { SanityImage } from "@/components/sanity-image";
import { Button } from "@/components/ui/button";
import { client } from "@/sanity/sanity.client";
import { blogPostQuery } from "@/sanity/sanity.queries";
import { sanityFetch } from "@/sanity/sanity.server";
import { BlogPostPayload } from "@/types";
import { IconArrowLeft } from "@tabler/icons-react";

type Props = {
  params: Promise<{ slug: string }>;
};

export default async function BlogPostPage({ params }: Props) {
  const post = await client.fetch<BlogPostPayload | null>(blogPostQuery, {
    slug: (await params).slug,
  });

  if (!post) {
    return null;
  }

  return (
    <section className="pt-4 pb-7 px-5">
      <div className="mx-auto max-w-3xl">
        <div className="mx-auto mb-10">
          <Button
            leftIcon={<IconArrowLeft className="size-4" />}
            size="sm"
            variant="ghost"
            href="/blog"
          >
            Back to blog
          </Button>
        </div>
        <div className="mx-auto mb-10">
          <SanityImage
            alt=""
            src={post.featuredImage}
            className="aspect-video rounded-xl bg-gray-50 object-cover"
            width={1280}
            height={720}
          />
        </div>
        <div className="prose">
          <SanityBlockRenderer value={post.content} />
        </div>
      </div>
    </section>
  );
}
