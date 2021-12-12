import Image from 'next/image';
import profilePicture from '../public/assets/alepro.png';

export const Intro = () => {
  return (
    <section className="flex-col md:flex-row flex items-center md:justify-between mt-8 mb-8 md:mb-6">
      <header className="mb-4 md:mb-3 md:w-8/12">
        <h1 className="text-4xl md:text-6xl font-bold md:pr-8">Alessandro Romano</h1>
        <p className="text-2xl md:text-3xl italic md:pr-8">The Empathic Tech Lead</p>
        <p className="text-lg mt-4">
          My mind would say I never let it rest, even when I meditate or try to sleep. I believe in "Done is better than
          perfect!", still I'm a detail maniac obsessed with how things work: from universal physics laws, to that
          just-launched shiny Cloud service. I'm still not perfect. I was thunderstruck on the Hello World Way with
          first RPG Maker, not knowing programming will always stay close. Even when, later, I would have understood
          empathy and emotional intelligence may help me more than any technical knowledge.
        </p>
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
