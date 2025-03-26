"use client";

// PageComponent.tsx
import React, { useState } from "react";
import Banner from "../../../our-portfolio/_components/banner";
import { cn } from "@/lib/utils";
import { poppins } from "@/app/fonts";
import { FaArrowRightLong } from "react-icons/fa6";
import Image from "next/image";
import WorkDetailSlider from "../../_components/work-detail-slider";
import { getDummyData, PageId } from "@/dummy-data/page"; // Import your data function
import { RxCross1 } from "react-icons/rx";
import WorkCard from "@/app/(auth)/our-portfolio/_components/work-card";
import Link from "next/link";
import RecommendedSlider from "../../_components/recommend-slider";

interface PageProps {
  params: {
    id: PageId;
  };
}
interface ServiceData {
  name: string;
  details: string[];
}

const Page: React.FC<PageProps> = ({ params }) => {
  const { id } = params;
  const {
    projectDetail,
    bannerData,
    images,
    workDetail,
    colors,
    services,
    results,
    solution,
    conclusion,
  } = getDummyData(id); // Use the function to get data
  const [selectedService, setSelectedService] = useState<ServiceData | null>(
    null
  );
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);

  // Handle button click to show the popup
  const handleButtonClick = (service: ServiceData) => {
    setSelectedService(service);
    setIsPopupOpen(true);
  };

  // Close popup
  const closePopup = () => {
    setIsPopupOpen(false);
    setSelectedService(null);
  };

  const arr =[
    {
        img:'/assets/portfolio-images/02.png',
        logo:'/assets/portfolio-images/02a.png',
        head:'E-commers Website',
        detail:'Start chatting about the work you need, and we’ll get started right away.',
        id:'pachmarhi',

    },
    {
        img:'/assets/portfolio-images/03.png',
        logo:'/assets/portfolio-images/03a.png',
        head:'E-commers Website',
        detail:'Start chatting about the work you need, and we’ll get started right away.',
        id:'eurotech',

    },
    {
        img:'/assets/portfolio-images/04.png',
        logo:'/assets/portfolio-images/04a.png',
        head:'Hotel Website',
        detail:'Start chatting about the work you need, and we’ll get started right away.',
        id:'hotelnatraj',

    },
    // {
    //     img:'/assets/portfolio-images/05.png',
    //     logo:'/assets/portfolio-images/05b.png',
    //     head:'Dental Clinic Website',
    //     detail:'Start chatting about the work you need, and we’ll get started right away.',
    //     id:'vishnu-dental',

    // },
    // {
    //     img:'/assets/portfolio-images/06.png',
    //     logo:'/assets/portfolio-images/06a.png',
    //     head:'GYM Website',
    //     detail:'Start chatting about the work you need, and we’ll get started right away.',
    //     id:'gym',

    // },
    // {
    //     img:'/assets/portfolio-images/07.png',
    //     logo:'/assets/portfolio-images/07a.png',
    //     head:'AB Capital',
    //     detail:'Start chatting about the work you need, and we’ll get started right away.',
    //     id:'abcapital',

    // },
]

  return (
    <div className={cn("h-full w-full min-h-screen", poppins.className)}>
      <Banner
        img={bannerData.img}
        name={bannerData.name}
        data={bannerData.data}
      />
      <div className="h-full w-full xl:my-10 md:my-8 sm:my-6 my-2">
        <div className="max-w-6xl xl:p-0 p-6  mx-auto ">
          <div className="grid md:grid-cols-2 grid-cols-1 items-start md:gap-8">
            <div>
              {/* Buttons for services */}
              <div className="grid grid-cols-2 items-start justify-start sm:gap-4 gap-2 md:my-4 my-2">
                {services.map((ele, index) => (
                  <span
                    key={index}
                    onClick={() => handleButtonClick(ele)}
                    className={`lg:text-2xl md:text-xl sm:text-base text-sm font-medium flex justify-center items-center p-2 border border-[${colors.primary}] md:px-5 sm:px-3 px-0 rounded-full text-[${colors.primary}] cursor-pointer`}
                    style={{
                      color: colors.primary,
                      border: `1px solid ${colors.primary}`,
                    }}
                  >
                    {ele.name}
                  </span>
                ))}
              </div>

              {/* Popup */}
              {isPopupOpen && selectedService && (
                <div className="fixed inset-0 bg-black  text-[${colors.heading}] bg-opacity-50 flex items-center justify-center z-50">
                  <div
                    className={`bg-white text-black p-6 rounded-lg shadow-lg max-w-xl`}
                  >
                    <p
                      className="float-right cursor-pointer text-xl hover:text-red-600"
                      onClick={closePopup}
                    >
                      <RxCross1 />
                    </p>
                    <h2 className="text-xl font-bold mb-4">
                      {selectedService.name}
                    </h2>
                    <ul className="list-disc pl-5">
                      {selectedService.details.map((detail, idx) => (
                        <li key={idx} className="mb-2">
                          {detail}
                        </li>
                      ))}
                    </ul>
                    <button
                      onClick={closePopup}
                      className={`mt-4 px-4 py-2 bg-[${colors.primary}] text-white rounded-lg w-full`}
                      style={{ background: colors.primary }}
                    >
                      Close
                    </button>
                  </div>
                </div>
              )}
            </div>

            <div>
              <h1
                className={`xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium text-justify text-[#282D46] text-[${colors.heading}]`}
              >
                {projectDetail.title}
              </h1>
              <p
                className={`md:text-xl sm:text-lg text-base font-normal text-[#625D60] my-6 text-justify`}
              >
                {projectDetail.description}
              </p>
            </div>
          </div>
        </div>
        <div className="max-w-6xl xl:p-0 p-6  mx-auto ">
          <h1
            className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}
            style={{ color: colors.primary }}
          >
            Visit Live Site <FaArrowRightLong />
          </h1>
          <div
            className={`h-[0.5px] w-full bg-[${colors.primary}] md:my-4 my-2`}
            style={{ backgroundColor: colors.primary }}
          />
          <div className="flex md:items-center md:gap-4 gap-2">
            <span
              className={`text-[${colors.secondary}] md:text-2xl sm:text-xl text-base font-normal w-36`}
            >
              Language -
            </span>
            <p
              className={`text-[${colors.heading}] md:text-2xl sm:text-xl text-sm font-medium`}
            >
              {projectDetail.language}
            </p>
          </div>
          <div
            className={`h-[1px] w-full bg-[${colors.primary}] md:my-4 my-2`}
            style={{ backgroundColor: colors.primary }}
          />
          <div className="flex items-center gap-4">
            <span
              className={`text-[${colors.secondary}] md:text-2xl sm:text-xl text-base font-normal w-36`}
            >
              Timescale -
            </span>
            <p
              className={`text-[${colors.heading}] md:text-2xl sm:text-xl text-sm font-medium`}
            >
              {projectDetail.timescale}
            </p>
          </div>
          <div
            className={`h-[1px] w-full bg-[${colors.primary}] md:my-4 my-2`}
            style={{ backgroundColor: colors.primary }}
          />
          <div className="flex items-center gap-4">
            <span
              className={`text-[${colors.secondary}] md:text-2xl sm:text-xl text-base font-normal w-36 flex justify-between`}
            >
              System <span>-</span>
            </span>
            <p
              className={`text-[${colors.heading}] md:text-2xl sm:text-xl text-base font-medium`}
            >
              {projectDetail.system}
            </p>
          </div>
          <div
            className={`h-[1px] w-full bg-[${colors.primary}] my-4`}
            style={{ backgroundColor: colors.primary }}
          />
          <div className="flex items-start gap-4">
            <span
              className={`text-[${colors.secondary}] md:text-2xl sm:text-xl text-base font-normal w-36 flex justify-between mt-2`}
            >
              Features <span>-</span>
            </span>
            <div
              className={`text-[${colors.heading}] md:text-2xl sm:text-xl text-base font-medium`}
            >
              {projectDetail.features.map((ele, i) => (
                <li className="capitalize my-2">{ele}</li>
              ))}
            </div>
          </div>
          <div
            className={`h-[0.5px] w-full bg-[${colors.primary}] my-4`}
            style={{ backgroundColor: colors.primary }}
          />
        </div>
        <div className="grid grid-cols-12 max-w-7xl mx-auto">
          <div className="w-full col-span-9 h-full rounded-2xl">
            <div className="md:h-[35vw] sm:h-[50vw] h-[50vw] w-full relative flex justify-center items-center">
              <Image src={'/assets/portfolio-images/computer-mockup.png'} alt="No Image" fill className="h-full w-full object-cover z-10"  />
              <img
                src={images[1].src}
                alt={images[1].alt}
                className="border h-[20vw] w-[37vw]  object-cover "
                />
            </div>
          </div>
          <div className="col-span-3 h-full w-full">
            <div className="md:h-[35vw] sm:h-[50vw] h-[50vw] w-full relative z-10">
              <Image src={'/assets/portfolio-images/phone-mockup.png'} alt="No Image" fill className="h-full w-full object-cover z-10 overflow-hidden"  />
              <img
                src={images[3].src}
                alt={images[3].alt}
                className="object-cover w-full h-full "
              />
            </div>
          </div>
        </div>
        <div className="my-8 max-w-6xl xl:p-0 p-6  mx-auto ">
          <h1
            className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}
            style={{ color: colors.primary }}
          >
            Project Overview <FaArrowRightLong />
          </h1>
          <p
            className={`md:text-xl sm:text-lg text-base font-normal text-[#625D60] my-4 text-justify`}
          >
            {workDetail.context}
          </p>
          <p
            className={`md:text-xl sm:text-lg text-base font-normal text-[#625D60] my-4 text-justify`}
          >
            {workDetail.description}
          </p>
        </div>
        {/* <div className='md:h-[35vw] sm:h-[40vw] h-[60vw]'>
                    <WorkDetailSlider isColor={colors.primary} />
                </div> */}
        <div className="my-8 max-w-6xl xl:p-0 p-6  mx-auto">
          <h1
            className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}
            style={{ color: colors.primary }}
          >
            Goals <FaArrowRightLong />
          </h1>
          <p
            className={`md:text-xl sm:text-lg text-base  font-normal text-[#625D60] my-6 text-justify`}
          >
            {workDetail.goals}
          </p>
        </div>
        <div className="grid md:grid-cols-7 md:gap-8 sm:gap-6 gap-4 max-w-6xl xl:p-0 p-6  mx-auto">
          <div className="md:col-span-4">
            <h1
              className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}
              style={{ color: colors.primary }}
            >
              Business Challenges <FaArrowRightLong />
            </h1>
            <ul className="my-6 list-disc ml-5">
              {workDetail.businessChallenges.map((challenge, index) => (
                <li
                  key={index}
                  className={`md:text-xl sm:text-lg text-base  text-justify font-normal text-[#625D60] my-3`}
                >
                  {challenge}
                </li>
              ))}
            </ul>
          </div>
          <div className="h-auto w-full relative md:col-span-3">
            <Image
              src={"/assets/portfolio-images/10.png"}
              alt="No Preview"
              fill
              className="object-cover rounded-2xl"
            />
          </div>
        </div>
        <div className="max-w-6xl xl:p-0 p-6  mx-auto ">
          <div>
            <h1
              className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}
              style={{ color: colors.primary }}
            >
              Solutions <FaArrowRightLong />
            </h1>
            <div className=" text-justify">
              {solution.map((ele, i) => (
                <li className="md:my-6 sm:my-4 my-2">
                  <span className="md:text-2xl sm:text-xl text-md font-medium text-[#332F32] ">
                    {ele.name}
                  </span>
                  :
                  <span
                    className={`text-[${colors.secondary}] font-normal md:text-xl text-sm`}
                  >
                    {" "}
                    {ele.description}
                  </span>
                </li>
              ))}
            </div>
          </div>

        </div>
        
        <div className="xl:my-10 md:my-8 sm:my-6 my-2 max-w-6xl xl:p-0 p-6  mx-auto">
          <h1
            className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center gap-4`}
            style={{ color: colors.primary }}
          >
            Our Social Media Work <FaArrowRightLong />
          </h1>
          <p
            className={`md:text-xl sm:text-lg text-base  font-normal text-[${colors.secondary}] my-6 text-justify`}
          >
            {workDetail.socialMediaWork}
          </p>
        </div>
        
        <div className="xl:my-10 md:my-8 sm:my-6 my-2 max-w-6xl xl:p-0 p-6  mx-auto">
          <h1
            className={`text-[${colors.primary}] xl:text-[2rem] md:text-3xl sm:text-2xl text-xl font-medium flex items-center justify-center gap-4`}
            style={{ color: colors.primary }}
          >
           Recommendation
          </h1>
         <div className="mt-4 text-white">
         <RecommendedSlider isColor={colors.primary} />
         </div>
        </div>

      </div>
    </div>
  );
};

export default Page;
