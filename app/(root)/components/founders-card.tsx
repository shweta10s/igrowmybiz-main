// import { Linkedin, Instagram, Mail } from "lucide-react";
// import Image from "next/image";
// import React from "react";

// interface FoundersCardsProps {
//   image: string;
//   name: string;
//   info: string;
//   linkedin: string;
//   insta: string;
//   mail: string;
//   alt: string;
// }
// export default function FoundersCards({
//   image,
//   name,
//   info,
//   linkedin,
//   insta,
//   mail,
//   alt,
// }: FoundersCardsProps) {
//   return (
//     <div className="rounded-xl xl:flex">
//       <div className="bg-[#363636] w-full xl:w-2/5 h-40 xl:h-full xl:rounded-r-none xl:rounded-l-lg  rounded-t-xl relative">
//         <Image
//           src={`/assets/images/${image}`}
//           alt={alt}
//           fill
//           className="object-cover object-top xl:rounded-r-none xl:rounded-l-lg  rounded-t-xl"
//         />
//       </div>
//       <div className="bg-[#242424] rounded-b-xl p-5 flex flex-col gap-4 xl:w-3/5 xl:rounded-l-none xl:rounded-r-lg">
//         <h3 className="text-white text-xl font-bold flex flex-col">
//           {name}{" "}
//           <span className="no-underline text-sm text-textColor font-normal">
//             (Co-founder)
//           </span>
//         </h3>
//         <p className="text-textColor font-semibold">{info}</p>
//         <div className="flex gap-2">
//           <a
//             href={linkedin}
//             target="_blank"
//             className="bg-textColor hover:bg-white hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer"
//           >
//             <Linkedin className="text-[#141414]" />
//           </a>
//           <a
//             href={`mailto:${mail}`}
//             className="bg-textColor hover:bg-white hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer"
//           >
//             <Mail className="text-[#141414]" />
//           </a>
//           {insta && (
//             <a
//               href={insta}
//               target="_blank"
//               className="bg-textColor hover:bg-white hover:scale-110 transition-all ease-linear duration-300 group/socials p-1 rounded-md cursor-pointer"
//             >
//               <Instagram className="text-[#141414]" />
//             </a>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// }
