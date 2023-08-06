import { useRouter } from 'next/router';
import ApiClient from '../apis/client';
import { useEffect } from 'react';

export default function Waiting() {
  const router = useRouter();

  useEffect(() => {
    async function call() {
      const result = await ApiClient.get('/v1/user/exist');
      const data = result.data;

      if (data.code === 2000 || data.data.userExists === false) {
        router.push('/selectJob', undefined, { shallow: true });
      } else {
        router.push('/', undefined, { shallow: true });
      }
    }
    call();
  }, [router]);
  return <div className="flex"> </div>;
}
