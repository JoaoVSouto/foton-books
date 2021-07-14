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
  shouldLoadMoreButtonAppear?: boolean;
  shouldNotFoundMessageAppear?: boolean;
  onLoadMore?: () => void;
};

export default function BookList({
  books,
  isOpen,
  isLoading,
  shouldLoadMoreButtonAppear,
  shouldNotFoundMessageAppear,
  onLoadMore,
}: BookListProps) {
  return (
    <S.Wrapper isOpen={isOpen}>
      <S.Container autoHide={false}>
        {shouldNotFoundMessageAppear && (
          <S.NotFound>
            Ooops... We couldn&apos;t find any books with this term.
          </S.NotFound>
        )}
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

        {shouldLoadMoreButtonAppear && (
          <S.LoadMoreButton type="button" onClick={onLoadMore}>
            Load more books
          </S.LoadMoreButton>
        )}
      </S.Container>
    </S.Wrapper>
  );
}
