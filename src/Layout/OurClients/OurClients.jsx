import React from 'react'
import Marquee from "react-fast-marquee";

function OurClients() {
  return (
    <section className="w-full flex justify-center items-center bg-[#05071A] py-8">
      <div className="bg-[#05071A] h-3/4 w-full flex flex-col items-center">
        {/*//*1st */}
        <div className="flex justify-center items-center h-28 ">
          <p className="text-lg text-white sora-regular px-4 py-2 rounded-xl border-[#ffffff5d] border-[1px]">
            Our Clients
          </p>
        </div>

        {/*//*2ed */}

        <div className="flex flex-col justify-center items-center gap-5 h-36  ">
          <h2 className="text-4xl ds:text-3xl sm:text-4xl  md:text-5xl text-white sora-regular text-center">
            Hear it directly from{" "}
            <span className="instrument-serif-regular-italic">
              our clients.
            </span>
          </h2>

          <h3 className=" text-sm ds:text-base sm:text-sm md:text-lg text-[#ffffff96] sora-regular ds:w-10/12 sm:w-7/12 text-center">
            Hear what our clients have to say. Our testimonials reflect the
            satisfaction our clients have in our services.
          </h3>
        </div>

        {/*//*3rd */}

        <div className="h-auto w-full flex flex-col items-center gap-5 mt-9">


          <Marquee id="loop-box1" style={{width:"70%"}}  gradient gradientColor='#05071AEB' pauseOnHover speed={100}>
            <div id="box1" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{background: "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)", }}></div>
            <div id="box2" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)", }} ></div>
            <div id="box3" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{background: "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)",}}></div>
          </Marquee>



          <Marquee id="loop-box2" style={{width:"70%"}} gradient gradientColor='#05071AEB' direction='right' pauseOnHover speed={40}>
            <div id="box1" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{  background: "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)", }} ></div>
            <div id="box2" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)",}} ></div>
            <div id="box3" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)", }}></div>
          </Marquee>



          <Marquee id="loop-box2" style={{width:"70%"}} gradient gradientColor='#05071AEB' pauseOnHover speed={60}>
            <div id="box1" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background:  "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)", }} ></div>
            <div id="box2" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)",}} ></div>
            <div id="box3" className="h-48 w-[280px] sm:h-52 sm:w-[320px] mx-[1.5rem] bg-slate-50 rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: "linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)", }} ></div>
          </Marquee>



        </div>
      </div>
    </section>
  );
};

export default OurClients
