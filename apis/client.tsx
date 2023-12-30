import axios from 'axios';
import { getSession, signIn } from 'next-auth/react';

const ApiClient = () => {
  const defaultOptions = {
    baseURL: 'https://api.spurtapp.com',
    //baseURL: 'https://sirius-spurt.duckdns.org',
    //baseURL: 'https://whenwheres.com/',
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
    async (response) => {
      if (response.data.code === 2000) {
        await signIn('google', { callbackUrl: window.location.pathname });
      }
      return response;
    },
    (error) => {
      return error;
    },
  );

  return instance;
};

export default ApiClient();
