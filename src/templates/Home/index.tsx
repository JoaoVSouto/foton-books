import { useEffect, useState } from 'react';
import { NextSeo } from 'next-seo';

import useBooks from 'hooks/useBooks';

import SearchBookInput from 'components/SearchBookInput';
import BookSectionContainer from 'components/BookSectionContainer';
import BookSlider from 'components/BookSlider';
import BookShowcase from 'components/BookShowcase';
import CurrentlyReadingBook from 'components/CurrentlyReadingBook';
import ReviewCard from 'components/ReviewCard';
import Menu from 'components/Menu';
import BookList from 'components/BookList';

import * as S from './styles';

type Book = {
  id: string;
  title: string;
  authors: string;
  bookCoverUrl: string;
};

export type HomeTemplateProps = {
  discoverBooks: Book[];
  currentlyReadingBook: Book;
};

export default function HomeTemplate({
  currentlyReadingBook,
  discoverBooks,
}: HomeTemplateProps) {
  const [isBookListOpen, setIsBookListOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');

  const {
    books,
    fetchBooks,
    handleLoadMore,
    isFetchingBooks,
    setIsFetchingBooks,
    cancelRequest,
    isTokenCanceled,
    refreshCancelToken,
    resetBooksState,
    shouldLoadMoreButtonAppear,
  } = useBooks();

  useEffect(
    () => () => {
      document.body.style.overflow = '';
    },
    []
  );

  const shouldNotFoundMessageAppear =
    searchInputValue && books.length === 0 && !isFetchingBooks;

  function resetSearchInput() {
    setSearchInputValue('');
  }

  function handleSearchBookInputChange(inputValue: string) {
    resetBooksState();
    setSearchInputValue(inputValue);

    if (isTokenCanceled) {
      refreshCancelToken();
    }

    if (inputValue.trim()) {
      setIsFetchingBooks(true);
      fetchBooks(inputValue);
    } else {
      setIsFetchingBooks(false);
      cancelRequest();
    }
  }

  function handleSearchBookInputFocus() {
    if (isBookListOpen) {
      return;
    }

    resetBooksState();
    setIsBookListOpen(true);
    refreshCancelToken();

    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    document.body.style.overflow = 'hidden';
  }

  function handleSearchBookInputClose() {
    setIsBookListOpen(false);
    resetSearchInput();
    resetBooksState();
    cancelRequest();

    document.body.style.overflow = '';
  }

  return (
    <>
      <NextSeo title="Home | Foton Books" />

      <S.Main>
        <S.Container as="header">
          <SearchBookInput
            value={searchInputValue}
            onChange={handleSearchBookInputChange}
            onFocus={handleSearchBookInputFocus}
            onClose={handleSearchBookInputClose}
            shouldCloseButtonAppear={isBookListOpen}
          />
        </S.Container>

        <BookList
          books={books}
          isOpen={isBookListOpen}
          isLoading={isFetchingBooks}
          shouldLoadMoreButtonAppear={shouldLoadMoreButtonAppear}
          shouldNotFoundMessageAppear={shouldNotFoundMessageAppear}
          onLoadMore={() => handleLoadMore(searchInputValue)}
        />

        <S.ContentContainer visible={!isBookListOpen}>
          <S.Container>
            <S.Callout>
              Hi, <span>Mehmed Al Fatih</span>
              <img src="assets/img/waving-hand.png" alt="Waving hand" />
            </S.Callout>
          </S.Container>

          <BookSectionContainer
            title="Discover new book"
            link={{ href: '#!', title: 'More' }}
            adornment={
              <img
                src="/assets/shapes/oval.svg"
                alt="Oval shape"
                aria-hidden="true"
              />
            }
          >
            <BookSlider>
              {discoverBooks.map((book, index) => (
                <BookShowcase
                  key={book.id}
                  bookId={book.id}
                  authors={book.authors}
                  bookCoverUrl={book.bookCoverUrl}
                  title={book.title}
                  secondary={index > 0}
                />
              ))}
            </BookSlider>
          </BookSectionContainer>

          <BookSectionContainer
            title="Currently Reading"
            link={{ href: '#!', title: 'All' }}
          >
            <CurrentlyReadingBook
              bookId={currentlyReadingBook.id}
              authors={currentlyReadingBook.authors}
              bookCoverUrl={currentlyReadingBook.bookCoverUrl}
              title={currentlyReadingBook.title}
            />
          </BookSectionContainer>

          <BookSectionContainer
            title="Reviews of The Days"
            link={{
              href: 'https://youtu.be/vBzBgewl4ac',
              title: 'All Video',
              target: '_blank',
            }}
            marginTop={2.8125}
          >
            <ReviewCard />
          </BookSectionContainer>
        </S.ContentContainer>
      </S.Main>

      <Menu />
    </>
  );
}
