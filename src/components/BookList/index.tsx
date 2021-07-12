import Book from './Book';

import * as S from './styles';

export default function BookList() {
  return (
    <S.Wrapper>
      <S.Container>
        <Book />
        <Book />
        <Book />
        <Book />
      </S.Container>
    </S.Wrapper>
  );
}
