import ApiClient from '@/apis/client';

export interface RandomQuestion {
  subject: string;
  jobGroup?: string;
  offset?: number;
}

const fetchQuestionByJob = async (category: string, offset: number) => {
  try {
    const res = await ApiClient.get(`/v1/question/random`, {
      params: {
        category: category,
        offset: offset,
      },
    });
    if (res.data.code === 2000) {
      console.log(res.data);
    } else {
      console.log(res.data.data.questions);
    }
    return res.data.data.questions as RandomQuestion[];
  } catch (error) {
    console.log('fetchQuestionByJob 에러 ', error);
    return [] as RandomQuestion[];
  }
};

export default fetchQuestionByJob;
