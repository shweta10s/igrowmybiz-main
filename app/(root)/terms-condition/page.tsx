import React from "react";

const page = () => {
  return (
    <main className="w-full bg-secondaryColor min-h-screen pt-20  flex justify-center">
      <div className="space-y-4 w-full max-w-screen-xl mt-[40px] text-white lg:max-w-[70%] p-[10px] max-sm:px-6 md:pb-[15px] space-y-4">
        <div className="w-full flex flex-col sm:flex-row gap-[20px] md:gap-40  flex-col-reverse">
          <div className="text-white/70 md:w-1/2 font-semibold text-sm text-start">
            <h1 className="text-2xl font-semibold mb-5 text-mainColor">
              Privacy Policy
            </h1>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Doloribus, velit. Vitae, enim aperiam nam animi facere ullam rerum
              odit quod et assumenda vero, dolorum, imp Lorem, ipsum dolor sit
              amet consectetur adipisicing elit. Doloribus, velit. Vitae, enim
              aperiam nam animi facere ullam rerum odit quod et assumenda vero,
              dolorum, imp
            </p>
          </div>
          <div className="w-44 h-44 max-sm:mx-auto ">
            <img
              src="./assets/privacy.png"
              className="w-full h-full scale-150"
              alt="alt"
            />
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-5 text-mainColor">
            Introduction
          </h1>
          <div className="text-white/70 font-semibold text-sm text-start space-y-2">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              fuga quos harum provident repudiandae recusandae dolorem? Rerum
              minima perferendis aspernatur dicta laborum ipsum earum vero,
              harum iste? Quis, ipsam obcaecati! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Placeat fuga
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              fuga quos harum provident repudiandae recusandae dolorem? Rerum
              minima perferendis aspernatur dicta laborum ipsum earum vero,
              harum iste? Quis, ipsam obcaecati! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Placeat fuga quos harum provident
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              fuga quos harum provident repudiandae recusandae dolorem? Rerum
              minima perferendis aspernatur dicta laborum ipsum earum vero,
              harum iste? Quis, ipsamdicta laborum ipsum earum vero, harum iste?
              Quis, ipsam obcaecati!
            </p>
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              fuga quos harum provident repudiandae recusandae dolorem? Rerum
              minima perferendis aspernatur dicta laborum ipsum earum vero,
              harum iste? Quis, ipsam obcaecati! Lorem ipsum
            </p>
          </div>
        </div>
        <div>
          <h1 className="text-2xl font-semibold mb-5 text-mainColor">
            Sensitive Personal Data
          </h1>
          <div className="text-white/70 font-semibold text-sm text-start space-y-2">
            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              fuga quos harum provident repudiandae recusandae dolorem? Rerum
              minima perferendis aspernatur dicta laborum ipsum earum vero,
              harum iste? Quis, ipsam obcaecati! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Placeat fuga
            </p>

            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              fuga quos harum provident repudiandae recusandae dolorem? Rerum
              minima perferendis aspernatur dicta laborum ipsum earum vero,
              harum iste? Quis, ipsam obcaecati! Lorem ipsum dolor sit amet
              consectetur, adipisicing elit. Placeat fuga quos harum provident
            </p>

            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              fuga quos harum provident repudiandae recusandae dolorem? Rerum
              minima perferendis aspernatur dicta laborum ipsum earum vero,
              harum iste? Quis, ipsamdicta laborum ipsum earum vero, harum iste?
              Quis, ipsam obcaecati!
            </p>

            <p className="text-sm">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Placeat
              fuga quos harum provident repudiandae recusandae dolorem? Rerum
              minima perferendis aspernatur dicta laborum ipsum earum vero,
              harum iste? Quis, ipsam obcaecati! Lorem ipsum
            </p>
          </div>
        </div>
      </div>
    </main>
  );
};

export default page;
