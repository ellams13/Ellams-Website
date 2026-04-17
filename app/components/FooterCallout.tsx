import Link from "next/link";

const footerLinks = [
  { href: "/#built-form", label: "Built Form" },
  { href: "/#objects", label: "Objects" },
  { href: "/store", label: "Store" },
  { href: "/store#posters", label: "Posters" },
];

export default function FooterCallout() {
  const year = new Date().getFullYear();

  return (
    <footer className="mt-auto">
      <section className="page-section footer-callout">
        <div className="section-frame footer-callout__grid">
          <div>
            <p className="footer-callout__eyebrow">Closing Note</p>
            <h2 className="footer-callout__title">
              Built for readers who want taste, not noise.
            </h2>
            <p className="footer-callout__copy">
              Ellams keeps architecture, objects, and clothing in one calm,
              editorial frame so the work can breathe.
            </p>
          </div>

          <div className="footer-link-list" aria-label="Footer links">
            {footerLinks.map((link) => (
              <Link key={link.href} href={link.href} className="footer-link">
                <span>{link.label}</span>
                <span>Open</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <div className="page-section footer-meta">
        <div className="section-frame footer-meta__inner">
          <span>Ellams</span>
          <span>Vol. 01 · {year}</span>
        </div>
      </div>
    </footer>
  );
}
