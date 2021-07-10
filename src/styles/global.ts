import { createGlobalStyle } from 'styled-components';

import bookSliderStyles from 'components/BookSlider/styles';

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
    background-color: ${({ theme }) => theme.gray[50]};
    overflow-x: hidden;
  }

  a {
    text-decoration: none;
  }

  ${bookSliderStyles}
`;
