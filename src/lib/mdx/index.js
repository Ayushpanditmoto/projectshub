import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";

const rootDirectory = path.join(process.cwd(), "blog");

export const getPostBySlug = async (slug) => {
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);
  if (!fs.existsSync(filePath)) {
    // Handle the case where the file doesn't exist.
    return null; // or throw an error, or return an appropriate response
  }

  const fileContent = fs.readFileSync(filePath, { encoding: "utf8" });

  const { frontmatter, content } = await compileMDX({
    source: fileContent,
    options: { parseFrontmatter: true },
  });

  return { meta: { ...frontmatter, slug: realSlug }, content };
};

export const getAllPostsMeta = async () => {
  const files = fs.readdirSync(rootDirectory);

  let posts = [];

  for (const file of files) {
    const result = await getPostBySlug(file);

    if (result !== null) {
      const { meta } = result;
      posts.push(meta);
    } else {
      // Handle the case where getPostBySlug returned null for this file.
      // You can log an error or take any appropriate action.
    }
  }

  return posts;
};
