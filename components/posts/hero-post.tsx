import DateFormatter from '../common/date-formatter';
import Link from 'next/link';
import Author from '../../types/author';
import { IReadTimeResults } from 'reading-time';
import { SectionTitle } from '../common/section-title';
import { DateAndReadingTime } from '../common/date-reading-time';

type Props = {
  title: string;
  date: string;
  excerpt: string;
  slug: string;
  readingTime: IReadTimeResults;
};

const HeroPost = ({ title, date, excerpt, slug, readingTime }: Props) => {
  return (
    <section>
      <SectionTitle title="Latest Post" />
      <div className="md:grid md:grid-cols-2 md:gap-x-16 lg:gap-x-8 mb-20 md:mb-28">
        <div>
          <h3 className="mb-4 text-xl md:text-2xl lg:text-4xl font-bold leading-tight">
            <Link as={`/posts/${slug}`} href="/posts/[slug]">
              <a className="hover:underline">{title}</a>
            </Link>
          </h3>
          <DateAndReadingTime date={date} readingTime={readingTime} />
        </div>
        <div>
          <p className="text-lg leading-relaxed mb-4">{excerpt}</p>
        </div>
      </div>
    </section>
  );
};

export default HeroPost;
