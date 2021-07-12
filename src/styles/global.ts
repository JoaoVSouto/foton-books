import { createGlobalStyle } from 'styled-components';

import bookSliderStyles from 'components/BookSlider/styles';

import fontsConfiguration from './fonts';
import breakpoints from './breakpoints';

export default createGlobalStyle`
  ${fontsConfiguration}

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    ${breakpoints.greaterThan('md')`
      font-size: 18px;
    `}

    ${breakpoints.greaterThan('lg')`
      font-size: 20px;
    `}

    ${breakpoints.greaterThan('xl')`
      font-size: 22px;
    `}
  }

  body {
    font-family: ${({ theme }) => theme.fonts.SFProDisplay};
    background-color: ${({ theme }) => theme.gray[50]};
  }

  body,
  #__next {
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  ${bookSliderStyles}
`;
