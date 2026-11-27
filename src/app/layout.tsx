import type { Metadata } from "next";
import { Fredoka, Nunito } from "next/font/google";
import "./globals.css";

const fredoka = Fredoka({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = Nunito({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inky Pinky — Meet Pinky the Adorable Pink Kitten",
  description:
    "Official character page for Pinky (Inky Pinky), the adorable, playful, fluffy bright-pink 3D animated kitten bringing cute reels, dances, and adventures.",
  openGraph: {
    title: "Inky Pinky — Meet Pinky 💖",
    description:
      "Adorable, playful, fluffy pink kitten starring in cute Facebook & YouTube Reels. Follow Pinky on Facebook (fb.com/inkypinkycat) & YouTube (@InkyPinkyCat)!",
    images: ["/media/cover.jpg"],
    type: "website",
  },
  icons: {
    icon: "/media/profile.jpg",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${fredoka.variable} ${nunito.variable}`}>
      <body className="antialiased selection:bg-[#FF5CA8]/30 selection:text-[#3D112A]">
        {children}
      </body>
    </html>
  );
}
