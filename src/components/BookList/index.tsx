import Book from './Book';

import * as S from './styles';

type GoogleBook = {
  id: string;
  title: string;
  authors: string;
  bookCoverUrl: string;
};

type BookListProps = {
  books: GoogleBook[];
  isOpen?: boolean;
  isLoading?: boolean;
};

export default function BookList({ books, isOpen, isLoading }: BookListProps) {
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Container autoHide={false}>
        <S.Grid>
          {books.map(book => (
            <Book
              key={book.id}
              id={book.id}
              authors={book.authors}
              bookCoverUrl={book.bookCoverUrl}
              title={book.title}
            />
          ))}
          {isLoading &&
            Array(10)
              .fill(0)
              .map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <S.Shimmer key={index} />
              ))}
        </S.Grid>
      </S.Container>
    </S.Wrapper>
  );
}
