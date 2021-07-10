import { css } from 'styled-components';

import container from 'styles/mixins/container';

export default css`
  .slick-slider {
    ${container}
    padding-inline-end: 0;
    margin-top: 0.9375rem;
  }

  .slick-list {
    overflow: initial;
  }

  .slick-slide {
    width: 17rem;
  }

  .slick-track {
    display: flex;
    align-items: center;
  }

  .slick-active .book-showcase-container {
    box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);
    transform: scale(1);
  }
`;
