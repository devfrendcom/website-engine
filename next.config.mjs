/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: [
      "via.placeholder.com",
      "i.ibb.co",
      "images.unsplash.com" // ✅ Add this line
    ],
  },
};

export default nextConfig;
