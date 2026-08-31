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
      { href: "/admin/blog", match: "/admin/blog", label: "Articles", icon: "doc" },
      { href: "/admin/blog/new", match: "/admin/blog/new", label: "Nouvel article", icon: "plus" },
    ],
  },
];

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
                const active =
                  item.href === "/admin/blog"
                    ? pathname === "/admin/blog"
                    : pathname === item.match;
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
          <h1 className="topbar-title">
            {pathname === "/admin/blog"
              ? "Articles"
              : pathname === "/admin/blog/new"
                ? "Nouvel article"
                : "Modifier l'article"}
          </h1>
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
