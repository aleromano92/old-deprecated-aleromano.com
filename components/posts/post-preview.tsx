import Link from 'next/link';
import { IReadTimeResults } from 'reading-time';
import { DateAndReadingTime } from '../common/date-reading-time';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  readingTime: IReadTimeResults;
};

export const PostPreview = ({ title, date, excerpt, readingTime, slug }: Props) => {
  return (
    <div>
      <h3 className="text-xl md:text-3xl font-bold mb-3 leading-snug">
        <Link as={`/posts/${slug}`} href="/posts/[slug]">
          <a className="hover:underline">{title}</a>
        </Link>
      </h3>
      <DateAndReadingTime date={date} readingTime={readingTime} />
      <p className="text-lg mb-4">{excerpt}</p>
    </div>
  );
};
