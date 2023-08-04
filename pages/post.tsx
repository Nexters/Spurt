import SumKeyWord from '@/components/pc/Keywords/Buttons/Keyword';
import AddKeyWordBtn from '@/components/pc/Keywords/Buttons/addKeyword';
import SaveIcon from '@/img/check-16.svg';
import ArrowRightIcon from '@/img/arrow-right-circle-54.svg';
import PlusIcon from '@/img/plus-16.svg';
import { useRef, useState } from 'react';
import { InputItem } from '@/components/pc/Keywords/Buttons/Keyword';
import { postCategory } from '@/const/categories';
import Carousel from '@/components/pc/Keywords/Carousel/Carousel';
import { useRecoilState } from 'recoil';
import { selectedPostCategoriesState } from '@/status/PostStatus';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentCount, setContentCount] = useState(0);

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
  const nextID = useRef<number>(1);
  const [selectedPostCategory, setSelectedPostCategory] = useRecoilState(
    selectedPostCategoriesState,
  );
  const [inputItems, setInputItems] = useState<InputItem[]>([
    { id: 0, title: '' },
  ]);
  const addInput = () => {
    const input = {
      id: nextID.current,
      title: '',
    };
    setInputItems([...inputItems, input]);
    nextID.current += 1;
  };
  const deleteInput = (index: number) => {
    setInputItems(inputItems.filter((item) => item.id !== index));
  };

  return (
    <>
      <div className="flex justify-start h-[100px]">
        <button>
          <ArrowRightIcon />
        </button>
      </div>

      <p className="mt-[60px] mb-5 text-title1">질문-답변 만들기</p>
      <div className="border border-gray-300 flex flex-col items-start rounded-2xl bg-white px-6 pt-[14px] pb-4 mb-3">
        <input
          className="text-heading3 text-gray-600 w-full rounded-2xl placeholder:text-heading3 mb-[14px] placeholder:text-gray-300"
          placeholder="질문은 35자 이내로 작성해주세요"
          maxLength={35}
          onChange={onChangeTitle}
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
          className="min-h-[360px] w-full text-body3 text-gray-600 resize-none placeholder:text-body3 placeholder:text-gray-300"
          placeholder="답변을 입력해주세요"
          maxLength={1000}
          onChange={onChangeContent}
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
        <div className="flex mb-[12px] gap-[6px] flex-wrap">
          {inputItems.map((item, index) => (
            <SumKeyWord key={index} deleteInput={deleteInput} id={item.id} />
          ))}
        </div>
        <div>
          <AddKeyWordBtn value="키워드 추가" addInput={addInput}>
            키워드 추가
            <PlusIcon />
          </AddKeyWordBtn>
        </div>
      </div>

      <div className="flex justify-end mt-[30px] mb-[150px]">
        {title.length > 0 && content.length > 0 ? (
          <CTA4>
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
