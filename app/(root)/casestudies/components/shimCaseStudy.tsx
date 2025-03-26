import Link from "next/link";
import React from "react";
import CountdownCaseStudy from "./countdown-case";
import Image from "next/image";

export default function ShimCaseStudy() {
  return (
    <>
      <section className="relative h-screen w-full md:px-[5%] px-5">
        <div className="relative h-[85%] md:h-[90%] w-full">
          <Image
            src={"/assets/images/girls-group.jpg"}
            alt="BG Image"
            fill
            className="object-cover"
          />
          <div className="absolute top-0 left-0 h-full w-full inner-shadow"></div>
          <h2 className="text-4xl md:text-5xl lg:text-6xl text-center font-bold letter tracking-widest relative z-20 top-[40%]">
            SHIM CASE STUDY
          </h2>
          <div className="grid grid-cols-2 grid-rows-2 md:grid-rows-1 md:grid-cols-4 gap-0 md:gap-0 absolute -bottom-5 md:left-[5%] z-10 w-full md:w-11/12 bg-secondaryBGColor py-10 px-10 md:px-[2%] lg:px-10 rounded-xl outer-shadow">
            <div>
              <div className="flex flex-col items-center text-center pr-5 md:pr-0">
                <CountdownCaseStudy
                  initialCount={60}
                  symbol={"%"}
                  timeDuration={50}
                  iterationCount={2}
                />
                <p className="text-sm">Facebook Growth</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center border-l-2 py-2 pl-5 md:pl-0 text-center">
                <CountdownCaseStudy
                  initialCount={80}
                  symbol={"%"}
                  timeDuration={40}
                  iterationCount={2}
                />
                <p className="text-sm">Instagram Growth</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center md:border-l-2 border-t-2 md:border-t-0 py-2 text-center pr-5 md:pr-0">
                <CountdownCaseStudy
                  initialCount={2}
                  symbol={"years"}
                  timeDuration={750}
                  iterationCount={1}
                />
                <p className="text-sm">Achieved Allocated Seats</p>
              </div>
            </div>
            <div>
              <div className="flex flex-col items-center border-l-2 py-2 text-center pl-5 md:pl-0 border-t-2 md:border-t-0">
                <CountdownCaseStudy
                  initialCount={2}
                  symbol={"x"}
                  timeDuration={750}
                  iterationCount={1}
                />
                <p className="text-sm">Website & Account Growth</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="flex flex-col gap-14 pb-10">
        <div className="flex flex-col items-center gap-5">
          <h3 className="text-2xl md:text-3xl text-center md:w-4/5 lg:w-[53%] font-semibold">
            Sant Hirdaram Institute of Management, Bhopal
          </h3>
          <p className="text-textColor md:w-4/5 lg:w-1/2 text-center">
            Description: Sant Hirdaram institute of Management, Bhopal is an
            only women’s institute and the only institute in MP which provides
            IMBA right after 12th class along with MBA programs. It is committed
            to facilitate holistic-cum-professional development of the students
            in terms of realistic learning with endowed ethical values.
          </p>
          <p className="text-textColor md:w-4/5 lg:w-1/2 text-center">
            In March 2022, our collaboration with them started with a clear
            objective to make the most of organic marketing across various
            social media platforms, targeting the right audience in order to
            achieve great results.
          </p>
        </div>

        <div className="md:px-[10%]">
          <div className="bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg">
            <div className="bg-blue-500 w-full lg:w-[40%] h-[300px] md:h-[500px] lg:order-2 relative">
              <Image
                src={"/assets/case studies/SHIM objective.png"}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="py-5 my-auto lg:w-[60%]">
              <h3 className="text-3xl font-bold tracking-widest mb-2 pl-5">
                OBJECTIVE :
              </h3>
              <p className="text-textColor md:text-lg pl-5 mb-8 pr-5 lg:pr-0">
                We merely started two main objectives the institute wanted us to
                fulfil: 1. Rebranding 2. Reach
              </p>
              <ul className="text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20">
                <li>
                Under Rebranding & Reach came several different small objective
                </li>
                <li>Increase Admission Inquiry organically</li>
                <li>Achieve limited number of admission seats</li>
                <li>
                  Achieved an 80% overall growth of traffic on all social media
                  platforms
                </li>
                <li>Improved Search Engine Optimisation (SEO) rankings</li>
              </ul>
            </div>
          </div>
        </div>

        <div className="md:px-[10%]">
          <div className="bg-secondaryBGColor h-full w-full flex flex-col lg:flex-row overflow-hidden rounded-lg">
            <div className="bg-green-500 w-full lg:w-[40%] h-[300px] md:h-[500px] relative">
              <Image
                src={"/assets/case studies/SHIM challenge.png"}
                alt=""
                fill
                className="object-cover"
              />
            </div>
            <div className="py-5 my-auto lg:w-[60%]">
              <h3 className="text-3xl font-bold tracking-widest mb-2 pl-5">
                CHALLENGE :
              </h3>
              <p className="text-textColor md:text-lg pl-5 mb-8 mr-5 lg:pr-0">
                We had a tight deadline of less than three months to complete
                all the necessary tasks since the admission process was set to
                begin shortly after we started working with the client. As a
                result, we had to expedite our work and deliver faster results:
              </p>
              <ul className="text-textColor text-sm list-disc flex flex-col gap-3 pr-5 pl-10 md:px-0 md:pl-20">
                <li>
                  Outdated website: The website was old and poorly executed,
                  resulting in lower traffic on the website due to its lack of
                  desirable features and easy handle
                </li>
                <li>
                  Unoptimized Social media platforms; Their social media pages
                  were underutilised which hindered their maximum reach
                </li>
                <li>
                  Improper Advertising techniques: Prior to working with us,
                  they allocated a certain budget for advertising which lead to
                  limited results. However, we transformed the outcomes by
                  achieving significant results at a minimal cost
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-10 md:gap-5 md:justify-between md:px-[10%]">
          <div className="bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2">
            <p className="text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest">
              SOLUTIONS
            </p>
            <ul className="text-textColor list-disc flex flex-col gap-5">
              <li>Comprehensive Content Strategy</li>
              <li>Establishing Long term Branding</li>
              <li>Enhance website design & optimisation</li>
              <li>Easy and effortless application process</li>
              <li>
                Personalised Ad and marketing Funnels that gave us appropriate
                results
              </li>
              <li>
                Collaborated with different city pages to reach more target
                audience all over the state
              </li>
            </ul>
          </div>
          <div className="bg-secondaryBGColor p-[10%] md:p-[5%] flex flex-col gap-10 items-center md:rounded-lg md:w-1/2">
            <p className="text-black bg-white text-2xl font-bold py-3 px-5 rounded-full w-fit tracking-widest">
              RESULTS
            </p>
            <ul className="text-textColor list-disc flex flex-col gap-5">
              <li>Achieved the allocated admission seats</li>
              <li>
                The account and website experienced a twofold increase in growth
              </li>
              <li>Facebook had 60% growth with over 2,50,000 traffic</li>
              <li>Instagram experienced a 80% growth with 1,50,000 traffic</li>
              <li>Attracted target audience all over MP</li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-5 items-center mt-5">
          <p className="text-2xl">Still Not Convinced ?</p>
          <Link
            href="/contact"
            className="px-5 py-2 text-sm sm:text-base text-black rounded-full bg-white w-fit border-2 border-white font-semibold hover:bg-black hover:text-white transition-all duration-500"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </>
  );
}
