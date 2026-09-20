import { createFileRoute } from "@tanstack/react-router";

const heroCollage = "/assets/hero-collage.jpg";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Vyra Digital — Posters, logos, party invites & wallpapers" },
      {
        name: "description",
        content:
          "A tiny South African design studio making digital posters (R25), logos (R50), party invites (R30) and wallpapers (R15). Pick a price, send a message, get your file.",
      },
      { property: "og:title", content: "Vyra Digital — Better than best" },
      {
        property: "og:description",
        content:
          "Digital posters R25, logos R50, party invites R30, wallpapers R15. Handmade in South Africa — just message to order.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:title", content: "Vyra Digital — Better than best" },
      {
        name: "twitter:description",
        content:
          "Digital posters R25, logos R50, party invites R30, wallpapers R15. Handmade in South Africa — just message to order.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

const EMAIL = "thegoatedfish48@gmail.com";
const ORDER_NOTE = "Hi Vyra! I'd like to order something.";

const contacts = [
  {
    name: "Michael",
    email: "thegoatedfish48@gmail.com",
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
    price: "R25",
    image: "/assets/vyra-poster.png",
    alt: "Digital poster reading Discipline is the best teacher",
    blurb: "Print-ready or screen-ready. Wall art that actually makes you smile.",
  },
  {
    name: "Logos",
    price: "R50",
    image: "/assets/vyra-logo.png",
    alt: "Black and white Graue Zero logo by Vyra Digital",
    blurb: "A little mark for your side project, café or brand. Clean and yours.",
  },
  {
    name: "Party invites",
    price: "R30",
    image: "/assets/vyra-party-invite.png",
    alt: "Pink and charcoal Come to Jakes Awesome 13 party invitation",
    blurb: "Birthdays, braais, baby showers — invites that get people excited.",
  },
  {
    name: "Wallpapers",
    price: "R15",
    image: "/assets/vyra-wallpaper.png",
    alt: "Purple Coming Soon typographic wallpaper on black",
    blurb:
      "Fresh phone & desktop backgrounds to swap in every time you're bored.",
  },
];

function Index() {
  return (
    <div className="min-h-screen bg-background font-body text-foreground antialiased overflow-x-hidden">
      {/* top bar */}
      <header className="mx-auto flex max-w-6xl items-center justify-between px-6 pt-8">
        <div className="flex items-center gap-3">
          <div className="grid size-11 -rotate-6 place-items-center rounded-2xl bg-primary font-display text-xl font-bold text-primary-foreground shadow-lift">
            V
          </div>
          <span className="font-display text-lg font-bold tracking-tight">
            Vyra Digital
          </span>
        </div>
        <a
          href="#order"
          className="hidden items-center gap-2 rounded-full bg-foreground px-5 py-2.5 font-display text-sm font-semibold text-background transition-transform hover:-translate-y-0.5 sm:inline-flex"
        >
          Say hi →
        </a>
      </header>

      {/* hero */}
      <section className="mx-auto grid max-w-6xl items-center gap-10 px-6 pb-10 pt-14 lg:grid-cols-2">
        <div>
          <span className="inline-flex -rotate-2 items-center gap-2 rounded-full bg-accent px-4 py-1.5 font-display text-sm font-semibold shadow-lift">
            A tiny studio in South Africa ✦
          </span>
          <h1 className="mt-6 font-display text-6xl font-bold leading-[0.92] sm:text-7xl">
            Better than{" "}
            <span className="relative inline-block">
              <span className="relative z-10">best</span>
              <span className="absolute inset-x-[-0.3em] top-[-0.18em] bottom-[-0.18em] -rotate-2 rounded-lg bg-accent" />
            </span>
          </h1>
          <p className="mt-5 font-display text-xl font-semibold text-foreground">
            Little bits of digital joy, made for you.
          </p>
          <p className="mt-3 max-w-md text-lg leading-relaxed text-muted-foreground">
            Posters, logos, party invites &amp; wallpapers — hand-made by
            Michael &amp; Tumi, two very caffeinated designers. No checkout, no
            fuss: just pick a price, send a note, and you're sorted.
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
              See the work
            </a>
          </div>
          <p className="mt-6 font-display font-semibold text-muted-foreground">
            from <span className="text-2xl text-secondary">R15</span> · friendly
            to friends &amp; family
          </p>
        </div>

        <div className="relative">
          <img
            src={heroCollage}
            alt="A collage of Vyra Digital products: a poster, a logo badge, a party invite and a phone wallpaper"
            width={1024}
            height={1024}
            className="aspect-square w-full rounded-[2.5rem] object-cover"
          />
          <div className="animate-floaty absolute -left-4 -top-5 grid size-16 place-items-center rounded-full bg-secondary font-display font-bold text-secondary-foreground shadow-lift">
            R15
          </div>
          <div className="animate-spin-slow absolute -bottom-4 -right-3 grid size-20 place-items-center rounded-full bg-primary text-center font-display text-xs font-bold leading-tight text-primary-foreground shadow-lift">
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
              className="rounded-3xl border-2 border-border bg-card p-6 shadow-lift transition-all hover:-translate-y-2 hover:shadow-lift-lg"
            >
              <img
                src={product.image}
                alt={product.alt}
                loading="lazy"
                width={736}
                height={912}
                className="mb-5 aspect-[4/5] w-full rounded-2xl object-cover"
              />
              <div className="flex items-center justify-between">
                <h3 className="font-display text-2xl font-bold">
                  {product.name}
                </h3>
                <span className="-rotate-3 rounded-full bg-primary px-4 py-1.5 font-display text-lg font-bold text-primary-foreground">
                  {product.price}
                </span>
              </div>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                {product.blurb}
              </p>
            </div>
          ))}
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

      <footer className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-3 px-6 pb-10 text-muted-foreground">
        <p className="font-display font-semibold">
          © Vyra Digital · made with too much coffee in SA
        </p>
        <p className="text-sm">Prices in South African Rand</p>
      </footer>
    </div>
  );
}
