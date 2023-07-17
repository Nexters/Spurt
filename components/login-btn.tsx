import { useSession, signIn, signOut } from "next-auth/react";
import ButtonXl from "./Buttons/button-xl";

export default function LoginBtn() {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <br></br>
        <br></br>
        Signed in as{" "}
        {session.user !== undefined ? session.user.email : "Not found User"}
        <br></br>
        <img src={session.user!.image!}></img>
        <br />
        <br />
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
          onClick={() => signOut()}
        >
          Sign out
        </button>
      </>
    );
  }
  return (
    <>
      Not signed in <br />
      <br />
      <ButtonXl onClick={() => signIn()}>Sign in 이게 맞아?ㅋㅋㅋ</ButtonXl>
    </>
  );
}
