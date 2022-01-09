import { Container } from '../components/common/container';
import { BlogPosts } from '../components/blog-posts';
import { Intro } from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  return (
    <>
      <Layout>
        <Head>
          <title>Alessandro Romano - The Empathic Tech Lead</title>
        </Head>
        <Container>
          <Intro />
          {allPosts.length > 0 && <BlogPosts posts={allPosts} />}
        </Container>
      </Layout>
    </>
  );
};

export default Index;

export const getStaticProps = async () => {
  const allPosts = getAllPosts(['title', 'date', 'slug', 'author', 'excerpt', 'readingTime']);

  return {
    props: { allPosts },
  };
};
