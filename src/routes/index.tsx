import { createFileRoute } from "@tanstack/react-router";
import pillowHero from "@/assets/pillow-hero.png.asset.json";
import pillowAngled from "@/assets/pillow-angled.png.asset.json";
import pillowLifestyle from "@/assets/pillow-lifestyle.jpg.asset.json";

export const Route = createFileRoute("/")({
  component: Index,
});

const AFFILIATE_URL = "https://YOURAFFILIATELINK.com";

function CTA({ children = "See Current Price on Official Page", className = "" }: { children?: React.ReactNode; className?: string }) {
  return (
    <a
      href={AFFILIATE_URL}
      target="_blank"
      rel="nofollow sponsored noopener"
      className={`inline-flex items-center justify-center rounded-full bg-primary px-8 py-4 text-base font-semibold text-primary-foreground shadow-[var(--shadow-soft)] transition-all hover:-translate-y-0.5 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 ${className}`}
    >
      {children}
      <span aria-hidden className="ml-2">→</span>
    </a>
  );
}

function Card({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)] ${className}`}>
      {children}
    </div>
  );
}

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Disclosure bar */}
      <div className="bg-secondary text-secondary-foreground">
        <p className="mx-auto max-w-6xl px-4 py-2 text-center text-xs sm:text-sm">
          This page contains affiliate links. If you buy through them, we may earn a commission at no extra cost to you.
        </p>
      </div>

      {/* Header */}
      <header className="border-b border-border bg-background/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4">
          <a href="/" className="text-lg font-semibold tracking-tight">
            RestWell<span className="text-primary">Reviews</span>
          </a>
          <span className="hidden text-sm text-muted-foreground sm:block">Independent Sleep Product Reviews</span>
        </div>
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-[var(--primary-soft)] to-background" />
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-24">
          <div>
            <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
              Honest Independent Review
            </span>
            <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
              Ergonomic Pillow for Neck Support: An Honest Review for Side Sleepers
            </h1>
            <p className="mt-5 text-lg text-muted-foreground">
              A closer look at a contoured memory foam pillow designed for neck and shoulder support — with a cooling
              cover aimed at side sleepers who wake up stiff or sore.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
              <CTA />
              <a href="#review" className="text-sm font-medium text-muted-foreground hover:text-foreground">
                Read the full review ↓
              </a>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              [See current price on official page] • 60-day return window
            </p>
          </div>
          <div className="relative">
            <div className="absolute inset-0 -z-10 rounded-[3rem] bg-primary/10 blur-3xl" />
            <img
              src={pillowHero.url}
              alt="Ergonomic memory foam pillow with contoured shape and cooling cover"
              className="mx-auto w-full max-w-lg drop-shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Trust strip */}
      <section className="border-y border-border bg-card">
        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6 px-4 py-8 text-center text-sm sm:grid-cols-4">
          {[
            "High-density memory foam",
            "Contoured ergonomic shape",
            "Removable cooling cover",
            "60-day return window",
          ].map((t) => (
            <div key={t} className="text-muted-foreground">
              <span className="block font-medium text-foreground">{t}</span>
            </div>
          ))}
        </div>
      </section>

      {/* Is this right for you */}
      <section id="review" className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Is this pillow right for you?</h2>
          <p className="mt-4 text-muted-foreground">
            Not every pillow suits every sleeper. Here's an honest look at who this ergonomic pillow for neck support
            tends to work for — and who might want to look elsewhere.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card className="border-l-4 border-l-[var(--success)]">
            <h3 className="text-lg font-semibold">Likely a good fit if you…</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Sleep mostly on your side and want dedicated shoulder space",
                "Wake up with a stiff neck from a flat or overly soft pillow",
                "Prefer firmer, structured support over a plush feel",
                "Sleep hot and want a breathable cooling cover",
                "Switch between side and back positions during the night",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden className="mt-0.5 text-[var(--success)]">✓</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card className="border-l-4 border-l-[var(--warning)]">
            <h3 className="text-lg font-semibold">Probably not for you if you…</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Prefer a soft, sink-in down or down-alternative feel",
                "Sleep mostly on your stomach and want a very low profile",
                "Dislike the initial scent that memory foam can have out of the box",
                "Want a large, standard-rectangle pillow for reading in bed",
                "Are looking for a very lightweight travel pillow",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden className="mt-0.5 text-[var(--warning)]">–</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Specs */}
      <section className="bg-secondary/40">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-2 md:items-center md:py-20">
          <img
            src={pillowAngled.url}
            alt="Angled view of the memory foam pillow showing contoured surface and cooling mesh side panels"
            className="mx-auto w-full max-w-md rounded-2xl"
            loading="lazy"
          />
          <div>
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">What it's made of</h2>
            <p className="mt-4 text-muted-foreground">
              A memory foam pillow for neck and shoulder support lives or dies by its materials and shape. Here's what
              this one uses.
            </p>
            <dl className="mt-8 space-y-5">
              {[
                ["High-density memory foam core", "Slow-response foam that contours to the head and neck instead of flattening under weight."],
                ["Contoured ergonomic shape", "Raised sides for side sleepers, a lower center for back sleepers, and cut-outs designed to give the shoulder room."],
                ["Removable cooling cover", "Breathable knit cover with a mesh side panel, machine-washable and designed to help reduce heat build-up."],
                ["Multi-position support", "Aimed at side, back, and occasional stomach sleepers thanks to the varied loft across the pillow surface."],
                ["60-day return window", "The seller lists a 60-day return window. Confirm the current policy on the official product page before buying."],
              ].map(([title, body]) => (
                <div key={title} className="rounded-xl bg-card p-4 shadow-[var(--shadow-card)]">
                  <dt className="font-semibold">{title}</dt>
                  <dd className="mt-1 text-sm text-muted-foreground">{body}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Pros and cons */}
      <section className="mx-auto max-w-6xl px-4 py-16 md:py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Honest pros and cons</h2>
          <p className="mt-4 text-muted-foreground">
            No pillow is perfect. Here's a balanced look — including the real trade-offs you should know about before
            buying.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          <Card>
            <h3 className="text-lg font-semibold">Pros</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "Firm, structured feel that holds its shape through the night",
                "Contoured design gives clear space for the shoulder when side sleeping",
                "Cooling cover feels noticeably less warm than a plain cotton case",
                "Removable, washable cover makes upkeep straightforward",
                "Works reasonably well across side and back sleeping positions",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden className="mt-0.5 text-primary">+</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
          <Card>
            <h3 className="text-lg font-semibold">Cons & trade-offs</h3>
            <ul className="mt-4 space-y-3 text-sm text-muted-foreground">
              {[
                "The firm feel takes real adjustment — expect a break-in period of a week or more.",
                "Like most memory foam, it can have a mild off-gassing smell for the first few days.",
                "The contoured shape is fixed, so you can't fluff or reshape it like a traditional pillow.",
                "Stomach sleepers may still find the loft too high for comfort.",
                "It's heavier than a standard pillow, which can make bed-making a bit clunkier.",
              ].map((t) => (
                <li key={t} className="flex gap-2">
                  <span aria-hidden className="mt-0.5 text-muted-foreground">–</span>
                  <span>{t}</span>
                </li>
              ))}
            </ul>
          </Card>
        </div>
      </section>

      {/* Lifestyle + CTA break */}
      <section className="bg-[var(--primary-soft)]">
        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 md:grid-cols-5 md:items-center md:py-20">
          <img
            src={pillowLifestyle.url}
            alt="Person holding an ergonomic memory foam pillow while sitting on a bed"
            className="mx-auto w-full max-w-sm rounded-3xl object-cover md:col-span-2"
            loading="lazy"
          />
          <div className="md:col-span-3">
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              A cooling pillow built with side sleepers in mind
            </h2>
            <p className="mt-4 text-muted-foreground">
              If you're searching for the best pillow for waking up with neck pain — and you sleep mostly on your side —
              a contoured, firmer memory foam option is worth a serious look. Check current availability and pricing
              directly on the official page.
            </p>
            <div className="mt-6">
              <CTA>Check Availability</CTA>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="mx-auto max-w-3xl px-4 py-16 md:py-20">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">Frequently asked questions</h2>
        <p className="mt-3 text-center text-sm text-muted-foreground">
          This content is for general informational purposes only and is not medical advice. If you have persistent neck
          pain, please speak with a qualified healthcare professional.
        </p>

        <div className="mt-10 space-y-4">
          {[
            {
              q: "Will this pillow help with my neck pain?",
              a: "It's designed to support the head and neck for side and back sleepers, but individual results vary a lot depending on your mattress, sleep position, and body. It isn't a medical device and can't be guaranteed to relieve any specific condition.",
            },
            {
              q: "How long does it take to get used to?",
              a: "Most people report an adjustment period of several nights up to a couple of weeks when switching from a soft pillow to a firm contoured one. If it still feels wrong after that, the 60-day return window is worth using.",
            },
            {
              q: "Is it suitable for hot sleepers?",
              a: "The removable cover uses a breathable knit with a mesh side panel intended to reduce heat build-up. It generally feels cooler than a plain cotton case, but no pillow is truly 'cold' — a cool bedroom still matters.",
            },
          ].map((item) => (
            <details key={item.q} className="group rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]">
              <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                {item.q}
                <span className="ml-4 text-primary transition-transform group-open:rotate-45">+</span>
              </summary>
              <p className="mt-3 text-sm text-muted-foreground">{item.a}</p>
            </details>
          ))}
        </div>
      </section>

      {/* Final CTA */}
      <section className="bg-primary text-primary-foreground">
        <div className="mx-auto max-w-3xl px-4 py-16 text-center md:py-20">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
            Ready to see if it's right for you?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-primary-foreground/85">
            Check current pricing, shipping options and the latest return policy directly on the official product page.
          </p>
          <div className="mt-8 flex flex-col items-center gap-3">
            <a
              href={AFFILIATE_URL}
              target="_blank"
              rel="nofollow sponsored noopener"
              className="inline-flex items-center justify-center rounded-full bg-background px-8 py-4 text-base font-semibold text-primary shadow-lg transition-all hover:-translate-y-0.5"
            >
              See Current Price on Official Page →
            </a>
            <p className="text-xs text-primary-foreground/70">
              [See current price on official page] • Affiliate link
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-card">
        <div className="mx-auto max-w-6xl px-4 py-12">
          <div className="flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
            <div className="max-w-md">
              <p className="text-sm font-semibold">RestWellReviews</p>
              <p className="mt-2 text-xs text-muted-foreground">
                Independent reviews of sleep products for people looking for straightforward, honest information.
              </p>
            </div>
            <nav className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <a href="#" className="text-muted-foreground hover:text-foreground">Privacy Policy</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Terms</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Affiliate Disclosure</a>
              <a href="#" className="text-muted-foreground hover:text-foreground">Contact</a>
            </nav>
          </div>

          <div className="mt-8 border-t border-border pt-6 text-xs leading-relaxed text-muted-foreground">
            <p>
              <strong className="text-foreground">Full disclosure:</strong> RestWellReviews is an independent
              review site. We are not the manufacturer, retailer, or an official representative of any product featured
              on this page, and we are not affiliated with any specific brand. Some links on this site are affiliate
              links, which means we may earn a commission if you click a link and make a purchase, at no additional cost
              to you. Product details, pricing, availability, and return policies are subject to change — please confirm
              the current information on the official product page before purchasing. Content on this site is for
              general informational purposes only and does not constitute medical, health, or professional advice.
            </p>
            <p className="mt-4">© {new Date().getFullYear()} RestWellReviews. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
