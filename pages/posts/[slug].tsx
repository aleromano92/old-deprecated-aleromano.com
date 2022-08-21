import { useRouter } from 'next/router';
import ErrorPage from 'next/error';
import { Container } from '../../components/common/container';
import PostBody from '../../components/posts/post-body';
import PostHeader from '../../components/posts/post-header';
import Layout from '../../components/layout';
import { getPostBySlug, getAllPosts } from '../../lib/api';
import PostTitle from '../../components/posts/post-title';
import Head from 'next/head';
import markdownToHtml from '../../lib/markdownToHtml';
import PostType from '../../types/post';
import { OG_IMAGE_URL } from '../../lib/constants';
import { BackButton } from '../../components/common/back-button';

type Props = {
  post: PostType;
  morePosts: PostType[];
  preview?: boolean;
};

const Post = ({ post, morePosts, preview }: Props) => {
  const router = useRouter();
  if (!router.isFallback && !post?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <Layout preview={preview}>
      <Container>
        {router.isFallback ? (
          <PostTitle excerpt="">Loading…</PostTitle>
        ) : (
          <>
            <BackButton />
            <article className="mb-16 max-w-4xl mx-auto">
              <Head>
                <title>{post.title}</title>
                <meta property="og:image" content={OG_IMAGE_URL} />
                <meta name="description" content={post.excerpt} />
              </Head>
              <PostHeader
                title={post.title}
                date={post.date}
                author={post.author}
                readingTime={post.readingTime}
                excerpt={post.excerpt}
              />
              <PostBody content={post.content} />
            </article>
          </>
        )}
      </Container>
    </Layout>
  );
};

export default Post;

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const post = getPostBySlug(params.slug, [
    'title',
    'date',
    'slug',
    'author',
    'content',
    'ogImage',
    'readingTime',
    'excerpt',
  ]);
  const content = await markdownToHtml(post.content.toString() || '');

  return {
    props: {
      post: {
        ...post,
        content,
      },
    },
  };
}

export async function getStaticPaths() {
  const posts = getAllPosts(['slug']);

  return {
    paths: posts.map((posts) => {
      return {
        params: {
          slug: posts.slug,
        },
      };
    }),
    fallback: false,
  };
}
