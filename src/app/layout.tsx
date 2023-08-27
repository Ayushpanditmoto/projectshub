// "use client";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Poppins } from "next/font/google";
// import { UserProvider } from "@auth0/nextjs-auth0/client";
import AppWrap from "./AppWrap";

const poppins = Poppins({
  weight: ["400", "600"],
  subsets: ["latin", "latin-ext"],
});

export const metadata: Metadata = {
  title: "ProjectsHub",
  description: "ProjectsHub is a blog by ProjectsHub.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <UserProvider>
    <html lang="en" suppressHydrationWarning={true}>
      <body className={poppins.className} suppressHydrationWarning={true}>
        <AppWrap>{children}</AppWrap>
      </body>
      <Analytics />
    </html>
    // </UserProvider>
  );
}
