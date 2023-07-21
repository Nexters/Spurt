import ButtonS from "@/components/Buttons/button-s";
import ButtonXs from "@/components/Buttons/button-xs";
import RandomBtn from "@/components/Buttons/randomBtn";
import Carousel from "@/components/Carousel/Carousel";
import QuestionCard from "@/components/Questions/QuestionCard";

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
      <div className="text-title1 text-gray-700 flex justify-between mt-[42px]">
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

      <div className="text-title4 text-gray-700 mt-[54px] mb-5">
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

      <div className="flex flex-col mt-5 bg-white rounded-[20px] px-5 py-[30px] mb-[50px]">
        <div className="flex justify-around">
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
          <QuestionCard />
        </div>
        <div className="flex justify-center mt-[30px]">
          <RandomBtn>다른 질문 더보기 1/3</RandomBtn>
        </div>
      </div>

      <div className="text-title3 text-gray-700 mb-5">
        <p>나의 질문 모아보기</p>
      </div>
      <div className="flex">
        {myCategory.map((category) => {
          return <ButtonXs key={category}>{category}</ButtonXs>;
        })}
      </div>

      <div className="flex bg-white mt-5 px-[30px] pt-[30px] pb-[50px] rounded-[20px]">
        호로로로로로ㅗㄹ
      </div>
    </>
  );
}
