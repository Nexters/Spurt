import ApiClient from '@/apis/client';
import { Question } from './fetchQuestion';

const fetchQuestionById = async (questionId: string) => {
  try {
    const res = await ApiClient.get(`/v1/question/${questionId}`);
    if (res.data.code === 2000) {
      console.log(res.data);
    } else {
      console.log(res.data.data);
    }
    return res.data.data as Question;
  } catch (error) {
    console.log('fetchQuestionById 에러 ', error);
    return {} as Question
  }
};

export default fetchQuestionById;
