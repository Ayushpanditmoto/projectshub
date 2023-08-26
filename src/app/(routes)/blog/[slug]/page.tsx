import { GetStaticPaths, GetStaticProps } from "next";
import fs from "fs";
import path from "path";
import matter from "gray-matter";
import { MDXRemote } from "next-mdx-remote";

const BlogPost = ({
  source,
  frontMatter,
}: {
  source: any;
  frontMatter: any;
}) => {
  return (
    <article>
      <h1>{frontMatter.title}</h1>
      <p>{frontMatter.date}</p>
      <MDXRemote {...source} />
    </article>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  const postsDirectory = path.join(process.cwd(), "mdx");
  console.log(postsDirectory);
  const filenames = fs.readdirSync(postsDirectory);

  const slugs = filenames.map((filename) => {
    const filePath = path.join(postsDirectory, filename);
    const fileContents = fs.readFileSync(filePath, "utf-8");
    const { data } = matter(fileContents);
    return data.slug;
  });

  const paths = slugs.map((slug) => ({
    params: { slug },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), "mdx");
  const filePath = path.join(postsDirectory, `${slug}.mdx`);
  const fileContents = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContents);

  return {
    props: {
      source: content,
      frontMatter: data,
    },
  };
};

export default BlogPost;
