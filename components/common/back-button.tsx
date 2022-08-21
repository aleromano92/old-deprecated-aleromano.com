import Link from 'next/link';
import { FaArrowLeft } from 'react-icons/fa';

export const BackButton = () => (
  <h2 className="text-2xl font-bold tracking-tight md:tracking-tighter leading-tight mb-8 mt-8">
    <Link href="/">
      <a className="hover:underline">
        <FaArrowLeft className="inline" /> Back
      </a>
    </Link>
  </h2>
);
