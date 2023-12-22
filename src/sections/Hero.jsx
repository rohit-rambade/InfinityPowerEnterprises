import React from 'react'

const Hero = () => {
  return (
    <section className='font-poppins'>
	<div className="bg-hero-section bg-center bg-cover">
		<div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto lg:text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 dark:text-gray-900 text-start lg">
			<h1 className="text-6xl font-bold  sm:text-8xl xl:max-w-3xl  text-white ">Infinity <span class="glow-text">Power</span> Enterprices</h1>
			<p className="mt-6 mb-8 text-xl sm:mb-12 xl:max-w-3xl text-white ">Welcome to Infinity Power Enterprises, powering possibilities since 2021. We specialize in a wide range of services, including MSEB tender management, LT and HT panel design, PLC SCADA solutions, automation, and solar panel installation. With a commitment to excellence and sustainability, we harness the power of innovation to meet your energy needs efficiently. Discover how we can empower your projects and businesses with our expertise in electrical and renewable energy solutions</p>
			{/* <div className="flex flex-wrap justify-center">
				<button type="button" className="px-8 py-3 m-2 text-lg font-semibold rounded dark:bg-gray-800 dark:text-gray-50">Get started</button>
				<button type="button" className="px-8 py-3 m-2 text-lg border rounded dark:border-gray-700 dark:text-gray-900">Learn more</button>
			</div> */}
		</div>
	</div>
	
</section>
  )
}

export default Hero