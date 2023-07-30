import MobileButtonXs from '@/components/mobile/buttonXs';
import ButtonXs from '../Buttons/button-xs';
import { Swiper, SwiperSlide } from 'swiper/react';

interface CarouselProps {
  categories: string[];
  isPc: boolean;
  selectedCateogry: number;
  setCategory: (value: number) => void;
}

const Carousel = ({
  categories,
  isPc,
  selectedCateogry,
  setCategory,
}: CarouselProps) => {
  return (
    <>
      {isPc ? (
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
      ) : (
        <Swiper
          spaceBetween={6}
          slidesPerView={2}
          slidesOffsetAfter={20}
          autoHeight={true}
        >
          {categories.map((name, index) => (
            <SwiperSlide key={index} onClick={() => setCategory(index)}>
              {selectedCateogry == index ? (
                <MobileButtonXs
                  key={index}
                  name={name}
                  isSelected={true}
                ></MobileButtonXs>
              ) : (
                <MobileButtonXs
                  key={index}
                  name={name}
                  isSelected={false}
                ></MobileButtonXs>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      )}
    </>
  );
};

export default Carousel;
