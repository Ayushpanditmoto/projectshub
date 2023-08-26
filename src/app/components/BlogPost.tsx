import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";

const getPostMetadata = () => {
    // grabbing blog posts from posts dir
    const folder = "src/posts";
    const files = fs.readdirSync(folder);
    console.log("HERE" + files)

    // filter for only posts ending in .md
    const markdownPosts = files.filter((file) => file.endsWith(".md"));
    // remove .md from name for slug
    const slugs = markdownPosts.map((files) => files.replace('.md', ""));
    return slugs;
}



function BlogPost() {
    const postMetadata = getPostMetadata();
    const postPreviews = postMetadata.map((slug) => (
        <div key={slug}>
            <Link href={`/posts/${slug}`}>
                <h2>{slug} Hello!</h2>
            </Link>
        </div>

    ));
    return (
        <>
            <div className="flex flex-col overflow-hidden rounded-lg shadow-md">
                <div>{postPreviews}</div>

            </div>
        </>
    );
}

export default BlogPost;
