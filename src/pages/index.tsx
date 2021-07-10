import styled from 'styled-components';

const Title = styled.h1`
  color: ${({ theme }) => theme.red[300]};
`;

export default function Home() {
  return <Title>hello world!</Title>;
}
