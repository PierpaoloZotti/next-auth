"use client";
import Image from "next/image";
import logo from "../../public/zeta-logo-transparency.png";
import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

const Header = () => {
   const { data: session } = useSession();
   const router = useRouter();
   return (
      <section className="w-full flex justify-between py-4 shadow-md px-4">
         <div>
            <Image src={logo} width={60} height={30} />
         </div>
         {!session ? (
            <div>
               <button
                  className="bg-sky-500 hover:bg-sky-700 text-sm text-white font-bold w-40 py-2 rounded-xl"
                  onClick={() => router.push("/login")}
               >
                  Sign in
               </button>
            </div>
         ) : (
            <div>
               <button
                  className="bg-black text-sm text-white font-bold w-40 py-2 rounded-xl hover:bg-transparent hover:border-solid border-2 hover:border-black hover:text-black "
                  onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
               >
                  Log out
               </button>
            </div>
         )}
         {/* <button
            className="bg-gray-800 w-40 text-white font-bold rounded-xl py-2 text-sm hover:shadow-md hover:bg-black"
            onClick={() => signOut({ callbackUrl: "http://localhost:3000/login" })}
         >
            Log out
         </button> */}
      </section>
   );
};

export default Header;
