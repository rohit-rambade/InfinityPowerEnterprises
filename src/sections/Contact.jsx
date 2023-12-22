import React from "react";

const Contact = () => {

    const contact = [{
        id:1,
        name:"Call Us",
        icon:"icon",
        desc:454545
    },
    {
        id:2,
        name:"Send Email",
        desc:"contact@gmail.com",
    },
    {
        id:3,
        name:"Address",
        icon:"icon",
        desc:"at post knk"
    },
    {
        id:4,
        name:"Whatsapp",
        icon:"icon",
        desc:"at post knk"
    },

]
  return (
    <section class="text-gray-600 font-poppins">
      <div class="container px-5 py-24 mx-auto">
        <div class="flex flex-wrap w-full mb-20 flex-col items-center text-center">
          <h1 class="text-6xl font-bold mb-2 text-gray-900">
            Our Contacts
          </h1>
          <p class="lg:w-1/2 w-full leading-relaxed text-2xl text-gray-500">
            Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
            gentrify, subway tile poke farm-to-table.
          </p>
        </div>
        <div className="flex flex-col md:flex-wrap md:flex-row justify-center items-center ">

      
        {
            contact.map((contact)=>{
                return <div class="flex flex-wrap sm:flex-wrap m-4 w-full sm:w-1/2 lg:w-1/4" key={contact.id}>
                <div class="relative flex flex-col mt-6 text-gray-700 bg-white shadow-md bg-clip-border rounded-xl w-full  ">
                  <div class="p-6 flex flex-col justify-center items-center">
                    <div>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                        class="w-12 h-12 mb-4 text-gray-900"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M9.315 7.584C12.195 3.883 16.695 1.5 21.75 1.5a.75.75 0 01.75.75c0 5.056-2.383 9.555-6.084 12.436A6.75 6.75 0 019.75 22.5a.75.75 0 01-.75-.75v-4.131A15.838 15.838 0 016.382 15H2.25a.75.75 0 01-.75-.75 6.75 6.75 0 017.815-6.666zM15 6.75a2.25 2.25 0 100 4.5 2.25 2.25 0 000-4.5z"
                          clip-rule="evenodd"
                        ></path>
                        <path d="M5.26 17.242a.75.75 0 10-.897-1.203 5.243 5.243 0 00-2.05 5.022.75.75 0 00.625.627 5.243 5.243 0 005.022-2.051.75.75 0 10-1.202-.897 3.744 3.744 0 01-3.008 1.51c0-1.23.592-2.323 1.51-3.008z"></path>
                      </svg>
                    </div>
                    <h5 class="block mb-2 text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                     {contact.name}
                    </h5>
                    <p class="block text-base antialiased font-light leading-relaxed text-inherit">
                     {contact.desc}
                    </p>
                   
                  </div>
                </div>
              </div>
            })
        }
      

    
     
        </div>
    
      </div>
    </section>
  );
};

export default Contact;
