import ApiClient from '@/apis/client';

export default function signup(jobGroup: string) {
  return new Promise((resolve) => {
    ApiClient.post(`/v1/jobgroup`, { jobGroup })
      .then((res) => resolve(res.data))
      .catch((error) => {
        console.log('직군 선택 api 에러 ', error);
      });
  });
}
