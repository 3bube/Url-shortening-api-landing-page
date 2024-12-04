import React from "react";
import Image from "next/image";

const Statistics = () => {
  const features = [
    {
      icon: "/images/icon-brand-recognition.svg",
      title: "Brand Recognition",
      description:
        "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    },
    {
      icon: "/images/icon-detailed-records.svg",
      title: "Detailed Records",
      description:
        "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    },
    {
      icon: "/images/icon-fully-customizable.svg",
      title: "Fully Customizable",
      description:
        "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    },
  ];

  return (
    <section className="bg-grayishViolet bg-opacity-10 pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-10">
        {/* Header */}
        <div className="text-center mb-20 max-w-xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-veryDarkBlue mb-5">
            Advanced Statistics
          </h2>
          <p className="text-grayishViolet px-4 md:px-0">
            Track how your links are performing across the web with our advanced
            statistics dashboard.
          </p>
        </div>

        {/* Cards */}
        <div className="relative flex flex-col md:flex-row gap-20 md:gap-8">
          {/* Connecting Line */}
          <div className="absolute left-1/2 md:left-0 top-0 md:top-1/2 w-2 md:w-full h-full md:h-2 bg-cyan transform -translate-x-1/2 md:translate-x-0 md:-translate-y-1/2" />

          {/* Feature Cards */}
          {features.map((feature, index) => (
            <div
              key={feature.title}
              className={`bg-white rounded-lg p-8 relative z-10 text-center md:text-left ${
                index === 1 ? "md:mt-10" : index === 2 ? "md:mt-20" : ""
              }`}
            >
              {/* Icon */}
              <div className="bg-darkViolet rounded-full p-5 inline-flex md:-mt-16 -mt-28 mb-8 mx-auto md:mx-0 ">
                <Image
                  src={feature.icon}
                  alt={feature.title}
                  width={40}
                  height={40}
                />
              </div>

              {/* Content */}
              <div className="text-center md:text-left">
                <h3 className="text-xl font-bold text-veryDarkBlue mb-4">
                  {feature.title}
                </h3>
                <p className="text-grayishViolet text-sm leading-relaxed">
                  {feature.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Statistics;
