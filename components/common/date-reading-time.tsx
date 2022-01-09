import { IReadTimeResults } from 'reading-time';
import { parseISO, format } from 'date-fns';

interface Props {
  date: string;
  readingTime: IReadTimeResults;
}

const DateFormatter: React.FC<Pick<Props, 'date'>> = ({ date }) => {
  const parsedDate = parseISO(date);
  return <time dateTime={date}>{format(parsedDate, 'LLLL	d, yyyy')}</time>;
};

export const DateAndReadingTime: React.FC<Props> = ({ date, readingTime }) => (
  <div className="text-lg mb-4 text-primary text-opacity-75">
    <DateFormatter date={date} /> • <span>{readingTime.text}</span>{' '}
  </div>
);
