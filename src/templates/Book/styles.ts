import styled, { css } from 'styled-components';
import { rgba } from 'polished';

import container from 'styles/mixins/container';
import shimmer from 'styles/mixins/shimmer';

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

export const BookCoverShimmer = styled.div`
  ${shimmer}

  border-radius: 0.3125rem;
  width: 9.5625rem;
  height: 14.3125rem;
`;

export const Shape = styled.img<ShapeProps>`
  position: absolute;
  transition: filter 200ms;

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
      filter: brightness(${({ theme }) => theme.brightness});
    `}

  ${({ oval }) =>
    oval &&
    css`
      z-index: -1;
      right: -22px;
      bottom: 31px;
      filter: brightness(${({ theme }) => theme.brightness});
    `}

  ${({ ovalBig }) =>
    ovalBig &&
    css`
      right: -39px;
      top: -18px;
      transform: rotate(25deg);
      filter: brightness(${({ theme }) => theme.brightness});
    `}
`;

export const BookDetails = styled.section`
  ${container}

  margin-top: 2.25rem;
  margin-bottom: 8rem;

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
`;

export const BookDescription = styled.div`
  margin-top: 0.625rem;
  letter-spacing: 0.03125rem;
  line-height: 1.5625rem;
  color: ${({ theme }) => rgba(theme.gray[800], 0.6)};
  font-size: 0.875rem;
  font-family: ${({ theme }) => theme.fonts.SFProText};
  text-align: justify;
`;

export const TitleShimmer = styled.div`
  ${shimmer}

  width: 100%;
  height: 1.75rem;
`;

export const AuthorsShimmer = styled.div`
  ${shimmer}

  width: 3.75rem;
  height: 1.1875rem;
  margin-top: 0.4375rem;
`;

export const DescriptionShimmer = styled.div.attrs({
  className: 'description-shimmer',
})`
  ${shimmer}

  width: 100%;
  height: 1rem;
  margin-top: 0.625rem;

  + .description-shimmer {
    margin-top: 0.5rem;
  }
`;

export const QuickActionContainer = styled.nav`
  ${container}

  position: fixed;
  bottom: 3.3125rem;
  left: 50%;

  transform: translateX(-50%);

  width: 100%;
`;

export const QuickAction = styled.div`
  max-width: 20.9375rem;
  margin: 0 auto;

  background-color: ${({ theme }) => theme.white};
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);

  padding: 0 1.375rem;
  height: 3.5rem;

  display: flex;
  justify-content: space-between;
  align-items: center;

  font-size: 0.875rem;
  font-weight: 700;
  border-radius: 0.125rem;

  border: 1px solid
    ${({ theme }) => (theme.type === 'light' ? 'transparent' : '#fff')};

  color: ${({ theme }) => theme.gray[700]};
  letter-spacing: 1px;

  a {
    display: flex;
    align-items: center;
    color: inherit;

    &:hover,
    &:focus {
      svg {
        color: ${({ theme }) => theme.gray[700]};
      }
    }
  }

  span {
    width: 2px;
    height: 1rem;
    background-color: ${({ theme }) => rgba(theme.gray[525], 0.2)};
  }

  svg {
    color: ${({ theme }) => theme.gray[435]};
    font-size: 1rem;
    margin-right: 0.625rem;

    transition: color 200ms;
  }
`;

export const QuickActionShimmer = styled.div`
  ${shimmer}

  width: 100%;
  max-width: 20.9375rem;
  height: 3.5rem;
  margin: 0 auto;
  box-shadow: 3px 3px 23px rgba(107, 103, 70, 0.125901);
`;
