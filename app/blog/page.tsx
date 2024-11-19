import getAllPosts from "@/lib/posts";
import { BlogPostsResponse } from "@/types/blog";
import Head from "next/head";
import Link from "next/link";

export default async function BlogHome() {
  const allPosts: BlogPostsResponse = await getAllPosts();

  return (
    <>
      <Head>
        <title>Blog</title>
      </Head>
      <div className="container mx-auto px-6 py-10">
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold tracking-tight">Blog</h1>
          <p className="text-lg text-muted-foreground">
            Read our latest articles and insights
          </p>
        </div>
        <main>
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {allPosts.nodes.map((post) => (
              <div key={post.slug} className="shadow-lg p-4 rounded-lg">
                <h2>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="text-primary hover:underline"
                  >
                    {post.title}
                  </Link>
                </h2>
                <p>
                  {new Date(post.date).toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </p>
                <div
                  dangerouslySetInnerHTML={{ __html: post.excerpt }}
                  className="text-muted-foreground"
                ></div>
              </div>
            ))}
          </section>
        </main>
      </div>
    </>
  );
}
