import { PostPreview } from './posts/post-preview';
import Post from '../types/post';
import { SectionTitle } from './common/section-title';

type Props = {
  posts: Post[];
};

export const BlogPosts = ({ posts }: Props) => {
  return (
    <section>
      <SectionTitle title="Blog Posts" />
      <div className="grid grid-cols-1 md:grid-cols-2 md:gap-x-16 gap-y-16 mb-16">
        {posts.map((post) => (
          <PostPreview
            key={post.slug}
            title={post.title}
            date={post.date}
            slug={post.slug}
            excerpt={post.excerpt}
            readingTime={post.readingTime}
          />
        ))}
      </div>
    </section>
  );
};
