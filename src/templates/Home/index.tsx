import SearchBookInput from 'components/SearchBookInput';
import BookSectionContainer from 'components/BookSectionContainer';
import BookSlider from 'components/BookSlider';
import BookShowcase from 'components/BookShowcase';

import * as S from './styles';

export default function HomeTemplate() {
  return (
    <S.Main>
      <S.Container as="header">
        <SearchBookInput />

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
            src="assets/shapes/oval.svg"
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
    </S.Main>
  );
}
