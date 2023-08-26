import React from "react";
import Image from "next/image";

function Card() {
  return (
    <div className="w-full max-w-sm mx-auto">
      <div className="bg-white shadow-md rounded-md overflow-hidden">
        {/* Blog post image */}
        <div className="relative h-52">
          <Image
            src="https://unsplash.com/photos/cpvC2ki47e8/download?ixid=M3wxMjA3fDB8MXxhbGx8NDB8fHx8fHwyfHwxNjkzMDM1MDEwfA&force=true&w=2400" // Replace with your image URL
            alt="Blog Post"
            layout="fill"
            objectFit="cover"
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
                width={40}
                height={40}
                className="rounded-full"
              />
              <span className="text-gray-700 ml-2">Author Name</span>
            </div>
            <span className="text-gray-500">Published on: July 26, 2023</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Card;
