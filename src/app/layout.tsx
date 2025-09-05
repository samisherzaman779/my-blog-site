import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import Chatbot from "@/components/Chatbot";
import { ThemeProvider } from "./providers";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "TechXiz Solutions | Web Development & AI Services",
  description:
    "Get the latest blogs and services on Web Development, AI, and Freelancing. Hire us for your next project.",
  keywords: [
    "web development",
    "AI services",
    "Next.js blog",
    "freelancing",
    "TechXiz Solutions",
  ],
  authors: [{ name: "Sami Sherzaman" }],
  openGraph: {
    title: "TechXiz Solutions | Web Development & AI Services",
    description:
      "Discover insights on web development and AI with TechXiz Solutions.",
    url: "https://my-blog-site-lake.vercel.app/",
    siteName: "TechXiz Solutions",
    images: [
      {
        url: "https://my-blog-site-lake.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "TechXiz Solutions",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    site: "@techxiz",
    creator: "@sami_sherzaman",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable} bg-white text-black dark:bg-gray-900 dark:text-white`}
      >
      <body className="antialiased transition-colors duration-300 scroll-smooth bg-white text-black dark:bg-gray-900 dark:text-white"
      >
        <ThemeProvider>
          <Header />
          <main id="main-content" className="min-h-screen">
            {children}
          </main>
          {process.env.NEXT_PUBLIC_GA_ID && (
            <GoogleAnalytics NEXT_PUBLIC_GA_ID={process.env.NEXT_PUBLIC_GA_ID} />
          )}
          <Chatbot />
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
