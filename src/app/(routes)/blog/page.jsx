import Link from "next/link";
import { getAllPostsMeta } from "@/lib/mdx";

const Page = async () => {
  const posts = await getAllPostsMeta();

  return (
    <section className="py-12">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold mb-8">All Posts</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts?.map((post) => (
            <Link href={`blog/${post.slug}`} key={post?.title}>
              <div className="block p-6 rounded-lg shadow-md border hover:bg-gray-100">
                <h3 className="text-xl font-semibold mb-2">{post.title}</h3>
                <p className="text-gray-600 mb-2">By {post.author}</p>
                <time className="text-sm text-gray-400">
                  {post.publishDate}
                </time>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Page;
