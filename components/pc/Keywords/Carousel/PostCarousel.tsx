import MobileButtonXs from '@/components/mobile/buttonXs';
import ButtonXs from '../Buttons/button-xs';
import { Swiper, SwiperSlide } from 'swiper/react';

interface CarouselProps {
  categories: string[];
  selectedCateogry: number;
  setCategory: (value: number) => void;
}

const PostCarousel = ({
  categories,
  selectedCateogry,
  setCategory,
}: CarouselProps) => {
  return (
    <>
      <Swiper
        spaceBetween={6}
        slidesPerView={5}
        slidesOffsetAfter={20}
        autoHeight={true}
      >
        {categories.map((name, index) => (
          <SwiperSlide key={index} onClick={() => setCategory(index)}>
            {selectedCateogry == index ? (
              <ButtonXs key={index} name={name} isSelected={true}></ButtonXs>
            ) : (
              <ButtonXs key={index} name={name} isSelected={false}></ButtonXs>
            )}
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PostCarousel;
