/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "localhost",
      "res.cloudinary.com",
      "images.unsplash.com",
      "cdn.pixabay.com",
      "cdn.statically.io",
      "source.unsplash.com",
    ],
  },
};

module.exports = nextConfig;
