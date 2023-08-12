import ApiClient from '@/apis/client';

interface QuestionByJobProps {}

export default function fetchQuestionByJob() {
  return new Promise((resolve) => {
    ApiClient.get(`/v1/question/random`, {
      params: {
        offset: 4,
      },
    })
      .then((res) => {
        resolve(res.data);
        console.log(res.data);
      })
      .catch((error) => {
        console.log('fetchQuestionByJob 에러 ', error);
      });
  });
}
