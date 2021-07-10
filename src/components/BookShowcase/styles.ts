import styled, { css } from 'styled-components';

type ShapeProps = {
  circle?: boolean;
  triangle?: boolean;
  rectangle?: boolean;
};

export const Container = styled.div`
  padding: 1rem 1.25rem 0.8125rem;
  background-color: ${({ theme }) => theme.blue[900]};
  border-radius: 0.3125rem;

  /* TODO: apply box-shadow only if showcase is selected */
  box-shadow: 2px 4px 48px rgba(154, 175, 209, 0.62134);

  max-width: 17rem;

  display: flex;
  justify-content: space-between;

  background-image: url('assets/shapes/oval.svg');
  background-repeat: no-repeat;
  background-position: left bottom;
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
    letter-spacing: 2px;
  }

  span {
    display: block;
    font-style: italic;
    font-size: 0.875rem;
    letter-spacing: 1.29px;
    margin-top: 0.3125rem;
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
  width: 72px;
  height: auto;
  position: relative;
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
