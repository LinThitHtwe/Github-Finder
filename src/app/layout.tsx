import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import "@fortawesome/fontawesome-svg-core/styles.css";
import { config } from "@fortawesome/fontawesome-svg-core";
import Provider from "./Provider";
config.autoAddCss = false;

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Github Finder",
  description: "A Github Account Finder Website",
  keywords: [
    "Github",
    "Git",
    "Github Finder",
    "Git and Github",
    "Github Account",
    "Git Account",
    "Git Finder",
    "Github Finder",
    "Github Account",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} max-h-full min-h-screen bg-background bg-[linear-gradient(to_right,#AB88E104_1px,transparent_1px),linear-gradient(to_bottom,#AB88E104_1px,transparent_1px)] bg-[size:28px_28px] text-text`}
      >
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}
