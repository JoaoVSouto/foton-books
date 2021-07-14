import { GetStaticProps } from 'next';

import BookUtils from 'utils/book';

import BookService from 'services/BookService';

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

  const [discoverBooksResponse, currentlyReadingBookResponse] =
    await Promise.all([
      Promise.all(incomingBooksIds.discover.map(BookService.fetchById)),
      BookService.fetchById(incomingBooksIds.currentlyReading),
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
