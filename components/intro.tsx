import Image from 'next/image';
import profilePicture from '../public/assets/alepro.png';

export const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-6">
      <p className="text-lg mt-4">
        I'm addicted to details obsessed with how things work: from Cloud services to human relationships. Since my
        first Hello World in RPG Maker, I have come to believe that <strong>empathy</strong> and emotional intelligence
        are far more important in the IT field.
      </p>
      <Image src={profilePicture} alt="Alessandro Romano Profile" width={600} height={400} placeholder="blur" />
    </section>
  );
};
