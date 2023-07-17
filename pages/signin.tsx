import LoginBtn from "@/components/login-btn";
import { useSession } from "next-auth/react";

export default function Signin() {
  const { status, data: session } = useSession();

  const isLogin = !!session && status === "authenticated";
  const token = isLogin ? session.access_token : "";

  return (
    <div className="container">
      <LoginBtn></LoginBtn>
      <div>로그인 페이지(임시)</div>
      <div>{token}</div>
    </div>
  );
}
