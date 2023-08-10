import BackIcon from '@/img/arrow-right-circle-54.svg';
import CheckIcon from '@/img/check box-on-yellow - 24.svg';
import NonCheckIcon from '@/img/check box-off-gray-24.svg';
import LinkIcon from '@/img/link-yellow-18.svg';
import SaveIcon from '@/img/check-16.svg';
import InputDate from '@/components/pc/Keywords/Inputs/InputDate';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';

const Experience = () => {
  const router = useRouter();

  const { content } = router.query;

  useEffect(() => {
    if (content) setContents(content as string);
  }, [content]);

  const [title, setTitle] = useState('');
  const [contents, setContents] = useState('');
  const [contentCount, setContentCount] = useState(0);
  const [startY, setStartY] = useState('');
  const [startM, setStartM] = useState('');
  const [endY, setEndY] = useState('');
  const [endM, setEndM] = useState('');
  const [proceeding, setProceeding] = useState(true);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContents(event.target.value);
    setContentCount(
      event.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, '$&$1$2')
        .length,
    );
  };

  //이건 좀 아닌거 같은데...... 오바잖아 나린아?
  const onChangeStartY = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartY(event.target.value);
  };

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!inputValue.endsWith('년')) setStartY(inputValue + '년');
  };

  const onChangeStartM = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartM(event.target.value);
  };

  const handleBlur2 = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!inputValue.endsWith('월')) setStartM(inputValue + '월');
  };

  const onChangeEndY = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndY(event.target.value);
  };

  const handleBlur3 = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!inputValue.endsWith('년') && !proceeding) setEndY(inputValue + '년');
  };

  const onChangeEndM = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndM(event.target.value);
  };

  const handleBlur4 = (event: React.FocusEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    if (!inputValue.endsWith('월') && !proceeding) setEndM(inputValue + '월');
  };

  const handleProceeding = () => {
    setProceeding(!proceeding);
    setEndY('');
    setEndM('');
  };

  const handleSave = () => {
    console.log('저장 api');
  };

  const goBack = () => {
    router.back();
  };
  return (
    <>
      <button className="mt-[24px] mb-[82px]" onClick={goBack}>
        <BackIcon />
      </button>
      <p className="text-title1 text-gray-700 mb-[20px]">경험 정리</p>

      <div className="border border-gray-300 flex flex-col rounded-2xl bg-white px-6 pt-[14px] pb-4 mb-3">
        <div>
          <input
            className="text-heading1 text-gray-600 w-full placeholder:text-heading3 mb-[14px] placeholder:text-gray-300 outline-none"
            placeholder="제목은 30자 이내로 작성해주세요"
            maxLength={30}
            onChange={onChangeTitle}
          ></input>
        </div>
        <hr />

        <div className="flex items-center gap-[10px] pt-4">
          <InputDate
            placeholder="시작년도"
            value={startY}
            onChange={onChangeStartY}
            onBlur={handleBlur}
          />
          <InputDate
            placeholder="월"
            value={startM}
            onChange={onChangeStartM}
            onBlur={handleBlur2}
          />

          <p className="mx-[10px]">-</p>
          <InputDate
            placeholder="종료년도"
            value={endY}
            onChange={onChangeEndY}
            onBlur={handleBlur3}
            proceeding={proceeding}
          />
          <InputDate
            placeholder="월"
            value={endM}
            onChange={onChangeEndM}
            onBlur={handleBlur4}
            proceeding={proceeding}
          />

          <p className="text-body2 text-gray-400 ml-[10px] mr-[3px]">진행중</p>
          {proceeding ? (
            <button onClick={handleProceeding}>
              <CheckIcon />
            </button>
          ) : (
            <button onClick={handleProceeding}>
              <NonCheckIcon />
            </button>
          )}
        </div>
      </div>
      <div className="mb-[30px] px-6 pt-[30px] pb-[20px] flex flex-col gap-[20px] bg-white border border-gray-300 rounded-[20px]">
        <p className="text-heading2 text-gray-600 border-l-2 border-l-main-300 pl-[10px]">
          경험 소개
        </p>
        <div>
          <textarea
            className="text-body3 text-gray-600 w-full resize-none h-[180px] outline-none placeholder:text-gray-300"
            placeholder="해당 프로젝트에 대해 설명해주세요"
            maxLength={300}
            onChange={onChangeContent}
            value={contents}
          ></textarea>
          <p className="text-body9 text-gray-300 text-right">
            {contentCount}/300
          </p>
        </div>
        <hr />
        <div className="flex flex-row">
          <div className="flex flex-row items-center gap-[10px] text-body6 text-gray-400 pr-[20px] border-r-[2px] border-r-gray_line">
            <LinkIcon /> 링크 첨부
          </div>
          <input
            className="text-body7 text-gray-500 ml-[20px] w-[400px] placeholder:text-gray-300 outline-none"
            placeholder="링크를 첨부해주세요"
          ></input>
        </div>
      </div>
      <div className="flex justify-end mb-[150px]">
        {title.length > 0 && contents.length > 0 ? (
          <CTA4 onClick={handleSave}>
            저장하기
            <SaveIcon />
          </CTA4>
        ) : (
          <CTA4
            style={{
              backgroundColor: '#E9E9E9',
              color: '#A7A7A7',
              border: '1px solid #00000017',
            }}
            disabled={true}
          >
            저장하기
            <SaveIcon />
          </CTA4>
        )}
      </div>
    </>
  );
};

export default Experience;
