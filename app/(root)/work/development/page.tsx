/* eslint-disable @next/next/no-img-element */
import React from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { cutive } from "@/app/fonts";
import Link from "next/link";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { AspectRatio } from "@/components/ui/aspect-ratio";
import { Button } from "@/components/ui/button";

const images1 = [
  {
    mockup: "eurotechxchange.jpg",
    web: "https://eurotechxchange.com",
    button: "https://eurotechxchange.com",
    tech: "wordpress-19466439",
  },
  {
    mockup: "VISHNUDENTAL.jpg",
    web: "https://vishnudentalclinicbhopal.com",
    button: "https://vishnudentalclinicbhopal.com",
    tech: "wordpress-19466439",
  },
  {
    mockup: "Natraj.jpg",
    web: "https://www.hotelnatrajpachmarhi.com",
    button: "https://www.hotelnatrajpachmarhi.com",
    tech: "wordpress-19466439",
  },

  {
    mockup: "abcapitals mockup.png",
    web: "https://abcapital.ae",
    button: "https://abcapital.ae",
    tech: "wordpress-19466439",
  },
  {
    mockup: "SHIM MOCKUP.png",
    web: "http://shim.co.in",
    button: "http://shim.co.in",
    tech: "wordpress-19466439",
  },
  {
    mockup: "pachmarhi ayurceda mock.png",
    web: "https://www.pachmarhiayurveda.com",
    button: "https://www.pachmarhiayurveda.com",
    tech: "wordpress-19466439",
  },
];
const images2 = [
  {
    mockup: "4dgcc.jpg",
    web: "https://www.4dgcc.com/en",
    button: "https://www.4dgcc.com/en",
    tech: "wordpress-19466439",
  },
  {
    mockup: "tathyabaan mockup.png",
    web: "https://tathyabaan.in",
    button: "https://tathyabaan.in",
    tech: "wordpress-19466439",
  },
  {
    mockup: "quikdsp mockup.png",
    web: "https://www.quikdsp.com",
    button: "https://www.quikdsp.com",
    tech: "wordpress-19466439",
  },
  {
    mockup: "megha and parv mockup.png",
    web: "https://meghaandparvtradingfze.com",
    button: "https://meghaandparvtradingfze.com",
    tech: "wordpress-19466439",
  },
  {
    mockup: "geoline mockup.png",
    web: "https://geolineglobal.com",
    button: "https://geolineglobal.com",
    tech: "wordpress-19466439",
  },
];
export default function Page() {
  return (
    <main className="w-full bg-secondaryColor min-h-screen pt-20">
      <section className="pt-5 flex flex-col gap-20 items-center">
        <div className="relative h-full sm:h-96 w-10/12 rounded-xl overflow-hidden">
          <div className="bg-black bg-opacity-20 sm:bg-opacity-30 absolute top-0 left-0 h-full w-full z-10"></div>
          <Image
            src={"/assets/images/career.jpg"}
            alt="career-igrowmybiz"
            fill
            className="object-cover"
          />
          <div className="flex flex-col gap-10 justify-center items-center px-5 sm:px-0 py-5 sm:py-0 sm:mb-10 z-10 relative h-full bg-black/50">
            <h1 className="text-white text-3xl font-bold text-center flex flex-col gap-2">
              IgrowMyBiz{" "}
              <span className={cn(cutive.className, "text-mainColor")}>
                Website Development Works
              </span>
            </h1>
            <p className="text-white text-center flex flex-col font-semibold gap-3 md:text-xl">
              Igrow Social is a digital marketing agency, that’s beyond social.
              <span className="text-white/70 font-normal text-sm md:text-base">
                {`We don't just manage social media accounts, we elevate them, turning audiences from viewers to an engaged community.
                        `}
              </span>
            </p>
            <Link
              href="/service/development"
              className="px-4 py-2 text-sm rounded-full bg-white w-fit border-2 border-white font-semibold hover:bg-black hover:text-white transition-all duration-500"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>
      <section className="w-4/5 mx-auto mt-10 md:flex gap-5 pb-20">
        <div className="flex flex-col md:w-1/2 gap-4">
          {images1.map((image, index) => (
            <div key={index} className="md:mt-5 grow-0 shrink-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full rounded-lg cursor-pointer relative">
                    <img
                      src={`/assets/web mockups/${image.mockup}`}
                      alt={"software Development"}
                      className="object-cover rounded-lg w-full"
                    />
                    {/* <div className="h-10 md:h-14 xl:h-12 w-10 md:w-14 xl:w-12 rounded-full bg-white absolute top-1 right-1">
                      <div className="w-full h-full relative">
                        <Image
                          src={`/assets/images/${image.tech}.png`}
                          alt=""
                          fill
                        />
                      </div>
                    </div> */}
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <AspectRatio
                    ratio={16 / 9}
                    className="lg:w-screen h-screen lg:-translate-x-[30%] lg:-translate-y-[30%] -translate-y-[40%] scale-75 lg:scale-[0.7] -mt-10"
                  >
                    <iframe src={image.web} width="100%" height="100%"></iframe>
                    <Link
                      href={image.button}
                      target="_blank"
                      className="absolute -bottom-20 lg:-bottom-28 left-1/4 sm:left-[44%] w-fit h-fit py-4 px-10 rounded-full bg-white lg:text-2xl font-medium"
                    >
                      Visit Website
                    </Link>
                  </AspectRatio>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
        <div className="flex flex-col md:w-1/2 gap-4">
          {images2.map((image, index) => (
            <div key={index} className="md:mb-3 grow-0 shrink-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full rounded-lg cursor-pointer relative">
                    <img
                      src={`/assets/web mockups/${image.mockup}`}
                      alt={"Website design"}
                      className="object-cover rounded-lg w-full"
                    />
                    {/* <div className="h-10 md:h-14 xl:h-12 w-10 md:w-14 xl:w-12 rounded-full bg-white absolute top-1 right-1">
                      <div className="w-full h-full relative">
                        <Image
                          src={`/assets/images/${image.tech}.png`}
                          alt=""
                          fill
                        />
                      </div>
                    </div> */}
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <AspectRatio
                    ratio={16 / 9}
                    className="lg:w-screen h-screen lg:-translate-x-[30%] lg:-translate-y-[30%] -translate-y-[40%] scale-75 -mt-10"
                  >
                    <iframe src={image.web} width="100%" height="100%"></iframe>
                    <Link
                      href={image.button}
                      target="_blank"
                      className="absolute -bottom-20 lg:-bottom-28 left-1/4 sm:left-[44%] w-fit h-fit py-4 px-10 rounded-full bg-white lg:text-2xl font-medium"
                    >
                      Visit Website
                    </Link>
                  </AspectRatio>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
