import { useEffect, useState } from 'react';

import SearchBookInput from 'components/SearchBookInput';
import BookSectionContainer from 'components/BookSectionContainer';
import BookSlider from 'components/BookSlider';
import BookShowcase from 'components/BookShowcase';
import CurrentlyReadingBook from 'components/CurrentlyReadingBook';
import ReviewCard from 'components/ReviewCard';
import Menu from 'components/Menu';
import BookList from 'components/BookList';

import * as S from './styles';

export default function HomeTemplate() {
  const [isBookListOpen, setIsBookListOpen] = useState(false);

  useEffect(
    () => () => {
      document.body.style.overflow = '';
    },
    []
  );

  function handleSearchBookInputFocus() {
    setIsBookListOpen(true);

    document.body.style.overflow = 'hidden';
  }

  function handleSearchBookInputClose() {
    setIsBookListOpen(false);

    document.body.style.overflow = '';
  }

  return (
    <>
      <S.Main>
        <S.Container as="header">
          <SearchBookInput
            onFocus={handleSearchBookInputFocus}
            onClose={handleSearchBookInputClose}
            shouldCloseButtonAppear={isBookListOpen}
          />
        </S.Container>

        <BookList isOpen={isBookListOpen} />

        <S.Container>
          <S.Callout>
            Hi, <span>Mehmed Al Fatih</span>
            <img src="assets/img/waving-hand.png" alt="Waving hand" />
          </S.Callout>
        </S.Container>

        <BookSectionContainer
          title="Discover new book"
          link={{ href: '#!', title: 'More' }}
          adornment={
            <img
              src="/assets/shapes/oval.svg"
              alt="Oval shape"
              aria-hidden="true"
            />
          }
        >
          <BookSlider>
            <BookShowcase />
            <BookShowcase secondary />
          </BookSlider>
        </BookSectionContainer>

        <BookSectionContainer
          title="Currently Reading"
          link={{ href: '#!', title: 'All' }}
        >
          <CurrentlyReadingBook />
        </BookSectionContainer>

        <BookSectionContainer
          title="Reviews of The Days"
          link={{
            href: 'https://youtu.be/vBzBgewl4ac',
            title: 'All Video',
            target: '_blank',
          }}
          marginTop={2.8125}
        >
          <ReviewCard />
        </BookSectionContainer>
      </S.Main>

      <Menu />
    </>
  );
}
