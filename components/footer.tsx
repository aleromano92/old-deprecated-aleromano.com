import Container from './common/container';

const Footer = () => {
  return (
    <footer className="bg-accent-1 border-t border-accent-2">
      <Container>
        <div className="py-28 flex flex-col items-center">
          <h3 className="text-2xl lg:text-3xl font-bold tracking-tighter leading-tight text-center mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            Statically Generated with{' '}
            <a href="https://nextjs.org/" className="underline hover:text-success duration-200 transition-colors">
              Next.js
            </a>
            , TailwindCSS and Typescript.
          </h3>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
