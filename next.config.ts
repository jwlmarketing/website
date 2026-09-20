import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Native module (comments DB) — must not be bundled by the build.
  serverExternalPackages: ["better-sqlite3"],
  experimental: {
    // Default Server Actions body limit is 1MB — too small for a real photo
    // upload (blog and réalisations media pickers both post the file through
    // a Server Action). Without this, any image over ~1MB is rejected before
    // it even reaches our code, showing as a generic upload failure.
    serverActions: {
      // No practical cap (Next requires a value; this is effectively
      // unlimited for anything a browser will realistically upload).
      bodySizeLimit: "1gb",
    },
  },
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
