import BlogPost from "../../../components/BlogPost";
import CenterLayout from "../../../components/CenterLayout";
import Markdown from "markdown-to-jsx";

import fs from "fs";
import path from "path";

const getPostContent = (slug: string) => {
  const folder = "blog/";
  const file = path.join(process.cwd(), folder, `${slug}.md`);

  try {
    const content = fs.readFileSync(file, "utf8");
    return content;
  } catch (error: any) {
    if (error.code === "ENOENT") {
      // Handle the case where the file is not found
      return ""; // You can return null or another suitable value
    } else {
      // Handle other file reading errors
      throw error;
    }
  }
};

const PostPage = (props: any) => {
  const slug = props.params.slug;
  const content = getPostContent(slug);
  return (
    <CenterLayout>
      <h1>This is: {slug}</h1>
      <Markdown>{content}</Markdown>
      <BlogPost />
    </CenterLayout>
  );
};

export default PostPage;
