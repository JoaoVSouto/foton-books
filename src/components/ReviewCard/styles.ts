import styled from 'styled-components';
import { rgba } from 'polished';

import container from 'styles/mixins/container';

export const Container = styled.div`
  ${container}

  margin-top: 0.9375rem;
`;

export const Main = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 0px 2px 4px rgba(229, 229, 229, 0.5);
  position: relative;
  overflow: hidden;
`;

export const Shape = styled.img`
  position: absolute;

  top: -20px;
  right: -35px;
`;

export const Banner = styled.img`
  width: 100%;
  height: auto;
  object-fit: cover;
  border-radius: 0.3125rem 0.3125rem 0 0;
`;

export const Info = styled.div`
  padding: 0.9375rem 0.75rem;
  background-color: ${({ theme }) => theme.white};
  border-radius: 0 0 0.3125rem 0.3125rem;

  h4 {
    opacity: 0.8;
    color: ${({ theme }) => rgba(theme.gray[800], 0.8)};
    font-size: 0.75rem;
  }
`;

export const Metadata = styled.p`
  margin-top: 0.375rem;
  color: ${({ theme }) => rgba(theme.gray[570], 0.8)};
  font-size: 0.5rem;
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 400;

  span + span {
    margin-left: 1.9375rem;
    position: relative;

    &::before {
      content: '';
      height: 0.125rem;
      width: 0.125rem;
      border-radius: 50%;
      background-color: ${({ theme }) => theme.gray[570]};

      position: absolute;
      left: -0.96875rem;
      top: 50%;

      transform: translateY(-50%);
    }
  }
`;

export const Description = styled.p`
  font-family: ${({ theme }) => theme.fonts.Roboto};
  font-weight: 400;
  line-height: 0.75rem;
  font-size: 0.625rem;
  color: ${({ theme }) => rgba(theme.gray[565], 0.8)};
  margin-top: 0.33875rem;
`;
