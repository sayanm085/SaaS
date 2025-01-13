import React from 'react'
import '../../App.css'
import { motion} from 'framer-motion';
import UseblurAnimation from '@/Hooks/Animation/UseblurAnimation';
function Services() {
  const blurAnimation = UseblurAnimation();

return (
  <section

   id="Services" className=" bg-[#05071A] flex justify-center items-center ">
    <div className=" h-3/4 w-full">
      {/*//*1st */} 

      <div className="flex justify-center items-center ds:h-20 md:h-28 ">
        <p className="text-lg text-white sora-regular px-4 py-2 rounded-xl border-[#ffffff5d] border-[1px]">
          Services
        </p>
      </div>

      {/*//*2ed */}

      <motion.div 
        initial={blurAnimation.offscreen}
        whileInView={blurAnimation.onscreen}
        exit={blurAnimation.exit}
        variants={blurAnimation}
        viewport={{ once: true }}
      className="flex flex-col justify-center items-center gap-5 ds:h-40 md:h-48  ">
        <h2 className="text-3xl ds:text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white sora-regular">
          How can we help{" "}
          <span className="instrument-serif-regular-italic">you?</span>
        </h2>

        <h3 className="text-sm ds:text-sm md:text-base  lg:text-xl ds:w-10/12 text-[#ffffff96] sora-regular w-2/4  text-center">
          From Google ads, to Meta ads, to TikTok ads, and even content
          creation, we've got you covered on everything front.
        </h3>
      </motion.div>

      {/*//*3rd */}
      <div id='main-box-allservices' className="w-full flex justify-center">
        <div id='center-box-allservices' className="flex flex-col gap-4 items-center justify-center h-auto w-10/12 lg:w-auto  py-9 ">


          <div id='box-allservices-one-byc' className='flex gap-7 flex-wrap w-full '>
            <div className="h-72 w-full  lg:w-[26rem] xl:w-[31rem] bg-white rounded-2xl  border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)' }}></div>

            <div className="h-72 w-full  lg:w-[26rem] xl:w-[31rem] bg-white rounded-2xl  border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)' }}></div>
          </div>

          <div id='box-allservices-one' className="h-72 w-full lg:w-full  md: bg-white rounded-2xl  col-span-2 border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)' }}></div>

        </div>
      </div>
    </div>
  </section>
);
}

export default Services
