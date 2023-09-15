import React from "react";

function Tittle({title,desc}:{title:string,desc:string,
}) {
  return (
    <div className="absolute inset-0 flex justify-center items-center h-36 opacity-90 lg:h-48 title">
      <header className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            {title}
        </h1>
        <p className="mt-2 text-sm font-semibold text-gray-400">
            {desc}
        </p>
      </header>
      {/* <div class="mx-auto my-4 max-w-5xl"><ins class="adsbygoogle" data-ad-client="ca-pub-3152670624293746" data-ad-slot="5831652627" data-ad-format="auto" data-full-width-responsive="true" style="display: block; margin: 3em 0px;"></ins></div> */}
      
    </div>
  );
}

export default Tittle;
