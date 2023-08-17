import deleteExperienceById from '@/apis/Experience/deleteExperienceById';
import fetchExperience, {
  Experience as ExperienceHome,
} from '@/apis/Experience/fetchExperience';
import CTA3Black from '@/components/pc/Keywords/Buttons/CTA3-black';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';
import ButtonS from '@/components/pc/Keywords/Buttons/button-s';
import ExperienceCard from '@/components/pc/Keywords/Experience/ExperienceCard';
import ExperienceQuestionCard from '@/components/pc/Keywords/Experience/ExperienceQuestionCard';
import DeleteGuide from '@/components/pc/Keywords/Modals/DeleteGuide';
import Header from '@/components/pc/Keywords/header';
import Illust from '@/img/Illust_myProject.png';
import ModifyIcon from '@/img/edit-16.svg';
import LinkIcon from '@/img/link-yellow-18.svg';
import PlusIcon from '@/img/plus-20.svg';
import DelIcon from '@/img/trash-16.svg';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const ExperienceHome = () => {
  const router = useRouter();

  const [exp, setExp] = useState('');

  const [experienceId, setExperienceId] = useState(0);

  const [content, setContent] = useState('');

  const [experience, setExperience] = useState<ExperienceHome[]>([]);

  const [selectedCardIndex, setSelectedCardIndex] = useState(0);
  const [showDel, setShowDel] = useState(false);

  const showModal = () => {
    setShowDel(!showDel);
  };

  const handleDelete = () => {
    deleteExperienceById(experienceId.toString())
      .then(() => {
        console.log('삭제 성공');
      })
      .then(() => router.reload());
  };

  const handleEdit = () => {
    router.push({
      pathname: '/experienceCreation',
      query: {
        paramExperienceId: experienceId,
      },
    });
  };

  const handleQuestion = () => {
    router.push({
      pathname: '/post',
      query: {
        paramExperienceId: experience[selectedCardIndex].experienceId,
        paramExperienceTitle: experience[selectedCardIndex].title,
      },
    });
  };

  const { data: session } = useSession();

  const onClickCard = (index: number) => {
    setSelectedCardIndex(index);
    setExp(experience[index].title);
    setExperienceId(experience[index].experienceId);
  };

  useEffect(() => {
    async function call() {
      const result = await fetchExperience();
      if (result) {
        setExperience(result.experienceList);
        setExp(result.experienceList[0].title);
        setExperienceId(result.experienceList[0].experienceId);
      }

      setSelectedCardIndex(0);
    }
    if (session?.user) {
      call();
    }
  }, [session]);

  const updateExperience = (experience: ExperienceHome[]) => {
    setExperience(experience);
  };

  return (
    <>
      <div className="absolute top-[0px] left-0 bottom-0 bg-main-100 w-full h-[580px]"></div>
      <div className="absolute w-[1000px]">
        <Header />
        <div className="text-title1 text-gray-700 flex justify-between mt-[60px] mb-[32px]">
          <div>
            <span className="underline underline-offset-8 decoration-main-400 decoration-4">
              나의 경험
            </span>
            <span>이 담긴</span>
            <p>예상질문을 정리해요</p>
          </div>
          <div className="flex items-end">
            <Link href={session ? '/experienceCreation' : '/signin'}>
              <ButtonS>경험 정리하기</ButtonS>
            </Link>
          </div>
        </div>
        {/* <IllustSvg /> */}
        <Image src={Illust} alt="MyProject" />
      </div>
      <div className="h-[360px] mb-[100px]">???÷</div>
      <div className="mt-[300px]">
        <p className="text-title2 text-gray-700 mb-[20px]">나의 경험 정리</p>
      </div>
      {session ? (
        <>
          {experience.length === 0 ? (
            <>
              <div className="flex flex-col px-[30px] py-[30px] rounded-[20px] bg-white mt-[20px]">
                <div className="flex flex-col items-center justify-center rounded-[16px] border border-gray-100 h-[230px] ">
                  <div className="text-body7 text-gray-500 mb-[6px]">
                    아직 정리한 나의 경험이 없어요
                  </div>
                  <div className="text-heading1 mb-[24px]">
                    나만의 경험을 정리하러 가볼까요?
                  </div>
                  <Link href={'/experienceCreation'}>
                    <CTA3Black text="나의 경험 정리하기"></CTA3Black>
                  </Link>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="mb-[20px]">
                <Swiper spaceBetween={12} slidesPerView={2.7}>
                  {experience.map((value, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ExperienceCard
                          title={value.title}
                          index={index}
                          selectedIndex={selectedCardIndex}
                          onClickCard={onClickCard}
                        ></ExperienceCard>
                      </SwiperSlide>
                    );
                  })}
                </Swiper>
              </div>
              <div className="p-[30px] rounded-[20px] bg-white mb-[150px]">
                <div className="flex justify-between items-center mb-[20px]">
                  <p className="text-heading2 text-gray-600 border-l-2 border-l-main-300 pl-[10px]">
                    경험 소개
                  </p>
                  <p className="text-body6 text-gray-400">
                    {experience[selectedCardIndex]?.startDate.replace('-', '.')}{' '}
                    -{' '}
                    {experience[selectedCardIndex]?.endDate === null
                      ? '진행 중'
                      : experience[selectedCardIndex]?.endDate}
                  </p>
                </div>
                <div className="text-content_body1 text-gray-600 mb-[20px] whitespace-pre-line">
                  {experience[selectedCardIndex]?.content}
                </div>
                <div className="flex items-center gap-[10px] text-body7 text-gray-500 mb-[20px]">
                  <LinkIcon />
                  <a href={experience[selectedCardIndex]?.link} target="_blank">
                    {experience[selectedCardIndex]?.link}
                  </a>
                </div>
                <div className="flex justify-end mb-[30px] gap-[10px]">
                  <CTA4
                    className="gap-1 text-body2 bg-white text-gray-500 py-[10px] pl-[16px] pr-[14px] flex justify-center items-center rounded-[12px] border-gray_line border"
                    onClick={showModal}
                  >
                    삭제하기 <DelIcon />
                  </CTA4>
                  <CTA4 onClick={handleEdit}>
                    수정하기
                    <ModifyIcon />
                  </CTA4>
                </div>
                <hr />
                <div className="flex justify-between items-center my-[20px]">
                  <p className="text-heading1 text-gray-700">예상질문</p>
                  <p className="text-body2 text-gray700">
                    총{' '}
                    {
                      experience[selectedCardIndex]?.questionList?.questionList
                        ?.length
                    }
                    개
                  </p>
                </div>
                <div className="flex gap-3">
                  <button
                    className="flex items-center py-[70px] px-[30px] bg-gray-100 rounded-2xl h-[244px]"
                    onClick={handleQuestion}
                  >
                    <PlusIcon />
                  </button>
                  <Swiper
                    spaceBetween={12}
                    slidesPerView={3.5}
                    breakpoints={{
                      700: {
                        slidesPerView: 2,
                      },
                      1025: {
                        slidesPerView: 3,
                      },
                    }}
                  >
                    {!experience[selectedCardIndex] ||
                    !experience[selectedCardIndex].questionList ||
                    experience[selectedCardIndex].questionList.questionList
                      .length === 0 ? (
                      <></>
                    ) : (
                      experience[
                        selectedCardIndex
                      ].questionList.questionList.map((value, index) => {
                        return (
                          <SwiperSlide key={index}>
                            <ExperienceQuestionCard
                              title={value.subject}
                              questionId={value.questionId}
                              isPinned={value.pinIndicator}
                              updateExperience={updateExperience}
                            ></ExperienceQuestionCard>
                          </SwiperSlide>
                        );
                      })
                    )}
                  </Swiper>
                </div>
              </div>
            </>
          )}
        </>
      ) : (
        <>
          <div className="flex flex-col px-[30px] py-[30px] rounded-[20px] bg-white mt-[20px]">
            <div className="flex flex-col items-center justify-center rounded-[16px] border border-gray-100 h-[230px] ">
              <div className="text-body7 text-gray-500 mb-[6px]">
                아직 정리한 나의 경험이 없어요
              </div>
              <div className="text-heading1 mb-[24px]">
                나만의 경험을 정리하러 가볼까요?
              </div>
              <Link href={'/signin'}>
                <CTA3Black text="나의 경험 정리하기"></CTA3Black>
              </Link>
            </div>
          </div>
        </>
      )}
      <div className="h-[100px]"></div>
      {showDel && (
        <DeleteGuide
          setShow={() => {
            showModal();
          }}
          option={() => {
            handleDelete();
          }}
        ></DeleteGuide>
      )}
    </>
  );
};

export default ExperienceHome;
