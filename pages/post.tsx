import issuePost from '@/apis/Questions/issuePost';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';
import SumKeyWord, {
  InputItem,
} from '@/components/pc/Keywords/Buttons/Keyword';
import AddKeyWordBtn from '@/components/pc/Keywords/Buttons/addKeyword';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import { postCategory } from '@/const/categories';
import ArrowRightIcon from '@/img/arrow-right-circle-54.svg';
import SaveIcon from '@/img/check-16.svg';
import PlusIcon from '@/img/plus-16.svg';
import {
  selectedMultiplePostCategoriesState,
  selectedPostCategoriesState,
} from '@/status/PostStatus';
import { useRouter } from 'next/router';
import { useEffect, useRef, useState } from 'react';
import { useRecoilState } from 'recoil';

const Post = () => {
  const router = useRouter();
  const { exp, paramQuestionId, paramTitle, paramContent } = router.query;

  const nextID = useRef<number>(1);

  const [questionId, setQuestionId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentCount, setContentCount] = useState(0);
  const [project, setProject] = useState('');

  useEffect(() => {
    if (exp) setProject(exp as string);
    if (paramQuestionId) setQuestionId(paramQuestionId as string);
    if (paramTitle) setTitle(paramTitle as string);
    if (paramContent) setContent(paramContent as string);
  }, [exp, paramQuestionId, paramTitle, paramContent]);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    setContentCount(
      event.target.value.replace(/[\0-\x7f]|([0-\u07ff]|(.))/g, '$&$1$2')
        .length,
    );
  };

  const handlePost = () => {
    if (!exp) {
      issuePost({
        subject: title,
        mainText: content,
        keyWordList: ['keyword1', 'keyword2'],
        categoryList: ['CONFLICT'],
        jobGroup: 'DEVELOPER',
      });
    } else {
      //TD: 프로젝트 관련 질문답변일 때
    }
  };

  const goBack = () => {
    router.back();
  };

  const [selectedPostCategory, setSelectedPostCategory] = useRecoilState(
    selectedPostCategoriesState,
  );
  const [inputItems, setInputItems] = useState<InputItem[]>([]);

  const [selectedMutiplePostCategory, setSelectedMultiplePostCategory] =
    useRecoilState(selectedMultiplePostCategoriesState);

  const addInput = () => {
    const input = {
      id: nextID.current,
      title: '',
    };
    setInputItems([...inputItems, input]);

    nextID.current += 1;
  };
  const deleteInput = (id: number) => {
    setInputItems(inputItems.filter((item) => item.id !== id));
  };

  return (
    <>
      <div className="flex justify-start h-[100px]">
        <button onClick={goBack}>
          <ArrowRightIcon />
        </button>
      </div>
      <div className="flex flex-row mt-[60px] mb-5 items-center">
        <p className="text-title1 mr-[16px]">질문-답변 만들기</p>
        {exp && (
          <p className="pl-[12px] text-heading3 text-gray-600 border-l-2 border-l-main-300">
            {project}
          </p>
        )}
      </div>
      <div className="border border-gray-300 flex flex-col items-start rounded-2xl bg-white px-6 pt-[14px] pb-4 mb-3">
        <input
          className="text-heading3 text-gray-600 w-full  placeholder:text-heading3 mb-[14px] placeholder:text-gray-300 outline-none"
          placeholder="질문은 35자 이내로 작성해주세요"
          maxLength={35}
          onChange={onChangeTitle}
          value={title}
        ></input>
        <hr />
        <div className="flex mt-4">
          <Carousel
            categories={postCategory}
            isPc={true}
            selectedCateogry={selectedPostCategory}
            setCategory={setSelectedPostCategory}
          ></Carousel>
        </div>
      </div>

      <div className="p-[30px] min-h-[476px] w-full border border-gray-300 rounded-[20px] bg-white">
        <textarea
          className="min-h-[360px] w-full text-body3 text-gray-600 resize-none placeholder:text-body3 placeholder:text-gray-300 outline-none"
          placeholder="답변을 입력해주세요"
          maxLength={1000}
          onChange={onChangeContent}
          value={content}
        ></textarea>
        <p className="text-right text-body9 text-gray-300 mb-[30px]">
          {contentCount} / 1000
        </p>
        <hr />
        <div className="flex items-center mt-[30px] mb-[20px] gap-[10px]">
          <p className="text-body1 text-gray-600">Keyword</p>
          <p className="text-caption2 text-gray-300">
            키워드는 최대 20개까지 가능해요
          </p>
        </div>
        {inputItems.length > 0 && (
          <div className="flex mb-[12px] gap-[6px] flex-wrap">
            {inputItems.map((item) => (
              <SumKeyWord
                key={item.id}
                deleteInput={() => deleteInput(item.id)}
                id={item.id}
              />
            ))}
          </div>
        )}
        <div>
          <AddKeyWordBtn value="키워드 추가" addInput={addInput}>
            키워드 추가
            <PlusIcon />
          </AddKeyWordBtn>
        </div>
      </div>

      <div className="flex justify-end mt-[30px] mb-[150px]">
        {title.length > 0 && content.length > 0 ? (
          <CTA4 onClick={handlePost}>
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

export default Post;
