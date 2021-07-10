import { createGlobalStyle } from 'styled-components';

import fontsConfiguration from './fonts';

export default createGlobalStyle`
  ${fontsConfiguration}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${({ theme }) => theme.fonts.SFProDisplay};
  }

  a {
    text-decoration: none;
  }
`;
