import SearchBookInput from 'components/SearchBookInput';
import BookSectionContainer from 'components/BookSectionContainer';
import BookShowcase from 'components/BookShowcase';

import * as S from './styles';

export default function HomeTemplate() {
  return (
    <S.Main>
      <S.Container>
        <SearchBookInput />

        <S.Callout>
          Hi, <span>Mehmed Al Fatih</span>
          <img src="assets/img/waving-hand.png" alt="Waving hand" />
        </S.Callout>
      </S.Container>

      <BookSectionContainer
        title="Discover new book"
        link={{ href: '#!', title: 'More' }}
      >
        <BookShowcase />
      </BookSectionContainer>
    </S.Main>
  );
}
