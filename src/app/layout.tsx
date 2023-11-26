import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  if (typeof window !== "undefined") {
    localStorage.theme = "light";
  }

  return (
    <html lang="en">
      <Head>
        {/* Primary Meta Tags */}
        <title>Hacktopia - Bring your hack on!</title>
        <meta name="title" content="Hacktopia - Bring your hack on!" />
        <meta
          name="description"
          content="Join Hacktopia, the collaborative hackathon co-hosted with Helicone and Posthog. Innovate, create, and showcase your hacking skills on Dec 2, 2023!"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hacktopia.xyz" />
        <meta property="og:title" content="Hacktopia - Bring your hack on!" />
        <meta
          property="og:description"
          content="Join Hacktopia, the collaborative hackathon co-hosted with Helicone and Posthog. Innovate, create, and showcase your hacking skills on Dec 2, 2023!"
        />
        <meta
          property="og:image"
          content="https://hacktopia.xyz/hacktopia.png"
        />

        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hacktopia.xyz" />
        <meta
          property="twitter:title"
          content="Hacktopia - Bring your hack on!"
        />
        <meta
          property="twitter:description"
          content="Join Hacktopia, the collaborative hackathon co-hosted with Helicone and Posthog. Innovate, create, and showcase your hacking skills on Dec 2, 2023!"
        />
        <meta
          property="twitter:image"
          content="https://hacktopia.xyz/hacktopia.png"
        />

        {/* Additional Links */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-icon.png" />
        <link rel="canonical" href="https://hacktopia.xyz" />
      </Head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
