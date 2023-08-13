import fetchProject, { Experience } from '@/apis/Project/fetchProject';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';
import ButtonS from '@/components/pc/Keywords/Buttons/button-s';
import ProjectCard from '@/components/pc/Keywords/Project/ProjectCard';
import ProjectQuestionCard from '@/components/pc/Keywords/Project/ProjectQuestionCard';
import ModifyIcon from '@/img/edit-16.svg';
import LinkIcon from '@/img/link-yellow-18.svg';
import ProjectIlust from '@/img/myproject.png';
import PlusIcon from '@/img/plus-20.svg';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import 'swiper/css';
import { Swiper, SwiperSlide } from 'swiper/react';

const Project = () => {
  const router = useRouter();

  const [exp, setExp] = useState('');

  const [experienceId, setExperienceId] = useState(0);

  const [content, setContent] = useState('');

  const [projects, setProjects] = useState<Experience[]>([]);

  const [selectedCardIndex, setSelectedCardIndex] = useState(0);

  const handleEdit = () => {
    router.push({
      pathname: '/experience',
      query: { content },
    });
  };

  const handleQuestion = () => {
    router.push({
      pathname: '/post',
      query: { exp, experienceId },
    });
  };

  const { data: session } = useSession();

  const onClickCard = (index: number) => {
    setSelectedCardIndex(index);
    setExp(projects[index].title);
    setExperienceId(projects[index].experienceId);
  };

  useEffect(() => {
    async function call() {
      const result = await fetchProject();
      if (result) {
        setProjects(result.experienceList);
        setExp(result.experienceList[0].title);
        setExperienceId(result.experienceList[0].experienceId);
      }

      setSelectedCardIndex(0);
    }
    if (session?.user) {
      call();
    }
  }, [session]);

  return (
    <>
      <div className="text-title1 text-gray-700 flex justify-between mt-[60px] mb-[30px]">
        <div>
          <span className="underline underline-offset-8 decoration-main-400 decoration-4">
            면접 직전, 핀으로
          </span>
          <span> 고정한</span>
          <p>질문과 답변을 확인해요</p>
        </div>
        <div className="flex items-end">
          <Link href={'/experience'}>
            <ButtonS>경험 정리하기</ButtonS>
          </Link>
        </div>
      </div>
      <div className="h-[360px] mb-[100px]">
        <Image src={ProjectIlust} alt="MyProject"></Image>
      </div>
      <div>
        <p className="text-title2 text-gray-700 mb-[20px]">나의 경험 정리</p>
        <div className="mb-[20px]">
          <Swiper spaceBetween={12} slidesPerView={2}>
            {projects.length === 0 ? (
              <>아무것도 없지롱</>
            ) : (
              projects.map((value, index) => {
                return (
                  <SwiperSlide key={index}>
                    <ProjectCard
                      title={value.title}
                      index={index}
                      selectedIndex={selectedCardIndex}
                      onClickCard={onClickCard}
                    ></ProjectCard>
                  </SwiperSlide>
                );
              })
            )}
          </Swiper>
        </div>
      </div>
      <div className="p-[30px] rounded-[20px] bg-white mb-[150px]">
        <div className="flex justify-between items-center mb-[20px]">
          <p className="text-heading2 text-gray-600 border-l-2 border-l-main-300 pl-[10px]">
            경험 소개
          </p>
          <p className="text-body6 text-gray-400">
            {projects[selectedCardIndex]?.startDate.replace('-', '.')} -{' '}
            {projects[selectedCardIndex]?.endDate === null
              ? '진행 중'
              : projects[selectedCardIndex]?.endDate}
          </p>
        </div>
        <div className="text-content_body1 text-gray-600 mb-[20px]">
          {projects[selectedCardIndex]?.content}
        </div>
        <div className="flex items-center gap-[10px] text-body7 text-gray-500 mb-[20px]">
          <LinkIcon />
          <a
            href="https://www.pinterest.co.kr/pin/122793527321162632/"
            target="_blank"
          >
            {projects[selectedCardIndex]?.link}
          </a>
        </div>
        <div className="flex justify-end mb-[30px]">
          <CTA4 onClick={handleEdit}>
            수정하기
            <ModifyIcon />
          </CTA4>
        </div>
        <hr />
        <div className="flex justify-between items-center my-[20px]">
          <p className="text-heading1 text-gray-700">예상질문</p>
          <p className="text-body2 text-gray700">총 {'10'}개</p>
        </div>
        <div className="flex gap-3">
          <button
            className="flex items-center py-[70px] px-[30px] bg-gray-100 rounded-2xl h-[244px]"
            onClick={handleQuestion}
          >
            <PlusIcon />
          </button>
          <div>
            <Swiper spaceBetween={12} slidesPerView={3}>
              {!projects[selectedCardIndex] ||
              !projects[selectedCardIndex].questionList ||
              projects[selectedCardIndex].questionList.questionList.length ===
                0 ? (
                <>아무것도 없지롱</>
              ) : (
                projects[selectedCardIndex].questionList.questionList.map(
                  (value, index) => {
                    return (
                      <SwiperSlide key={index}>
                        <ProjectQuestionCard
                          title={value.subject}
                          index={index}
                        ></ProjectQuestionCard>
                      </SwiperSlide>
                    );
                  },
                )
              )}
            </Swiper>
          </div>
        </div>
      </div>
    </>
  );
};

export default Project;
