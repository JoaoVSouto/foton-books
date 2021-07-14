import { useRouter } from 'next/router';
import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

import * as S from './styles';

type Book = {
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

  // TODO: change this to a proper loading
  if (router.isFallback) {
    return null;
  }

  return (
    <>
      <S.Header>
        <S.Container>
          <Link href="/">
            {/* eslint-disable-next-line jsx-a11y/anchor-is-valid */}
            <a>
              <FiArrowLeft />
            </a>
          </Link>
        </S.Container>

        <S.BookCoverContainer>
          <S.BookCover
            src={book.bookCoverUrl}
            alt={`${book.title} by ${book.authors}`}
          />

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
        <h1>
          <strong>{book.title}</strong> : {book.subtitle}
        </h1>
        <span>{book.authors}</span>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo
          voluptas perspiciatis, veritatis nesciunt exercitationem dolore optio
          sequi cum voluptates corporis minus enim esse expedita officia natus
          ex hic. Eveniet obcaecati perferendis dolorem reiciendis voluptatibus
          tempore deserunt minus reprehenderit distinctio officiis porro, veniam
          maiores, ullam, dolorum magnam consectetur? Explicabo, aperiam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo
          voluptas perspiciatis, veritatis nesciunt exercitationem dolore optio
          sequi cum voluptates corporis minus enim esse expedita officia natus
          ex hic. Eveniet obcaecati perferendis dolorem reiciendis voluptatibus
          tempore deserunt minus reprehenderit distinctio officiis porro, veniam
          maiores, ullam, dolorum magnam consectetur? Explicabo, aperiam? Lorem
          ipsum dolor sit amet consectetur adipisicing elit. Ratione nemo
          voluptas perspiciatis, veritatis nesciunt exercitationem dolore optio
          sequi cum voluptates corporis minus enim esse expedita officia natus
          ex hic. Eveniet obcaecati perferendis dolorem reiciendis voluptatibus
          tempore deserunt minus reprehenderit distinctio officiis porro, veniam
          maiores, ullam, dolorum magnam consectetur? Explicabo, aperiam? ipsum
          dolor sit amet consectetur adipisicing elit. Ratione nemo voluptas
          perspiciatis, veritatis nesciunt exercitationem dolore optio sequi cum
          voluptates corporis minus enim esse expedita officia natus ex hic.
          Eveniet obcaecati perferendis dolorem reiciendis voluptatibus tempore
          deserunt minus reprehenderit distinctio officiis porro, veniam
          maiores, ullam, dolorum magnam consectetur? Explicabo, aperiam? ipsum
          dolor sit amet consectetur adipisicing elit. Ratione nemo voluptas
          perspiciatis, veritatis nesciunt exercitationem dolore optio sequi cum
          voluptates corporis minus enim esse expedita officia natus ex hic.
          Eveniet obcaecati perferendis dolorem reiciendis voluptatibus tempore
          deserunt minus reprehenderit distinctio officiis porro, veniam
          maiores, ullam, dolorum magnam consectetur? Explicabo, aperiam?
        </p>
      </S.BookDetails>
    </>
  );
}
