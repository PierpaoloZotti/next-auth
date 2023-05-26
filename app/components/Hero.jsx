import Image from "next/image";

const Hero = () => {
   return (
      <section className="flex flex-col items-center justify-center">
         <div className="flex justify-center gap-10 flex-wrap mt-32">
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
