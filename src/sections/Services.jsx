import React, { useState } from 'react'
import services from '../constants/services'
const Services = () => {

    const [expanded, setExpanded] = useState({});

  const toggleDescription = (id) => {
    setExpanded((prevExpanded) => ({
      ...prevExpanded,
      [id]: !prevExpanded[id],
    }));
  };
    
  return (
    <section className=" font-poppins ">
  <div className="container flex flex-col gap-y-11 px-5 py-5 mx-auto ">
    <div className="flex flex-col justify-center items-center">
        <h1 className='text-6xl text-center font-bold'>Services We Offer</h1>
   
    </div>
    <div className="grid grid-cols-1 gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 -m-4">
      {services.map((service) => (
        <div className="p-4" key={service.id}>
          <div className="rounded-lg h-64 overflow-hidden">
            <img alt="content" className="object-cover object-center h-full w-full" src={service.image} />
          </div>
          <h1 className="text-xl lg:text-4xl font-medium title-font text-gray-900 mt-5">{service.name}</h1>
          <p className="text-base lg:text-xl leading-relaxed mt-2">
            {expanded[service.id] ? service.description : `${service.description.slice(0, 150)}...`}
          </p>
          {service.description.length > 150 && (
            <button
              onClick={() => toggleDescription(service.id)}
              className="text-indigo-500 inline-flex items-center mt-3"
            >
              {expanded[service.id] ? 'Read Less' : 'Read More'}
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
      ))}
    </div>
  </div>
</section>
  )
}

export default Services