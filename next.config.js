const withMDX = require("@next/mdx")({
  extension: /\.mdx?$/,
  options: {
    // If you use remark-gfm, you'll need to use next.config.mjs
    // as the package is ESM only
    // https://github.com/remarkjs/remark-gfm#install
    remarkPlugins: [],
    rehypePlugins: [],
    // If you use `MDXProvider`, uncomment the following line.
    // providerImportSource: "@mdx-js/react",
  },
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "images.unsplash.com",
      "unsplash.com",
      "cdn.pixabay.com",
      "cdn.statically.io",
      "source.unsplash.com",
    ],
  },
  future: {
    webpack5: true,   
  },

  webpack(config) {
    config.resolve.fallback = {
      ...config.resolve.fallback,  

      fs: false, // the solution
    };
    
    return config;
  },
};

module.exports = withMDX(nextConfig);
