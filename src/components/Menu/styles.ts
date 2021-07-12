import styled from 'styled-components';

import container from 'styles/mixins/container';

type ItemProps = {
  active?: boolean;
};

export const Main = styled.nav`
  width: 100%;

  position: fixed;
  bottom: 0;
  background-color: ${({ theme }) => theme.white};
  height: 3.75rem;
`;

export const Container = styled.div`
  ${container}

  height: 100%;
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  height: 100%;
  max-width: 540px;
  margin: 0 auto;
`;

export const Item = styled.a<ItemProps>`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 2rem;
  color: ${({ theme, active }) => (active ? theme.gray[800] : theme.gray[500])};

  font-weight: 400;
  font-size: 0.625rem;
  line-height: 0.745625rem;

  transition: color 200ms;

  &:hover,
  &:focus {
    color: ${({ theme }) => theme.gray[800]};
  }

  svg {
    color: ${({ theme, active }) => (active ? theme.black : 'inherit')};
    margin-bottom: 0.625rem;
    font-size: 1.3125rem;
  }
`;
