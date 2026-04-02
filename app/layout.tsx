import type { Metadata } from "next";
import { Geist, Geist_Mono, Instrument_Sans } from "next/font/google"

import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { cn } from "@/lib/utils";

const instrumentSans = Instrument_Sans({
  subsets:['latin'],
  variable:'--font-sans'
})

const fontMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://vidriera.xyz"),

  title: {
    default: "vidriera.xyz",
    template: "%s | vidriera.xyz",
  },

  description:
    "Descubrí emprendimientos de toda Argentina en un solo lugar. Vidriera conecta marcas independientes con personas que buscan comprar mejor.",

  keywords: [
    "emprendimientos argentinos",
    "marcas independientes",
    "comprar emprendedores",
    "tienda online argentina",
    "productos locales",
    "vidriera emprendimientos",
  ],

  openGraph: {
    title: "Vidriera — Todos los emprendimientos del país en un solo lugar",
    description:
      "Explorá y apoyá emprendimientos argentinos. Encontrá productos únicos y marcas independientes en Vidriera.",
    url: "https://vidriera.xyz",
    siteName: "Vidriera",
    images: [
      {
        url: "/og-image.png", // asegurate de crear esta imagen
        width: 1200,
        height: 630,
        alt: "Vidriera - Emprendimientos de Argentina",
      },
    ],
    locale: "es_AR",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "vidriera.xyz — Emprendimientos de Argentina",
    description:
      "Todos los emprendimientos del país en un solo lugar.",
    images: ["/og-image.png"],
  },

  robots: {
    index: true,
    follow: true,
  },

  alternates: {
    canonical: "https://vidriera.xyz",
  },

  category: "ecommerce",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn("antialiased", fontMono.variable, "font-sans", instrumentSans.variable)}
    >
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  )
}
