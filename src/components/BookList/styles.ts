import styled, { css } from 'styled-components';
import SimpleBar from 'simplebar-react';

import container from 'styles/mixins/container';

type WrapperProps = {
  isOpen?: boolean;
};

export const Wrapper = styled.div<WrapperProps>`
  position: absolute;
  background-color: ${({ theme }) => theme.gray[50]};
  min-height: 100%;
  width: 100%;
  padding: 2.5rem 0;

  opacity: 0;
  visibility: hidden;

  z-index: 2;

  transition: opacity 200ms, visibility 200ms;

  ${({ isOpen }) =>
    isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
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
