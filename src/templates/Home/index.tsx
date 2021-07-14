import { useEffect, useState, useMemo } from 'react';
import debounce from 'lodash.debounce';

import BookUtils from 'utils/book';

import BookService from 'services/BookService';

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

// TODO: extract books fetching logic into a custom hook
export default function HomeTemplate({
  currentlyReadingBook,
  discoverBooks,
}: HomeTemplateProps) {
  const [isBookListOpen, setIsBookListOpen] = useState(false);
  const [searchInputValue, setSearchInputValue] = useState('');
  const [totalBooks, setTotalBooks] = useState(0);
  const [books, setBooks] = useState<Book[]>([]);

  useEffect(
    () => () => {
      document.body.style.overflow = '';
    },
    []
  );

  function resetBooksState() {
    setTotalBooks(0);
    setBooks([]);
  }

  async function fetchBooks(query = '') {
    try {
      const booksResponse = await BookService.fetchByQuery(query);
      setTotalBooks(booksResponse.data.totalItems);
      setBooks(booksResponse.data.items.map(BookUtils.parseInitialBook));
    } catch {
      setTotalBooks(0);
      setBooks([]);
    }
  }

  const fetchBookDebounced = useMemo(
    () => debounce((query: string) => fetchBooks(query), 500),
    []
  );

  function resetSearchInput() {
    setSearchInputValue('');
  }

  function handleSearchBookInputChange(inputValue: string) {
    resetBooksState();
    setSearchInputValue(inputValue);

    if (inputValue.trim()) {
      fetchBookDebounced(inputValue);
    }
  }

  function handleSearchBookInputFocus() {
    setIsBookListOpen(true);

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

    document.body.style.overflow = '';
  }

  return (
    <>
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

        <BookList books={books} isOpen={isBookListOpen} />

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
      </S.Main>

      <Menu />
    </>
  );
}
