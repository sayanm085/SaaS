import React from 'react'

function AboutHero() {
  return (
    <section className='h-auto w-full flex justify-center items-center'>
      <div className="h-[100%] w-[100%]  absolute overflow-hidden -z-[1] left-1/2 -top-[70%] -translate-x-1/2  flex justify-center ">
        <div className="h-[435px] w-[70%] rounded-full bg-[#3900d869]   mt-36 blur-3xl "></div>
      </div>

      <div className="w-full flex flex-col items-center text-center mt-32">
          <div className="w-[96%] md:w-1/2">
            <h1 className=" text-3xl md:text-4xl lg:text-6xl  sora-regular text-white" >Driven by results, powered by <span className='instrument-serif-regular-italic text-white'>personality.</span></h1>
          </div>
          <div className="w-10/12 md:w-3/5">
          <p className="py-6 text-sm md:text-lg text-[#c4c4c4]">
            Our team is all about results, but we never forget to bring our unique energy and personality to everything we do. We’re here to deliver impactful solutions while keeping things fun, creative, and true to who we are.
            </p>
          </div>
        </div>

    </section>
  );
}

export default AboutHero
