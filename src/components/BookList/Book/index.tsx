import Link from 'next/link';

import * as S from './styles';

type BookProps = {
  id: string;
  title: string;
  authors: string;
  bookCoverUrl: string;
};

export default function Book({ authors, bookCoverUrl, id, title }: BookProps) {
  return (
    <Link href={`/books/${id}`} passHref>
      <S.Book>
        <img
          src={bookCoverUrl || '/assets/img/book-cover-placeholder.png'}
          alt={`${title} by ${authors}`}
        />

        <strong>{title}</strong>
        {authors && <small>by {authors}</small>}
      </S.Book>
    </Link>
  );
}
