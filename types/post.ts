import { IReadTimeResults } from 'reading-time';
import Author from './author';

type PostType = {
  slug: string;
  title: string;
  date: string;
  author: Author;
  excerpt: string;
  ogImage: {
    url: string;
  };
  content: string;
  readingTime: IReadTimeResults;
};

export default PostType;
