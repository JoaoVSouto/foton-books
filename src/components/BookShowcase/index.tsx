import { KeyboardEvent } from 'react';
import { useRouter } from 'next/router';

import * as S from './styles';

type BookShowcaseProps = {
  secondary?: boolean;
  bookId: string;
  title: string;
  authors: string;
  bookCoverUrl: string;
};

export default function BookShowcase({
  secondary,
  bookId,
  authors,
  bookCoverUrl,
  title,
}: BookShowcaseProps) {
  const router = useRouter();

  function navigateToDetailsPage() {
    router.push(`/books/${bookId}`);
  }

  function handleShowcaseClick() {
    navigateToDetailsPage();
  }

  function handleShowcaseKeyPress(e: KeyboardEvent<HTMLDivElement>) {
    if (e.key === 'Enter') {
      navigateToDetailsPage();
    }
  }

  return (
    <S.Container
      secondary={secondary}
      className="book-showcase-container"
      role="button"
      title={`Go to ${title} details page`}
      tabIndex={0}
      onClick={handleShowcaseClick}
      onKeyPress={handleShowcaseKeyPress}
    >
      <S.Metadata>
        <S.Info>
          <h3>{title}</h3>
          <span>{authors}</span>
        </S.Info>

        <S.ReadNow>
          <img
            src="assets/icons/statistics.svg"
            alt="Book information"
            aria-hidden="true"
          />
          <strong>120+&nbsp;</strong>
          Read Now
        </S.ReadNow>
      </S.Metadata>

      <S.BookCoverContainer>
        <S.BookCover src={bookCoverUrl} alt={`${title} by ${authors}`} />

        <S.Shape
          src="assets/shapes/outlined-circle.svg"
          alt="Outlined circle shape"
          aria-hidden="true"
          circle
        />
        <S.Shape
          src="assets/shapes/triangle.svg"
          alt="Triangle shape"
          aria-hidden="true"
          triangle
        />
        <S.Shape
          src="assets/shapes/rectangle.svg"
          alt="Rectangle shape"
          aria-hidden="true"
          rectangle
        />
      </S.BookCoverContainer>
    </S.Container>
  );
}
