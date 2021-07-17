import { ReactNode, createContext, useState } from 'react';
import { ThemeProvider as StyledProvider } from 'styled-components';

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

export function ThemeProvider({ children }: ThemeProviderProps) {
  const [theme, setTheme] = useState('light');

  function changeTheme(newTheme: string) {
    setTheme(newTheme);
  }

  return (
    <StyledProvider theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider value={{ changeTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
}
