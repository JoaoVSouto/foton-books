import { GetStaticProps } from 'next';

import { Book } from 'models/Book';

import BookUtils from 'utils/book';

import api from 'services/api';

import HomeTemplate, { HomeTemplateProps } from 'templates/Home';

type HomeProps = HomeTemplateProps;

export default function Home({
  currentlyReadingBook,
  discoverBooks,
}: HomeProps) {
  return (
    <HomeTemplate
      currentlyReadingBook={currentlyReadingBook}
      discoverBooks={discoverBooks}
    />
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const incomingBooksIds = {
    discover: ['dsz5AwAAQBAJ', '5NomkK4EV68C'],
    currentlyReading: 'Cy86CQAAQBAJ',
  };

  // TODO: refactor these requests to services
  const [discoverBooksResponse, currentlyReadingBookResponse] =
    await Promise.all([
      Promise.all(
        incomingBooksIds.discover.map(bookId =>
          api.get<Book>(`volumes/${bookId}`)
        )
      ),
      api.get<Book>(`volumes/${incomingBooksIds.currentlyReading}`),
    ]);

  const parsedDiscoverBooks = discoverBooksResponse.map(bookResponse =>
    BookUtils.parseInitialBook(bookResponse.data)
  );

  const parsedCurrentlyReadingBook = BookUtils.parseInitialBook(
    currentlyReadingBookResponse.data
  );

  return {
    revalidate: 60 * 60 * 12, // 12 hours
    props: {
      discoverBooks: parsedDiscoverBooks,
      currentlyReadingBook: parsedCurrentlyReadingBook,
    },
  };
};
