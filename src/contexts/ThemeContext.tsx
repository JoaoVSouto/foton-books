import { ReactNode, createContext } from 'react';
import {
  ThemeProvider as StyledProvider,
  DefaultTheme,
} from 'styled-components';

import light from 'styles/themes/light';
import dark from 'styles/themes/dark';

type ThemeOptions = DefaultTheme['type'];

type ThemeContextData = {
  theme: ThemeOptions;
  changeTheme: (theme: ThemeOptions) => void;
};

type ThemeProviderProps = {
  children: ReactNode;
};

export const ThemeContext = createContext({} as ThemeContextData);

export function ThemeProvider({ children }: ThemeProviderProps) {
  const theme = 'light';

  function changeTheme(newTheme: ThemeOptions) {
    console.log(theme);
  }

  return (
    <StyledProvider theme={theme === 'light' ? light : dark}>
      <ThemeContext.Provider value={{ changeTheme, theme }}>
        {children}
      </ThemeContext.Provider>
    </StyledProvider>
  );
}
