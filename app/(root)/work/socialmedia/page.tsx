/* eslint-disable @next/next/no-img-element */
"use client";
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
import { Button } from "@/components/ui/button";

// const images1 = [
//   "Pachmarhi ayurveda 3.png",
//   "SHIM 29.png",
//   "Lotus Bunglows  1.png",
//   "BBB 8.png",
//   "SHIM 21.png",
//   "Pachmarhi ayurveda 2.png",
//   "SHIM 41.png",
//   "Lotus Bunglows  5.png",
//   "BBB 16.png",
//   "SHIM 26.png",
//   "Pachmarhi ayurveda 4.png",
//   "Career Couselling 1.png",
//   "Lotus Bunglows  4.png",
//   "BBB 7.png",
// ];
// const images2 = [
//   "VFP 4.png",
//   "Ab capital 17.png",
//   "AIM 5.png",
//   "SHIM 34.png",
//   "Tathya ban post 4.png",
//   "14 nov event 1.png",
//   "Ab capital 29.1.png",
//   "AIM 8.png",
//   "SHIM 1.png",
//   "Tathya ban post 5.png",
//   "VFP 10.png",
//   "Ab capital 26.png",
//   "AIM 2.png",
//   "SHIM 95.png",
// ];

const All = [
  "Pachmarhi ayurveda 3.png",
  "SHIM 29.png",
  "Lotus Bunglows  1.png",
  "BBB 8.png",
  "SHIM 21.png",
  "Pachmarhi ayurveda 2.png",
  "SHIM 41.png",
  "Lotus Bunglows  5.png",
  "BBB 16.png",
  "SHIM 26.png",
  "Pachmarhi ayurveda 4.png",
  "Career Couselling 1.png",
  "Lotus Bunglows  4.png",
  "BBB 7.png",
  "VFP 4.png",
  "Ab capital 17.png",
  "AIM 5.png",
  "SHIM 34.png",
  "Tathya ban post 4.png",
  "14 nov event 1.png",
  "Ab capital 29.1.png",
  "AIM 8.png",
  "SHIM 1.png",
  "Tathya ban post 5.png",
  "VFP 10.png",
  "Ab capital 26.png",
  "AIM 2.png",
  "SHIM 95.png",
];

const Creative = [
  "14 nov event 1.png",
  "Ab capital 29.1.png",
  "AIM 8.png",
  "SHIM 1.png",
  "Tathya ban post 5.png",
  "VFP 10.png",
  "Ab capital 26.png",
  "AIM 2.png",
  "SHIM 95.png",
];

const Results = [
  "SHIM 21.png",
  "Pachmarhi ayurveda 2.png",
  "SHIM 41.png",
  "Lotus Bunglows  5.png",
  "BBB 16.png",
  "SHIM 26.png",
  "Pachmarhi ayurveda 4.png",
  "Career Couselling 1.png",
  "Lotus Bunglows  4.png",
  "BBB 7.png",
];

const Other = [
  "SHIM 26.png",
  "Pachmarhi ayurveda 4.png",
  "Career Couselling 1.png",
  "Lotus Bunglows  4.png",
  "BBB 7.png",
  "VFP 4.png",
  "Ab capital 17.png",
  "AIM 5.png",
  "SHIM 34.png",
  "Tathya ban post 4.png",
  "14 nov event 1.png",
];

import { useState } from "react";

