import styled from 'styled-components';
import SimpleBar from 'simplebar-react';

import container from 'styles/mixins/container';

export const Wrapper = styled.div`
  position: absolute;
  background-color: ${({ theme }) => theme.gray[50]};
  min-height: 100%;
  width: 100%;
  padding: 2.5rem 0;

  z-index: 2;
`;

export const Container = styled(SimpleBar)`
  ${container}

  max-height: calc(100vh - 5rem - 4.125rem - 3.125rem);
  padding-bottom: 2rem;

  .simplebar-track.simplebar-vertical {
    .simplebar-scrollbar::before {
      background-color: ${({ theme }) => theme.gray[550]};
      opacity: 0.8;
    }
  }
`;

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(5.5rem, 1fr));
  gap: 1.25rem;
`;
