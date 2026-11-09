import type { Metadata, Viewport } from "next";
import { Newsreader } from "next/font/google";
import {
  NAME,
  NAME_IS_PLACEHOLDER,
  SITE_URL,
  education,
  metaDescription,
} from "@/content/profile";
import "./globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  style: ["normal", "italic"],
  axes: ["opsz"],
  display: "swap",
  variable: "--font-serif",
});

const title = `${NAME} — Investigative Journalist, Strategic Communications Leader, Orator`;

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
  // Keep search engines out until the placeholder name has been replaced.
  robots: NAME_IS_PLACEHOLDER ? { index: false, follow: false } : undefined,
};

export const viewport: Viewport = {
  themeColor: "#f3f0e8",
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: NAME,
  url: SITE_URL,
  description: metaDescription,
  jobTitle: ["Investigative Journalist", "Strategic Communications Leader"],
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
            dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
          />
        )}
      </body>
    </html>
  );
}
