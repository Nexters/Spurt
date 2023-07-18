import ButtonM from "@/components/Buttons/button-m";
import ButtonS from "@/components/Buttons/button-s";
import ButtonXl from "@/components/Buttons/button-xl";

export default function Home() {
  return (
    <>
      <div className="text-title1 flex justify-between">
        <div>
          <p className="underline underline-offset-8 decoration-main-400">
            꽁지님 안녕하세요
          </p>

          <p>오늘도 마지막까지 화이팅!</p>
        </div>
        <div className="flex items-end">
          <ButtonS>질문 만들기</ButtonS>
        </div>
      </div>
      <div>main페이지</div>

      <div>버튼 테스트</div>
      <ButtonXl>font-size가 안먹혀 개커</ButtonXl>
      <ButtonM>질문-답변 작성하러 가기</ButtonM>
      <ButtonS>저장하기</ButtonS>
    </>
  );
}
