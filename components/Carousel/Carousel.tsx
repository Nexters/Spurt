import { useRef, useEffect } from "react";
import styles from "./Carousel.module.css";
import ButtonXs from "../Buttons/button-xs";

const Carousel = () => {
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleScroll = (event: WheelEvent) => {
      if (sliderRef.current) {
        if (event.deltaY < 0) {
          sliderRef.current.scrollLeft -= 100;
        } else {
          sliderRef.current.scrollLeft += 100;
        }
      }
    };

    if (sliderRef.current) {
      sliderRef.current.addEventListener("wheel", handleScroll);
    }

    return () => {
      if (sliderRef.current) {
        sliderRef.current.removeEventListener("wheel", handleScroll);
      }
    };
  }, []);

  return (
    <div className={styles.sliderContainer}>
      <div ref={sliderRef} className={styles.slider}>
        <ButtonXs>직무지식</ButtonXs>
        <ButtonXs>직무경험</ButtonXs>
        <ButtonXs>협업경험</ButtonXs>
        <ButtonXs>프로젝트 소개</ButtonXs>
        <ButtonXs>장단점</ButtonXs>
        <ButtonXs>실패경험</ButtonXs>
        <ButtonXs>기타</ButtonXs>
        <ButtonXs>등등</ButtonXs>
      </div>
    </div>
  );
};

export default Carousel;
