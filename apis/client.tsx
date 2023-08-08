import axios from 'axios';
import { getSession, useSession } from 'next-auth/react';

const ApiClient = () => {
  //const { data: session } = useSession(); // 실시간 세션 정보 가져오기

  const defaultOptions = {
    baseURL: 'https://sirius-spurt.duckdns.org',
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    const session = await getSession();
    if (session) {
      request.headers.Authorization = `Bearer ${session.access_token}`;
      console.log(session.access_token);
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      console.log(`error`, error);
    },
  );

  return instance;
};

export default ApiClient();
