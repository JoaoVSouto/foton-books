import { Book } from 'models/Book';

class BookUtils {
  parseInitialBook(book: Book) {
    const bookCoverUrlSearchParams = new URLSearchParams(
      book.volumeInfo.imageLinks.thumbnail
    );

    bookCoverUrlSearchParams.delete('edge');

    const bookCoverUrl = decodeURIComponent(
      bookCoverUrlSearchParams.toString()
    );

    return {
      id: book.id,
      title: book.volumeInfo.title,
      authors: book.volumeInfo.authors.join(', '),
      bookCoverUrl,
    };
  }
}

export default new BookUtils();
