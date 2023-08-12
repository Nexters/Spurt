import ApiClient from '@/apis/client';

export interface Params {
  subject?: string;
  jobGroup?: string;
  category?: string;
  pinIndicator?: boolean;
  myQuestionIndicator?: boolean;
  offset?: number;
  size?: number;
}

export interface Question {
  subject: string;
  mainText: string;
  categoryList: string[];
  keyWordList: string[];
}

const fetchQuestion = async (param: Params) => {
  try {
    const res = await ApiClient.get(`/v1/question`, { params: param });
    if (res.data.code === 2000) {
      console.log(res.data);
    } else {
      console.log(res.data.data.questions);
    }
    return res.data.data.questions as Question[];
  } catch (error) {
    console.log('fetchQuestion 에러 ', error);
    return [] as Question[];
  }
};

export default fetchQuestion;
