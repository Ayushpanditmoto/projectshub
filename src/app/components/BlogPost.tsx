import React from "react";
import Image from "next/image";
import Link from "next/link";
import fs from "fs";
const path = require('path');


const getPostMetadata = () => {
    // grabbing blog posts from posts dir
    const directoryPath = path.join(__dirname, 'Documents');
    console.log(directoryPath)
    const folder = "blog/";
    const files = fs.readdirSync(folder);


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
            <Link href={`/blog/${slug}`}>
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
