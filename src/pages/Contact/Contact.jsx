import React from 'react';
import { ContactFrom ,LoopSlider } from '../../Layout'

export default function Contact() {
  
  return (
   <>
    <section className='h-auto w-full flex justify-center items-center'>
      <div className="h-[100%] w-[100%]  absolute overflow-hidden -z-[1] left-1/2 -top-[70%] -translate-x-1/2  flex justify-center ">
        <div className="h-[435px] w-[70%] rounded-full bg-[#3900d869]   mt-36 blur-3xl "></div>
      </div>

      <div className="w-full flex flex-col items-center text-center mt-32">
          <div className="w-1/2">
            <h1 className="text-6xl  sora-regular text-white" style={{lineHeight: '5rem'}}>Get in  <span className='instrument-serif-regular-italic text-white'>touch.</span></h1>
          </div>
          <div className="w-3/5">
          <p className="py-6 text-lg text-[#c4c4c4]">
          Ready to scale your brand to new heights? Book a call and let’s discuss how we can bring your vision to life.       </p>
          </div>
        </div>

    </section>
      <ContactFrom/>
   </>
  )
}

