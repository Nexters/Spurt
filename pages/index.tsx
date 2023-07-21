import ButtonS from "@/components/Buttons/button-s";
import ButtonXs from "@/components/Buttons/button-xs";
import Carousel from "@/components/Carousel/Carousel";
import QuestionDiv from "@/components/Questions/QuestionDiv";

export default function Home() {
  const otherCategory = [
    "직무지식",
    "직무경험",
    "협업경험",
    "장단점",
    "실패경험",
    "기타",
  ];
  const myCategory = ["전체", "직무지식", "직무경험", "협업경험", "실패경험"];
  return (
    <>
      <div className="text-title1 flex justify-between mt-[42px]">
        <div>
          <p className="underline underline-offset-8 decoration-main-400 decoration-4">
            꽁지님 안녕하세요
          </p>
          <p>오늘도 마지막까지 화이팅!</p>
        </div>
        <div className="flex items-end">
          <ButtonS>질문-답변 만들기</ButtonS>
        </div>
      </div>

      <div className="text-title4 mt-[54px] mb-5">
        <p>
          <b>같은 직군의 사람들</b>이
        </p>
        <p>최근에 올린 질문이에요</p>
      </div>
      <div className="flex">
        {otherCategory.map((category) => {
          return <ButtonXs key={category}>{category}</ButtonXs>;
        })}
      </div>
      {/* <Carousel /> */}

      <div className="mt-5 bg-white rounded-[20px] pt-5 px-5 pb-[30px] mb-[50px]">
        <QuestionDiv />
      </div>

      <div className="text-title3 mb-5">
        <p>나의 질문 모아보기</p>
      </div>
      <div className="flex">
        {myCategory.map((category) => {
          return <ButtonXs key={category}>{category}</ButtonXs>;
        })}
      </div>
      {/* <Carousel /> */}
      {/* <div>main페이지</div>

      <div>버튼 테스트</div>
      <ButtonXl>font-size가 안먹혀 개커</ButtonXl>
      <ButtonM>질문-답변 작성하러 가기</ButtonM>
      <ButtonS>저장하기</ButtonS>
      <ButtonXs>직무지식</ButtonXs> */}
    </>
  );
}
