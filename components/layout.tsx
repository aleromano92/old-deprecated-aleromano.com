import { useEffect } from 'react';
import { useAppContext } from './common/appContext';
import { Header } from './header';
import Footer from './footer';
import Meta from './meta';

type Props = {
  preview?: boolean;
  children: React.ReactNode;
};

const Layout = ({ preview, children }: Props) => {
  const appContext = useAppContext();

  useEffect(() => {
    document.querySelector(
      '#__next'
    )!.className = `${appContext.themeName} flex flex-col bg-background text-foreground selection:bg-foreground selection:text-background`;
  }, [appContext.themeName]);

  return (
    <>
      <Meta />
      <div className="min-h-screen">
        <Header />
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
};

export default Layout;
