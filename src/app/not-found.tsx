import React from "react";
import Link from "next/link";
import Image from "next/image";

function Page() {
  return (
    <div className="container p-5 mx-auto max-w-6xl">
      <div className="flex flex-col items-center justify-center lg:justify-between space-y-8 lg:space-y-0 ">
        <div className="flex items-center justify-center mx-auto">
          <Image
            alt="404"
            src="/static/error.png"
            width={430}
            height={430}
            className="h-90 w-90"
          />
        </div>
        <div className="flex flex-col items-center justify-center">
          <div className="flex-1 max-w-md lg:max-w-xl lg:text-center space-y-3 md:space-y-6">
            <h1 className="font-bold text-xl md:text-4xl">OPPS! LOST?</h1>
            <p className="text-center lg:text-center text-md md:text-2xl lg:text-xl">
              Seems like you’ve landed in the wrong page. Don’t worry, We’ve got
              you. Let’s take you back to where it’s safe.
            </p>
            <Link href="/">
              <div className="py-1">
                <p className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-2 px-4 rounded-full">
                  Take me back Home
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
