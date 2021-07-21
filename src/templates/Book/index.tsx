import { useRouter } from 'next/router';
import Link from 'next/link';
import { NextSeo } from 'next-seo';
import { FiArrowLeft, FiBookOpen, FiHeadphones, FiShare } from 'react-icons/fi';

import ThemeSwitch from 'components/ThemeSwitch';

import * as S from './styles';

type Book = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  authors: string;
  bookCoverUrl: string;
};

export type BookTemplateProps = {
  book: Book;
};

export default function BookTemplate({ book }: BookTemplateProps) {
  const router = useRouter();

  const isLoading = router.isFallback;

  return (
    <>
      <NextSeo title={`${book?.title || 'Loading...'} | Foton Books`} />

      <S.Header>
        <S.Container>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <FiArrowLeft />
            </a>
          </Link>

          <ThemeSwitch />
        </S.Container>

        <S.BookCoverContainer>
          {isLoading ? (
            <S.BookCoverShimmer />
          ) : (
            <S.BookCover
              src={
                book.bookCoverUrl || '/assets/img/book-cover-placeholder.png'
              }
              alt={`${book.title} by ${book.authors}`}
            />
          )}

          <S.Shape
            src="/assets/shapes/red-small-circle.svg"
            alt="Small red circle"
            aria-hidden="true"
            redCircle
          />
          <S.Shape
            src="/assets/shapes/big-blue-circle.svg"
            alt="Big blue circle"
            aria-hidden="true"
            blueCircle
          />
          <S.Shape
            src="/assets/shapes/small-outlined-circle.svg"
            alt="Small outlined circle"
            aria-hidden="true"
            outlinedCircle
          />
          <S.Shape
            src="/assets/shapes/oval-extra-small.svg"
            alt="Small oval circle"
            aria-hidden="true"
            oval
          />
        </S.BookCoverContainer>

        <S.Shape
          src="/assets/shapes/oval-big.svg"
          alt="Big oval circle"
          aria-hidden="true"
          ovalBig
        />
      </S.Header>

      <S.BookDetails>
        {isLoading ? (
          <S.TitleShimmer />
        ) : (
          <h1>
            <strong>{book.title}</strong>
            {book.subtitle ? ` : ${book.subtitle}` : ''}
          </h1>
        )}
        {isLoading ? (
          <S.AuthorsShimmer />
        ) : (
          book.authors && <span>{book.authors}</span>
        )}
        {isLoading ? (
          <>
            {Array(5)
              .fill(0)
              .map((_, index) => (
                // eslint-disable-next-line react/no-array-index-key
                <S.DescriptionShimmer key={index} />
              ))}
          </>
        ) : (
          <S.BookDescription
            dangerouslySetInnerHTML={{ __html: book.description }}
          />
        )}
      </S.BookDetails>

      <S.QuickActionContainer>
        {isLoading ? (
          <S.QuickActionShimmer />
        ) : (
          <S.QuickAction>
            <a
              href={`https://books.google.com.br/books?id=${book?.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiBookOpen strokeWidth={3} />
              Read
            </a>
            <span />
            <a
              href={`https://books.google.com.br/books?id=${book?.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiHeadphones strokeWidth={4} />
              Listen
            </a>
            <span />
            <a
              href={`https://books.google.com.br/books?id=${book?.id}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              <FiShare strokeWidth={3} />
              Share
            </a>
          </S.QuickAction>
        )}
      </S.QuickActionContainer>
    </>
  );
}
