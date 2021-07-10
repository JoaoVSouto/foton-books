import * as S from './styles';

export default function BookShowcase() {
  return (
    <S.Container>
      <S.Metadata>
        <S.Info>
          <h3>Hooked</h3>
          <span>Nir Eyal</span>
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
        <S.BookCover
          src="https://books.google.com/books/content?id=dsz5AwAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
          alt="Hooked by Nir Eyal"
        />

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
