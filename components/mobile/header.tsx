import { useSession } from 'next-auth/react';
import Logo from 'img/Frame 2609495.svg';
import Image from 'next/image';

export default function MobileHeader() {
   const { data: session } = useSession();

   return (
      <div className="flex flex-row mt-[47px] border-b border-[#E9E9E9] justify-between">
         <div className="flex content-center items-center">
            <Logo></Logo>
         </div>
         <div className="flex flex-row items-center w-16 mb-[12px]">
            {session ? (
               <Image
                  src={session.user!.image!}
                  width="61"
                  height="61"
                  className="rounded-full"
                  alt="프로필 사진"></Image>
            ) : (
               '네?'
            )}
         </div>
      </div>
   );
}
