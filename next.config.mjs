/**
 * @type {import('next').NextConfig}
 */
const nextConfig = {
  reactStrictMode: true,
  env: {
    GOOGLE_TAG_MANAGER_ID: process.env.GOOGLE_TAG_MANAGER_ID,
    NEXT_PUBLIC_WEBSITE_DOMAIN: process.env.NEXT_PUBLIC_WEBSITE_DOMAIN,
  },
};

export default nextConfig;
