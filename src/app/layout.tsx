import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";
import MainLayoutWrapper from "@/components/layout/MainLayoutWrapper";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Universitas Merdeka Malang | UNMER",
  description: "Website Resmi Universitas Merdeka Malang - Kampus Merdeka, Berkarakter & Unggul.",
  keywords: ["UNMER", "Universitas Merdeka Malang", "Kampus Malang", "Pendidikan Tinggi"],
  authors: [{ name: "UNMER Malang" }],
  icons: {
    icon: "/logounmer.png",
    shortcut: "/logounmer.png",
    apple: "/logounmer.png",
  },
  openGraph: {
    title: "Universitas Merdeka Malang | UNMER",
    description: "Kampus Merdeka, Berkarakter & Unggul. Bergabunglah bersama Universitas Merdeka Malang.",
    url: "https://ngodingin.web.id",
    siteName: "UNMER Malang",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "UNMER Malang",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Universitas Merdeka Malang | UNMER",
    description: "Website Resmi Universitas Merdeka Malang",
    images: ["/og-image.jpg"],
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
      lang="id"
      className={`${inter.variable} ${playfair.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <MainLayoutWrapper>{children}</MainLayoutWrapper>
      </body>
    </html>
  );
}