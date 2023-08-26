"use client";
import React from "react";
import CenterLayout from "@/app/components/CenterLayout";
import { useRouter, useParams } from "next/navigation";

function SingleBlog() {
  const param = useParams();
  console.log(param.slug);
  return (
    <div>
      <CenterLayout>
        <h1>Single Blog</h1>
        <h2>{param.slug}</h2>
      </CenterLayout>
    </div>
  );
}

export default SingleBlog;
