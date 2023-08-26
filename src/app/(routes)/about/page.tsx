"use client";
import React from "react";
import HelloWorld from "./blog.mdx";
import CenterLayout from "@/app/components/CenterLayout";

function About() {
  return (
    <>
      {/* <CenterLayout> */}
      <h1>About Us</h1>

      <HelloWorld />
      {/* </CenterLayout> */}
    </>
  );
}

export default About;
