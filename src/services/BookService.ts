import api from 'services/api';

import { Book } from 'models/Book';

class BookService {
  fetchById(bookId: string) {
    return api.get<Book>(`volumes/${bookId}`);
  }
}

export default new BookService();
