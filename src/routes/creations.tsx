import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/creations")({
  component: Creations,
  head: () => ({
    meta: [
      { title: "Creations — Vyra Digital" },
      {
        name: "description",
        content:
          "Every logo, poster, party invite and wallpaper we've made so far — sorted by type, viewable full size. Made in South Africa by Vyra Digital.",
      },
      { property: "og:title", content: "Creations — Vyra Digital" },
      {
        property: "og:description",
        content:
          "Logos, posters, party invites and wallpapers, sorted by type. Every piece viewable full size — pick one and send a message to order your own.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/creations" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Creations — Vyra Digital" },
      {
        name: "twitter:description",
        content:
          "Logos, posters, party invites and wallpapers, sorted by type. Every piece viewable full size — pick one and send a message to order your own.",
      },
    ],
    links: [{ rel: "canonical", href: "/creations" }],
  }),
});

type Creation = {
  name: string;
  price: string;
  image: string;
  alt: string;
  blurb: string;
};

const sections: { category: string; note: string; items: Creation[] }[] = [
  {
    category: "Logos",
    note: "Little marks that make a brand feel real.",
    items: [
      {
        name: "Vyradigital monogram",
        price: "from R150",
        image: "/assets/vyra-logo.png",
        alt: "Black and white VD monogram with Vyradigital Better than best by Vyra Digital",
        blurb: "Our own VD monogram — proof we can make yours too.",
      },
    ],
  },
  {
    category: "Posters",
    note: "Wall art that actually makes you smile.",
    items: [
      {
        name: "Discipline is the best teacher",
        price: "R30–R150",
        image: "/assets/vyra-poster.png",
        alt: "Digital poster reading Discipline is the best teacher",
        blurb: "A glitchy typographic poster made for a study space.",
      },
    ],
  },
  {
    category: "Party invites",
    note: "Invites that get people excited.",
    items: [
      {
        name: "Jakes Awesome 13",
        price: "R60–R400",
        image: "/assets/vyra-party-invite.png",
        alt: "Pink and charcoal Come to Jakes Awesome 13 party invitation",
        blurb: "A pink party invite for Jakes' 13th — venue, time and dress code all sorted.",
      },
    ],
  },
  {
    category: "Wallpapers",
    note: "Fresh backgrounds for your phone & desktop.",
    items: [
      {
        name: "Coming soon",
        price: "R15–R80",
        image: "/assets/vyra-wallpaper.png",
        alt: "Purple Coming Soon typographic wallpaper on black",
        blurb: "A moody typographic wallpaper for locking the screen in style.",
      },
    ],
  },
];

function Creations() {
  const [viewing, setViewing] = useState<Creation | null>(null);

  return (
    <div className="mx-auto max-w-6xl px-6 pb-20">
      {/* page intro */}
      <section className="pt-14">
        <span className="inline-flex -rotate-2 items-center gap-2 rounded-full bg-accent px-4 py-1.5 font-display text-sm font-semibold shadow-lift">
          Everything we've made ✦
        </span>
        <h1 className="mt-6 font-display text-6xl font-bold leading-[0.92] sm:text-7xl">
          Creations
        </h1>
        <p className="mt-5 max-w-xl text-lg leading-relaxed text-muted-foreground">
          All our work so far, sorted by type — logos, posters, party invites
          and wallpapers. Tap any design to see it full size, then send us a
          message if you want one of your own.
        </p>
      </section>

      {/* sorted sections */}
      {sections.map((section, si) => (
        <section key={section.category} className="pt-14">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <div>
              <h2 className="font-display text-4xl font-bold sm:text-5xl">
                {section.category}
              </h2>
              <p className="mt-2 font-display font-semibold text-muted-foreground">
                {section.note}
              </p>
            </div>
            <span className="rounded-full border-2 border-border px-4 py-1.5 font-display text-sm font-semibold text-muted-foreground">
              {section.items.length}{" "}
              {section.items.length === 1 ? "piece" : "pieces"}
            </span>
          </div>
          <div
            className={
              section.items.length > 2
                ? "grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
                : "grid gap-6 sm:grid-cols-2"
            }
          >
            {section.items.map((item) => (
              <div
                key={item.name}
                className="rounded-3xl border-2 border-border bg-card p-6 shadow-lift transition-all hover:-translate-y-2 hover:shadow-lift-lg"
              >
                <button
                  type="button"
                  onClick={() => setViewing(item)}
                  className="group relative mb-5 block w-full cursor-pointer"
                  aria-label={`View ${item.name} full size`}
                >
                  <img
                    src={item.image}
                    alt={item.alt}
                    loading="lazy"
                    className="aspect-[4/5] w-full rounded-2xl object-cover"
                  />
                  <span className="absolute inset-x-0 bottom-3 mx-auto w-fit rounded-full bg-foreground px-4 py-1.5 font-display text-sm font-bold text-background opacity-0 shadow-lift transition-opacity group-hover:opacity-100">
                    View full size
                  </span>
                </button>
                <div className="flex items-center justify-between">
                  <h3 className="font-display text-2xl font-bold">
                    {item.name}
                  </h3>
                  <span className="shrink-0 -rotate-3 rounded-full bg-primary px-4 py-1.5 font-display text-lg font-bold text-primary-foreground">
                    {item.price}
                  </span>
                </div>
                <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                  {item.blurb}
                </p>
                <button
                  type="button"
                  onClick={() => setViewing(item)}
                  className="mt-4 font-display text-sm font-bold text-primary underline-offset-4 hover:underline"
                >
                  View this design →
                </button>
              </div>
            ))}
          </div>
          {si === 0 && (
            <p className="mt-8 font-display font-semibold text-muted-foreground">
              More coming soon — we add every new piece here when it's done.
            </p>
          )}
        </section>
      ))}

      {/* cta */}
      <section className="pt-16">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-12 text-primary-foreground sm:px-14">
          <div className="animate-spin-slow absolute -right-10 -top-10 size-40 rounded-full bg-accent/40" />
          <div className="relative flex flex-wrap items-center justify-between gap-6">
            <div>
              <h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">
                Want one like these?
              </h2>
              <p className="mt-3 max-w-md text-lg text-primary-foreground/85">
                Tell us your idea and we'll make it yours — same friendly
                prices, no checkout, just a message.
              </p>
            </div>
            <Link
              to="/"
              hash="order"
              className="rounded-full bg-foreground px-7 py-3.5 font-display text-lg font-bold text-background shadow-lift transition-transform hover:-translate-y-1"
            >
              Start an order →
            </Link>
          </div>
        </div>
      </section>

      {/* full-size view */}
      {viewing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${viewing.name} view`}
          onClick={() => setViewing(null)}
          className="fixed inset-0 z-50 grid place-items-center bg-foreground/80 p-6 backdrop-blur-sm"
        >
          <div
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-md rounded-[2rem] bg-card p-5 shadow-lift-lg"
          >
            <img
              src={viewing.image}
              alt={viewing.alt}
              className="w-full rounded-2xl object-contain"
            />
            <div className="mt-4 flex items-center justify-between gap-3">
              <div>
                <h3 className="font-display text-2xl font-bold">
                  {viewing.name}
                </h3>
                <p className="font-display text-lg font-semibold text-primary">
                  {viewing.price}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setViewing(null)}
                className="rounded-full border-2 border-foreground px-5 py-2 font-display text-sm font-bold transition-colors hover:bg-foreground hover:text-background"
              >
                Close ✕
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
