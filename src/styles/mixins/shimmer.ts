import { css } from 'styled-components';

export default css`
  background-color: ${({ theme }) => theme.gray[400]};
  background-image: linear-gradient(
    to right,
    ${({ theme }) => theme.gray[400]} 0%,
    ${({ theme }) => theme.gray[300]} 20%,
    ${({ theme }) => theme.gray[400]} 40%,
    ${({ theme }) => theme.gray[400]} 100%
  );
  background-size: 80rem 14rem;

  animation: placeholderShimmer 1.2s linear infinite forwards;

  @keyframes placeholderShimmer {
    from {
      background-position: -40rem 0;
    }
    to {
      background-position: 40rem 0;
    }
  }
`;
