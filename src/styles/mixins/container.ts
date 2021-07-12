import { css } from 'styled-components';

import breakpoints from 'styles/breakpoints';

export default css`
  padding-inline-start: 1.25rem;
  padding-inline-end: 1.25rem;
  margin-left: auto;
  margin-right: auto;

  ${breakpoints.greaterThan('sm')`
    max-width: 540px;
  `}

  ${breakpoints.greaterThan('md')`
    max-width: 720px;
  `}

  ${breakpoints.greaterThan('lg')`
    max-width: 960px;
  `}

  ${breakpoints.greaterThan('xl')`
    max-width: 1140px;
  `}
`;
