/** @type {import('next').NextConfig} */

module.exports = {
  // Append the default value with md extensions
  pageExtensions: ["ts", "tsx", "js", "jsx", "html"],
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    domains: ["res.cloudinary.com"],
  },
  compiler: {
    removeConsole: true,
  },
};

// const nextConfig = {
//   reactStrictMode: true,
// }

// module.exports = nextConfig
