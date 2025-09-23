
import type { Metadata } from "next";
import { Inter, JetBrains_Mono, Pacifico } from "next/font/google";
import "./globals.css";

const pacifico = Pacifico({
  weight: '400',
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-pacifico',
})

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Siyana Info Solutions - Leading IT Company in Gujarat",
  description: "Siyana Info Solutions is a premier IT company specializing in enterprise software development, web development, mobile apps, digital marketing, and business intelligence solutions. Trusted by government and enterprise clients across Gujarat.",
  keywords: "IT company Gujarat, enterprise software development, web development, mobile app development, digital marketing, business intelligence, government projects, ERP solutions",
  authors: [{ name: "Siyana Info Solutions" }],
  creator: "Siyana Info Solutions",
  publisher: "Siyana Info Solutions",
  robots: "index, follow",
  metadataBase: new URL('https://siyanainfo.com'),
  alternates: {
    canonical: "/"
  },
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "/",
    siteName: "Siyana Info Solutions",
    title: "Siyana Info Solutions - Leading IT Company in Gujarat",
    description: "Premier IT company specializing in enterprise software development, web development, mobile apps, and digital marketing solutions. Serving government and enterprise clients across Gujarat.",
    images: [
      {
        url: "https://static.readdy.ai/image/7fe129f8d7ac12cdc97a659d50dae110/8c7f99aa674fd6b39cbe8dfa3abcac9f.png",
        width: 1200,
        height: 630,
        alt: "Siyana Info Solutions - Leading IT Company in Gujarat",
        type: "image/png"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    site: "@Siyanainfo",
    creator: "@Siyanainfo",
    title: "Siyana Info Solutions - Leading IT Company in Gujarat",
    description: "Premier IT company specializing in enterprise software development, web development, mobile apps, and digital marketing solutions. Serving government and enterprise clients across Gujarat.",
    images: {
      url: "https://static.readdy.ai/image/7fe129f8d7ac12cdc97a659d50dae110/8c7f99aa674fd6b39cbe8dfa3abcac9f.png",
      alt: "Siyana Info Solutions - Leading IT Company in Gujarat"
    }
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      "facebook-domain-verification": "your-facebook-verification-code"
    }
  }
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#001d3f"
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning={true}>
      <head>
        <link rel="icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <meta name="theme-color" content="#001d3f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Siyana Info Solutions" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta name="twitter:image:alt" content="Siyana Info Solutions - Leading IT Company in Gujarat" />
        <link href="https://cdn.jsdelivr.net/npm/remixicon@4.3.0/fonts/remixicon.css" rel="stylesheet" />
      </head>
      <body
        className={`${inter.variable} ${jetbrainsMono.variable} ${pacifico.variable} antialiased`}
        suppressHydrationWarning={true}
      >
        {children}
      </body>
    </html>
  );
}
