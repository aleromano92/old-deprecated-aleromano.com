import Image from 'next/image';
import profilePicture from '../public/assets/alepro.png';

export const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-6">
      <header className="mb-4 md:mb-3">
        <h1 className="text-4xl md:text-6xl font-bold md:pr-8">Alessandro Romano</h1>
        <p className="text-2xl md:text-3xl italic md:pr-8">The Empathic Tech Lead</p>
      </header>
      <Image
        src={profilePicture}
        alt="Alessandro Romano Profile"
        className="rounded-full border-foreground border-4 border-dashed"
        width={600}
        height={400}
        placeholder="blur"
      />
    </section>
  );
};
