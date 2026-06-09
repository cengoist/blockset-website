import type { Metadata } from "next";
import LegalShell, { Section } from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How BlockSet collects, uses, and discloses information, including data handled by AppLovin MAX, Google AdMob, and other third-party advertising partners.",
};

export default function PrivacyPage() {
  return (
    <LegalShell
      title="Privacy Policy for BlockSet"
      dateLabel="Effective Date"
      lastUpdated="June 9, 2026"
    >
      <p>
        Cengiz Şen (&ldquo;we,&rdquo; &ldquo;our,&rdquo; or &ldquo;us&rdquo;) is
        committed to protecting your privacy. This Privacy Policy explains how
        your personal information is collected, used, and disclosed by BlockSet
        (the &ldquo;App&rdquo;).
      </p>
      <p>
        By downloading and playing BlockSet, you agree to the collection and use
        of information in relation to this policy.
      </p>

      <Section heading="1. Information We Collect">
        <p>
          When you play BlockSet, we do not require you to create an account or
          provide direct personal information (such as your name, email, or
          physical address). However, to provide a fully functioning gaming
          experience and display advertisements, we and our third-party partners
          automatically collect certain non-personal and device-specific
          information.
        </p>
        <p>This information may include:</p>
        <ul className="ml-5 list-disc space-y-2 text-slate-400">
          <li>
            <span className="text-slate-200">Device Information:</span> Device
            model, operating system version, unique device identifiers (e.g.,
            IDFA for iOS, Google Advertising ID for Android), and mobile network
            information.
          </li>
          <li>
            <span className="text-slate-200">Usage Data:</span> Diagnostic data,
            crash logs, performance data, and gameplay session lengths.
          </li>
          <li>
            <span className="text-slate-200">Location Data:</span> General,
            non-precise location data (e.g., country or region) inferred from
            your IP address to provide localized advertisements.
          </li>
        </ul>
      </Section>

      <Section heading="2. Third-Party Advertising and Mediation">
        <p>
          BlockSet is a free-to-play game supported by in-app advertisements. We
          use AppLovin MAX as our primary ad mediation platform, which routes ad
          requests to various third-party advertising networks, including but
          not limited to Google AdMob.
        </p>
        <p>
          These third-party ad networks use tracking technologies (like cookies,
          device IDs, and web beacons) to collect data about your device and
          interactions with the ads to deliver targeted advertising and measure
          ad performance.
        </p>
        <ul className="ml-5 list-disc space-y-2 text-slate-400">
          <li>
            <span className="text-slate-200">Google AdMob:</span> You can learn
            more about how Google uses collected information at{" "}
            <a
              href="https://policies.google.com/technologies/partner-sites"
              className="text-electric underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              Google&apos;s Privacy &amp; Terms
            </a>
            .
          </li>
          <li>
            <span className="text-slate-200">AppLovin MAX:</span> You can read
            AppLovin&apos;s Privacy Policy at{" "}
            <a
              href="https://www.applovin.com/privacy/"
              className="text-electric underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              AppLovin Privacy Policy
            </a>
            .
          </li>
        </ul>
      </Section>

      <Section heading="3. Opting Out of Targeted Advertising">
        <p>
          You have the right to opt-out of personalized or interest-based
          advertising at the device level:
        </p>
        <ul className="ml-5 list-disc space-y-2 text-slate-400">
          <li>
            <span className="text-slate-200">iOS Devices:</span> Go to Settings
            &gt; Privacy &amp; Security &gt; Tracking, and toggle off
            &ldquo;Allow Apps to Request to Track&rdquo; for BlockSet.
          </li>
          <li>
            <span className="text-slate-200">Android Devices:</span> Go to
            Settings &gt; Google &gt; Ads, and select &ldquo;Opt out of Ads
            Personalization&rdquo; or &ldquo;Delete advertising ID&rdquo;.
          </li>
        </ul>
        <p className="text-slate-400">
          (Note: Opting out does not mean you will stop seeing ads; it means the
          ads will no longer be targeted to your specific interests.)
        </p>
      </Section>

      <Section heading="4. In-App Purchases">
        <p>
          BlockSet may offer an &ldquo;Ad-Free&rdquo; in-app purchase. Payment
          transactions are processed securely through the Apple App Store or
          Google Play Store. We do not collect, process, or store your payment
          card details. Your purchase history is tied to your Apple ID or Google
          Account.
        </p>
      </Section>

      <Section heading="5. Children's Privacy (COPPA Compliance)">
        <p>
          BlockSet is a puzzle game intended for a general audience. We do not
          knowingly collect personal identifiable information from children
          under the age of 13. Our third-party advertising partners are
          configured to serve family-safe or contextually targeted ads where
          required. If you are a parent or guardian and believe your child has
          provided us with personal information, please contact us immediately so
          we can take necessary actions.
        </p>
      </Section>

      <Section heading="6. Data Security and Retention">
        <p>
          We value your trust in playing our game. While we do not store personal
          data on our own servers, the anonymized crash logs and ad-related
          identifiers collected by our partners are protected by their respective
          industry-standard security measures. Data is retained only as long as
          necessary to provide our services and fulfill the purposes outlined in
          this policy.
        </p>
      </Section>

      <Section heading="7. Changes to This Privacy Policy">
        <p>
          We may update our Privacy Policy from time to time. We will notify you
          of any changes by posting the new Privacy Policy on this page and
          updating the &ldquo;Effective Date&rdquo; at the top. You are advised
          to review this Privacy Policy periodically for any changes.
        </p>
      </Section>

      <Section heading="8. Contact Us">
        <p>
          If you have any questions, concerns, or suggestions regarding this
          Privacy Policy or your data, please contact us at:
        </p>
        <ul className="ml-5 list-disc space-y-2 text-slate-400">
          <li>
            <span className="text-slate-200">Email:</span>{" "}
            <a
              href="mailto:cengizsen17@hotmail.com"
              className="text-electric underline underline-offset-2"
            >
              cengizsen17@hotmail.com
            </a>
          </li>
          <li>
            <span className="text-slate-200">Website:</span>{" "}
            <a
              href="https://blockset.online"
              className="text-electric underline underline-offset-2"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://blockset.online
            </a>
          </li>
        </ul>
      </Section>
    </LegalShell>
  );
}
