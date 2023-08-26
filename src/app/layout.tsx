"use client";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import type { Metadata } from "next";
import { Quicksand } from "next/font/google";
import { UserProvider } from "@auth0/nextjs-auth0/client";
import { MDXProvider } from "@mdx-js/react";
import AppWrap from "./AppWrap";

const inter = Quicksand({ subsets: ["latin"] });

// export const metadata: Metadata = {
//   title: "ProjectsHub",
//   description: "ProjectsHub is a blog by ProjectsHub.",
// };

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <MDXProvider
      components={{
        h1: (props) => <h1 style={{ color: "red" }} {...props} />,
        h2: (props) => <h2 style={{ color: "blue" }} {...props} />,
        h3: (props) => <h3 style={{ color: "green" }} {...props} />,
        h4: (props) => <h4 style={{ color: "yellow" }} {...props} />,
        h5: (props) => <h5 style={{ color: "pink" }} {...props} />,
        h6: (props) => <h6 style={{ color: "purple" }} {...props} />,
        p: (props) => <p style={{ color: "orange" }} {...props} />,
        a: (props) => <a style={{ color: "brown" }} {...props} />,
        ul: (props) => <ul style={{ color: "black" }} {...props} />,
        ol: (props) => <ol style={{ color: "white" }} {...props} />,
        li: (props) => <li style={{ color: "gray" }} {...props} />,
        blockquote: (props) => (
          <blockquote style={{ color: "cyan" }} {...props} />
        ),
        hr: (props) => <hr style={{ color: "magenta" }} {...props} />,
        em: (props) => <em style={{ color: "teal" }} {...props} />,
        strong: (props) => <strong style={{ color: "lime" }} {...props} />,
        img: (props) => (
          <img style={{ color: "maroon", width: "50%" }} {...props} />
        ),
      }}
    >
      <UserProvider>
        <html lang="en" suppressHydrationWarning={true}>
          <body className={inter.className} suppressHydrationWarning={true}>
            <AppWrap>{children}</AppWrap>
          </body>
          <Analytics />
        </html>
      </UserProvider>
    </MDXProvider>
  );
}
