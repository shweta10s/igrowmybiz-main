import { oxygen } from "@/app/fonts";
import { cn } from "@/lib/utils";
import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import React from "react";

export const metadata: Metadata = {
  title: "Igrowmybiz - services",
  description: "Social media marketing agency - services",
};
export default function Page() {
  const services = [
    {
      img1: "SMM icons 1.png",
      img2: "SMM icons 2.png",
      img3: "SMM icons 3.png",
      img4: "SMM icons 4.png",
      img5: "SMM icons 5.png",
      img6: "SMM icons 6.png",
      service: "Social Media Marketing",
      href: "/service/socialmediamarketing",
    },
    {
      img1: "Paid ads management icons 1.png",
      img2: "Paid ads management icons 2.png",
      img3: "Paid ads management icons 3.png",
      img4: "Paid ads management icons 4.png",
      img5: "Paid ads management icons 5.png",
      img6: "Paid ads management icons 6.png",
      service: "Paid ads management",
      href: "/service/paidads",
    },
    {
      img1: "Development icons 1.png",
      img2: "Development icons 2.png",
      img3: "Development icons 3.png",
      img4: "Development icons 4.png",
      img5: "Development icons 5.png",
      img6: "Development icons 6.png",
      service: "Development",
      href: "/service/development",
    },
    {
      img1: "Asset 1.png",
      img2: "Asset 3.png",
      img3: "Asset 4.png",
      img4: "Asset 5.png",
      img5: "Asset 6.png",
      img6: "Asset 7.png",
      service: "Designing",
      href: "/service/design",
    },
  ];
  return (
    <main className="w-full bg-secondaryColor flex flex-col gap-20 md:gap-10 xl:gap-10 pt-10 pb-20 md:pb-0">
      <section className="pt-24 flex flex-col gap-2 items-center px-5">
        <h2
          className={cn("text-3xl text-white font-semibold", oxygen.className)}
        >
          Our Services
        </h2>
        <p
          className={cn(
            "text-[#8e8e8e] md:w-1/2 mx-auto text-center",
            oxygen.className
          )}
        >{`Explore the possibilities with iGrowMyBiz We turn your ideas into reality, delivering solutions tailored to your needs. Let's bring your vision to life together.`}</p>
      </section>

      {services.map((data, index) => (
       <section key={index}>
       <div className="hidden md:grid md:grid-cols-4 grid-cols-3 gap-4 md:h-[400px] xl:h-[480px] w-full justify-center flex-wrap px-3 lg:px-16 py-8 text-black">
        
         <div className="bg-[#242424] col-span-1 row-span-1 md:row-span-2 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
           <Image
             src={`/assets/services-icons/${data.img1}`}
             alt="Social Media"
             fill
             className="object-contain rounded-xl"
           />
         </div>
     
         <div className="bg-[#242424] col-span-1 row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
           <Image
             src={`/assets/services-icons/${data.img2}`}
             alt="Social Media"
             fill
             className="object-contain rounded-xl"
           />
         </div>
     
         <div className="bg-[#242424] md:col-span-2 row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
           <Image
             src={`/assets/services-icons/${data.img3}`}
             alt="Social Media"
             fill
             className="object-contain rounded-xl"
           />
         </div>
     
         <Link
           href={data.href}
           className="col-span-3 md:col-span-2 md:row-span-1 rounded-xl hover:scale-[1.03] transition-all duration-300 ease-in p-1 btn-background"
         >
           <div className="bg-textColor hover:bg-white h-full w-full flex items-center justify-center rounded-xl transition-all duration-300 ease-in">
             <h1 className="text-black xl:text-3xl font-semibold uppercase text-lg">
               {data.service}
             </h1>
           </div>
         </Link>
     
         <div className="bg-[#242424] md:col-span-1 md:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
           <Image
             src={`/assets/services-icons/${data.img4}`}
             alt="Social Media"
             fill
             className="object-contain rounded-xl"
           />
         </div>
     
         <div className="bg-[#242424] md:col-span-2 md:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
           <Image
             src={`/assets/services-icons/${data.img5}`}
             alt="Social Media"
             fill
             className="object-contain rounded-xl"
           />
         </div>
     
         <div className="bg-[#242424] md:col-span-2 md:row-span-1 rounded-xl flex items-center justify-center hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
           <Image
             src={`/assets/services-icons/${data.img6}`}
             alt="Social Media"
             fill
             className="object-contain rounded-xl"
           />
         </div>
     
       </div>
       <div className="flex flex-col md:hidden gap-2 h-full w-full justify-center px-3 text-black">
         <div className="grid grid-cols-3 gap-2 h-[80px]">
           <div className="bg-[#242424] rounded-xl hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
             <Image
               src={`/assets/services-icons/${data.img1}`}
               alt="PPC"
               fill
               className="object-contain"
             />
           </div>
           
           <div className="bg-[#242424] rounded-xl hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
             <Image
               src={`/assets/services-icons/${data.img2}`}
               alt="Google Ads"
               fill
               className="object-contain"
             />
           </div>
           <div className="bg-[#242424] rounded-xl hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
             <Image
               src={`/assets/services-icons/${data.img3}`}
               alt="Facebook marketing"
               fill
               className="object-contain"
             />
           </div>
         </div>
         <Link
           href={data.href}
           className="rounded-xl hover:scale-[1.03] transition-all duration-300 ease-in p-1 btn-background"
         >
           <div className="bg-textColor hover:bg-white h-full w-full flex items-center justify-center rounded-xl py-4 transition-all duration-300 ease-in text-black xl:text-3xl font-semibold uppercase text-lg">
             <h1>{data.service}</h1>
           </div>
         </Link>
         <div className="grid grid-cols-3 gap-2 h-[80px]">
           <div className="bg-[#242424] rounded-xl hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
             <Image
               src={`/assets/services-icons/${data.img4}`}
               alt={data.service}
               fill
               className="object-contain"
             />
           </div>
           <div className="bg-[#242424] rounded-xl hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
             <Image
               src={`/assets/services-icons/${data.img5}`}
               alt={data.service}
               fill
               className="object-contain"
             />
           </div>
           <div className="bg-[#242424] rounded-xl hover:scale-105 border-none hover:border-solid hover:border-white/70 hover:border transition-all duration-300 ease-in relative">
             <Image
               src={`/assets/services-icons/${data.img6}`}
               alt={data.service}
               fill
               className="object-contain"
             />
           </div>
         </div>
       </div>
     </section>
     
      ))}
      
    </main>
  );
}
