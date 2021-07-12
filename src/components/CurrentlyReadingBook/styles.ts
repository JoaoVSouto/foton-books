import styled, { css } from 'styled-components';

import container from 'styles/mixins/container';

type ShapeProps = {
  outlinedCircle?: boolean;
  oval?: boolean;
  rectangle?: boolean;
  circle?: boolean;
  topCircle?: boolean;
};

export const Main = styled.div`
  background-color: ${({ theme }) => theme.green[300]};
  margin-top: 1.875rem;
  width: 89vw;
  border-radius: 0 0.1875rem 0.1875rem 0;
  box-shadow: 0px 3px 45px rgba(121, 141, 67, 0.115084);

  position: relative;
`;

export const Container = styled.div`
  ${container}

  padding-inline-end: 0;

  display: flex;
  align-items: center;

  height: 6.25rem;
`;

export const BookCover = styled.img`
  width: 5.5rem;
  height: 8.125rem;
  filter: drop-shadow(5px 7px 32px rgba(140, 170, 58, 0.193701));
  border-radius: 0.0625rem;
  object-fit: cover;
  z-index: 1;
`;

export const Metadata = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  height: 100%;
  padding: 0.625rem;
`;

export const Info = styled.div`
  h3 {
    font-family: ${({ theme }) => theme.fonts.PlayfairDisplay};
    color: ${({ theme }) => theme.gray[900]};
    font-weight: 700;
    font-size: 1.25rem;
    letter-spacing: 2px;
  }

  span {
    font-family: ${({ theme }) => theme.fonts.Roboto};
    color: ${({ theme }) => theme.gray[560]};
    font-weight: 400;
    font-size: 0.625rem;

    display: block;
    margin-top: 0.3125rem;
  }
`;

export const Chapter = styled.p`
  display: flex;
  align-items: center;
  font-size: 0.625rem;
  color: ${({ theme }) => theme.gray[900]};

  img {
    margin-right: 0.3125rem;
  }

  strong {
    color: ${({ theme }) => theme.red[300]};
  }
`;

export const ShapeContainer = styled.div`
  overflow: hidden;
  position: absolute;
  top: 0;
  height: 100%;
  width: 100%;
`;

export const Shape = styled.div<ShapeProps>`
  position: absolute;
  font-size: 0;

  ${({ outlinedCircle }) =>
    outlinedCircle &&
    css`
      top: -6px;
      right: 90px;
    `}

  ${({ oval }) =>
    oval &&
    css`
      top: -19px;
      right: -33px;
    `}

  ${({ rectangle }) =>
    rectangle &&
    css`
      bottom: 20px;
      right: -23px;
    `}

  ${({ circle }) =>
    circle &&
    css`
      bottom: -38px;
      right: -22px;
    `}

  ${({ topCircle }) =>
    topCircle &&
    css`
      top: -44px;
      left: -30px;
    `}
`;
