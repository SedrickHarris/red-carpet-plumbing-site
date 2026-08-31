import type { Metadata } from "next";
import { DM_Serif_Display, Inter } from "next/font/google";
import "./globals.css";

const dmSerifDisplay = DM_Serif_Display({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-display",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://redcarpetplumbing.com"),
  title: "Red Carpet Plumbing",
  description:
    "Trusted plumbing services in Las Vegas, NV and surrounding Clark County communities.",
  verification: {
    google: "rHmMU4XKfCcGn_0P2gh1hOK089pJTJnLZBa9VD67GV8",
  },
  // The favicon set under public/images/brand/favicon/ existed but was wired
  // to nothing: the build emitted only the app/favicon.ico file convention, so
  // there was no apple-touch-icon and no Android home-screen icon. These are
  // referenced from their existing location rather than duplicated into app/.
  // app/favicon.ico stays as-is and still covers the default tab icon.
  icons: {
    icon: [
      {
        url: "/images/brand/favicon/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/images/brand/favicon/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        url: "/images/brand/favicon/favicon-48x48.png",
        sizes: "48x48",
        type: "image/png",
      },
      {
        url: "/images/brand/favicon/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/brand/favicon/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/brand/favicon/apple-touch-icon-180x180.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${dmSerifDisplay.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
