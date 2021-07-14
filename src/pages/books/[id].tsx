import { GetStaticPaths, GetStaticProps } from 'next';

import BookUtils from 'utils/book';

import BookService from 'services/BookService';

import BookTemplate, { BookTemplateProps } from 'templates/Book';

type BookProps = BookTemplateProps;

export default function Book({ book }: BookProps) {
  return <BookTemplate book={book} />;
}

export const getStaticPaths: GetStaticPaths = async () => ({
  fallback: true,
  paths: [],
});

export const getStaticProps: GetStaticProps = async ({ params }) => {
  try {
    const bookResponse = await BookService.fetchById(String(params.id));

    const parsedBook = BookUtils.parseDetailsBook(bookResponse.data);

    return {
      revalidate: 60 * 60 * 12, // 12 hours
      props: {
        book: parsedBook,
      },
    };
  } catch {
    return {
      redirect: {
        destination: '/',
        permanent: true,
      },
    };
  }
};
