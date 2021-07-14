import { Book } from 'models/Book';

class BookUtils {
  parseInitialBook(book: Book) {
    const bookCoverUrlSearchParams = new URLSearchParams(
      book.volumeInfo.imageLinks?.thumbnail || ''
    );

    bookCoverUrlSearchParams.delete('edge');

    const bookCoverUrl = decodeURIComponent(
      bookCoverUrlSearchParams.toString()
    );

    return {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors?.join(', ') || '',
      bookCoverUrl,
    };
  }

  parseDetailsBook(book: Book) {
    const bookCoverUrlSearchParams = new URLSearchParams(
      book.volumeInfo.imageLinks?.thumbnail || ''
    );

    bookCoverUrlSearchParams.delete('edge');

    const bookCoverUrl = decodeURIComponent(
      bookCoverUrlSearchParams.toString()
    );

    return {
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo?.subtitle || '',
      description: book.volumeInfo.description || '',
      authors: book.volumeInfo.authors.join(', '),
      bookCoverUrl,
    };
  }
}

export default new BookUtils();
