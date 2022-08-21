import { IReadTimeResults } from 'reading-time';
import Avatar from '../common/avatar';
import PostTitle from './post-title';
import Author from '../../types/author';
import { DateAndReadingTime } from '../common/date-reading-time';

type Props = {
  title: string;
  date: string;
  author: Author;
  readingTime: IReadTimeResults;
  excerpt: string;
};

const PostHeader = ({ title, date, author, readingTime, excerpt }: Props) => {
  return (
    <>
      <PostTitle excerpt={excerpt}>{title}</PostTitle>
      <div className="hidden md:flex md:flex-col">
        <Avatar name={author.name} picture={author.picture} />
        <DateAndReadingTime date={date} readingTime={readingTime} />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="block md:hidden">
          <Avatar name={author.name} picture={author.picture} />
          <DateAndReadingTime date={date} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
