import React from "react";
import Image from "next/image";
import Link from "next/link";

function Card() {
  return (
    <Link href="/blog/first-blog-post">
      <div className="w-full max-w-sm mx-auto">
        <div className="bg-white shadow-md rounded-md overflow-hidden">
          {/* Blog post image */}
          <div className="relative h-52">
            <Image
              src="https://unsplash.com/photos/wX2L8L-fGeA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8MXx8Z2l0aHVifGVufDB8fHx8MTY5Mjk4MzkxNnww&force=true&w=2400" // Replace with your image URL
              alt="Blog Post"
              fill
              priority
              style={{ objectFit: "cover" }}
            />
          </div>

          {/* Blog post content */}
          <div className="p-4">
            <h2 className="text-xl font-semibold text-gray-800">
              Blog Post Title
            </h2>
            <p className="text-gray-600 mt-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              tristique, justo et laoreet aliquet.
            </p>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center">
                <Image
                  src="https://unsplash.com/photos/iEEBWgY_6lA/download?ixid=M3wxMjA3fDB8MXxzZWFyY2h8Mnx8dXNlcnxlbnwwfHx8fDE2OTI5ODQ5MDF8MA&force=true&w=640" // Replace with author's avatar
                  alt="Author"
                  width={24}
                  height={24}
                  className="rounded-full"
                  style={{ objectFit: "cover" }}
                />
                <span className="text-gray-700 ml-2">Author Name</span>
              </div>
              <span className="text-gray-500">July 26, 2023</span>
            </div>
          </div>
        </div>
      </div>
    </Link>
  );
}

export default Card;
