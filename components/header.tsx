import { FaSun, FaMoon } from 'react-icons/fa';
import { Container } from './common/container';
import { useAppContext } from './common/appContext';

export const Header = () => {
  const appContext = useAppContext();
  const toggleTheme = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    appContext.setThemeName(appContext.themeName === 'theme-light' ? 'theme-dark' : 'theme-light');
  };

  return (
    <Container>
      <header className="flex-row flex justify-between mt-8 mb-8 md:mb-6">
        <div>
          <h1 className="text-3xl md:text-6xl font-bold md:pr-8">Alessandro Romano</h1>
          <p className="text-xl md:text-3xl italic md:pr-8">The Empathic Tech Lead</p>
        </div>
        <button className="self-center rounded-full border-foreground border-solid border-2 p-1" onClick={toggleTheme}>
          {appContext.themeName === 'theme-light' && <FaSun className="h-10 w-10" />}
          {appContext.themeName === 'theme-dark' && <FaMoon className="h-10 w-10" />}
        </button>
      </header>
    </Container>
  );
};
