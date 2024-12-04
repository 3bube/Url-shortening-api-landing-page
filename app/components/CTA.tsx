import React from "react";

const CTA = () => {
  return (
    <section className="bg-darkViolet py-12 md:bg-[url('/images/bg-boost-desktop.svg')] bg-[url('/images/bg-boost-mobile.svg')] bg-no-repeat bg-center">
      <div className="container mx-auto px-10 flex flex-col gap-4 items-center">
        <h2 className="text-xl md:text-3xl font-bold text-white">
          Boost your links today
        </h2>
        <button className="bg-cyan hover:bg-opacity-70 transition-all text-white px-10 py-4 rounded-full font-bold text-xl">
          Get Started
        </button>
      </div>
    </section>
  );
};

export default CTA;
