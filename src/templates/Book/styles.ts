import styled, { css } from 'styled-components';

import container from 'styles/mixins/container';

type ShapeProps = {
  redCircle?: boolean;
  blueCircle?: boolean;
  outlinedCircle?: boolean;
  oval?: boolean;
  ovalBig?: boolean;
};

export const Header = styled.header`
  padding-top: 3.4375rem;
  position: relative;

  a {
    color: ${({ theme }) => theme.black};
    display: inline-flex;
    font-size: 0.875rem;
    margin-left: 0.8125rem;
  }

  &::before {
    content: '';
    background-color: ${({ theme }) => theme.gray[200]};
    width: 100%;
    height: 17.625rem;
    z-index: -1;
    border-radius: 0 0 6.25rem 0;

    position: absolute;
    top: 0;
  }
`;

export const Container = styled.div`
  ${container}

  display: flex;
`;

export const BookCoverContainer = styled.div`
  font-size: 0;
  width: max-content;
  margin: 0 auto;
  margin-top: 0.9375rem;
  position: relative;

  &::after {
    content: '';
    background-color: ${({ theme }) => theme.gray[425]};
    height: 1.0625rem;
    width: 8.9375rem;
    border-radius: 50%;
    z-index: -1;
    filter: blur(12px);

    position: absolute;
    bottom: -8px;
    left: 50%;

    transform: translateX(-50%);
  }
`;

export const BookCover = styled.img`
  border-radius: 0.3125rem;
  width: 9.5625rem;
  height: 14.3125rem;
  object-fit: cover;
`;

export const Shape = styled.img<ShapeProps>`
  position: absolute;

  ${({ redCircle }) =>
    redCircle &&
    css`
      left: -65px;
      top: 41px;
    `}

  ${({ blueCircle }) =>
    blueCircle &&
    css`
      z-index: -1;
      left: -38px;
      top: 31px;
    `}

  ${({ outlinedCircle }) =>
    outlinedCircle &&
    css`
      z-index: -1;
      right: -8px;
      top: 2px;
    `}

  ${({ oval }) =>
    oval &&
    css`
      z-index: -1;
      right: -22px;
      bottom: 31px;
    `}

  ${({ ovalBig }) =>
    ovalBig &&
    css`
      right: -39px;
      top: -18px;
      transform: rotate(25deg);
    `}
`;

export const BookDetails = styled.section`
  ${container}

  margin-top: 2.25rem;
  margin-bottom: 5.875rem;

  h1 {
    font-weight: 400;
    font-size: 1.5rem;
    line-height: 1.79rem;
    letter-spacing: 0.03125rem;
    color: ${({ theme }) => theme.gray[750]};

    strong {
      font-weight: 700;
      letter-spacing: 0.09375rem;
    }
  }

  span {
    font-size: 1rem;
    color: ${({ theme }) => theme.red[300]};
    letter-spacing: 0.04191175rem;
    font-weight: 500;
    margin-top: 0.4375rem;
    display: block;
  }

  p {
    margin-top: 0.625rem;
    letter-spacing: 0.03125rem;
    line-height: 1.5625rem;
    color: rgba(49, 49, 49, 0.6);
    font-size: 0.875rem;
    font-family: ${({ theme }) => theme.fonts.SFProText};
  }
`;
