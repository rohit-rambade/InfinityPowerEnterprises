import React from "react";
import contact from "../constants/contact";
const Contact = () => {
  return (
    <section className="text-gray-600 font-poppins" id="Contact">
      <div className="container px-5 pt-24 pb-16 mx-auto">
        <div className="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 className="text-6xl font-bold mb-2 text-gray-900">Connect With Us</h1>
          <p className="lg:w-1/2 w-full leading-relaxed text-2xl text-gray-500">
          Connect with us effortlessly—where ideas meet action. Your journey starts here, at the intersection of innovation and collaboration.
          </p>
        </div>
        <div className="flex flex-col items-center md:items-stretch md:flex-wrap lg:flex-nowrap md:flex-row justify-center  ">
          {contact.map((contact) => {
            return (
              <div
                className="flex flex-wrap sm:flex-wrap  m-4 w-full sm:w-1/2 lg:w-1/4"
                key={contact.id}
              >
                <div className="relative flex flex-col mt-6 max-h-full text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full  ">
                  <a href={contact.link} className="p-6 flex flex-col justify-center items-center gap-y-2">
                    <div className="flex justify-center">
                      <img src={contact.icon} className="w-1/6 sm:w-1/3" />
                    </div>
                    <h5 className="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                      {contact.name}
                    </h5>
                    {contact.num ? (
                      contact.num.map((n) => (
                        <p className="block text-base antialiased font-light leading-relaxed text-inherit" key={n.index}>
                          {n.no}
                        </p>
                      ))
                    ) : (
                      <a href={contact.link} className="block text-base antialiased font-light leading-relaxed text-inherit">
                        {contact.desc}
                      </a>
                    )}
                  </a>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Contact;
