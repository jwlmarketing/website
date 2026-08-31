import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Native module (comments DB) — must not be bundled by the build.
  serverExternalPackages: ["better-sqlite3"],
  async rewrites() {
    return [
      {
        source: "/newsletter",
        destination: "http://xoxlfwj.cluster121.hosting.ovh.net/newsletter/index.php",
      },
      {
        source: "/newsletter/admin",
        destination: "http://xoxlfwj.cluster121.hosting.ovh.net/newsletter/index.php",
      },
      {
        source: "/newsletter/admin/:path*",
        destination: "http://xoxlfwj.cluster121.hosting.ovh.net/newsletter/:path*",
      },
      {
        source: "/newsletter/:path*",
        destination: "http://xoxlfwj.cluster121.hosting.ovh.net/newsletter/:path*",
      },
    ];
  },
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
