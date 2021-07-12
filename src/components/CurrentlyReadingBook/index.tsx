import * as S from './styles';

export default function CurrentlyReadingBook() {
  return (
    <S.Main>
      <S.Container>
        <S.Wrapper>
          <S.BookCover
            src="https://books.google.com/books/content?id=Cy86CQAAQBAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
            alt="Originals by Adam Grant"
          />

          <S.Metadata>
            <S.Info>
              <h3>Originals</h3>
              <span>by Adam Grant</span>
            </S.Info>

            <S.Chapter>
              <img src="assets/icons/book-marked.svg" alt="Current chapter" />
              Chapter&nbsp;<strong>2</strong>&nbsp;From 9
            </S.Chapter>
          </S.Metadata>

          <S.ShapeContainer>
            <S.Shape aria-hidden="true" topCircle>
              <img
                src="assets/shapes/transparent-circle.svg"
                alt="Circle shape"
              />
            </S.Shape>
            <S.Shape aria-hidden="true" outlinedCircle>
              <img
                src="assets/shapes/outlined-circle.svg"
                alt="Outlined circle shape"
              />
            </S.Shape>
            <S.Shape aria-hidden="true" rectangle>
              <img src="assets/shapes/rectangle.svg" alt="Rectangle shape" />
            </S.Shape>
            <S.Shape aria-hidden="true" oval>
              <img src="assets/shapes/oval-small.svg" alt="Oval shape" />
            </S.Shape>
            <S.Shape aria-hidden="true" circle>
              <img
                src="assets/shapes/transparent-circle.svg"
                alt="Circle shape"
              />
            </S.Shape>
          </S.ShapeContainer>
        </S.Wrapper>
      </S.Container>
    </S.Main>
  );
}
