import { useMemo, useRef, useState } from 'react';
import axios from 'axios';
import debounce from 'lodash.debounce';

import BookUtils from 'utils/book';

import BookService from 'services/BookService';

type Book = {
  id: string;
  title: string;
  authors: string;
  bookCoverUrl: string;
};

export default function useBooks() {
  const [totalBooks, setTotalBooks] = useState(0);
  const [books, setBooks] = useState<Book[]>([]);
  const [isFetchingBooks, setIsFetchingBooks] = useState(false);

  const cancelToken = useRef(axios.CancelToken.source());

  const shouldLoadMoreButtonAppear =
    books.length < totalBooks && !isFetchingBooks;

  const isTokenCanceled = Boolean(cancelToken.current.token.reason);

  function resetBooksState() {
    setTotalBooks(0);
    setBooks([]);
    setIsFetchingBooks(false);
  }

  async function fetchBooks(query = '') {
    try {
      const booksResponse = await BookService.fetchByQuery(
        query,
        cancelToken.current
      );
      setTotalBooks(booksResponse.data.totalItems);
      setBooks(booksResponse.data.items.map(BookUtils.parseInitialBook));
    } catch {
      setTotalBooks(0);
      setBooks([]);
    } finally {
      setIsFetchingBooks(false);
    }
  }

  const fetchBooksDebounced = useMemo(
    () => debounce((query: string) => fetchBooks(query), 500),
    []
  );

  async function handleLoadMore(query = '') {
    setIsFetchingBooks(true);

    try {
      const booksResponse = await BookService.fetchByQuery(
        query,
        cancelToken.current,
        books.length
      );
      setBooks(state => [
        ...state,
        ...booksResponse.data.items.map(BookUtils.parseInitialBook),
      ]);
    } finally {
      setIsFetchingBooks(false);
    }
  }

  function refreshCancelToken() {
    cancelToken.current = axios.CancelToken.source();
  }

  function cancelRequest() {
    cancelToken.current.cancel();
  }

  return {
    books,
    isFetchingBooks,
    setIsFetchingBooks,
    shouldLoadMoreButtonAppear,
    isTokenCanceled,
    resetBooksState,
    fetchBooks: fetchBooksDebounced,
    handleLoadMore,
    refreshCancelToken,
    cancelRequest,
  };
}
