import ApiClient from '@/apis/client';
import { SpurtUser } from '@/pages/api/auth/[...nextauth]';

export interface Params {
  subject?: string;
  jobGroup?: string;
  category?: string;
  pinIndicator?: boolean;
  myQuestionIndicator?: boolean;
  offest?: number;
  size?: number;
}

const fetchQuestion = async (param: Params, user: SpurtUser | undefined) => {
  if (!user) {
    return [];
  }

  try {
    const res = await ApiClient.get(`/v1/question`, { params: param });
    if (res.data.code === 2000) {
      console.log(res.data);
    } else {
      console.log(res.data.data.questions);
    }
    return res.data.data.questions;
  } catch (error) {
    console.log('fetchQuestion 에러 ', error);
    return [];
  }
};

export default fetchQuestion;
