import { useRouter } from 'next/router';
import ApiClient from '../apis/client';
import { useEffect } from 'react';
import Image from 'next/image';
import Landing from '@/img/landing.png';

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
    setTimeout(() => {
      call();
    }, 1000);
  }, [router]);
  return (
    <>
      <div className="flex justify-center items-center h-screen">
        <Image src={Landing} alt="landing..." width={212} height={210} />
      </div>
    </>
  );
}
