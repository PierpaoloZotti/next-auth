"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { useSession } from "next-auth/react";

const Hero = () => {
   const { data: session } = useSession();
   const router = useRouter();
   return (
      <section className="flex min-h-full flex-col items-center">
         <div className="flex justify-center gap-10 mt-20 flex-wrap">
            <Image src="/prisma-2.svg" width={150} height={200} />
            <Image src="/next.svg" width={150} height={200} />
            <Image src="/tailwindcss.svg" width={80} height={300} />
            <Image src="/mongodb.svg" width={80} height={300} />
         </div>
         <div className="mt-10">
            <h1 className="font-bold text-3xl">Welcome to my Next-Auth application</h1>
         </div>
      </section>
   );
};

export default Hero;
