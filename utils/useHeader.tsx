import { useRouter } from 'next/router';

export default function useHeader(): boolean {
  const router = useRouter();

  const invisiblePages = [
    '/signin',
    '/selectJob',
    '/post',
    '/read',
    '/waiting',
    '/experience',
  ];

  return invisiblePages.includes(router.pathname);
}
