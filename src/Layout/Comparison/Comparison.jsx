import React from 'react'

function Comparison() {
  return (
    <section className=" w-full bg-[#05071A] flex justify-center items-center pb-12 ">
      <div className="h-auto w-full">
        {/*//*1st */}

        <div className="flex justify-center items-center h-28 ">
          <p className="text-lg text-white sora-regular px-4 py-2 rounded-xl border-[#ffffff5d] border-[1px]">
            Comparison
          </p>
        </div>

        {/*//*2ed */}

        <div className="flex flex-col justify-center items-center gap-5 h-36  ">
          <h2 className="ds:text-3xl sm:text-4xl md:text-[2.8rem] leading-[3rem] text-3xl text-white sora-regular w-[90%]  md:w-10/12 lg:w-2/4  text-center">
            But, why would you want to work
            <span className="instrument-serif-regular-italic"> with us?</span>
          </h2>
        </div>

        {/*//*3rd */}



        <div id="main-box-Comparison" className="w-full flex flex-wrap-reverse  md2:flex-nowrap justify-center py-6 px-4 gap-10 ">

           {/*//*1st box */}

          <div id="first-center-box-Comparison" className="text-2xl w-full  text-white sora-regular flex flex-col items-center gap-4">

            <h2 className='text-[#ffffffa3] ds:text-xl md:text-3xl'>Other Agencies</h2>

               <div className="h-[350px] w-full sm:w-[420px] bg-white rounded-3xl border-[#001170] backdrop-blur-md border-[1px]" style={{ background: 'linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)' }} ></div>

          </div>

           {/*//*2nd box */}

          <div id="second-center-box-Comparison" className="text-2xl w-full text-white sora-regular flex flex-col items-center gap-4">

            <h2 className='text-white ds:text-xl md:text-3xl'>Shotlin</h2>
            <div className="h-[350px] w-full sm:w-[420px]  lg:w-[440px] bg-white rounded-3xl border-[#001170] backdrop-blur-md border-[1px] " style={{ background: 'linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)' }} ></div>

          </div>



        </div>






      </div>
    </section>
  );
}

export default Comparison
