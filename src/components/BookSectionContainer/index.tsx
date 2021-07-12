import { ReactNode } from 'react';

import * as S from './styles';

type BookSectionContainerProps = {
  children?: ReactNode;
  adornment?: ReactNode;
  title: string;
  marginTop?: number;
  link: {
    title: string;
    href: string;
    target?: '_blank' | '_self' | '_parent' | '_top';
  };
};

export default function BookSectionContainer({
  adornment,
  children,
  marginTop,
  link,
  title,
}: BookSectionContainerProps) {
  return (
    <S.Container marginTop={marginTop}>
      <S.Info>
        <h2>{title}</h2>

        <a
          href={link.href}
          target={link.target}
          rel={link.target === '_blank' ? 'noopener noreferrer' : undefined}
        >
          {link.title}
        </a>
      </S.Info>

      {children}

      <S.AdornmentContainer>{adornment}</S.AdornmentContainer>
    </S.Container>
  );
}
