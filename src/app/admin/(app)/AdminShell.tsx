"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import type { JwlUser } from "@/lib/jwlAuth";

const NAV = [
  {
    label: "Tableau de bord",
    items: [{ href: "/admin/blog", match: "/admin/blog", label: "Vue d'ensemble", icon: "grid" }],
  },
  {
    label: "Contenu",
    items: [
      { href: "/admin/blog/articles", match: "/admin/blog/articles", label: "Articles", icon: "doc" },
      { href: "/admin/blog/new", match: "/admin/blog/new", label: "Nouvel article", icon: "plus" },
      { href: "/admin/blog/categories", match: "/admin/blog/categories", label: "Catégories", icon: "categories" },
      { href: "/admin/blog/tags", match: "/admin/blog/tags", label: "Tags", icon: "tag" },
    ],
  },
  {
    label: "Médias",
    items: [{ href: "/admin/blog/media", match: "/admin/blog/media", label: "Médiathèque", icon: "media" }],
  },
  {
    label: "Communauté",
    items: [{ href: "/admin/blog/comments", match: "/admin/blog/comments", label: "Commentaires", icon: "comments" }],
  },
  {
    label: "Configuration",
    items: [{ href: "/admin/blog/settings", match: "/admin/blog/settings", label: "Paramètres", icon: "settings" }],
  },
];

const TITLES: Record<string, string> = {
  "/admin/blog": "Tableau de bord",
  "/admin/blog/articles": "Articles",
  "/admin/blog/new": "Nouvel article",
  "/admin/blog/categories": "Catégories",
  "/admin/blog/tags": "Tags",
  "/admin/blog/media": "Médiathèque",
  "/admin/blog/comments": "Commentaires",
  "/admin/blog/settings": "Paramètres",
};

function NavIcon({ name }: { name: string }) {
  const common = {
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 2,
    width: 16,
    height: 16,
    "aria-hidden": true as const,
  };
  if (name === "grid")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="7" height="7" />
        <rect x="14" y="3" width="7" height="7" />
        <rect x="14" y="14" width="7" height="7" />
        <rect x="3" y="14" width="7" height="7" />
      </svg>
    );
  if (name === "doc")
    return (
      <svg {...common}>
        <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
        <polyline points="14 2 14 8 20 8" />
      </svg>
    );
  if (name === "categories")
    return (
      <svg {...common}>
        <path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h5l2 3h9a2 2 0 0 1 2 2z" />
      </svg>
    );
  if (name === "tag")
    return (
      <svg {...common}>
        <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z" />
        <line x1="7" y1="7" x2="7.01" y2="7" />
      </svg>
    );
  if (name === "media")
    return (
      <svg {...common}>
        <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
        <circle cx="8.5" cy="8.5" r="1.5" />
        <polyline points="21 15 16 10 5 21" />
      </svg>
    );
  if (name === "comments")
    return (
      <svg {...common}>
        <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
      </svg>
    );
  if (name === "settings")
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
      </svg>
    );
  return (
    <svg {...common}>
      <line x1="12" y1="5" x2="12" y2="19" />
      <line x1="5" y1="12" x2="19" y2="12" />
    </svg>
  );
}

export default function AdminShell({
  user,
  logoutAction,
  children,
}: {
  user: JwlUser | null;
  logoutAction: () => Promise<void>;
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  // Login page (or any unauthenticated screen) renders standalone, no chrome.
  if (!user || pathname === "/admin/login") {
    return <div style={{ fontFamily: "'DM Sans', sans-serif" }}>{children}</div>;
  }

  const displayName = [user.firstname, user.lastname].filter(Boolean).join(" ") || user.email;
  const avatar =
    user.avatar ||
    `https://api.dicebear.com/8.x/initials/svg?seed=${encodeURIComponent(user.email)}&backgroundColor=1A1A1A&textColor=A8874A&fontSize=38&size=128`;

  return (
    <div className="admin-body">
      <aside className="admin-sidebar">
        <div className="sidebar-brand">
          <svg width="28" height="28" viewBox="0 0 40 40" fill="none">
            <rect width="40" height="40" rx="8" fill="#A8874A" />
            <text
              x="50%"
              y="54%"
              dominantBaseline="middle"
              textAnchor="middle"
              fontFamily="DM Sans,sans-serif"
              fontWeight="700"
              fontSize="14"
              fill="#fff"
            >
              JWL
            </text>
          </svg>
          <span>JWL Marketing Blog</span>
        </div>

        <nav className="sidebar-nav" aria-label="Navigation admin">
          {NAV.map((section) => (
            <div className="nav-section" key={section.label}>
              <span className="nav-label">{section.label}</span>
              {section.items.map((item) => {
                const active = pathname === item.match;
                return (
                  <Link
                    key={item.href + item.label}
                    href={item.href}
                    className={`nav-item ${active ? "active" : ""}`}
                  >
                    <NavIcon name={item.icon} />
                    {item.label}
                  </Link>
                );
              })}
            </div>
          ))}
        </nav>

        <div className="sidebar-footer">
          <img src={avatar} alt={displayName} className="avatar-sm" width={32} height={32} />
          <div className="sf-info">
            <span className="sf-name">{displayName}</span>
            <span className="sf-role">{user.role || (user.is_admin ? "admin" : "membre")}</span>
          </div>
          <form action={logoutAction}>
            <button type="submit" className="sf-logout" aria-label="Déconnexion" title="Déconnexion">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
                <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
                <polyline points="16 17 21 12 16 7" />
                <line x1="21" y1="12" x2="9" y2="12" />
              </svg>
            </button>
          </form>
        </div>
      </aside>

      <div className="admin-content">
        <header className="admin-topbar">
          <h1 className="topbar-title">{TITLES[pathname] || "Modifier l'article"}</h1>
          <div className="topbar-actions">
            <a href="/blog" target="_blank" className="btn-topbar" rel="noreferrer">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={16} height={16}>
                <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                <polyline points="15 3 21 3 21 9" />
                <line x1="10" y1="14" x2="21" y2="3" />
              </svg>
              Voir le blog
            </a>
            <Link href="/admin/blog/new" className="btn-primary btn-sm">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} width={14} height={14}>
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
              Nouvel article
            </Link>
          </div>
        </header>
        <div className="admin-main">{children}</div>
      </div>
    </div>
  );
}
