import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms of Use — RestWellReviews" },
      { name: "description", content: "Terms of use for RestWellReviews, an independent review site. Informational content only, not medical advice." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: TermsPage,
});

function TermsPage() {
  return (
    <LegalLayout title="Terms of Use" updated="July 14, 2026">
      <h2>Acceptance of these terms</h2>
      <p>
        By accessing RestWellReviews you agree to these Terms of Use. If you do not agree, please do not use this
        website.
      </p>

      <h2>Informational content only</h2>
      <p>
        All content on this site is provided for general informational purposes only. It reflects the personal
        opinions of the author based on publicly available product information and, where noted, hands-on use.
        It is not medical, health, or professional advice. Nothing on this site is intended to diagnose, treat,
        cure, or prevent any condition. Always consult a qualified healthcare professional about symptoms or
        conditions related to sleep, neck, shoulder, or back discomfort.
      </p>

      <h2>Affiliate relationship</h2>
      <p>
        RestWellReviews participates in affiliate programs. Some outbound links on this site are affiliate
        links, which means we may earn a commission if you click a link and complete a purchase on the
        destination site, at no additional cost to you. See our{" "}
        <a href="/disclosure">Affiliate Disclosure</a> for details.
      </p>

      <h2>No affiliation with brands</h2>
      <p>
        We are not the manufacturer, retailer, or an official representative of any product featured on this
        site. Brand names, logos, and product images belong to their respective owners and are used for
        identification and review purposes only.
      </p>

      <h2>Product information</h2>
      <p>
        Product specifications, pricing, availability, shipping, warranty, and return policies are set by the
        retailer and can change at any time. Always confirm the current details on the official product page
        before purchasing.
      </p>

      <h2>Limitation of liability</h2>
      <p>
        This site is provided "as is" without warranties of any kind. To the maximum extent permitted by law,
        RestWellReviews and its author are not liable for any direct, indirect, incidental, or consequential
        damages arising from your use of this site or any product purchased through a link on this site.
      </p>

      <h2>Changes to these terms</h2>
      <p>
        We may update these Terms of Use from time to time. Continued use of the site after changes are posted
        constitutes acceptance of the updated terms.
      </p>

      <h2>Contact</h2>
      <p>Questions? Email <a href="mailto:hello@restwellreviews.example">hello@restwellreviews.example</a>.</p>
    </LegalLayout>
  );
}