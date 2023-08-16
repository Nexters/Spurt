import createPost from '@/apis/Questions/createPost';
import fetchQuestionById from '@/apis/Questions/fetchQuestionById';
import updateQuestionById from '@/apis/Questions/updateQuestionById';
import CTA4 from '@/components/pc/Keywords/Buttons/CTA4';
import SumKeyWord from '@/components/pc/Keywords/Buttons/Keyword';
import AddKeyWordBtn from '@/components/pc/Keywords/Buttons/addKeyword';
import PostCarousel from '@/components/pc/Keywords/Carousel/PostCarousel';
import BackGuide from '@/components/pc/Keywords/Modals/BackGuide';
import SaveGuide from '@/components/pc/Keywords/Modals/SaveGuide';
import { Category, postCategory } from '@/const/categories';
import ArrowRightIcon from '@/img/arrow-right-circle-54.svg';
import SaveIcon from '@/img/check-16.svg';
import PlusIcon from '@/img/plus-16.svg';
import { keywordState } from '@/status/PostStatus';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { useRecoilState } from 'recoil';

interface IPostCategory {
  category: Category;
  isSelected: boolean;
}

export class PostCategory implements IPostCategory {
  constructor(
    public category: Category,
    public isSelected: boolean,
  ) {}
}

const Post = () => {
  const router = useRouter();
  const { exp, paramExperienceId, paramQuestionId } = router.query;

  const [questionId, setQuestionId] = useState('');
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [contentCount, setContentCount] = useState(0);
  const [project, setProject] = useState('');
  const [experienceId, setExperienceId] = useState('');
  const [showSave, setShowSave] = useState(false);
  const [showBack, setShowBack] = useState(false);
  const [categoryCount, setCategoryCount] = useState(0);

  const onChangeTitle = (event: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(event.target.value);
  };

  const onChangeContent = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setContent(event.target.value);
    setContentCount(event.target.value.length);
  };

  const showSaveModal = () => {
    setShowSave(!showSave);
  };
  const showBackModal = () => {
    setShowBack(!showBack);
  };

  const handlePost = async () => {
    if (!paramQuestionId) {
      await callPostCreationApi().then(() => {
        showSaveModal();
      });
    } else {
      await callPostEditApi().then(() => {
        showSaveModal();
      });
    }
    //.then(() => router.back());

    // if (isSuccess) {
    //   //router.back();
    // }
  };

  const callPostCreationApi = async () => {
    var result = '';
    if (!exp) {
      result = await createPost({
        subject: title,
        mainText: content,
        keyWordList: inputItems,
        categoryList: postCategories
          .filter((value) => value.isSelected)
          .map((value) => value.category.code),
      });
    } else {
      result = await createPost({
        subject: title,
        mainText: content,
        keyWordList: inputItems,
        categoryList: postCategories
          .filter((value) => value.isSelected)
          .map((value) => value.category.code),
        experienceId: +experienceId,
      });
    }
    return result;
  };

  const callPostEditApi = async () => {
    await updateQuestionById({
      questionId: paramQuestionId as string,
      subject: title,
      mainText: content,
      keyWordList: inputItems,
      categoryList: postCategories
        .filter((value) => value.isSelected)
        .map((value) => value.category.code),
    });
  };

  const goBack = () => {
    if (!title && !content) {
      router.back();
    } else {
      showBackModal();
    }
  };

  const [inputItems, setInputItems] = useState<string[]>([]);

  const [postCategories, setPostCategories] = useState(
    postCategory.map((category) => {
      return new PostCategory(category, false);
    }),
  );

  const [keyword, setKeyword] = useRecoilState(keywordState);

  const addInput = () => {
    const hasEmptyKeyword = inputItems.find((value) => value === '');
    if (hasEmptyKeyword !== undefined || inputItems.length === 20) {
      return;
    }
    const items = inputItems.map((value) => value).concat(keyword);

    setInputItems(items);
  };

  const fixInput = (fixedIndex: number) => {
    const newInputItems = inputItems.map((value, index) => {
      if (fixedIndex === index) {
        return keyword;
      } else {
        return value;
      }
    });

    setInputItems(newInputItems);
  };
  const deleteInput = (deletedIndex: number) => {
    setInputItems(inputItems.filter((_, index) => index !== deletedIndex));
  };

  const handleCategories = (categories: PostCategory[]) => {
    setCategoryCount(0);
    setPostCategories(categories);
    categories.map((item) => {
      if (item.isSelected !== false) {
        setCategoryCount(categoryCount + 1);
      }
    });
  };

  useEffect(() => {
    async function fillContent() {
      if (questionId) {
        const res = await fetchQuestionById(questionId);
        if (res !== null) {
          setTitle(res.subject);
          setContent(res.mainText);
          setContentCount(res.mainText.length);
          setInputItems(res.keyWordList);
          const postCategories = postCategory.map((category) => {
            const categories = res.categoryList;
            const isSelected = categories.includes(category.code)
              ? true
              : false;
            return new PostCategory(category, isSelected);
          });
          setPostCategories(postCategories);
        }
      }
    }

    if (exp) setProject(exp as string);
    if (paramExperienceId) setExperienceId(paramExperienceId as string);
    if (paramQuestionId) {
      fillContent();
      setQuestionId(paramQuestionId as string);
    }
  }, [exp, experienceId, paramExperienceId, paramQuestionId, questionId]);

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
          <PostCarousel
            postCateogries={postCategories}
            setPostCategories={handleCategories}
          ></PostCarousel>
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
            {inputItems.map((item, index) => (
              <SumKeyWord
                key={index}
                defaultKeywordName={item}
                fixInput={() => fixInput(index)}
                deleteInput={() => deleteInput(index)}
                index={index}
              />
            ))}
          </div>
        )}
        <div>
          <AddKeyWordBtn value="키워드 추가" addInput={() => addInput()}>
            키워드 추가
            <PlusIcon />
          </AddKeyWordBtn>
        </div>
      </div>

      <div className="flex justify-end mt-[30px] mb-[150px]">
        {(title.length > 0 && content.length > 0 && categoryCount > 0) ||
        paramQuestionId ? (
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
      {showSave && <SaveGuide setShow={() => showSaveModal()} />}
      {showBack && <BackGuide setShow={() => showBackModal()} />}
    </>
  );
};

export default Post;
