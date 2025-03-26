import React from "react";
import Countdown1 from "../components/count-down";
// import FoundersCards from "../components/founders-card";
import TeamCard from "../components/team-card";
import Image from "next/image";
import { Metadata } from "next";

const TeamCardComponent = [
  {
    image: "chanchal.jpg",
    position: "UI/UX Designer",
    expertise:
      "Expert in - Research, Prototyping, Wireframing, Layout Design, Visual Design and Figma Tools",
  },
  {
    image: "niharika-rajupt.jpg",
    position: "Graphic designer",
    expertise:
      "Specializes in creating visually appealing designs for digital and print media, including logos, brochures, and advertisements.",
  },
  {
    image: "Aniket-kalawat.jpg",
    position: "Full Stack Developer",
    expertise:
      "Proficient in developing and maintaining web applications across the full stack, from crafting interactive front-end interfaces to optimizing back-end systems.",
  },  
  {
    image: "aniketp.jpg",
    position: "Full Stack Developer",
    expertise:
      "Skilled in building comprehensive web solutions, including designing user-friendly interfaces and implementing robust server-side logic.",
  },
  {
    image: "aditi.jpg",
    position: "Business Developer",
    expertise:
      "Transforming complex code into seamless digital experiences as a dedicated backend developer, shaping the future of web functionality.",
  },
  {
    image: "Husain Image.png",
    position: "Creative Head",
    expertise:
      "Helping clients communicate and appealing image through digital media.",
  },
  {
    image: "kshitij-agrawal.jpeg",
    position: "VFX & Motion Editor",
    expertise: "Solid motion design work and animation skills.",
  },
  {
    image: "Anas-qureshi.jpeg",
    position: "Video Manger",
    expertise:
      "Video & Audio Editing & also has expertise in story telling in a engaging way.",
  },
  {
    image: "kamran.png",
    position: "Front-End Developer",
    expertise:
      "ReactJs, NextJs, TailwindCSS, WordPress, Responsive Design, GitHub, JavaScript/TypeScript",
  },
  {
    image: "sneha.jpg",
    position: "Paid Media Expert",
    expertise:
      "Expertise-Marketing Strategies, Social Media & Google Ads, Email & WhatsApp Automation.",
  },
];

export default function Page() {
  return (
    <main className="bg-secondaryColor pt-20">
      <section className="py-10 flex flex-col gap-6">
        <div className="w-4/5 h-24 md:h-52 mx-auto rounded-2xl relative">
          <Image
            src={"/assets/Hoem pages images/Cover page.png"}
            alt="cover bg"
            fill
            className="object-cover rounded-2xl"
          />
        </div>
        <div className="w-4/5 mx-auto flex flex-col gap-4">
          <h1 className="text-white text-4xl font-bold text-center">
            ABOUT US
          </h1>
          <p className="text-textColor text-center lg:w-4/5 mx-auto">
            {`Welcome to IGrowMyBiz, founded in July 2022 by marketing enthusiasts Aadarsh and Sarfaraz. With over 4 years of digital marketing experience in Bhopal, MP.
            We've evolved from social media freelancers to comprehensive digital marketers. We are committed to supporting and enhancing your online presence.  From website development and SEO to strategic PR and impactful campaigns, we're your go-to for tailored marketing solutions.
            Join us in shaping success in the dynamic digital landscape where your growth is our success.`}
          </p>
        </div>
      </section>
      <section className="py-10">
        <div className="sm:w-4/5 mx-auto rounded-2xl px-4 sm:px-0 py-8 sm:py-0 sm:p-12 flex flex-col gap-6 items-center">
          <div className="flex flex-col gap-4 items-center">
            <h2 className="text-white font-semibold text-center text-3xl lg:text-5xl">
              What do we do?
            </h2>
            <p className="text-textColor text-center text-sm sm:w-3/4 lg:w-[60%]">
              Our main aim is to focus on business development, content
              marketing, social media marketing, meme marketing, SEOs, Paid ads
              (google & meta), Website Development, Ad Production, PR
              strategies.
            </p>
          </div>
          <div className="rounded-xl flex flex-col md:grid grid-cols-3 gap-4 p-2 lg:p-4">
            <div className="text-white p-2 sm:p-0 sm:pr-8 flex flex-col items-center justify-center sm:border-r-2 border-[#FCF74A]">
              <p className="text-center">
                <Countdown1 initialCount={100} timeDuration={50} symbol="+" />
                Projects Completed
              </p>
            </div>
            <div className="text-white p-2 sm:p-0 flex flex-col items-center justify-center sm:border-r-2 border-[#FCF74A]">
              <p className="text-center">
                <Countdown1 initialCount={45} timeDuration={100} symbol="+" />
                Happy Clients
              </p>
            </div>
            <div className="text-white rounded-xl p-2 sm:p-0 sm:pl-6 flex flex-col items-center justify-center">
              <p className="text-center">
                <Countdown1 initialCount={90} timeDuration={70} symbol="%" />
                Client Retaintion Rate
              </p>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="py-10">
        <div className="w-4/5 mx-auto flex flex-col gap-4">
          <div>
            <h2 className="text-white font-semibold text-2xl lg:text-3xl text-center">
              Our Foundation pillars
            </h2>
            <p className="text-textColor text-center lg:text-lg">
              Meet one the most talented minds in our office.
            </p>
          </div>
          <div className="flex flex-col gap-5 md:flex-row">
            <FoundersCards
              image="adarsh_jatav_close.png"
              info="Aadarsh from Pachmarhi kept pursuing his passion for tech and content, which began during his exploration of digital marketing in the 11th grade. After several years of freelancing and numerous cold calls and emails, he found his specialization in building effective digital marketing strategies through content. Aadarsh founded Igrow with Sarfaraz, realizing that their expertise in content could significantly benefit brands in the realm of organic marketing"
              insta=""
              linkedin="https://www.linkedin.com/in/aadarsh-kumar-3b44a1170/"
              name="Aadarsh Kumar"
              mail="aadarsh@igrowmybiz.com"
              alt=""
            />
            <FoundersCards
              image="sarfaraz_photo.jpg"
              info="I'm Sarfaraz Ajm Abadi, co-founder of our IGROW MY BIZ. With an electrical engineering background and over three years in organic social media marketing, brand building, and business growth expert, I bring a unique blend of technical expertise and marketing prowess. My passion lies in crafting innovative strategies to enhance brand visibility and drive sustainable growth. I'm dedicated to staying ahead of industry trends to propel our venture forward. Together with our talented team, we're shaping a brand that resonates, one connection at a time, Join us, and let's create success together!"
              insta="https://www.instagram.com/digitalabadii/"
              linkedin="https://www.linkedin.com/in/sarfaraz-ajm-abadi-8636231b4/ "
              name="Sarfaraz Ajm Abadi"
              mail="sarfaraz@igrowmybiz.com"
              alt=""
            />
          </div>
        </div>
      </section> */}
      <section className="py-10 flex flex-col gap-5">
        <div className="w-4/5 mx-auto flex flex-col gap-4">
          <div>
            <h2 className="text-white font-semibold text-2xl lg:text-3xl text-center">
              Our Team
            </h2>
            <p className="text-textColor text-center lg:text-lg">
              Meet one the most talented minds in our office.
            </p>
          </div>
        </div>
        <div className="w-4/5 mx-auto flex flex-col gap-5 md:grid grid-cols-6">
          {TeamCardComponent.map((team, index) => (
            <TeamCard
              key={index}
              image={team.image}
              position={team.position}
              expertise={team.expertise}
            />
          ))}
        </div>
      </section>
    </main>
  );
}
