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
    document.documentElement.classList.remove(appContext.themeName === 'light' ? 'dark' : 'light');
    document.documentElement.classList.add(appContext.themeName);

    const lightClasses = `bg-foreground-500 text-background-500 border-background-500 selection:bg-background-500 selection:text-foreground-500`;
    const darkClasses = `dark:bg-background-500 dark:text-foreground-500 dark:border-foreground-500 dark:selection:bg-foreground-500 dark:selection:text-background-500`;

    document.querySelector('#__next')!.className = `flex flex-col ${lightClasses} ${darkClasses}`;
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
