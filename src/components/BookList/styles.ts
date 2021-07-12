import styled from 'styled-components';
import { rgba } from 'polished';

import container from 'styles/mixins/container';

export const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.gray[50]};
  min-height: 100%;
  width: 100%;
  padding: 2.5rem 0;

  z-index: 2;
`;

export const Container = styled.div`
  ${container}

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5.5rem, 1fr));
  gap: 1.25rem;

  margin-bottom: 10rem;

  a {
    display: flex;
    flex-direction: column;
    max-width: 6.25rem;

    img {
      height: auto;
      filter: drop-shadow(0px 2px 4px rgba(229, 229, 229, 0.5));
    }

    strong,
    small {
      color: ${({ theme }) => rgba(theme.gray[800], 0.8)};
    }

    strong {
      font-weight: 700;
      font-size: 0.75rem;
      margin-top: 0.625rem;
    }

    small {
      font-size: 0.625rem;
      font-family: ${({ theme }) => theme.fonts.Roboto};
      font-weight: 900;
      margin-top: 0.3125rem;
    }
  }
`;
