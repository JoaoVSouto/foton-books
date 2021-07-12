import { FiHome, FiBook, FiUser } from 'react-icons/fi';

import * as S from './styles';

export default function Menu() {
  return (
    <S.Main>
      <S.Container>
        <S.Wrapper>
          <S.Item href="#!" active>
            <FiHome />
            Home
          </S.Item>

          <S.Item href="#!">
            <FiBook />
            Libraries
          </S.Item>

          <S.Item href="#!">
            <FiUser />
            Profile
          </S.Item>
        </S.Wrapper>
      </S.Container>
    </S.Main>
  );
}
