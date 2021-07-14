import { KeyboardEvent } from 'react';
import { useRouter } from 'next/router';

import * as S from './styles';

type CurrentlyReadingBookProps = {
  bookId: string;
  title: string;
  authors: string;
  bookCoverUrl: string;
};

export default function CurrentlyReadingBook({
  bookId,
  authors,
  bookCoverUrl,
  title,
}: CurrentlyReadingBookProps) {
  const router = useRouter();

  function navigateToDetailsPage() {
    router.push(`/books/${bookId}`);
  }

  function handleWrapperClick() {
    navigateToDetailsPage();
  }

  function handleWrapperKeyPress(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      navigateToDetailsPage();
    }
  }

  return (
    <S.Main>
      <S.Container>
        <S.Wrapper
          role="button"
          title={`Go to ${title} details page`}
          tabIndex={0}
          onClick={handleWrapperClick}
          onKeyPress={handleWrapperKeyPress}
        >
          <S.BookCover src={bookCoverUrl} alt={`${title} by ${authors}`} />

          <S.Metadata>
            <S.Info>
              <h3>{title}</h3>
              <span>by {authors}</span>
            </S.Info>

            <S.Chapter>
              <img src="assets/icons/book-marked.svg" alt="Current chapter" />
              Chapter&nbsp;<strong>2</strong>&nbsp;From 9
            </S.Chapter>
          </S.Metadata>

          <S.ShapeContainer>
            <S.Shape aria-hidden="true" topCircle>
              <img
                src="assets/shapes/transparent-circle.svg"
                alt="Circle shape"
              />
            </S.Shape>
            <S.Shape aria-hidden="true" outlinedCircle>
              <img
                src="assets/shapes/outlined-circle.svg"
                alt="Outlined circle shape"
              />
            </S.Shape>
            <S.Shape aria-hidden="true" rectangle>
              <img src="assets/shapes/rectangle.svg" alt="Rectangle shape" />
            </S.Shape>
            <S.Shape aria-hidden="true" oval>
              <img src="assets/shapes/oval-small.svg" alt="Oval shape" />
            </S.Shape>
            <S.Shape aria-hidden="true" circle>
              <img
                src="assets/shapes/transparent-circle.svg"
                alt="Circle shape"
              />
            </S.Shape>
          </S.ShapeContainer>
        </S.Wrapper>
      </S.Container>
    </S.Main>
  );
}
