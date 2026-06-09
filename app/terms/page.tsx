import type { Metadata } from "next";
import LegalShell, { Section } from "../components/LegalShell";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms and conditions that govern your use of the BlockSet mobile game.",
};

export default function TermsPage() {
  return (
    <LegalShell title="Terms of Service" lastUpdated="June 9, 2026">
      <p>
        These Terms of Service (&ldquo;Terms&rdquo;) govern your access to and
        use of the BlockSet mobile game and related services (the
        &ldquo;Game&rdquo;) provided by Cengiz Şen (&ldquo;we,&rdquo;
        &ldquo;us,&rdquo; or &ldquo;our&rdquo;). By downloading, installing, or
        playing BlockSet, you agree to be bound by these Terms. If you do not
        agree, please do not use the Game.
      </p>

      <Section heading="1. License to Use the Game">
        <p>
          We grant you a limited, non-exclusive, non-transferable, revocable
          license to download and use BlockSet for your personal,
          non-commercial entertainment on a device you own or control, subject
          to these Terms and the rules of the applicable app store (Apple App
          Store or Google Play).
        </p>
      </Section>

      <Section heading="2. Eligibility">
        <p>
          You must be at least 13 years old (or the minimum age of digital
          consent in your jurisdiction) to use the Game. If you are a minor, you
          represent that you have your parent or guardian&apos;s permission to
          play.
        </p>
      </Section>

      <Section heading="3. In-App Purchases">
        <p>
          The Game is free to download and may offer optional in-app purchases,
          such as removing advertisements or unlocking cosmetic content. All
          purchases are processed by the Apple App Store or Google Play and are
          subject to their respective terms. Prices may change at any time.
        </p>
        <p>
          Except where required by law or the applicable store&apos;s policies,
          purchases are final and non-refundable. Refund requests must be made
          through the platform from which you purchased.
        </p>
      </Section>

      <Section heading="4. Advertisements">
        <p>
          The Game is supported by advertising served through third-party ad
          networks. By using the Game, you acknowledge that ads will be
          displayed and that ad partners may collect data as described in our
          Privacy Policy. Removing ads, where offered, is available via in-app
          purchase.
        </p>
      </Section>

      <Section heading="5. Acceptable Use">
        <p>You agree not to:</p>
        <ul className="ml-5 list-disc space-y-2 text-slate-400">
          <li>
            reverse engineer, decompile, modify, or create derivative works of
            the Game;
          </li>
          <li>
            use cheats, bots, automation, or exploits to gain an unfair
            advantage or disrupt the Game;
          </li>
          <li>
            attempt to circumvent advertising, security, or in-app purchase
            mechanisms;
          </li>
          <li>
            use the Game for any unlawful purpose or in violation of these
            Terms.
          </li>
        </ul>
      </Section>

      <Section heading="6. Intellectual Property">
        <p>
          The Game, including its code, design, graphics, audio, trademarks, and
          all related content, is owned by Cengiz Şen and its licensors and
          is protected by intellectual property laws. These Terms do not grant
          you any ownership rights in the Game.
        </p>
      </Section>

      <Section heading="7. Updates & Availability">
        <p>
          We may update, modify, or discontinue the Game or any of its features
          at any time without notice. We do not guarantee that the Game will
          always be available, uninterrupted, or error-free.
        </p>
      </Section>

      <Section heading="8. Disclaimer of Warranties">
        <p>
          The Game is provided &ldquo;as is&rdquo; and &ldquo;as
          available&rdquo; without warranties of any kind, whether express or
          implied, including warranties of merchantability, fitness for a
          particular purpose, and non-infringement, to the fullest extent
          permitted by law.
        </p>
      </Section>

      <Section heading="9. Limitation of Liability">
        <p>
          To the maximum extent permitted by law, Cengiz Şen shall not be
          liable for any indirect, incidental, special, consequential, or
          punitive damages, or any loss of data, profits, or goodwill, arising
          from your use of or inability to use the Game.
        </p>
      </Section>

      <Section heading="10. Termination">
        <p>
          We may suspend or terminate your access to the Game at any time if you
          violate these Terms. You may stop using the Game at any time by
          uninstalling it. Provisions that by their nature should survive
          termination will continue to apply.
        </p>
      </Section>

      <Section heading="11. Governing Law">
        <p>
          These Terms are governed by the laws of the jurisdiction in which
          Cengiz Şen operates, without regard to conflict-of-law principles.
          Any disputes will be resolved in the competent courts of that
          jurisdiction, unless otherwise required by applicable consumer
          protection law.
        </p>
      </Section>

      <Section heading="12. Apple & Google App Store Terms">
        <p>
          If you downloaded the Game from the Apple App Store, you acknowledge
          that these Terms are between you and Cengiz Şen only, not Apple,
          and that Apple is not responsible for the Game or its content. Apple
          and Google are third-party beneficiaries of these Terms and may
          enforce them. Your use must also comply with the applicable store&apos;s
          Usage Rules.
        </p>
      </Section>

      <Section heading="13. Changes to These Terms">
        <p>
          We may revise these Terms from time to time. The &ldquo;Last
          updated&rdquo; date above reflects the latest version. Continued use
          of the Game after changes take effect constitutes acceptance of the
          revised Terms.
        </p>
      </Section>

      <Section heading="14. Contact Us">
        <p>
          Questions about these Terms? Contact us at{" "}
          <span className="text-slate-200">cengizsen17@hotmail.com</span>.
        </p>
      </Section>
    </LegalShell>
  );
}
