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

  // Transmet le pathname au root layout (Server Component) via un header,
  // pour déterminer <html lang="fr"|"en"> sans dupliquer les 55 pages
  // FR/EN dans des route groups séparés (cf. lib/seo.ts + app/layout.tsx).
  const requestHeaders = new Headers(request.headers);
  requestHeaders.set("x-pathname", pathname);
  return NextResponse.next({ request: { headers: requestHeaders } });
}

export const config = {
  matcher: [
    // Toutes les routes sauf assets statiques et API (pour le header x-pathname),
    // en couvrant aussi les chemins de sondes CMS ci-dessus.
    "/((?!api|_next/static|_next/image|favicon.ico).*)",
  ],
};
