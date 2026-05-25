import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// TODO: Replace the `metadataBase` URL below with the confirmed production
// domain (e.g. https://redcarpetplumbing.com) once it is live. Until then,
// the Cloudflare Pages preview URL acts as the placeholder so relative
// Open Graph image URLs resolve to a real host during preview deploys.
// Verify the exact Cloudflare Pages project subdomain in the Cloudflare
// dashboard and update this value if it differs from the assumed slug.
export const metadata: Metadata = {
  metadataBase: new URL("https://red-carpet-plumbing-site.pages.dev"),
  title: "Red Carpet Plumbing",
  description:
    "Trusted plumbing services in Las Vegas, NV and surrounding Clark County communities.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
