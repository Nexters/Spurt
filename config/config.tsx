import axios from 'axios';
import { getSession } from 'next-auth/react';

const ApiClient = () => {
  const defaultOptions = {
    baseURL: 'http://sirius-spurt.duckdns.org:8080',
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    const session = await getSession();
    if (session) {
      request.headers.Authorization = `Bearer ${session.access_token}`;
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
