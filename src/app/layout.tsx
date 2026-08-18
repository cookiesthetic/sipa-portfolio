import type { Metadata } from "next";
import localFont from "next/font/local";
import FallingClover from "@/components/FallingClover";
import SplashScreen from "@/components/SplashScreen";
import "./globals.css";

const glora = localFont({
  src: "./fonts/Glora Black.ttf",
  variable: "--font-head",
});

const geraldton = localFont({
  src: "./fonts/GeraldtonRegular.otf",
  variable: "--font-sans",
});

export const metadata: Metadata = {
  title: "Syifa Maulida Aprianti Portfolio",
  description: "I Turn Ideas Into Realities",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${glora.variable} ${geraldton.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col font-sans">
        <SplashScreen />
        <FallingClover />
        {children}
      </body>
    </html>
  );
}

