import { useRouter } from 'next/router';

export default function useHeader(): boolean {
  const router = useRouter();

  const visiblePages = ['/signin', '/selectJob', '/post', '/read', '/waiting'];

  return visiblePages.includes(router.pathname);
}
