import { createFileRoute } from "@tanstack/react-router";
import { useState } from "react";
import {
  applyBlackNovemberDiscount,
  BLACK_NOVEMBER_DISCOUNT_PERCENT,
} from "@/lib/pricing";

const heroCollage = "/assets/hero-collage.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vyra Digital — Design & website services" },
      {
        name: "description",
        content:
          "Black November: save 30% on websites, posters, logos, party invites and wallpapers from Vyra Digital. Made in South Africa.",
      },
      { property: "og:title", content: "Vyra Digital — Better than best" },
      {
        property: "og:description",
        content:
          "Black November: 30% off. Websites from R476, posters R17.85–R89.25, logos from R89.25, invites R35.70–R238, wallpapers R8.93–R47.60.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Vyra Digital — Better than best" },
      {
        name: "twitter:description",
        content:
          "Black November: 30% off. Websites from R476, posters R17.85–R89.25, logos from R89.25, invites R35.70–R238, wallpapers R8.93–R47.60.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const EMAIL = "nyamusambamichael@gmail.com";
const ORDER_NOTE = "Hi Vyra! I'd like to order something.";

function SalePrice({ price, size = "regular" }: { price: string; size?: "regular" | "large" }) {
  return (
    <div className="flex flex-wrap items-center gap-x-2 gap-y-1">
      <span className={size === "large" ? "rounded-md bg-gold-gradient px-4 py-2 font-display text-xl font-bold text-primary-foreground shadow-gold" : "rounded-md bg-gold-gradient px-3 py-1.5 font-display text-base font-bold text-primary-foreground shadow-gold"}>
        {applyBlackNovemberDiscount(price)}
      </span>
      <span className="text-sm text-muted-foreground line-through decoration-primary/80">
        {price}
      </span>
    </div>
  );
}

function SaleBadge({ compact = false }: { compact?: boolean }) {
  return (
    <span className={`inline-flex items-center rounded-sm border border-primary/60 bg-primary/10 font-display font-bold uppercase text-primary shadow-gold ${compact ? "px-2 py-1 text-[0.65rem]" : "px-3 py-1.5 text-xs"}`}>
      {compact ? `${BLACK_NOVEMBER_DISCOUNT_PERCENT}% OFF` : `SALE · ${BLACK_NOVEMBER_DISCOUNT_PERCENT}% OFF`}
    </span>
  );
}

const contacts = [
  {
    name: "Michael",
    email: "nyamusambamichael@gmail.com",
    phone: "069 441 2998",
    whatsapp: `https://wa.me/27694412998?text=${encodeURIComponent(ORDER_NOTE)}`,
  },
  {
    name: "Tumi",
    email: "tumi.bepete@gmail.com",
    phone: "079 714 6472",
    whatsapp: `https://wa.me/27797146472?text=${encodeURIComponent(ORDER_NOTE)}`,
  },
];

const products = [
  {
    name: "Posters",
    price: "R25.50–R127.50",
    image: "/assets/vyra-poster.png",
    alt: "Digital poster reading Discipline is the best teacher",
    blurb: "Print-ready or screen-ready. Wall art that actually makes you smile.",
  },
  {
    name: "Logos",
    price: "from R127.50",
    image: "/assets/vyra-logo.png",
    alt: "Black and white VD monogram with Vyradigital Better than best by Vyra Digital",
    blurb: "A little mark for your side project, café or brand. Clean and yours.",
  },
  {
    name: "Party invites",
    price: "R51–R340",
    image: "/assets/vyra-party-invite.png",
    alt: "Pink and charcoal Come to Jakes Awesome 13 party invitation",
    blurb: "Birthdays, braais, baby showers — invites that get people excited.",
  },
  {
    name: "Wallpapers",
    price: "R12.75–R68",
    image: "/assets/vyra-wallpaper.png",
    alt: "Purple Coming Soon typographic wallpaper on black",
    blurb:
      "Fresh phone & desktop backgrounds to swap in every time you're bored.",
  },
];

const logoTiers = [
  {
    name: "Basic logo",
    price: "R127.50",
    blurb: "One clean, simple logo. Perfect for getting started.",
  },
  {
    name: "Custom logo",
    price: "R212.50",
    blurb: "Made from scratch around your idea, name and colours.",
  },
  {
    name: "Premium logo package",
    price: "R467.50",
    blurb: "The full works — versions, variations and files for everywhere.",
  },
  {
    name: "Logo + profile picture",
    price: "R297.50",
    blurb: "A logo plus a matching profile pic for your socials.",
  },
];

const priceRanges = [
  {
    name: "Poster prices",
    range: "R25.50 – R127.50",
    blurb:
      "Save 30% on a simple, clean design or a bigger, detailed custom poster.",
  },
  {
    name: "Party invite prices",
    range: "R51 – R340",
    blurb:
      "Save 30% on a fun single invite or a fully custom, themed invite set.",
  },
  {
    name: "Wallpaper prices",
    range: "R12.75 – R68",
    blurb:
      "Save 30% on a fresh ready-made wallpaper or a custom-made design.",
  },
];

const websiteTiers = [
  {
    name: "Basic Website",
    price: "R680",
    blurb: "1–2 pages · Simple business site",
  },
  {
    name: "Standard Website",
    price: "R1,275",
    blurb: "3–5 pages · Professional business site",
  },
  {
    name: "Premium Website",
    price: "R2,125+",
    blurb: "5+ pages · Advanced design and features",
  },
];

type Product = (typeof products)[number];


function Index() {
  const [viewing, setViewing] = useState<Product | null>(null);

  return (
    <div className="relative overflow-x-hidden">
      {/* hero */}
      <section className="relative mx-auto grid max-w-6xl items-center gap-10 px-6 pb-10 pt-14 lg:grid-cols-2">
        <div>
          <div className="mb-7 inline-flex flex-wrap items-center gap-3 border-y border-primary/35 py-3 pr-5">
            <SaleBadge />
            <span className="font-display text-sm font-semibold uppercase text-muted-foreground">Black November at Vyra Digital</span>
          </div>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.92] sm:text-7xl">
            Better than{" "}
            <span className="relative inline-block text-primary-foreground">
              <span className="relative z-10">best</span>
              <span className="absolute inset-x-[-0.3em] top-[-0.18em] bottom-[-0.18em] -rotate-2 rounded-lg bg-gold-gradient shadow-gold" />
            </span>
          </h1>
          <p className="mt-5 font-display text-xl font-semibold text-primary">
            30% off every design and website.
          </p>
          <p className="mt-3 max-w-md text-lg leading-relaxed text-muted-foreground">
            Websites, posters, logos, party invites &amp; wallpapers — made by
            Michael &amp; Tumi, two very caffeinated designers. No checkout, no
            fuss: just pick an option, send a note, and you're sorted.
          </p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="#order"
              className="rounded-full bg-primary px-8 py-4 font-display text-lg font-bold text-primary-foreground shadow-lift transition-transform hover:-translate-y-1"
            >
              Order something
            </a>
            <a
              href="#work"
              className="rounded-full border-2 border-foreground px-7 py-3.5 font-display text-lg font-semibold transition-colors hover:bg-foreground hover:text-background"
            >
              See the designs
            </a>
          </div>
        </div>

        <div className="relative">
          <img
            src={heroCollage}
            alt="A collage of Vyra Digital products: a poster, a logo badge, a party invite and a phone wallpaper"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-xl border border-primary/25 object-cover shadow-gold"
          />
          <div className="absolute -bottom-4 -right-3 grid size-20 place-items-center rounded-full bg-gold-gradient text-center font-display text-xs font-bold leading-tight text-primary-foreground shadow-gold">
            say hi!
          </div>
        </div>
      </section>

      {/* price list */}
      <section id="work" className="mx-auto max-w-6xl px-6 py-16">
        <div className="mb-10 flex flex-wrap items-end justify-between gap-4">
          <h2 className="font-display text-5xl font-bold sm:text-6xl">
            The good stuff
          </h2>
          <p className="max-w-xs font-display font-semibold text-muted-foreground">
            Four things, four prices. Pick your favourite and send a message.
          </p>
        </div>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {products.map((product) => (
            <div
              key={product.name}
              className="rounded-xl border border-border bg-card p-5 shadow-lift transition-all hover:-translate-y-1 hover:border-primary/60 hover:shadow-gold"
            >
              <button
                type="button"
                onClick={() => setViewing(product)}
                className="group relative mb-5 block w-full cursor-pointer"
                aria-label={`View ${product.name} example full size`}
              >
                <img
                  src={product.image}
                  alt={product.alt}
                  loading="lazy"
                  width={736}
                  height={912}
                  className="aspect-[4/5] w-full rounded-2xl object-cover"
                />
                <span className="absolute left-3 top-3"><SaleBadge compact /></span>
                <span className="absolute inset-x-0 bottom-3 mx-auto w-fit rounded-md bg-foreground px-4 py-1.5 font-display text-sm font-bold text-background opacity-0 shadow-lift transition-opacity group-hover:opacity-100">
                  View full size
                </span>
              </button>
              <div className="flex flex-col items-start gap-3">
                <h3 className="font-display text-2xl font-bold">
                  {product.name}
                </h3>
                <SalePrice price={product.price} />
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.blurb}
              </p>
              <button
                type="button"
                onClick={() => setViewing(product)}
                className="mt-4 font-display text-sm font-bold text-primary underline-offset-4 hover:underline"
              >
                View this design →
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* website price list */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[2.5rem] border-2 border-border bg-card p-8 shadow-lift sm:p-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Website options
            </h2>
            <p className="max-w-xs font-display font-semibold text-muted-foreground">
              Pick the size that fits your idea, then message us to get started.
            </p>
          </div>
          <div className="grid gap-4 lg:grid-cols-3">
            {websiteTiers.map((tier) => (
              <div
                key={tier.name}
                className="flex min-h-44 flex-col justify-between gap-6 rounded-lg border border-border bg-background p-6"
              >
                <div>
                  <h3 className="font-display text-2xl font-bold">
                    {tier.name}
                  </h3>
                  <p className="mt-2 leading-relaxed text-muted-foreground">
                    {tier.blurb}
                  </p>
                </div>
                <div className="relative w-fit">
                  <SalePrice price={tier.price} size="large" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* logo price list */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[2.5rem] border-2 border-border bg-card p-8 shadow-lift sm:p-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Logo prices, pick your fit
            </h2>
            <p className="max-w-xs font-display font-semibold text-muted-foreground">
              Four ways to get a logo — from a quick mark to the full package.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-2">
            {logoTiers.map((tier) => (
              <div
                key={tier.name}
                className="flex items-center justify-between gap-4 rounded-lg border border-border bg-background p-6"
              >
                <div>
                  <h3 className="font-display text-xl font-bold">
                    {tier.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {tier.blurb}
                  </p>
                </div>
                <div className="relative shrink-0">
                  <SalePrice price={tier.price} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* other price ranges */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="rounded-[2.5rem] border-2 border-border bg-card p-8 shadow-lift sm:p-12">
          <div className="mb-8 flex flex-wrap items-end justify-between gap-4">
            <h2 className="font-display text-4xl font-bold sm:text-5xl">
              Posters, invites &amp; wallpaper prices
            </h2>
            <p className="max-w-xs font-display font-semibold text-muted-foreground">
              The price depends on what you ask for — tell us your idea and
              we'll quote you.
            </p>
          </div>
          <div className="grid gap-4 sm:grid-cols-3">
            {priceRanges.map((item) => (
              <div
                key={item.name}
                className="flex flex-col gap-4 rounded-lg border border-border bg-background p-6"
              >
                <div>
                  <h3 className="font-display text-xl font-bold">
                    {item.name}
                  </h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted-foreground">
                    {item.blurb}
                  </p>
                </div>
                <div className="relative w-fit">
                  <SalePrice price={item.range} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* joke of the day */}
      <section className="mx-auto max-w-6xl px-6 pb-16">
        <div className="relative overflow-hidden rounded-[2.5rem] border-2 border-border bg-card p-8 shadow-lift sm:p-12">
          <div className="animate-spin-slow absolute -right-12 -top-12 size-32 rounded-full bg-accent/25" />
          <span className="relative inline-block -rotate-3 rounded-full bg-accent px-4 py-1.5 font-display text-sm font-bold uppercase tracking-widest text-accent-foreground">
            Joke of the day
          </span>
          <p className="relative mt-5 max-w-3xl font-display text-3xl font-bold leading-tight sm:text-4xl">
            Why do cows wear bells?
          </p>
          <p className="relative mt-4 text-muted-foreground">
            Because their horns don't work!
          </p>
        </div>
      </section>

      {/* order / contact */}
      <section id="order" className="mx-auto max-w-6xl px-6 pb-20">
        <div className="relative overflow-hidden rounded-[2.5rem] bg-primary px-8 py-14 text-primary-foreground sm:px-14">
          <div className="animate-spin-slow absolute -right-10 -top-10 size-40 rounded-full bg-accent/40" />
          <div className="relative grid items-center gap-10 lg:grid-cols-2">
            <div>
              <h2 className="font-display text-5xl font-bold leading-[0.95] sm:text-6xl">
                Let's make
                <br />
                something.
              </h2>
              <p className="mt-5 max-w-sm text-lg leading-relaxed text-primary-foreground/85">
                No online checkout here — just tell us what you need and we'll
                sort it out personally. Usually reply within a day.
              </p>
            </div>
            <div className="rounded-3xl border border-primary-foreground/20 bg-primary-foreground/10 p-7">
              <p className="mb-5 font-display text-sm font-semibold uppercase tracking-widest text-primary-foreground/70">
                Reach us
              </p>
              {contacts.map((contact, i) => (
                <div
                  key={contact.email}
                  className={
                    i > 0
                      ? "mt-5 border-t border-primary-foreground/20 pt-5"
                      : undefined
                  }
                >
                  <div className="mb-2 flex items-center gap-2.5">
                    <span className="grid size-8 place-items-center rounded-full bg-accent font-display text-sm font-bold text-accent-foreground">
                      {contact.name.charAt(0)}
                    </span>
                    <span className="font-display text-lg font-bold">
                      {contact.name}
                    </span>
                  </div>
                  <a
                    href={`mailto:${contact.email}`}
                    className="block break-all font-display text-xl font-bold underline-offset-4 hover:underline"
                  >
                    {contact.email}
                  </a>
                  <a
                    href={contact.whatsapp}
                    target="_blank"
                    rel="noreferrer"
                    className="mt-1.5 inline-flex flex-wrap items-baseline gap-x-2 font-display text-lg font-semibold underline-offset-4 hover:underline"
                  >
                    <span className="text-primary-foreground/70">WhatsApp</span>
                    <span>{contact.phone}</span>
                  </a>
                </div>
              ))}
              <p className="mt-5 text-sm text-primary-foreground/70">
                vyra-digital.co.za
              </p>
              <a
                href={`mailto:${EMAIL}?subject=Order%20from%20vyra-digital.co.za`}
                className="mt-6 inline-flex rounded-full bg-foreground px-7 py-3.5 font-display text-lg font-bold text-background shadow-lift transition-transform hover:-translate-y-1"
              >
                Start an order →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* full-size view */}
      {viewing && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label={`${viewing.name} example`}
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
                <div className="mt-2"><SalePrice price={viewing.price} /></div>
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
