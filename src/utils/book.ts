import { Book } from 'models/Book';

class BookUtils {
  parseInitialBook(book: Book) {
    const bookCoverUrlInstance = new URL(
      book.volumeInfo.imageLinks?.thumbnail || ''
    );

    bookCoverUrlInstance.protocol = 'https:';
    bookCoverUrlInstance.searchParams.delete('edge');

    const bookCoverUrl = decodeURIComponent(bookCoverUrlInstance.toString());

    return {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors?.join(', ') || '',
      bookCoverUrl,
    };
  }

  parseDetailsBook(book: Book) {
    const bookCoverUrlInstance = new URL(
      book.volumeInfo.imageLinks?.thumbnail || ''
    );

    bookCoverUrlInstance.protocol = 'https:';
    bookCoverUrlInstance.searchParams.delete('edge');

    const bookCoverUrl = decodeURIComponent(bookCoverUrlInstance.toString());

    return {
      id: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo?.subtitle || '',
      description: book.volumeInfo.description || '',
      authors: book.volumeInfo.authors.join(', '),
      bookCoverUrl,
    };
  }
}

export default new BookUtils();
