import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";

import { cn } from "@/shared";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Strife Studio - Разработка, Дизайн и Монтаж",
  description:
    "Strife Studio — инновационная студия разработки программного обеспечения, дизайна и монтажа. Создаем решения для edTech, AI и не только с использованием передовых технологий.",
  keywords: [
    "разработка",
    "дизайн",
    "монтаж",
    "edTech",
    "AI",
    "программное обеспечение",
    "студия разработки",
    "Strife Studio",
  ],
  authors: [{ name: "Strife Studio Team", url: "https://strifestudio.com" }],
  openGraph: {
    title: "Strife Studio - Ваши идеи в жизнь",
    description:
      "Инновации в разработке, дизайне и монтаже с использованием AI и современных технологий.",
    url: "https://strifestudio.com",
    siteName: "Strife Studio",
    images: [
      {
        url: "https://strifestudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Strife Studio Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strife Studio - Development & Design",
    description:
      "Leading studio in software development, design, and motion effects with AI integration.",
    images: ["https://strifestudio.com/twitter-image.jpg"],
    creator: "@StrifeStudio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: "https://strifestudio.com",
    languages: {
      "en-US": "https://strifestudio.com/en-us",
      "ru-RU": "https://strifestudio.com/ru-ru",
    },
  },
  verification: {
    google: "google-site-verification-code",
    yandex: "yandex-verification-code",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="motion-safe:scroll-smooth">
      <body className={cn(`antialiased`, robotoFlex.variable)}>
        <div>{children}</div>
      </body>
    </html>
  );
}
