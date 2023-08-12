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
export interface QuestionResponse {
  questions: Question[];
  meta: Meta;
}
export interface Question {
  questionId: number;
  subject: string;
  mainText: string;
  categoryList: string[];
  keyWordList: string[];
  jobGroup: string;
  createTime: string;
  pinIndicator: boolean;
}

export interface Meta {
  totalCount: number | undefined;
  totalPage: number | undefined;
}

const fetchQuestion = async (param: Params) => {
  try {
    const res = await ApiClient.get(`/v1/question`, { params: param });
    if (res.data.code === 2000) {
      console.log(res.data);
    } else {
      console.log(res.data.data);
    }
    return res.data.data as QuestionResponse;
  } catch (error) {
    console.log('fetchQuestion 에러 ', error);
    return {
      questions: [],
      meta: {
        totalCount: 0,
        totalPage: 0,
      },
    } as QuestionResponse;
  }
};

export default fetchQuestion;
