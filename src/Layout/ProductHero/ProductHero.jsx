import React from 'react'
import Particles from '@/components/ui/particles';
function ProductHero() {
  return (
    <section className="h-[500px] w-full bg-[#00010f] ">
            <div className="h-[100%] w-[100%]   absolute overflow-hidden  flex justify-center ">
              <div className="h-[435px] w-[70%] rounded-full bg-[#25005c69]   mt-[-20rem] blur-3xl "></div>
            </div>

      <Particles
        className="absolute inset-0"
        quantity={400}
        ease={80}
        color={'#ffffff'}
        refresh
      />
      <div className="flex   justify-between h-full">
        {/* left side img */}
        {/* <div className='w-1/3'>
          <img src={dis1} alt="dis1" className='' />
        </div> */}




        {/* middle side content */}
        <div className="w-full flex justify-center text-center mt-32 sm:mt-28 md:mt-32 relative z-50">
          <div className="w-[95%] sm:w-[87%] md:w-4/5 flex flex-col items-center ">
            <h1 className="text-4xl ds:leading-[3rem]  ds:text-[3rem] sm:leading-[3rem] sm:text-[3rem] md:leading-[3.2rem] md:text-[3.3rem] lg:text-6xl  sora-regular text-white">
              Boost your <span className="noto-serif text-white">brand</span>{" "}
              <span className="instrument-serif-regular-italic text-white">
                flawless
              </span>{" "}
              sites.
            </h1>
            <p className="w-2/3 py-6 text-sm  sm:text-base md:text-base lg:text-lg text-[#bfbfbf]">
              Where innovation intersects perfection. Reimagine your brand
            </p>
          </div>
        </div>

        {/* right side img */}
        {/* <div className='w-1/3'>
          <img src={dis2} alt="dis2" />
        </div> */}
      </div>
    </section>
  );
}

export default ProductHero
