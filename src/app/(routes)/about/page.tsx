"use client";
import React from "react";
import HelloWorld from "./blog.mdx";
import CenterLayout from "@/app/components/CenterLayout";
function About() {
  return (
    <>
      <CenterLayout>
        <div className="prose">
          <h1>About Us</h1>

          <HelloWorld />
        </div>
      </CenterLayout>
    </>
  );
}

export default About;
