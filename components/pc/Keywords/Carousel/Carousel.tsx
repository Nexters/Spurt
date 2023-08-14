import MobileButtonXs from '@/components/mobile/buttonXs';
import { Category } from '@/const/categories';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonXs from '../Buttons/button-xs';

interface CarouselProps {
  categories: Category[];
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
        <Swiper slidesPerView={5} slidesOffsetAfter={20} autoHeight={true}>
          {categories.map((category, index) => (
            <SwiperSlide key={index} onClick={() => setCategory(index)}>
              {selectedCateogry == index ? (
                <ButtonXs
                  key={index}
                  name={category.name}
                  isSelected={true}
                ></ButtonXs>
              ) : (
                <ButtonXs
                  key={index}
                  name={category.name}
                  isSelected={false}
                ></ButtonXs>
              )}
            </SwiperSlide>
          ))}
        </Swiper>
      ) : (
        <Swiper slidesPerView={2} slidesOffsetAfter={20} autoHeight={true}>
          {categories.map((category, index) => (
            <SwiperSlide key={index} onClick={() => setCategory(index)}>
              {selectedCateogry == index ? (
                <MobileButtonXs
                  key={index}
                  name={category.name}
                  isSelected={true}
                ></MobileButtonXs>
              ) : (
                <MobileButtonXs
                  key={index}
                  name={category.name}
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
