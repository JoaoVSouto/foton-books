import * as S from './styles';

export default function ReviewCard() {
  return (
    <S.Container>
      <S.Main>
        <S.Shape
          src="assets/shapes/oval-small.svg"
          alt="Oval shape"
          aria-hidden="true"
        />

        <S.Banner
          src="assets/img/review-dont-make-me-think.jpg"
          alt="Don't make me think revisited review"
        />

        <S.Info>
          <h3>Don’t Make Me Think - Steve Krug</h3>

          <S.Metadata>
            <span>Jesse Showalter</span>
            <span>5.2K Views</span>
            <span>1 Week ago</span>
          </S.Metadata>

          <S.Description>
            &quot;Don&apos;t Make Me Think&quot; by Steve Krug is one of the
            first books I read when I was getting into digital design. It helped
            me move from designing things that just &quot;look nice&quot; to
            designing things that are usable, useful, memorable and simple to
            learn and use.
          </S.Description>
        </S.Info>
      </S.Main>
    </S.Container>
  );
}
