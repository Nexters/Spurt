import createExperience from '@/apis/Experience/createExperience';
import fetchExperienceById from '@/apis/Experience/fetchExperienceById';
import updateExperience from '@/apis/Experience/updateExperience';
import CTA4 from '@/components/pc/Buttons/CTA4';
import InputDate from '@/components/pc/Inputs/InputDate';
import BackGuide from '@/components/pc/Modals/BackGuide';
import SaveGuide from '@/components/pc/Modals/SaveGuide';
import BackIcon from '@/img/arrow-right-circle-54.svg';
import NonCheckIcon from '@/img/check box-off-gray-24.svg';
import CheckIcon from '@/img/check box-on-yellow - 24.svg';
import SaveIcon from '@/img/check-16.svg';
import LinkIcon from '@/img/link-yellow-18.svg';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

const ExperienceCreation = () => {
  const router = useRouter();

  const { paramExperienceId } = router.query;

  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentCount, setContentCount] = useState(0);
  const [startY, setStartY] = useState('');
  const [startM, setStartM] = useState('');
  const [endY, setEndY] = useState('');
  const [endM, setEndM] = useState('');
  const [link, setLink] = useState('');
  const [proceeding, setProceeding] = useState(true);
  const [experienceId, setExperienceId] = useState(0);

  const [showSave, setShowSave] = useState(false);
  const [showBack, setShowBack] = useState(false);

  const showSaveModal = () => {
    setShowSave(!showSave);
  };
  const showBackModal = () => {
    setShowBack(!showBack);
  };

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    setContentCount(event.target.value.length);
  };

  const onChangeStartY = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartY(event.target.value.replace(/[^0-9]/g, ''));
  };

  const onChangeStartM = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStartM(event.target.value.replace(/[^0-9]/g, ''));
  };

  const onChangeEndY = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndY(event.target.value.replace(/[^0-9]/g, ''));
  };

  const onChangeEndM = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEndM(event.target.value.replace(/[^0-9]/g, ''));
  };

  const onChangeLink = (event: React.ChangeEvent<HTMLInputElement>) => {
    setLink(event.target.value);
  };

  const handleProceeding = () => {
    setProceeding(!proceeding);
    setEndY('');
    setEndM('');
  };

  const handleSave = async () => {
    await callExperienceCreationApi().then(() => {
      showSaveModal();
    });
  };

  const callExperienceCreationApi = async () => {
    const startDate = startY + '-' + startM;
    const endDate = proceeding ? null : endY + '-' + endM;
    var result = false;
    if (!paramExperienceId) {
      result = await createExperience({
        title: title,
        content: content,
        startDate: startDate,
        endDate: endDate,
        link: link,
      });
    } else {
      result = await updateExperience({
        experienceId: experienceId,
        title: title,
        content: content,
        startDate: startDate,
        endDate: endDate,
        link: link,
      });
    }
    return result;
  };

  useEffect(() => {
    async function fillExperienceContent() {
      if (experienceId) {
        const response = await fetchExperienceById(experienceId);
        if (response !== null) {
          setTitle(response.title);
          setContent(response.content);
          setLink(response.link);
          const startDates = response.startDate.split('-');
          setStartY(startDates[0]);
          setStartM(startDates[1]);
          if (response.endDate !== null) {
            const endDates = response.endDate.split('-');
            setEndY(endDates[0]);
            setEndM(endDates[1]);
            setProceeding(false);
          }
        }
      }
    }
    if (paramExperienceId) {
      fillExperienceContent();

      setExperienceId(+paramExperienceId);
    }
  }, [experienceId, paramExperienceId]);

  return (
    <>
      <button className="mt-[24px] mb-[82px]" onClick={showBackModal}>
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
            value={title}
          ></input>
        </div>
        <hr />

        <div className="flex items-center gap-[10px] pt-4">
          <InputDate
            placeholder="시작년도"
            value={startY}
            maxLength={4}
            onChange={onChangeStartY}
          />
          <InputDate
            placeholder="월"
            value={startM}
            maxLength={2}
            onChange={onChangeStartM}
          />

          <p className="mx-[10px]">-</p>
          <InputDate
            placeholder="종료년도"
            value={endY}
            maxLength={4}
            onChange={onChangeEndY}
            proceeding={proceeding}
          />
          <InputDate
            placeholder="월"
            value={endM}
            maxLength={2}
            onChange={onChangeEndM}
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
            value={content}
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
            onChange={onChangeLink}
            value={link}
          ></input>
        </div>
      </div>
      <div className="flex justify-end mb-[150px]">
        {title.length > 0 && content.length > 0 ? (
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
      {showSave && <SaveGuide setShow={() => showSaveModal()} />}
      {showBack && <BackGuide setShow={() => showBackModal()} />}
    </>
  );
};

export default ExperienceCreation;
