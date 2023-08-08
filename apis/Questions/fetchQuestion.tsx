import ApiClient from '@/apis/client';
import { getSession } from 'next-auth/react';

export default function fetchQuestion() {
  const session = getSession();
  return new Promise((resolve) => {
    ApiClient.get(`/v1/question`)
      .then((res) => {
        if (res.data.code === 2000) {
          console.log(res.data);
        } else {
          console.log(res.data.data.questions);
        }
        resolve(res.data.data.questions);
      })
      .catch((error) => {
        console.log('fetchQuestion 에러 ', error);
      });
  });
}
