import styled, { css } from 'styled-components';

type ContainerProps = {
  secondary?: boolean;
};

type ShapeProps = {
  circle?: boolean;
  triangle?: boolean;
  rectangle?: boolean;
};

export const Container = styled.div<ContainerProps>`
  padding: 1rem 1.25rem 0.8125rem;
  background-color: ${({ theme, secondary }) =>
    secondary ? theme.purple[700] : theme.blue[900]};
  border-radius: 0.3125rem;

  width: 100%;
  transform: scale(0.92);

  display: flex;
  justify-content: space-between;

  background-image: url('/assets/shapes/oval.svg');
  background-repeat: no-repeat;
  background-position: ${({ secondary }) =>
    secondary ? '-6px -37px' : '-25px 25px'};

  transition: all 200ms;
`;

export const Metadata = styled.div`
  color: ${({ theme }) => theme.gray[400]};

  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const Info = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.PlayfairDisplay};
    font-weight: 700;
    font-size: 1.6875rem;
    color: ${({ theme }) => theme.gray[100]};
    letter-spacing: 0.125rem;
    max-width: 8.8125rem;
  }

  h3,
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

  span {
    display: block;
    font-style: italic;
    font-size: 0.875rem;
    letter-spacing: 0.080625rem;
    margin-top: 0.3125rem;
    max-width: 9.9125rem;
  }
`;

export const ReadNow = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.625rem;
  margin-bottom: 0.5rem;

  img {
    margin-right: 0.125rem;
  }

  strong {
    font-weight: 700;
  }
`;

export const BookCoverContainer = styled.div`
  font-size: 0;

  position: relative;
`;

export const BookCover = styled.img`
  border-radius: 0.3125rem;
  width: 4.5rem;
  height: 6.8125rem;
  position: relative;
  object-fit: cover;
`;

export const Shape = styled.img<ShapeProps>`
  position: absolute;

  ${({ circle }) =>
    circle &&
    css`
      left: -38px;
      top: -2px;
    `}

  ${({ triangle }) =>
    triangle &&
    css`
      left: -11px;
      top: -12px;
    `}

  ${({ rectangle }) =>
    rectangle &&
    css`
      left: -35px;
      bottom: 13px;
    `}
`;
