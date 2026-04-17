"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const editorialLinks = [
  { href: "/#built-form", label: "Built Form", note: "Feature" },
  { href: "/#interiors", label: "Interiors", note: "Study" },
  { href: "/#objects", label: "Objects", note: "Index" },
  { href: "/#environments", label: "Environments", note: "Closing" },
];

const shopLinks = [
  { href: "/store#clothing", label: "Clothing", note: "03 items" },
  { href: "/store#posters", label: "Posters", note: "03 items" },
  { href: "/store#objects", label: "Objects", note: "03 items" },
];

export default function Nav() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);

    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      window.removeEventListener("keydown", onKeyDown);
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const storeIsActive = pathname.startsWith("/store");

  return (
    <>
      <nav className="site-nav" aria-label="Primary">
        <div className="section-frame site-nav__bar">
          <div className="site-nav__group">
            <Link href="/" className="nav-brand">
              Ellams
            </Link>
            <span className="nav-tagline">Taste, in a world of noise.</span>
          </div>

          <div className="nav-actions">
            <Link
              href="/store"
              className={`nav-pill ${storeIsActive ? "is-active" : ""}`}
            >
              Store
            </Link>
            <button
              type="button"
              className={`nav-pill ${isOpen ? "is-active" : ""}`}
              aria-expanded={isOpen}
              aria-controls="site-drawer"
              onClick={() => setIsOpen((open) => !open)}
            >
              <span>Menu</span>
              <span className="nav-menu-icon" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>

      <div
        className={`menu-overlay ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
        onClick={() => setIsOpen(false)}
      />

      <aside
        id="site-drawer"
        className={`site-drawer ${isOpen ? "is-open" : ""}`}
        aria-hidden={!isOpen}
      >
        <div className="drawer-header">
          <div>
            <p className="section-label">Navigation</p>
            <p className="drawer-title">Editorial Index</p>
          </div>
          <button
            type="button"
            className="drawer-close"
            onClick={() => setIsOpen(false)}
          >
            Close
          </button>
        </div>

        <p className="drawer-copy">
          Ellams is an editorial archive of architecture, clothing, objects,
          and environments chosen for form, restraint, and staying power.
        </p>

        <div className="drawer-section">
          <p className="section-label">Journal</p>
          <div className="drawer-link-list">
            {editorialLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="drawer-link"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
                <span>{link.note}</span>
              </Link>
            ))}
          </div>
        </div>

        <div className="drawer-section">
          <p className="section-label">Store</p>
          <div className="drawer-link-list">
            {shopLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="drawer-link"
                onClick={() => setIsOpen(false)}
              >
                <span>{link.label}</span>
                <span>{link.note}</span>
              </Link>
            ))}
          </div>
        </div>
      </aside>
    </>
  );
}
