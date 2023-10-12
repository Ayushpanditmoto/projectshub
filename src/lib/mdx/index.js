import fs from "fs";
import path from "path";
import { compileMDX } from "next-mdx-remote/rsc";



export const getPostBySlug = async ({slug, folder}) => {
  const rootDirectory = path.join(process.cwd(), "blog",folder);
  const realSlug = slug.replace(/\.mdx$/, "");
  const filePath = path.join(rootDirectory, `${realSlug}.mdx`);

  try {
    const fileContent = await fs.promises.readFile(filePath, { encoding: "utf8" });

    const { frontmatter, content } = await compileMDX({
      source: fileContent,
      options: { parseFrontmatter: true },
    });

    return { meta: { ...frontmatter, slug: realSlug }, content };
  } catch (error) {
    if (error.code === 'ENOENT') {
      return null; // File not found
    } else {
      throw error; // Other file read or parse errors
    }
  }
};

export const getAllPostsMeta = async ({ BlogPath }) => {
  const rootDirectory = path.join(process.cwd(), "blog", BlogPath);

  if (!fs.existsSync(rootDirectory)) {
    console.error(`Directory ${rootDirectory} does not exist.`);
    return [];
  }

  try {
    const files = await fs.promises.readdir(rootDirectory);
    let posts = [];

    for (const file of files) {
      try {
        const result = await getPostBySlug(file);

        if (result !== null) {
          const { meta } = result;
          posts.push(meta);
        } else {
          console.warn(`File ${file} is not a valid post`);
        }
      } catch (error) {
        console.error(`Error processing file ${file}: ${error.message}`);
      }
    }

    return posts;
  } catch (error) {
    console.error(`Error reading directory: ${error.message}`);
    return [];
  }
};

