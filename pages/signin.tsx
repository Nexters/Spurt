import LoginBtn from "@/components/login-btn";
import { useSession } from "next-auth/react";
import Logo from "../img/Group 2609434.svg";

export default function Signin() {
  const { status, data: session } = useSession();

  const isLogin = !!session && status === "authenticated";
  const token = isLogin ? session.access_token : "";

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <Logo />
      <div className="mt-[50px] mb-[100px] text-title1 text-center">
        <p>마지막 관문, 면접까지</p>

        <p>차근차근 스퍼트와 함께 준비해요</p>
      </div>
      <LoginBtn></LoginBtn>
      <div>{token}</div>
    </div>
  );
}
