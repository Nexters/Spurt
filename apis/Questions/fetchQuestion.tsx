import ApiClient from '@/apis/client';

export default function fetchQuestion() {
  return new Promise((resolve) => {
    ApiClient.get(`/v1/question`)
      .then((res) => {
        resolve(res.data);
      })
      .catch((error) => {
        console.log('fetchQuestion 에러 ', error);
      });
  });
}
