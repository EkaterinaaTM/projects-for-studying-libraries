import { useRouter } from 'next/router'
import Layout from '../components/Layout'
// import {  FormattedMessage } from 'react-intl';


export const Post = () => {
  const router: {query: { title: string }} = useRouter();
  return (
    <Layout>
      <h1>{router.query.title}</h1>
      <p> This is the blog post content. </p>
    </Layout>
  )
}

export default Post;