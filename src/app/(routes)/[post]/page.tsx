"use client";
import CenterLayout from '@/app/components/CenterLayout';
import Page404 from '@/app/not-found';
import { getAllPostsMeta } from "@/lib/mdx";
import {
  usePathname
} from 'next/navigation';



interface Props {
  params: {
    post: Post
  }
}
// this can be extracted to a separate file
type Post = 'phyton' | 'flutter' | 'react-next' | 'backend' | 'other';

const Page = async({ params: { post } }: Props) => {
  const router = usePathname();
  console.log(post);
  console.log(router);
  
  const validRoutes: Post[] = ["phyton", "flutter", "react-next", "backend", 'other'];
  
  // const posts = await getAllPostsMeta({
  //   BlogPath: 'bac',
  // });

  if (!validRoutes.includes(post)) {
    // redirect to 404 page
    return <Page404 />
  }

  return (
    <>
      <CenterLayout>
        <h1>{post}</h1>
      </CenterLayout>
    </>
  )
}

export default Page;