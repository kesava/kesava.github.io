import type { Metadata } from "next";
import Script from "next/script";
import { Playfair_Display, Lora, Crimson_Text } from 'next/font/google';
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
});

const lora = Lora({
  subsets: ['latin'],
  variable: '--font-lora',
  display: 'swap',
});

const crimson = Crimson_Text({
  subsets: ['latin'],
  weight: ['400', '600'],
  variable: '--font-code',
  display: 'swap',
});

export const metadata: Metadata = {
  title: "Kesava Mallela - Books, Translations, and Technology",
  description: "Essays on books, Telugu translations, and software engineering",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${playfair.variable} ${lora.variable} ${crimson.variable}`}>
      <head>
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-9ZV4L40XB2"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-9ZV4L40XB2');
          `}
        </Script>
      </head>
      <body className="antialiased min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
