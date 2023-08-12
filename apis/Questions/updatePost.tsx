import ApiClient from '@/apis/client';

export interface UpdatePostParam {
  questionId?: number;
  subject?: string;
  mainText?: string;
  pinIndicator?: boolean;
  keyWordList?: string[];
  categoryList?: string[];
}

const updatePost = async (body: UpdatePostParam) => {
  try {
    await ApiClient.put('/v1/question', body);
  } catch (error) {
    console.log('fetchQuestion 에러 ', error);
  }
};

export default updatePost;
