
import CenterLayout from '@/app/components/CenterLayout';
import Page404 from '@/app/not-found';

interface Props {
  params: {
    post: Post
  }
}
// this can be extracted to a separate file
type Post = 'phyton' | 'flutter' | 'react-next' | 'backend' | 'other';

const Page = ({ params: { post } }: Props) => {
  const validRoutes: Post[] = ["phyton", "flutter", "react-next", "backend", 'other'];

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