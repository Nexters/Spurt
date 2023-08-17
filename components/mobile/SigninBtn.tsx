import { signIn } from 'next-auth/react';

const SigninBtn = () => {
  return (
    <button
      className="py-[12px] w-full h-[46px] rounded-[50px] text-white bg-gray-700"
      onClick={() => signIn('google', { callbackUrl: '/note' })}
    >
      <p className="text-body4">로그인하기</p>
    </button>
  );
};

export default SigninBtn;
