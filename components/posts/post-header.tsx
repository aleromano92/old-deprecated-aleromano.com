import Link from 'next/link';
import { IReadTimeResults } from 'reading-time';
import { FaArrowLeft } from 'react-icons/fa';
import Avatar from '../common/avatar';
import PostTitle from './post-title';
import Author from '../../types/author';
import { DateAndReadingTime } from '../common/date-reading-time';

type Props = {
  title: string;
  date: string;
  author: Author;
  readingTime: IReadTimeResults;
};

const PostHeader = ({ title, date, author, readingTime }: Props) => {
  return (
    <>
      <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
        <Link href="/">
          <a className="hover:underline">
            <FaArrowLeft className="inline" /> Back
          </a>
        </Link>
      </h2>
      <PostTitle>{title}</PostTitle>
      <div className="hidden md:flex md:mb-12 md:items-center md:flex-col">
        <Avatar name={author.name} picture={author.picture} />
        <DateAndReadingTime date={date} readingTime={readingTime} />
      </div>
      <div className="max-w-4xl mx-auto">
        <div className="block md:hidden mb-6">
          <Avatar name={author.name} picture={author.picture} />
          <DateAndReadingTime date={date} readingTime={readingTime} />
        </div>
      </div>
    </>
  );
};

export default PostHeader;
