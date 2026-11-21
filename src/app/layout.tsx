import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

// Fonts are self-hosted (latin subset, variable weight) so the build never
// depends on reaching Google Fonts at build time.
const fredoka = localFont({
  src: "./fonts/fredoka-latin-variable.woff2",
  weight: "400 700",
  style: "normal",
  variable: "--font-fredoka",
  display: "swap",
});

const nunito = localFont({
  src: "./fonts/nunito-latin-variable.woff2",
  weight: "400 800",
  style: "normal",
  variable: "--font-nunito",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Inky Pinky — Meet Pinky the Adorable Pink Kitten",
  description:
    "Official character page for Pinky (Inky Pinky), the adorable, playful, fluffy bright-pink 3D animated kitten bringing cute reels, dances, and adventures.",
  openGraph: {
    title: "Inky Pinky — Meet Pinky 🩷",
    description:
      "Adorable, playful, fluffy pink kitten starring in cute Facebook & YouTube Reels. Follow Pinky at fb.com/inkypinkycat!",
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
