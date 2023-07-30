import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';
import EditIcon from 'img/edit-2.svg';
import DelIcon from 'img/delete.svg';

const ReadPost = () => {
  const key = [
    '면접을 준비하는 취업준비생을 위한 서비스',
    '면접을 준비하는 취업준비생을 위한 서비스',
    '면접을 준비하는 취업준비생을 위한 서비스',
    '면접을 준비하는 취업준비생을 위한 서비스',
  ];
  return (
    <>
      <div className="absolute top-0 left-0 bottom-0 w-full bg-main-100 h-[293px] border-b border-b-main-400"></div>

      <div className="absolute w-[1000px]">
        <div className="flex justify-start h-[54px] mt-6">
          <button>X</button>
        </div>

        <div className="mt-[82px] mb-[10px] text-heading1 text-main-500">
          <p>직무지식 ・ 직무경험</p>
        </div>
        <p className="mb-[130px] text-title1 text-gray-700">
          javaScript에서 this 바인딩이 무엇인지 설명해주세요
        </p>

        <div className="mb-[50px] text-gray-600">
          <p className="text-title7">지원동기</p>
          <p className="text-body3">
            애플이 iOS 17 베타 버전을 공개했습니다. iOS 17 정식 버전 업데이트는
            올 가을입니다. 이번 배포에는 iMessage, 암호 공유 기능 등이
            포함됩니다. 특히 스탠바이(StandBy)와 네임드롭(Name Drop)이 이번에
            포함되었습니다. iOS 17 베타 버전은 애플 개발자 센터에서 내려받을 수
            있습니다.
          </p>
          <br></br>
          <p className="text-title7">기여하고자 하는 것</p>
          <p className="text-body3">
            애플이 iOS 17 베타 버전을 공개했습니다. iOS 17 정식 버전 업데이트는
            올 가을입니다. 이번 배포에는 iMessage, 암호 공유 기능 등이
            포함됩니다. 특히 스탠바이(StandBy)와 네임드롭(Name Drop)이 이번에
            포함되었습니다. iOS 17 베타 버전은 애플 개발자 센터에서 내려받을 수
            있습니다.
          </p>
        </div>
        <div className="flex gap-2 flex-wrap mb-[50px]">
          {key.map((item) => {
            return (
              <div
                key={item}
                className="px-[14px] py-2 bg-main-200 border border-keyword_border rounded-[5px]"
              >
                {item}
              </div>
            );
          })}
        </div>
        <hr className="mb-[50px]" />
        <div className="mb-[150px] flex w-full justify-end">
          <CTA4 className="text-body2 bg-white text-gray-500 py-[10px] pl-[16px] pr-[14px] mr-[10px] flex justify-center items-center rounded-[12px] border-gray_line border">
            삭제하기 <DelIcon />
          </CTA4>
          <CTA4>
            수정하기 <EditIcon />
          </CTA4>
        </div>
      </div>
    </>
  );
};

export default ReadPost;
