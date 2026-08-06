import type { Metadata } from "next";
import { Plus_Jakarta_Sans, DM_Mono } from "next/font/google";
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
      className={`${plusJakarta.variable} ${dmMono.variable} scroll-smooth`}
    >
      <body className="bg-[#030303] text-[#f4f4f5] antialiased min-h-screen">
        <div className="noise-bg" />
        {children}
      </body>
    </html>
  );
}