export default function Page() {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = [
    { title: "All" },
    { title: "Creative" },
    { title: "Results" },
    { title: "Other" },
    // { title: "Videos" },
  ];

  return (
    <main className="w-full bg-secondaryColor min-h-screen pt-20">
      <section className="pt-5 flex flex-col gap-20 items-center">
        <div className="relative h-full sm:h-96 w-10/12 rounded-xl overflow-hidden">
          <div className="bg-black bg-opacity-20 sm:bg-opacity-30 absolute top-0 left-0 h-full w-full z-10"></div>
          <Image
            src={"/assets/images/career.jpg"}
            alt="career.jpg-igrowmybiz"
            fill
            className="object-cover"
          />
          <div className="flex flex-col gap-10 justify-center items-center px-5 sm:px-0 py-5 sm:py-0 sm:mb-10 z-10 relative h-full bg-black/50">
            <h1 className="text-white text-3xl font-bold text-center flex flex-col gap-2">
              IgrowMyBiz{" "}
              <span className={cn(cutive.className, "text-mainColor")}>
                Social Media Works
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
              href="/service/socialmediamarketing"
              className="px-4 py-2 text-sm rounded-full bg-white w-fit border-2 border-white font-semibold hover:bg-black hover:text-white transition-all duration-500"
            >
              Our Services
            </Link>
          </div>
        </div>
      </section>

      <div className=" flex w-full items-center justify-center mt-1 overflow-y-scroll ">
        {tabs.map((tab, index) => (
          <button
            key={index}
            className={`${
              index === activeTab
                ? "border-b-[1px] border-gray-500 text-white"
                : "text-white"
            } px-4 py-2 mr-2 rounded`}
            onClick={() => setActiveTab(index)}
          >
            {tab.title}
          </button>
        ))}
      </div>

      <section className="w-4/5 mx-auto mt-10 md:flex gap-4 pb-20">
        {/* ALL Images */}
        {activeTab == 0 && (
          <>
            <div className="flex flex-col md:w-1/2 gap-4">
              {All.map((image, index) => {
                if (index % 2 == 0) {
                  return (
                    <div key={index} className="md:mt-5 grow-0 shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="w-full rounded-lg cursor-pointer">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Social Media"}
                              className="object-cover rounded-lg w-full"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="w-full h-full rounded-lg">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Social Media"}
                              className="object-contain rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex flex-col md:w-1/2 gap-4">
              {All.map((image, index) => {
                if (index % 2 != 0) {
                  return (
                    <div key={index} className="md:mb-3 grow-0 shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="w-full h-full rounded-lg cursor-pointer">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Digital marketing"}
                              className="object-cover rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="w-full h-full rounded-lg">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Digital marketing"}
                              className="object-contain rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
              })}
            </div>
          </>
        )}

        {/* Creative Images */}
        {activeTab == 1 && (
          <>
            <div className="flex flex-col md:w-1/2 gap-4">
              {Creative.map((image, index) => {
                if (index % 2 == 0) {
                  return (
                    <div key={index} className="md:mt-5 grow-0 shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="w-full rounded-lg cursor-pointer">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Social Media"}
                              className="object-cover rounded-lg w-full"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="w-full h-full rounded-lg">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Social Media"}
                              className="object-contain rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex flex-col md:w-1/2 gap-4">
              {Creative.map((image, index) => {
                if (index % 2 != 0) {
                  return (
                    <div key={index} className="md:mb-3 grow-0 shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="w-full h-full rounded-lg cursor-pointer">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Digital marketing"}
                              className="object-cover rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="w-full h-full rounded-lg">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Digital marketing"}
                              className="object-contain rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
              })}
            </div>
          </>
        )}

        {/* Results */}
        {activeTab == 2 && (
          <>
            <div className="flex flex-col md:w-1/2 gap-4">
              {Results.map((image, index) => {
                if (index % 2 == 0) {
                  return (
                    <div key={index} className="md:mt-5 grow-0 shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="w-full rounded-lg cursor-pointer">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Social Media"}
                              className="object-cover rounded-lg w-full"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="w-full h-full rounded-lg">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Social Media"}
                              className="object-contain rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex flex-col md:w-1/2 gap-4">
              {Results.map((image, index) => {
                if (index % 2 != 0) {
                  return (
                    <div key={index} className="md:mb-3 grow-0 shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="w-full h-full rounded-lg cursor-pointer">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Digital marketing"}
                              className="object-cover rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="w-full h-full rounded-lg">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Digital marketing"}
                              className="object-contain rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
              })}
            </div>
          </>
        )}

        {/* others */}
        {activeTab == 3 && (
          <>
            <div className="flex flex-col md:w-1/2 gap-4">
              {Other.map((image, index) => {
                if (index % 2 == 0) {
                  return (
                    <div key={index} className="md:mt-5 grow-0 shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="w-full rounded-lg cursor-pointer">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Social Media"}
                              className="object-cover rounded-lg w-full"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="w-full h-full rounded-lg">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Social Media"}
                              className="object-contain rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
              })}
            </div>
            <div className="flex flex-col md:w-1/2 gap-4">
              {Other.map((image, index) => {
                if (index % 2 != 0) {
                  return (
                    <div key={index} className="md:mb-3 grow-0 shrink-0">
                      <Dialog>
                        <DialogTrigger asChild>
                          <div className="w-full h-full rounded-lg cursor-pointer">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Digital marketing"}
                              className="object-cover rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogTrigger>
                        <DialogContent>
                          <div className="w-full h-full rounded-lg">
                            <img
                              src={`/assets/social-designs/${image}`}
                              alt={"Digital marketing"}
                              className="object-contain rounded-lg w-full h-full"
                            />
                          </div>
                        </DialogContent>
                      </Dialog>
                    </div>
                  );
                }
              })}
            </div>
          </>
        )}


      </section>

      {/* <section className="w-4/5 mx-auto mt-10 md:flex gap-4 pb-20">
        <div className="flex flex-col md:w-1/2 gap-4">
          {images1.map((image, index) => (
            <div key={index} className="md:mt-5 grow-0 shrink-0">
              <Dialog>
                <DialogTrigger asChild>
                  <div className="w-full rounded-lg cursor-pointer">
                    <img
                      src={`/assets/social-designs/${image}`}
                      alt={"Social Media"}
                      className="object-cover rounded-lg w-full"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <div className="w-full h-full rounded-lg">
                    <img
                      src={`/assets/social-designs/${image}`}
                      alt={"Social Media"}
                      className="object-contain rounded-lg w-full h-full"
                    />
                  </div>
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
                  <div className="w-full h-full rounded-lg cursor-pointer">
                    <img
                      src={`/assets/social-designs/${image}`}
                      alt={"Digital marketing"}
                      className="object-cover rounded-lg w-full h-full"
                    />
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <div className="w-full h-full rounded-lg">
                    <img
                      src={`/assets/social-designs/${image}`}
                      alt={"Digital marketing"}
                      className="object-contain rounded-lg w-full h-full"
                    />
                  </div>
                </DialogContent>
              </Dialog>
            </div>
          ))}
        </div>
      </section> */}
    </main>
  );
}
