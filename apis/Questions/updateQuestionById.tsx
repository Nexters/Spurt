import ApiClient from '@/apis/client';

export interface UpdateQuestionParam {
  questionId: string;
  subject: string;
  mainText: string;
  keyWordList: string[];
  categoryList: string[];
}

const updateQuestionById = async (body: UpdateQuestionParam) => {
  try {
    await ApiClient.put('/v1/question', body);
  } catch (error) {
    console.log('updateQuestionById 에러 ', error);
  }
};

export default updateQuestionById;
