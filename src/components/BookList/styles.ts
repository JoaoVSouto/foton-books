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

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5.5rem, 1fr));
  gap: 1.25rem;

  margin-bottom: 10rem;
`;
