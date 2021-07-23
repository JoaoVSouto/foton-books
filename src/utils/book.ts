import { Book } from 'models/Book';

class BookUtils {
  static parseBookCover(coverUrl?: string) {
    if (!coverUrl) {
      return '';
    }

    try {
      const bookCoverUrlInstance = new URL(coverUrl);

      bookCoverUrlInstance.protocol = 'https:';
      bookCoverUrlInstance.searchParams.delete('edge');

      const bookCoverUrl = decodeURIComponent(bookCoverUrlInstance.toString());

      return bookCoverUrl;
    } catch {
      return '';
    }
  }

  parseInitialBook(book: Book) {
    const bookCoverUrl = BookUtils.parseBookCover(
      book.volumeInfo.imageLinks?.thumbnail
    );

    return {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors?.join(', ') || '',
      bookCoverUrl,
    };
  }

  parseDetailsBook(book: Book) {
    const bookCoverUrl = BookUtils.parseBookCover(
      book.volumeInfo.imageLinks?.thumbnail
    );

    return {
      id: book.id,
      title: book.volumeInfo.title,
      subtitle: book.volumeInfo?.subtitle || '',
      description: book.volumeInfo.description || '',
      authors: book.volumeInfo.authors?.join(', ') || '',
      bookCoverUrl,
    };
  }
}

export default new BookUtils();
