import React, { useState } from "react";

const About = () => {
  const [expanded, setExpanded] = useState(false);

  const toggleDescription = () => {
    setExpanded(!expanded);
  };

  const content = (
    <>
      <p className="mb-3 text-gray-500 text-xl px-2 md:indent-8">
        Welcome to{" "}
        <strong className="font-semibold text-gray-900 ">
          Infinity Power Enterprises
        </strong>
        , a trailblazing presence in the electrical industry{" "}
        <strong className="font-semibold text-gray-900 ">since 2020.</strong>{" "}
        Founded by visionary electrical engineers from prestigious universities,
        Fostering a partnership born from a shared passion for innovation and
        driven by our combined expertise. Infinity Power Enterprises spearheads
        innovation in solar panel technology, government tender expertise, PLC
        automation, and control panel solutions.
        <br />
      </p>
      <p className="mb-3 text-gray-500 text-xl px-2 md:indent-8">
        At Infinity Power Enterprises, we're committed to redefining industry
        norms through a fusion of expertise and forward-thinking approaches. Our
        mission revolves around pioneering sustainable energy solutions,
        navigating intricate government tenders, and engineering bespoke PLC
        automation and control panel systems that elevate efficiency and
        reliability to new heights.
      </p>
      <p className="mb-3 text-gray-500 text-xl px-2 md:indent-8">
        Driven by our passion for excellence and powered by our profound
        understanding of electrical engineering, Infinity Power Enterprises
        continuously surpasses expectations, illuminating the world with
        groundbreaking electrical solutions.
      </p>
      <h6 className="text-xl font-bold mb-2 text-gray-800  ">
        {" "}
        Future goals for Infinity Power Enterprises:
      </h6>
      <p className="mb-3 text-gray-500 text-xl px-2 md:indent-8">
        At Infinity Power Enterprises, our commitment extends beyond the
        present. Fueled by our passion for innovation and sustainability, we
        envision a future where renewable energy solutions are seamlessly
        integrated into every aspect of life.
      </p>
      <p className="mb-3 text-gray-500 text-xl px-2 md:indent-8">
        Additionally, we aim to solidify our position as industry leaders by
        fostering collaborations with like-minded innovators, contributing to
        the evolution of smart grid technologies, and leveraging emerging
        technologies to enhance automation and control systems, ensuring they
        remain at the forefront of efficiency and reliability.
      </p>
      <p className="mb-3 text-gray-500 text-xl px-2 md:indent-8">
        Infinity Power Enterprises strives to be a catalyst for change, ushering
        in a future where sustainable energy isn't just a choice but a global
        standard for a brighter, cleaner, and more empowered world.
      </p>
      <p className="mb-3 text-gray-500 text-xl px-2 md:indent-8">
        Join us as we embark on a journey to transform possibilities into
        realities, empowering a future powered by innovation and sustainability.
      </p>
    </>
  );

  const truncatedContent = content.props.children.slice(0, 1); // Extract the first paragraph

  return (
    <section className="text-gray-600 font-poppins bg-slate-100" id="About">
      <div className="container px-5 pt-24 pb-16 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-left md:text-center">
          <h1 className="text-6xl font-bold mb-2 text-gray-900">About Us</h1>
          <br />
          <br />

          <div className="w-full leading-relaxed text-xl text-gray-500">
            {expanded ? content : truncatedContent}
            {content.props.children.length > 1 && (
              <button
                onClick={toggleDescription}
                className="text-indigo-500 inline-flex items-center mt-3"
              >
                {expanded ? "Read Less" : "Read More"}
                <svg
                  fill="none"
                  stroke="currentColor"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
