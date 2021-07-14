import Book from './Book';

import * as S from './styles';

type BookListProps = {
  isOpen?: boolean;
};

export default function BookList({ isOpen }: BookListProps) {
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Container autoHide={false}>
        <S.Grid>
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
          <Book />
        </S.Grid>
      </S.Container>
    </S.Wrapper>
  );
}
