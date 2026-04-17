import Image from "next/image";
import Link from "next/link";
import FooterCallout from "../components/FooterCallout";
import { products } from "./products";

const categories = [
  {
    n: "01",
    name: "Clothing" as const,
    description: "Weight, silhouette, and texture first.",
  },
  {
    n: "02",
    name: "Posters" as const,
    description: "Printed matter with a strong point of view.",
  },
  {
    n: "03",
    name: "Objects" as const,
    description: "Household pieces that justify their footprint.",
  },
];

export const metadata = {
  title: "Store",
};

export default function StorePage() {
  return (
    <main id="main-content" className="page-shell">
      <section className="page-section pt-8 md:pt-14 pb-20 md:pb-28">
        <div className="section-frame">
          <div className="meta-row">
            <span className="section-label">The Shop</span>
            <span className="section-label">Vol. 01</span>
          </div>

          <div className="grid gap-10 pt-10 md:pt-16 lg:grid-cols-[minmax(0,1.45fr)_minmax(18rem,0.85fr)] lg:items-end">
            <div>
              <h1 className="page-title page-title--store">Store.</h1>
              <p className="page-copy mt-6 md:mt-8">
                A small edit of clothing, printed matter, and objects selected
                in the spirit of the publication.
              </p>
            </div>

            <div className="space-y-5 lg:pb-2">
              <p className="section-label">Browse by Type</p>
              <div className="hero-actions">
                {categories.map((category) => (
                  <Link
                    key={category.name}
                    href={`#${category.name.toLowerCase()}`}
                    className="cta-link cta-link-secondary"
                  >
                    {category.name}
                  </Link>
                ))}
              </div>
              <p className="page-copy">
                These are editorial references rather than a live checkout flow,
                so every card now behaves like a clear entry point instead of a
                passive image.
              </p>
            </div>
          </div>
        </div>
      </section>

      {categories.map(({ n, name, description }) => {
        const items = products.filter((product) => product.category === name);

        return (
          <section
            key={name}
            id={name.toLowerCase()}
            className="page-section section-rule pt-14 md:pt-20 pb-20 md:pb-28"
          >
            <div className="section-frame">
              <div className="grid gap-5 md:grid-cols-[minmax(0,1fr)_minmax(18rem,0.65fr)] md:items-end mb-10 md:mb-14">
                <div className="flex items-baseline justify-between gap-4">
                  <span className="section-kicker">
                    {n} — {name}
                  </span>
                  <span className="section-label">
                    {String(items.length).padStart(2, "0")} Items
                  </span>
                </div>
                <p className="page-copy max-w-none md:text-right">
                  {description}
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-x-5 md:gap-x-8 gap-y-12 md:gap-y-16">
                {items.map((product) => (
                  <Link
                    key={product.slug}
                    href={`/store/${product.slug}`}
                    className="product-card"
                  >
                    <div
                      className="product-card__media"
                      style={{ aspectRatio: "4/5" }}
                    >
                      <Image
                        src={product.image}
                        alt={product.name}
                        fill
                        sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
                        className="object-cover"
                        style={{ objectPosition: product.imagePosition ?? "center" }}
                      />
                    </div>

                    <div className="product-card__body">
                      <div className="product-card__row">
                        <p className="product-card__title">{product.name}</p>
                        <p className="product-card__price">£{product.price}</p>
                      </div>

                      <p className="product-card__note line-clamp-2">
                        {product.description}
                      </p>

                      <span className="product-card__cta">
                        View piece
                        <span aria-hidden="true">↗</span>
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <FooterCallout />
    </main>
  );
}
