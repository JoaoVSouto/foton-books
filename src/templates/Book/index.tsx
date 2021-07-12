import Link from 'next/link';
import { FiArrowLeft } from 'react-icons/fi';

import * as S from './styles';

export default function BookTemplate() {
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
            src="https://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="Hooked by Nir Eyal"
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

      <p style={{ marginTop: '80px' }}>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus,
        veritatis laborum consequatur at quaerat temporibus perspiciatis vero
        quia eius quibusdam cum maiores consectetur reiciendis aliquam qui
        corporis voluptas hic quisquam? Magni deleniti ipsa animi eveniet
        dolorem. Deleniti, placeat architecto qui quibusdam quisquam quidem
        nulla. Quisquam aliquid totam veniam necessitatibus et.
      </p>
    </>
  );
}
