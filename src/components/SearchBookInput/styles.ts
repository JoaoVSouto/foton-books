import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
`;

export const Wrapper = styled.div`
  background-color: ${({ theme }) => theme.gray[300]};
  padding: 0 1rem;
  border-radius: 0.625rem;
  box-shadow: 5px 5px 80px rgba(212, 173, 134, 0.122623);
  border: 2px solid transparent;
  flex: 1;
  width: 100%;

  height: 3rem;

  display: flex;
  align-items: center;

  transition: border-color 200ms;

  &:focus-within {
    border-color: ${({ theme }) => theme.red[300]};

    svg path,
    svg circle {
      fill: ${({ theme }) => theme.red[300]};
    }
  }

  label {
    display: flex;
    align-items: center;
  }

  svg {
    margin-right: 0.625rem;
    width: 1rem;
    height: 1rem;

    circle {
      transition: fill 200ms;
    }

    path {
      transition: fill 140ms;
    }
  }
`;

export const Input = styled.input`
  flex: 1;
  background-color: transparent;
  border: 0;
  outline: 0;
  font-size: 1rem;
  font-family: ${({ theme }) => theme.fonts.SFProDisplay};
  font-weight: bold;
  color: ${({ theme }) => theme.black};
  width: 100%;
  overflow: hidden;

  &::placeholder {
    color: ${({ theme }) => theme.gray[600]};
    font-weight: 400;
  }
`;

export const CloseButton = styled.button`
  border: 0;
  background-color: transparent;
  color: ${({ theme }) => theme.red[300]};

  display: flex;
  font-size: 1rem;
  margin-left: 0.5rem;
`;
