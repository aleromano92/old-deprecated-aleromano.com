import { createContext, useContext, useState } from 'react';

interface AppContextType {
  themeName: string;
  setThemeName: (name: string) => void;
}

const defaultContext = {
  themeName: 'theme-light',
  setThemeName: (name: string) => {},
};

const AppContext = createContext<AppContextType>(defaultContext);

export const AppWrapper: React.FC = ({ children }) => {
  const [themeName, setThemeName] = useState<string>(defaultContext.themeName);

  return <AppContext.Provider value={{ themeName, setThemeName }}>{children}</AppContext.Provider>;
};

export function useAppContext() {
  return useContext(AppContext);
}
