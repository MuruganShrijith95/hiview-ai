import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "HiView AI — Don't Just Watch Your Supply Chain. Command It.",
  description: "HiView AI provides end-to-end supply chain visibility that predicts disruptions and autonomously resolves them. The platform that sees, scores, then acts across 150+ operational metrics.",
  keywords: [
    "HiView AI",
    "supply chain visibility",
    "autonomous control tower",
    "EDIFAI",
    "IQUA cold chain",
    "FairMiles logistics",
    "MIST inventory balancing",
    "AI demand forecasting",
    "supply chain predictive analytics"
  ],
  authors: [{ name: "HiView AI" }],
  openGraph: {
    title: "HiView AI — Don't Just Watch Your Supply Chain. Command It.",
    description: "End-to-end visibility that predicts disruptions and autonomously resolves them.",
    url: "https://hiview.ai",
    siteName: "HiView AI",
    type: "website",
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
      className={`${inter.variable} ${plusJakarta.variable} scroll-smooth`}
    >
      <body className="min-h-screen bg-white text-slate-300 antialiased flex flex-col selection:bg-sky-400/20 selection:text-ink">
        <Navbar />
        <main className="flex-1 relative z-10 pt-20">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
