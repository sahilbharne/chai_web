/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    domains: [
      'avatars.githubusercontent.com', // GitHub avatars
      'lh3.googleusercontent.com',    // Google auth
      'platform-lookaside.fbsbx.com', // Facebook auth
      's.gravatar.com',               // Gravatar
      'images.unsplash.com'           // If using Unsplash images
    ],
  }
};

export default nextConfig;
