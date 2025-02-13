import { SanityImage } from "@/components/sanity-image";
import { BlogPostPayload, HomePagePayload } from "@/types";
import { formatDate } from "@/utils/format-date";
import Link from "next/link";
export interface BlogPageProps {
  pageData: HomePagePayload | null;
  postsData: BlogPostPayload[] | null;
}

export function BlogPage({ pageData, postsData }: BlogPageProps) {
  // Default to an empty object to allow previews on non-existent documents
  const page = pageData;
  const posts = postsData;

  console.log("posts: ", posts);

  return (
    <section>
      <div className="pt-12 pb-7 px-5">
        <div className="mx-auto max-w-4xl text-center ">
          <p className="text-4xl font-bold text-gray-800 sm:text-5xl">Blog</p>
        </div>
        <p className="mx-auto mt-6 max-w-2xl text-center text-lg leading-8 text-gray-700 font-light tracking-wide">
          Latest news and articles from Acme Inc.
        </p>

        <div className="mx-auto max-w-7xl xl:px-8">
          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {posts?.map((post) => (
              <article
                key={post._id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <SanityImage
                    alt={post.featuredImage.toString()}
                    src={post.featuredImage}
                    className="aspect-video w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                    width={1280}
                    height={720}
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <span className="text-gray-500">
                      {formatDate(post.publishedAt)}
                    </span>
                    <Link
                      href={`/blog/${post.categories[0].slug.current}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-gray-600 hover:bg-gray-100"
                    >
                      {post.categories[0].title}
                    </Link>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg/6 font-semibold text-gray-900 group-hover:text-gray-600">
                      <Link href={`/blog/${post.slug.current}`}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </Link>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm/6 text-gray-600">
                      {post.excerpt}
                    </p>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
