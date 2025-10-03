import type { Metadata } from "next";
import { Roboto_Flex } from "next/font/google";
import "./globals.css";
import { cn } from "@/shared";

const robotoFlex = Roboto_Flex({
  variable: "--font-roboto-flex",
  subsets: ["latin", "cyrillic"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Strife Studio - Разработка, Дизайн, AI и edTech решения",
  description:
    "Strife Studio — инновационная студия разработки программного обеспечения, дизайна и монтажа. Создаем цифровое превосходство для вашего бизнеса с использованием AI, edTech и современных технологий. Более 60 завершенных проектов и 50+ довольных клиентов. Присоединяйтесь к нам в Telegram: https://t.me/strife_studio.",
  keywords: [
    "Strife Studio",
    "разработка программного обеспечения",
    "веб-разработка",
    "мобильная разработка",
    "UI/UX дизайн",
    "DevOps",
    "технический консалтинг",
    "AI",
    "edTech",
    "backend разработка",
    "API интеграция",
    "цифровое превосходство",
    "Telegram Strife Studio",
  ],
  authors: [{ name: "Strife Studio Team", url: "https://strifestudio.com" }],
  openGraph: {
    title: "Strife Studio - Создаем цифровое превосходство",
    description:
      "Мы решаем сложные IT-задачи: веб и мобильная разработка, UI/UX дизайн, AI и edTech решения. 60+ проектов, 50+ довольных клиентов. Подпишитесь на наш Telegram: https://t.me/strife_studio.",
    url: "https://strifestudio.com",
    siteName: "Strife Studio",
    images: [
      {
        url: "https://strifestudio.com/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Strife Studio - Разработка и Дизайн",
      },
    ],
    locale: "ru_RU",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Strife Studio - Разработка, Дизайн, AI",
    description:
      "Полный цикл разработки: от концепции до запуска. AI, edTech, веб и мобильные приложения. Подпишитесь: https://t.me/strife_studio.",
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
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru" className="motion-safe:scroll-smooth">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Strife Studio",
              url: "https://strifestudio.com",
              logo: "https://strifestudio.com/icons/strife-logo.svg",
              description:
                "Strife Studio — студия разработки программного обеспечения, дизайна и монтажа. Мы создаем цифровое превосходство с использованием AI и edTech технологий. Более 60 завершенных проектов и 50+ довольных клиентов.",
              sameAs: ["https://t.me/strife_studio"],
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "Customer Service",
                url: "https://t.me/strife_studio",
              },
              makesOffer: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Веб-разработка",
                    description:
                      "Создание современных веб-приложений для бизнеса.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Мобильная разработка",
                    description: "Разработка приложений для iOS и Android.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "UI/UX Дизайн",
                    description:
                      "Создание интуитивных и привлекательных интерфейсов.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "DevOps и Облака",
                    description: "Настройка инфраструктуры и облачных решений.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Технический консалтинг",
                    description: "Консультации по оптимизации IT-процессов.",
                  },
                },
              ],
            }),
          }}
        />
      </head>
      <body className={cn(`antialiased`, robotoFlex.variable)}>
        <div>{children}</div>
      </body>
    </html>
  );
}
