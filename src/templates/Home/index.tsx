import SearchBookInput from 'components/SearchBookInput';

import * as S from './styles';

export default function HomeTemplate() {
  return (
    <S.Container>
      <SearchBookInput />

      <S.Callout>
        Hi, <span>Mehmed Al Fatih</span>
        <img src="assets/img/waving-hand.png" alt="Waving hand" />
      </S.Callout>
    </S.Container>
  );
}
