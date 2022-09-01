type Props = {
  content: string;
};

const PostBody = ({ content }: Props) => {
  return (
    <div className="prose sm:prose-lg prose-aleromano dark:prose-invert break-word mx-auto">
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
};

export default PostBody;
