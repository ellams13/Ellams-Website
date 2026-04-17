import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import FooterCallout from "../../components/FooterCallout";
import { products } from "../products";

const categoryAnchors: Record<string, string> = {
  Clothing: "clothing",
  Posters: "posters",
  Objects: "objects",
};

export function generateStaticParams() {
  return products.map((product) => ({ slug: product.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    return { title: "Not Found" };
  }

  return { title: product.name };
}

export default async function ProductPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const product = products.find((item) => item.slug === slug);

  if (!product) {
    notFound();
  }

  return (
    <main id="main-content" className="page-shell">
      <section className="page-section pt-6 md:pt-8 pb-2">
        <div className="section-frame">
          <div className="meta-row">
            <Link href="/store" className="cta-link cta-link-secondary">
              Back to store
            </Link>
            <span className="section-kicker">{product.category}</span>
          </div>
        </div>
      </section>

      <section className="page-section pt-10 md:pt-16 pb-24 md:pb-36">
        <div className="section-frame grid grid-cols-1 lg:grid-cols-12 gap-10 md:gap-16 items-start">
          <div
            className="relative w-full overflow-hidden lg:col-span-7"
            style={{ aspectRatio: "4/5" }}
          >
            <Image
              src={product.image}
              alt={product.name}
              fill
              sizes="(max-width: 1024px) 100vw, 58vw"
              className="object-cover"
              style={{ objectPosition: product.imagePosition ?? "center" }}
              priority
            />
          </div>

          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <h1
              className="font-black"
              style={{
                fontSize: "clamp(1.9rem, 3.5vw, 2.9rem)",
                letterSpacing: "-0.03em",
                lineHeight: "1.02",
              }}
            >
              {product.name}
            </h1>

            <p
              className="mt-4 text-lg font-medium tracking-[0.05em]"
              style={{ color: "var(--muted)" }}
            >
              £{product.price}
            </p>

            <div className="detail-actions">
              <Link href="/store" className="cta-link cta-link-primary">
                Continue browsing
              </Link>
              <Link
                href={`/store#${categoryAnchors[product.category]}`}
                className="cta-link cta-link-secondary"
              >
                More {product.category}
              </Link>
            </div>

            <div className="detail-panel">
              <p className="detail-note">Description</p>
              <p className="page-copy max-w-[32ch] mt-4">{product.description}</p>
            </div>

            <div className="detail-panel">
              <p className="detail-note">Availability</p>
              <p className="page-copy max-w-[32ch] mt-4">
                Concept piece only. The product page is now a clear reference
                view with obvious exit paths back into the wider collection.
              </p>
            </div>
          </div>
        </div>
      </section>

      <FooterCallout />
    </main>
  );
}
