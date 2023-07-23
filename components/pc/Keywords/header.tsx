import { useSession } from "next-auth/react";
import Title from "../img/Frame 2609495.svg";
import { useRouter } from "next/router";
import Link from "next/link";
import Image from "next/image";

export default function Header() {
  const { data: session } = useSession();
  const router = useRouter();

  return (
    <div className="flex flex-row h-[100px] justify-between border-b border-[#E9E9E9]">
      <div className="flex content-center items-center">
        <Title></Title>

        <div className="flex justify-between ml-[130px]">
          <Link
            href="/"
            className={`${
              router.pathname === "/" ? "font-bold" : ""
            } mr-[50px]`}
          >
            질문 모음
          </Link>
          <Link
            href="/note"
            className={`${
              router.pathname === "/note" ? "font-bold" : ""
            } mr-[50px]`}
          >
            10분 노트
          </Link>
          <Link
            href="/project"
            className={`${router.pathname === "/project" ? "font-bold" : ""}`}
          >
            나의 프로젝트
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center w-16">
        {session ? (
          <Image
            src={session.user!.image!}
            width="61"
            height="61"
            className="rounded-full"
            alt="프로필 사진"
          ></Image>
        ) : (
          "네?"
        )}
      </div>
    </div>
  );
}
