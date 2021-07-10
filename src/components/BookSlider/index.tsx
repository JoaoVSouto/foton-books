import { ReactNode } from 'react';
import Slider from 'react-slick';

type BookSliderChildren = {
  children: ReactNode;
};

export default function BookSlider({ children }: BookSliderChildren) {
  return (
    <Slider
      infinite={false}
      slidesToShow={1}
      slidesToScroll={1}
      arrows={false}
      variableWidth
    >
      {children}
    </Slider>
  );
}
