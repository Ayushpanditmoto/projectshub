"use client";
import React from "react";
import HelloWorld from "./privacy-policy.mdx";
import CenterLayout from "@/app/components/CenterLayout";
function Privacy() {
  return (
    <>
      <CenterLayout>
        <div className="prose">
          <h1>Privacy Policy</h1>

          <HelloWorld />
        </div>
      </CenterLayout>
    </>
  );
}

export default Privacy;
