import { createFileRoute } from "@tanstack/react-router";
import { LegalLayout } from "../components/LegalLayout";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — RestWellReviews" },
      { name: "description", content: "How RestWellReviews collects and uses information, including cookies, analytics, and affiliate links." },
      { name: "robots", content: "noindex, follow" },
    ],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <LegalLayout title="Privacy Policy" updated="July 14, 2026">
      <h2>Overview</h2>
      <p>
        RestWellReviews ("we", "us", "our") operates this website to publish independent reviews of sleep products.
        This Privacy Policy explains what information we collect, how we use it, and the choices you have.
      </p>

      <h2>Information we collect</h2>
      <ul>
        <li>Basic usage information collected automatically by analytics tools, such as pages visited, time on page, referring source, approximate location (country/region), device type, and browser.</li>
        <li>Cookie identifiers used for analytics and advertising measurement (see "Cookies" below).</li>
        <li>Any information you voluntarily send us by email (for example, when you contact us).</li>
      </ul>
      <p>We do not ask you to create an account and we do not collect payment information on this site.</p>

      <h2>How we use information</h2>
      <ul>
        <li>To understand which content is helpful and improve our reviews.</li>
        <li>To measure the performance of advertising campaigns that bring visitors to this site.</li>
        <li>To respond to messages you send us.</li>
      </ul>

      <h2>Cookies and similar technologies</h2>
      <p>
        We and third-party services we use may place cookies on your device. These include analytics cookies
        (for example, Google Analytics) and advertising cookies used by Google Ads and similar platforms to
        measure ad performance and, in some cases, show relevant ads on other websites. You can control cookies
        through your browser settings and opt out of personalized advertising via
        {" "}<a href="https://adssettings.google.com" target="_blank" rel="noopener">Google Ads Settings</a> or
        {" "}<a href="https://www.youradchoices.com" target="_blank" rel="noopener">YourAdChoices</a>.
      </p>

      <h2>Affiliate links and third parties</h2>
      <p>
        This site contains affiliate links. When you click an affiliate link and complete a purchase on the
        destination site, that retailer may share limited information with us (such as whether a sale occurred)
        so the commission can be attributed. The retailer's own privacy policy governs the data you provide
        during checkout. We do not receive your name, address, or payment details.
      </p>

      <h2>Data sharing</h2>
      <p>
        We do not sell your personal information. We share limited technical information only with the
        analytics and advertising providers described above, as needed to operate the site.
      </p>

      <h2>Your choices</h2>
      <ul>
        <li>Use your browser's private/incognito mode or clear cookies to limit tracking.</li>
        <li>Install a reputable ad or tracker blocker.</li>
        <li>Contact us to request that we delete any email correspondence you have sent us.</li>
      </ul>

      <h2>Contact</h2>
      <p>Questions about this policy? Email us at <a href="mailto:hello@restwellreviews.example">hello@restwellreviews.example</a>.</p>
    </LegalLayout>
  );
}