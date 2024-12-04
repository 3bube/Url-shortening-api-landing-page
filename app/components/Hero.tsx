import React from "react";
import Image from "next/image";

const Hero = () => {
  return (
    <section className="container mx-auto px-6 md:px-10 pt-4 md:pt-20 mb-20 md:mb-10 overflow-hidden ">
      <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-8 md:gap-4">
        {/* Content section */}
        <div className="w-full md:w-1/2 text-center md:text-left space-y-5">
          <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-veryDarkBlue leading-tight">
            More than just shorter links
          </h1>
          <p className="text-lg md:text-xl text-grayishViolet max-w-lg mx-auto md:mx-0">
            Build your brand&apos;s recognition and get detailed insights on how your
            links are performing.
          </p>
          <button className="bg-cyan hover:bg-opacity-70 transition-all text-white px-10 py-4 rounded-full font-bold text-xl">
            Get Started
          </button>
        </div>

        {/* Image section */}
        <div className="w-full md:w-1/2 relative">
          <div className="w-[150%] md:w-[140%]">
            <Image
              src="/images/illustration-working.svg"
              alt="Working Illustration"
              width={733}
              height={482}
              className="object-contain translate-x-20"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
