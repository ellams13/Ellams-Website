import Image from "next/image";
import Link from "next/link";
import FooterCallout from "./components/FooterCallout";

const contents = [
  { href: "#built-form", label: "Built Form", note: "Feature" },
  { href: "#interiors", label: "Interiors", note: "Study" },
  { href: "#objects", label: "Objects", note: "Index" },
  { href: "#environments", label: "Environments", note: "Closing" },
];

const shelfItems = [
  { n: "I", label: "Form", note: "Silhouette before surface." },
  { n: "II", label: "Material", note: "Chosen, not decorated." },
  { n: "III", label: "Craft", note: "Evidence of the hand." },
  { n: "IV", label: "Use", note: "Designed to outlast trend." },
];

const year = new Date().getFullYear();

export default function Home() {
  return (
    <main id="main-content" className="page-shell">
      <section className="page-section pt-8 md:pt-14 pb-20 md:pb-28">
        <div className="section-frame">
          <div className="meta-row">
            <span className="section-label">Volume 01</span>
            <span className="section-label">{year}</span>
          </div>

          <div className="grid gap-10 pt-10 md:pt-16 lg:grid-cols-[minmax(0,1.55fr)_minmax(18rem,0.8fr)] lg:items-end">
            <div>
              <h1 className="page-title">
                Architecture, objects, and environments.
              </h1>

              <div className="hero-actions mt-8 md:mt-10">
                <Link href="/store" className="cta-link cta-link-primary">
                  Browse the store
                </Link>
                <Link
                  href="#built-form"
                  className="cta-link cta-link-secondary"
                >
                  Open contents
                </Link>
              </div>
            </div>

            <div className="space-y-5 lg:pb-2">
              <p className="section-label">Editorial Index</p>
              <p className="page-copy">
                A slower read through buildings, rooms, and objects that still
                feel composed when the novelty wears off.
              </p>
              <div className="space-y-1">
                {contents.map((item) => (
                  <Link key={item.href} href={item.href} className="index-link">
                    <span>{item.label}</span>
                    <span>{item.note}</span>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section
        id="built-form"
        className="page-section section-rule pt-16 md:pt-24 pb-20 md:pb-28"
      >
        <div className="section-frame">
          <div className="flex items-baseline justify-between gap-4 mb-10 md:mb-14">
            <span className="section-kicker">01 — Built Form</span>
            <span className="section-label">Feature</span>
          </div>

          <div
            className="relative w-full overflow-hidden mb-8 md:mb-10"
            style={{ aspectRatio: "16/10" }}
          >
            <Image
              src="/images/selected/screenshot-1.png"
              alt="Built form study"
              fill
              sizes="100vw"
              className="object-cover"
              priority
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <h2
              className="md:col-span-7 font-black"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                lineHeight: "1.02",
              }}
            >
              Structure as argument.
            </h2>
            <p className="md:col-span-5 md:pt-2 page-copy">
              A record of buildings that carry their weight. Concrete, timber,
              stone, and the logic that keeps them standing.
            </p>
          </div>
        </div>
      </section>

      <section
        id="interiors"
        className="page-section section-rule pt-16 md:pt-24 pb-20 md:pb-28"
      >
        <div className="section-frame">
          <div className="flex items-baseline justify-between gap-4 mb-10 md:mb-14">
            <span className="section-kicker">02 — Interiors</span>
            <span className="section-label">Study</span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
            <div className="md:col-span-5 md:order-1 order-2">
              <h2
                className="font-black mb-6"
                style={{
                  fontSize: "clamp(1.75rem, 3.5vw, 2.75rem)",
                  letterSpacing: "-0.025em",
                  lineHeight: "1.02",
                }}
              >
                Rooms shaped by restraint.
              </h2>
              <p className="page-copy">
                Fewer surfaces. Honest materials. Spaces designed for the hours
                spent in them, not the minutes spent photographing them.
              </p>
            </div>

            <div
              className="relative w-full overflow-hidden md:col-span-7 md:order-2 order-1"
              style={{ aspectRatio: "4/5" }}
            >
              <Image
                src="/images/selected/screenshot-2.png"
                alt="Interior study"
                fill
                sizes="(max-width: 768px) 100vw, 58vw"
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <section
        id="objects"
        className="page-section section-rule pt-16 md:pt-24 pb-24 md:pb-32"
      >
        <div className="section-frame">
          <div className="flex items-baseline justify-between gap-4 mb-10 md:mb-14">
            <span className="section-kicker">03 — Objects</span>
            <span className="section-label">Index</span>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] lg:items-start">
            <h2
              className="font-black"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                lineHeight: "1.02",
                maxWidth: "18ch",
              }}
            >
              What earns a place on the shelf.
            </h2>

            <ul className="flex flex-col">
              {shelfItems.map((item, index, items) => (
                <li
                  key={item.n}
                  className="grid grid-cols-12 gap-4 md:gap-8 py-5 md:py-6 items-baseline"
                  style={{
                    borderTop: "1px solid var(--border)",
                    borderBottom:
                      index === items.length - 1
                        ? "1px solid var(--border)"
                        : "none",
                  }}
                >
                  <span className="col-span-2 md:col-span-1 section-label">
                    {item.n}
                  </span>
                  <span
                    className="col-span-4 md:col-span-3 font-black"
                    style={{
                      fontSize: "clamp(1.1rem, 1.75vw, 1.5rem)",
                      letterSpacing: "-0.015em",
                    }}
                  >
                    {item.label}
                  </span>
                  <span className="col-span-6 md:col-span-8 page-copy max-w-none text-sm md:text-base">
                    {item.note}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section
        id="environments"
        className="page-section section-rule pt-16 md:pt-24 pb-24 md:pb-32"
      >
        <div className="section-frame">
          <div className="flex items-baseline justify-between gap-4 mb-10 md:mb-14">
            <span className="section-kicker">04 — Environments</span>
            <span className="section-label">Closing</span>
          </div>

          <div
            className="relative w-full overflow-hidden mb-8 md:mb-10"
            style={{ aspectRatio: "21/10" }}
          >
            <Image
              src="/images/selected/screenshot-3.png"
              alt="Environment study"
              fill
              sizes="100vw"
              className="object-cover"
            />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-10">
            <h2
              className="md:col-span-7 font-black"
              style={{
                fontSize: "clamp(1.75rem, 4vw, 3rem)",
                letterSpacing: "-0.025em",
                lineHeight: "1.02",
              }}
            >
              Land, weather, and time.
            </h2>
            <p className="md:col-span-5 md:pt-2 page-copy">
              The places buildings sit in, and the conditions that shape them.
              Read slowly.
            </p>
          </div>
        </div>
      </section>

      <FooterCallout />
    </main>
  );
}
