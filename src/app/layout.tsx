import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono, Syne } from "next/font/google";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
});

const dmMono = DM_Mono({
  weight: ["400", "500"],
  subsets: ["latin"],
  variable: "--font-mono",
});

const syne = Syne({
  weight: ["700", "800"],
  subsets: ["latin"],
  variable: "--font-syne",
});

export const metadata: Metadata = {
  title: "Ajinkya Mane | AI Engineer & Full Stack Developer",
  description: "Ajinkya Mane is a Full-Stack AI Engineer focused on LLM applications, RAG systems, and production-grade intelligent products.",
  icons: {
    icon: "/favicon.png",
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
      className={`${plusJakarta.variable} ${dmMono.variable} ${syne.variable} scroll-smooth`}
    >
      <body className="bg-[#050810] text-[#e8eaf0] antialiased min-h-screen">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
