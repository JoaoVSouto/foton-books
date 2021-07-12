import { FiHome, FiBook, FiUser } from 'react-icons/fi';

import * as S from './styles';

export default function Menu() {
  return (
    <S.Container>
      <S.Item href="#!" active>
        <FiHome size={21} />
        Home
      </S.Item>

      <S.Item href="#!">
        <FiBook size={21} />
        Libraries
      </S.Item>

      <S.Item href="#!">
        <FiUser size={21} />
        Profile
      </S.Item>
    </S.Container>
  );
}
