import BlogPost from "../../../components/BlogPost";
import CenterLayout from "../../../components/CenterLayout";
import fs from "fs";
import Markdown from "markdown-to-jsx";

const getPostContent = (slug: string) => {
  const folder = "blog/";
  const file = `${folder}${slug}.md`;
  const content = fs.readFileSync(file, "utf8");
  return content;
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
