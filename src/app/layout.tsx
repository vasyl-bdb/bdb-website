import type { Metadata } from "next";
import { Inter, Cormorant_Garamond } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["cyrillic", "latin"],
  display: "swap",
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["cyrillic", "latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bdb.com.ua"),

  title: {
    default: "Бухгалтерія для бізнесу | BDB",
    template: "%s | BDB",
  },

  description:
    "Бухгалтерський аутсорсинг для ТОВ, ФОП, ГО та благодійних фондів. Ведення бухгалтерського обліку, звітність, зарплата, податки та консультації. 15 років професійного досвіду.",

  keywords: [
    "бухгалтерський аутсорсинг",
    "бухгалтер для ТОВ",
    "бухгалтер для ФОП",
    "бухгалтер для ГО",
    "бухгалтер для благодійного фонду",
    "ведення бухгалтерського обліку",
    "податкова звітність",
    "зарплата та кадри",
    "бухгалтерські послуги",
    "Бухгалтерія для бізнесу",
    "BDB",
  ],

  authors: [
    {
      name: "Бухгалтерія для бізнесу",
      url: "https://bdb.com.ua",
    },
  ],

  creator: "BDB — Бухгалтерія для бізнесу",
  publisher: "BDB — Бухгалтерія для бізнесу",

  alternates: {
    canonical: "https://bdb.com.ua",
  },

  openGraph: {
    type: "website",
    locale: "uk_UA",
    url: "https://bdb.com.ua",
    siteName: "BDB — Бухгалтерія для бізнесу",
    title: "Бухгалтерія для бізнесу | BDB",
    description:
      "Бухгалтерський аутсорсинг для ТОВ, ФОП, ГО та благодійних фондів. 15 років професійного досвіду, дисципліна, пунктуальність та оперативність.",
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },

  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={`${inter.variable} ${cormorant.variable}`}>
        {children}
      </body>
    </html>
  );
}