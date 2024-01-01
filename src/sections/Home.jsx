import React from "react";
import bgImage from "../assets/images/bg-banner.jpg";
const Home = () => {
  return (
    <section className="font-poppins mt-20 md:mt-14 lg:mt-14" id="Home">
      <div
        className="bg-center bg-cover"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="container flex flex-col items-center px-4 gap-y-6 py-16 pb-24 mx-auto lg:text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 text-start lg">
          <h1 className="text-[2.75rem] leading-none xsm:text-6xl  uppercase font-bold  sm:text-[5rem] lg:leading-[6rem] xl:max-w-3xl  text-white relative">
            <span className="line line-top"></span>Infinity{" "}
            <span className="glow-text">Power</span> Enterprises{" "}
            <span className="line line-bottom"></span>
          </h1>
          <p className="mt-6 mb-8 text-xl sm:mb-12  text-white ">
            Welcome to Infinity Power Enterprises, powering possibilities since
            2020. We specialize in a wide range of services, including MSEB
            tender management, LT and HT panel design, PLC SCADA solutions,
            automation, and solar panel installation. With a commitment to
            excellence and sustainability, we harness the power of innovation to
            meet your energy needs efficiently. Discover how we can empower your
            projects and businesses with our expertise in electrical and
            renewable energy solutions.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
