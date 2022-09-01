import { ReactNode } from 'react';

type Props = {
  children?: ReactNode;
  excerpt: string;
};

const PostTitle = ({ children, excerpt }: Props) => {
  return (
    <>
      <h1 className="text-4xl font-bold tracking-tighter leading-tight mb-6 text-center">{children}</h1>
      <h2 className="text-xl font-italic tracking-tighter leading-tight mb-10 text-center">{excerpt}</h2>
    </>
  );
};

export default PostTitle;
