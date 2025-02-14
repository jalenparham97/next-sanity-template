import { SanityBlockRenderer } from "@/components/sanity-block-renderer";
import { SanityImage } from "@/components/sanity-image";
import { Badge } from '@/components/ui/badge';
import { client } from "@/sanity/sanity.client";
import { blogPostQuery } from "@/sanity/sanity.queries";
import { BlogPostPayload } from "@/types";
import { formatDate } from '@/utils/format-date';
import Link from 'next/link';

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

  console.log("post: ", post);
  
  return (
    <section className="pt-4 pb-7 px-5">
      <div className="mx-auto max-w-3xl">
        <div className="mb-8 flex items-center gap-x-4">
          <Link href={`/blog?category=${post.categories[0].slug.current}`}>
            <Badge variant="default" className="py-2 px-4">
              {post.categories[0].title}
            </Badge>
          </Link>
          <p className="text-gray-500 text-sm">{formatDate(post.publishedAt)}</p>
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
