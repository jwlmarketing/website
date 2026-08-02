import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/seo-aix-en-provence",
        destination: "/google-my-business-aix-en-provence",
        permanent: true,
      },
      {
        source: "/referencement-google-aix-en-provence",
        destination: "/google-my-business-aix-en-provence",
        permanent: true,
      },
      {
        source: "/consultant-seo-aix-en-provence",
        destination: "/consultant-freelance-seo-aix-en-provence",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
