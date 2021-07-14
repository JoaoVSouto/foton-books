import { CancelTokenSource } from 'axios';

import api from 'services/api';

import { Book } from 'models/Book';

type FetchByQueryResponse = {
  totalItems: number;
  items: Book[];
};

class BookService {
  fetchById(bookId: string) {
    return api.get<Book>(`volumes/${bookId}`);
  }

  fetchByQuery(query: string, cancelToken: CancelTokenSource, startIndex = 0) {
    return api.get<FetchByQueryResponse>('volumes', {
      params: {
        langRestrict: 'en',
        q: query,
        startIndex,
      },
      cancelToken: cancelToken.token,
    });
  }
}

export default new BookService();
