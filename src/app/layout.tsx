import Head from "next/head";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
/*
1. judging Criteria 
  Wacky-ness (Basically uniqueness. NO TALK TO YOUR PDF)
  Impact (Social impact + TAM)
  Technically Challenging 

2. Judges
  Judges list (3 Judges)
  Casey Aylward (Accel) - Accepted
  Twitter: https://twitter.com/caseyaylward?lang=en

  Bihan Jiang (Scale) - Accepted
  Twitter: https://twitter.com/bihanjiang?lang=en


  Yoko Li (a16z) - Accepted
  Twitter: https://twitter.com/stuffyokodraws?lang=en
  Picture: https://a16z.com/author/yoko-li/
  partner at a16z investing in AI and infra, and open source developer (I can link you a few repos I shipped recently)


3. Prizes
  Prize list (2k on prizes, 1st, 2nd and 3rd)
  Meta Quest 3, Airpod Max, Steam Deck OLED

4. Schedule
  9am-10am Coffee + Recession
  10am-10:30am Kickoff + Word from our sponsors
  10:30am-12:00pm Hacking session
  12:00pm-1:00pm Lunch and 
  1:00pm-5:30pm Hacking (Submissions end at 5:30)
  3:00pm-3:30pm Agent Workshop w/ Agent or AutoGPT
  3:30pm-4:00pm Observability Workshop w/ PostHog + Helicone
  6:00pm Dinner
  7:00pm Presentations
  8:00pm Finale
  8:30pm EVERYONE OUT

5. Sign up deadline
  Dec 1st 9am PST
*/

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
