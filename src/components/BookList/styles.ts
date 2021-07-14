import styled from 'styled-components';

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

  max-height: calc(100vh - 5rem - 4.125rem - 3.125rem);
  padding-bottom: 2rem;
  overflow: auto;
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5.5rem, 1fr));
  gap: 1.25rem;
`;
