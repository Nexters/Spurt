import { getProviders, useSession } from 'next-auth/react';
import Logo from '../img/Group 2609434.svg';
import GoogleSignInButton from '@/components/pc/Keywords/GoogleSigninButton';
import { useEffect, useState } from 'react';

export default function Signin() {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <div className="mt-[50px] mb-[100px] text-title2 text-gray-700 text-center">
        <p>마지막 관문, 면접까지</p>

        <p>차근차근 스퍼트와 함께 준비해요</p>
      </div>
      <GoogleSignInButton></GoogleSignInButton>
    </div>
  );
}
