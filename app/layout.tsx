import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import {
  CONTACT_EMAIL,
  CONTACT_PHONE,
  NAME,
  NAME_IS_PLACEHOLDER,
  NAME_TE,
  SITE_URL,
  education,
  metaDescription,
  socials,
} from "@/content/profile";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-serif",
});

const title = `${NAME} — Investigative Journalist, Strategic Communications Leader & MLC Graduates Candidate`;

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title,
  description: metaDescription,
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    title,
    description: metaDescription,
    url: "/",
    siteName: NAME,
    locale: "en_GB",
  },
  twitter: { card: "summary_large_image", title, description: metaDescription },
  robots: NAME_IS_PLACEHOLDER ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#172554",
};

const sameAs = socials
  .map((s) => s.href)
  .filter((href): href is string => Boolean(href));

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  alternateName: NAME_TE,
  url: SITE_URL,
  email: CONTACT_EMAIL || undefined,
  telephone: CONTACT_PHONE || undefined,
  description: metaDescription,
  jobTitle: [
    "Investigative Journalist",
    "Strategic Communications Leader",
    "Orator",
    "MLC Graduates Candidate (Telangana Rakshana Sena)",
  ],
  sameAs: sameAs.length > 0 ? sameAs : undefined,
  alumniOf: education.map((e) => ({
    "@type": "EducationalOrganization",
    name: e.institution,
  })),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className={newsreader.variable}>
      <body>
        {children}
        {NAME_IS_PLACEHOLDER ? null : (
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify(personSchema).replace(/</g, "\\u003c"),
            }}
          />
        )}
      </body>
    </html>
  );
}
