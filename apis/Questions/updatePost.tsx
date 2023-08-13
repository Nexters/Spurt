import ApiClient from '@/apis/client';

export interface UpdatePostParam {
  questionId?: number;
  pinIndicator?: boolean;
}

const updatePost = async (body: UpdatePostParam) => {
  try {
    await ApiClient.put('/v1/question/pin', body);
  } catch (error) {
    console.log('fetchQuestion 에러 ', error);
  }
};

export default updatePost;
