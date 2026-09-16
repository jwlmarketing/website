import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// Chemins matchés exactement uniquement (pas de sous-routes réelles derrière)
const CMS_PROBE_EXACT_PATHS = ["/admin"];

const CMS_PROBE_PATHS = [
  "/wp-admin",
  "/wp-login.php",
  "/wp-content",
  "/wp-includes",
  "/wp-json",
  "/wordpress",
  "/xmlrpc.php",
  "/phpmyadmin",
  "/pma",
  "/administrator",
  "/cpanel",
  "/webmail",
  "/.env",
  "/.git",
  "/config.php",
  "/wp-config.php",
  "/user/login",
  "/typo3",
  "/joomla",
  "/craft",
  "/umbraco",
];

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;
  const normalized = pathname.replace(/\/+$/, "").toLowerCase() || "/";

  const isProbe =
    CMS_PROBE_EXACT_PATHS.includes(normalized) ||
    CMS_PROBE_PATHS.some((p) => normalized === p || normalized.startsWith(`${p}/`));

  if (isProbe) {
    const url = request.nextUrl.clone();
    url.pathname = "/pas-de-cms";
    url.searchParams.set("from", pathname);
    return NextResponse.rewrite(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/admin",
    "/wp-admin/:path*",
    "/wp-login.php",
    "/wp-content/:path*",
    "/wp-includes/:path*",
    "/wp-json/:path*",
    "/wordpress/:path*",
    "/xmlrpc.php",
    "/phpmyadmin/:path*",
    "/pma/:path*",
    "/administrator/:path*",
    "/cpanel/:path*",
    "/webmail/:path*",
    "/.env",
    "/.git/:path*",
    "/config.php",
    "/wp-config.php",
    "/user/login",
    "/typo3/:path*",
    "/joomla/:path*",
    "/craft/:path*",
    "/umbraco/:path*",
  ],
};
