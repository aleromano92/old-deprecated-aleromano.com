import { Container } from '../components/common/container';
import { MorePosts } from '../components/more-posts';
import HeroPost from '../components/posts/hero-post';
import { Intro } from '../components/intro';
import Layout from '../components/layout';
import { getAllPosts } from '../lib/api';
import Head from 'next/head';
import Post from '../types/post';

type Props = {
  allPosts: Post[];
};

const Index = ({ allPosts }: Props) => {
  const latestPost = allPosts[0];
  const morePosts = allPosts.slice(1);
  return (
    <>
      <Layout>
        <Head>
          <title>Alessandro Romano - The Empathic Tech Lead</title>
        </Head>
        <Container>
          <Intro />
          {latestPost && (
            <HeroPost
              title={latestPost.title}
              date={latestPost.date}
              slug={latestPost.slug}
              excerpt={latestPost.excerpt}
              readingTime={latestPost.readingTime}
            />
          )}
          {morePosts.length > 0 && <MorePosts posts={morePosts} />}
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
