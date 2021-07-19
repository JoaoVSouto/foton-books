import { ReactNode, createContext, useState, useEffect } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

import usePersistedState from 'hooks/usePersistedState';

import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

type ThemeContextData = {
  theme: string;
  changeTheme: (theme: string) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

const doesUserPreferDarkMode =
  process.browser &&
  window.matchMedia?.apply(this, ['(prefers-color-scheme: dark)']).matches;

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = usePersistedState(
    '@foton-books/theme',
    doesUserPreferDarkMode ? 'dark' : 'light'
  );

  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    setIsMounted(true);
  }, []);

  function changeTheme(newTheme: string) {
    setTheme(newTheme);
  }

  const childrenBody = (
    <StyledProvider theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider value={{ changeTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );

  if (!isMounted) {
    return <div style={{ visibility: 'hidden' }}>{childrenBody}</div>;
  }

  return childrenBody;
}
