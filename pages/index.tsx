import ButtonM from "@/components/Buttons/button-m";
import ButtonS from "@/components/Buttons/button-s";
import ButtonXl from "@/components/Buttons/button-xl";

export default function Home() {
  return (
    <>
      <div>main페이지</div>
      <div>버튼 테스트</div>
      <ButtonXl>font-size가 안먹혀 개커</ButtonXl>
      <ButtonM>질문-답변 작성하러 가기</ButtonM>
      <ButtonS>저장하기</ButtonS>
    </>
  );
}
