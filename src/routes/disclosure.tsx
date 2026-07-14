import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/disclosure")({
  head: () => ({
    meta: [
      { title: "Affiliate Disclosure — RestWellReviews" },
      { name: "description", content: "FTC-style affiliate disclosure for RestWellReviews, an independent review site." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: DisclosurePage,
});

function DisclosurePage() {
  return (
    <LegalLayout title="Affiliate Disclosure" updated="July 14, 2026">
      <h2>In plain English</h2>
      <p>
        RestWellReviews is a reader-supported, independent review site. When you click certain links on this
        site and buy something on the destination site, we may earn a small commission — at no additional cost
        to you. That commission is how we keep the site running.
      </p>

      <h2>FTC disclosure</h2>
      <p>
        In accordance with the U.S. Federal Trade Commission's 16 CFR Part 255 ("Guides Concerning the Use of
        Endorsements and Testimonials in Advertising"), we want to be transparent about our relationships with
        the retailers and brands whose products we review:
      </p>
      <ul>
        <li>Some outbound links on this site are affiliate links. If you click one and complete a purchase, the retailer may pay us a commission.</li>
        <li>The price you pay is the same whether you use an affiliate link or not. Affiliate commissions do not add to your cost.</li>
        <li>We only receive a commission if a purchase is made. We are not paid to write reviews and we do not accept payment in exchange for a positive review.</li>
      </ul>

      <h2>Independence</h2>
      <p>
        RestWellReviews is independently owned and operated. We are not the manufacturer or an official
        representative of any product featured on this site, and we are not affiliated with any specific
        brand. Our reviews reflect the author's own opinions based on publicly available information and,
        where noted, hands-on experience.
      </p>

      <h2>How we choose products</h2>
      <p>
        We select products to review based on what real shoppers are searching for and what looks worth a
        closer look. The existence of an affiliate program does not guarantee coverage, and coverage does not
        guarantee a positive review. When we point out drawbacks, we mean them.
      </p>

      <h2>Programs we may participate in</h2>
      <p>
        We may participate in affiliate programs operated by retailers and networks such as (but not limited
        to) Amazon Associates, ShareASale, Impact, CJ, Rakuten, and direct brand programs. Where required by
        a specific program, its own disclosure language applies in addition to this page.
      </p>

      <h2>Not medical advice</h2>
      <p>
        Content on this site is for general informational purposes only and is not medical or professional
        advice. Please consult a qualified healthcare professional for concerns related to sleep, neck,
        shoulder, or back discomfort.
      </p>

      <h2>Contact</h2>
      <p>
        Questions about this disclosure? Email us at{" "}
        <a href="mailto:hello@restwellreviews.example">hello@restwellreviews.example</a>.
      </p>
    </LegalLayout>
  );
}