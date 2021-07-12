import styled from 'styled-components';

import container from 'styles/mixins/container';

export const Main = styled.main`
  margin: 3.125rem 0 6.25rem;

  position: relative;
`;

export const Container = styled.div`
  ${container}
`;

export const Callout = styled.h1`
  color: ${({ theme }) => theme.gray[600]};
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1.875rem;

  span {
    color: ${({ theme }) => theme.red[300]};
    font-weight: 600;
  }

  img {
    width: 1.5rem;
    height: auto;
    margin-left: 0.625rem;
  }
`;
