import React from 'react'
import Marquee from "react-fast-marquee";
import {mongodbimg,digitaloceanimg, dockerimg ,otplessimg, PhonePeimg} from "./img"

function LoopSlider({pro,bg}) {
  return (
    <section className={`h-auto w-full ${bg.color === "#00010f" ? 'bg-[#00010f]' : 'bg-[#05071A]'} flex flex-col items-center justify-center gap-2 pb-3`}>
      
      {pro.show && (
        <div className="w-full h-14 sm:text-[1.15rem] lg:text-xl text-[#ffffffb6] flex justify-center items-end bg">
          <p>You're in good hands:</p>
        </div>
      )}

      <Marquee style={{width:"80%"}} gradient gradientColor={`${bg.color === "#00010f" ? '#00010f' : '#05071A'}`}>
        <img src={mongodbimg} alt="MongoDB" className='w-28 ds:w-28 md:w-40 aspect-[3/2] object-contain mx-10 '/>
        <img src={digitaloceanimg} alt="digitaloceanimg" className='w-28 ds:w-28 md:w-40 h-auto aspect-[3/2] object-contain mx-10 ' />
        <img src={dockerimg} alt="dockerimg" className='w-28  ds:w-28 md:w-40 aspect-[3/2] object-contain mx-10 ' />
        <img src={otplessimg} alt="otplessimg" className='w-28 ds:w-28 md:w-40aspect-[3/2] object-contain mx-10 brightness-0 invert-[1]'  />
        <img src={PhonePeimg} alt="PhonePeimg" className='w-28 ds:w-28 md:w-40 aspect-[3/2] object-contain mx-10 ' />
      </Marquee>

    </section>
  );
}

export default LoopSlider
