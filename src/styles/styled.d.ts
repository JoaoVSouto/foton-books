import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    type: string;

    white: string;
    black: string;

    fonts: {
      SFProDisplay: string;
      SFProText: string;
      Roboto: string;
      PlayfairDisplay: string;
    };

    brightness: number;

    red: {
      300: string;
    };

    green: {
      300: string;
    };

    blue: {
      400: string;
      900: string;
    };

    purple: {
      700: string;
    };

    gray: {
      50: string;
      100: string;
      200: string;
      300: string;
      400: string;
      450: string;
      500: string;
      550: string;
      560: string;
      575: string;
      600: string;
      700: string;
      750: string;
      800: string;
      900: string;
    };
  }
}
