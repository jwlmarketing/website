import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/seo-aix-en-provence",
        destination: "/audit-seo-aix-en-provence",
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
      {
        source: "/consultant-freelance-seo-bordeaux-jwl-marketing-2",
        destination: "/consultant-seo-bordeaux-jwl-marketing",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
