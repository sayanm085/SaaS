import React from 'react'
import { useState,useCallback } from 'react';

function FAQs() {





  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = useCallback((index) => {
    setOpenIndex(openIndex === index ? null : index);
  }, [openIndex]);

  return (
    <section className="h-auto w-[100%] py-5 bg-[#05071A] flex justify-center">
      <div className="h-full w-4/5 py-5 flex flex-col items-center ">
        {/*//*1st */}

        <div className="flex justify-center items-center h-auto ">
          <p className="text-lg text-white sora-regular px-4 py-2 rounded-xl border-[#ffffff5d] border-[1px]">
            FAQs
          </p>
        </div>

        {/*//*2ed */}

        <div className="flex flex-col justify-center items-center gap-5 h-auto w-full ds:w-[550px] py-3 text-center">
          <h2 className="text-2xl ds:text-3xl sm:text-4xl  md:text-[2.7rem] text-white sora-regular">
            We’ve got the{" "}
            <span className="instrument-serif-regular-italic">answers </span>
            to your questions
          </h2>
        </div>

        {/*//*3rd */}

        <div
          id="main-box-allservices"
          className="  lg:w-[800px] w-full h-auto flex flex-col gap-7 justify-center py-6  ">

          {/*//* box1 */}
          <div id="center-box-allservices"
            className="flex flex-col items-center justify-center h-auto w-full rounded-xl py-5 border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]"
            style={{ background: "linear-gradient(rgba(0, 13, 255, 0.04) 0%, rgba(0, 3, 55, 0.25) 130%)", }}
            key={1} onClick={() => toggleFAQ(1)}>

            <div id='boxbtn' className='w-full h-auto px-5 flex justify-between ' >
              <h3 className="text-base sm:text-lg pr-3 text-white sora-regular"> Do you offer ongoing ad optimization and management services?</h3>
              <i className={`fa-solid ${openIndex === 1 ? 'fa-minus' : 'fa-plus'} text-white flex items-center`}></i>
            </div>

            {openIndex === 1 && (
              <div id='box1' className='w-full items-center text-[#b9b9b9] text-sm px-5 pt-4 sora-regular'>
                <p>Yes, we provide continuous ad optimization and management to stay ahead of evolving trends and algorithms, ensuring sustained campaign success on Google, Meta, and TikTok.</p>
              </div>
            )}
          </div>

          {/* //*box2*/}
          <div id="center-box-allservices"
            className="flex flex-col items-center justify-center h-auto w-full rounded-xl py-5 border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]"
            style={{ background: "linear-gradient(rgba(0, 13, 255, 0.04) 0%, rgba(0, 3, 55, 0.25) 130%)", }}
            key={2} onClick={() => toggleFAQ(2)}>

            <div id='boxbtn' className='w-full h-auto px-5 flex justify-between ' >
              <h3 className="text-base sm:text-lg pr-3 text-white sora-regular"> How do you choose ad formats and placements across platforms?</h3>
              <i className={`fa-solid ${openIndex === 2 ? 'fa-minus' : 'fa-plus'} text-white flex items-center`}></i>
            </div>

            {openIndex === 2 && (
              <div id='box1' className='w-full items-center text-[#b9b9b9] text-sm px-5 pt-4 sora-regular'>
                <p>Yes, we provide continuous ad optimization and management to stay ahead of evolving trends and algorithms</p>
              </div>
            )}
          </div>

          {/* //*box3*/}
          <div id="center-box-allservices"
            className="flex flex-col items-center justify-center h-auto w-full rounded-xl py-5 border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]"
            style={{ background: "linear-gradient(rgba(0, 13, 255, 0.04) 0%, rgba(0, 3, 55, 0.25) 130%)", }}
            key={3} onClick={() => toggleFAQ(3)}>

            <div id='boxbtn' className='w-full h-auto px-5 flex justify-between ' >
              <h3 className="text-base sm:text-lg pr-3 text-white sora-regular"> What's unique about your Meta Ads approach?</h3>
              <i className={`fa-solid ${openIndex === 3 ? 'fa-minus' : 'fa-plus'} text-white flex items-center`}></i>
            </div>

            {openIndex === 3 && (
              <div id='box1' className='w-full items-center text-[#b9b9b9] text-sm px-5 pt-4 sora-regular'>
                <p>Our Meta Ads strategies leverage platform-specific features to maximize reach and engagement, distinguishing brands in crowded social media spaces.</p>
              </div>
            )}
          </div>


         {/* //*box4*/}
          <div id="center-box-allservices"
            className="flex flex-col items-center justify-center h-auto w-full rounded-xl py-5 border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]"
            style={{ background: "linear-gradient(rgba(0, 13, 255, 0.04) 0%, rgba(0, 3, 55, 0.25) 130%)", }}
            key={4} onClick={() => toggleFAQ(4)}>

            <div id='boxbtn' className='w-full h-auto px-5 flex justify-between ' >
              <h3 className="text-base sm:text-lg pr-3 text-white sora-regular"> What's unique about your Meta Ads approach?</h3>
              <i className={`fa-solid ${openIndex === 4 ? 'fa-minus' : 'fa-plus'} text-white flex items-center`}></i>
            </div>

            {openIndex === 4 && (
              <div id='box1' className='w-full items-center text-[#b9b9b9] text-sm px-5 pt-4 sora-regular'>
                <p>Our Meta Ads strategies leverage platform-specific features to maximize reach and engagement, distinguishing brands in crowded social media spaces.</p>
              </div>
            )}
          </div>









        </div>
      </div>
    </section>
  );
}

export default FAQs
