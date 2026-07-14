import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/contact")({
  head: () => ({
    meta: [
      { title: "Contact — RestWellReviews" },
      { name: "description", content: "Get in touch with RestWellReviews with feedback, corrections, or questions." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: ContactPage,
});

function ContactPage() {
  return (
    <LegalLayout title="Contact" updated="July 14, 2026">
      <h2>Get in touch</h2>
      <p>
        RestWellReviews is a small independent site. The fastest way to reach us is by email — we read every
        message and try to respond within a few business days.
      </p>

      <h2>Email</h2>
      <p>
        <a href="mailto:hello@restwellreviews.example">hello@restwellreviews.example</a>
      </p>

      <h2>What to write about</h2>
      <ul>
        <li>Corrections or updates to a review.</li>
        <li>Questions about how we test and choose products.</li>
        <li>Suggestions for products you'd like us to look at next.</li>
        <li>Privacy, disclosure, or takedown questions.</li>
      </ul>

      <h2>What we can't help with</h2>
      <ul>
        <li>Order status, shipping, returns, or warranty claims — please contact the retailer where you purchased the product.</li>
        <li>Medical or health questions — please consult a qualified healthcare professional.</li>
      </ul>
    </LegalLayout>
  );
}