import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";
import "./globals.css";

const url = process.env.NEXT_PUBLIC_SITE_URL || "https://joyas-concept-site.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: `${site.name} — Brand Lab · Lagos`,
    template: `%s — ${site.name}`
  },
  description: site.description,
  keywords: ["brand identity Lagos", "brand design Nigeria", "brand identity studio", "creative agency Lagos", "brand strategy Nigeria"],
  openGraph: {
    title: `${site.name} — Brand Lab · Lagos`,
    description: site.description,
    type: "website"
    // OG image omitted until authentic JOYAS CONCEPT brand asset is available. Do not use campaign or invented images.
  },
  twitter: {
    card: "summary",
    site: site.handle
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600&family=Manrope:wght@400;500;600&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/favicon.svg" type="image/svg+xml" />
      </head>
      <body>
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
