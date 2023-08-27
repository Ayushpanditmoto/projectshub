"use client";
import { ReduxProvider } from "@/redux/provider";
import React from "react";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Newsletter from "./components/Newsletter";
import { MDXProvider } from "@mdx-js/react";

function AppWrap({ children }: { children: React.ReactNode }) {
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
      <ReduxProvider>
        <Header />
        {children}
        <Newsletter />
        <Footer />
      </ReduxProvider>
    </MDXProvider>
  );
}

export default AppWrap;
