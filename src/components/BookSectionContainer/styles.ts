import styled from 'styled-components';

import container from 'styles/mixins/container';

type ContainerProps = {
  marginTop: number;
};

export const Container = styled.section<ContainerProps>`
  margin-top: ${({ marginTop = 1.875 }) => marginTop}rem;

  position: relative;
`;

export const Info = styled.div`
  ${container}

  display: flex;
  justify-content: space-between;
  align-items: center;

  h2 {
    font-size: 1.125rem;
    color: #3f4043;
    font-weight: 500;
    letter-spacing: 0.5px;
  }

  a {
    --underline-height: 2px;

    font-family: ${({ theme }) => theme.fonts.SFProText};
    font-weight: 500;
    font-size: 0.875rem;
    color: ${({ theme }) => theme.blue[400]};

    position: relative;
    overflow: hidden;

    margin-top: var(--underline-height);
    outline: 0;

    &::after {
      content: '';
      display: block;
      width: 100%;
      height: var(--underline-height);
      background-color: ${({ theme }) => theme.blue[400]};
      transform: translateX(-100%);

      transition: transform 200ms;
    }

    &:hover,
    &:focus {
      &::after {
        transform: translateX(0);
      }
    }
  }
`;

export const AdornmentContainer = styled.div`
  font-size: 0;
  z-index: -1;

  position: absolute;
  top: 3px;
  right: -47px;
`;
