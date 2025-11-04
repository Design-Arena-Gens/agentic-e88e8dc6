import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import "./globals.css";

const manrope = Manrope({ subsets: ["latin"], display: "swap" });

export const metadata: Metadata = {
  title: "Le Cercle Scale | Mastermind dirigeants ambulance",
  description:
    "Le Cercle Scale, mastermind exclusif de 12 mois pour dirigeants d'ambulance : gouvernance, process, digitalisation et croissance pilotée par la data.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={manrope.className}>{children}</body>
    </html>
  );
}
