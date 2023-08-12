import { PostCategory } from '@/pages/post';
import { Swiper, SwiperSlide } from 'swiper/react';
import ButtonXs from '../Buttons/button-xs';

interface CarouselProps {
  postCateogries: PostCategory[];
  setPostCategories: (value: PostCategory[]) => void;
}

const PostCarousel = ({
  postCateogries: postCateogries,
  setPostCategories: setPostCategories,
}: CarouselProps) => {
  const handleClick = (selectedIndex: number) => {
    const newPostCategories = postCateogries.map((value, index) => {
      if (selectedIndex == index) {
        return new PostCategory(value.category, !value.isSelected);
      } else {
        return new PostCategory(value.category, value.isSelected);
      }
    });

    const selectedCategoryCount = newPostCategories.filter(
      (value) => value.isSelected,
    ).length;

    if (selectedCategoryCount <= 2) {
      setPostCategories(newPostCategories);
    }
  };

  return (
    <>
      <Swiper
        spaceBetween={6}
        slidesPerView={5}
        slidesOffsetAfter={20}
        autoHeight={true}
      >
        {postCateogries.map((category, index) => (
          <SwiperSlide key={index} onClick={() => handleClick(index)}>
            <ButtonXs
              key={index}
              name={category.category.name}
              isSelected={category.isSelected}
            ></ButtonXs>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default PostCarousel;
