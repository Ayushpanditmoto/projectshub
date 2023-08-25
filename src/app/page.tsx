import Image from "next/image";
import Card from "./components/Card";
import PostMenu from "./components/PostMenu";
import Blog from "./components/Blog";

export default function Home() {
  return (
    <>
    <PostMenu/>
    <Blog/>
    </>
  );
}
