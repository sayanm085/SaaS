import React from 'react'
import ShinyButton from "@/components/ui/shiny-button";
import Meteors from '@/components/ui/meteors';
import { Link } from 'react-router-dom';

function ProDet_hero() {
  return (
    <section className="flex flex-col h-auto items-center relative overflow-hidden  mb-4 ">
      <Meteors number={30} />
      <div className=" w-[96%] md:w-10/12 md2:w-4/5 relative z-50   h-16 flex items-center gap-4 text-center text-[#ababab] mt-20 ">
        <p className='hover:text-white  delay-100'>Home</p>
        <i className="fa-solid fa-chevron-right text-sm mt-[0.35rem] "></i>
        <p className='hover:text-white delay-100'>Web Product</p>
        <i className="fa-solid fa-chevron-right text-sm mt-[0.35rem] "></i>
        <p>Solopreneur</p>
      </div>


      <section className="h-auto w-[96%] md:w-10/12 md2:w-4/5 relative z-50  bg-white rounded-lg flex items-center  mx-auto border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(rgba(74, 83, 255, 0.03) 0%, rgba(18, 30, 255, 0.02) 130%)' }}>
        {/* //* Left Side box  */}
           <div className='h-full py-9 w-full md:w-4/6  flex flex-col justify-center pr-3  '>

               <div className='h-fit '>
                   {/* <span className=' ml-10 mt-10  text-xs border border-[#c6c6c6] rounded-lg px-1'>Changelog</span> */}
                    <h1 className='text-4xl xl:text-4xl text-white font-bold   ml-10'>Solopreneur</h1>
                    <h3 className='text-gray-300 mt-2 ml-10 text-base font-[550] xl:text-lg'>A web product that helps you manage your business and personal life</h3>

                    
               </div>

                <div className='flex h-fit'>

                  <p className='ml-10 text-[0.9rem] text-gray-400  xl:text-[0.9rem] pt-4 pr-4'>
                  Introducing Featureful - the premium Framer template built to help you easily & beautifully showcase the roadmap for your website or app. Don’t leave your users in the dark about upcoming changes to your website or app. Instantly increase user engagement and retention with Featureful. 
                  </p>


                </div>


              
     
              
           </div>


        {/* //* horizontal line box  */}
                <div id='hr_tag' className=' h-52 w-[0.7px]  bg-[#cbcbcb]  md:block hidden  '></div>


        {/* //* Right Side box  */}


           <div id='price-buybtn' className='h-full w-2/6 hidden  md:flex flex-col justify-center items-center gap-6 '>
                 
            <div className='w-full flex items-center justify-center'> 
                <h1 className='text-white mt-2 text-4xl font-semibold'>$299</h1>
            </div>

            <div className='w-full flex flex-col items-center justify-center gap-5'>
              <ShinyButton className=" md:w-[180px] md2:w-[200px] rounded-lg sm:py-2  md:py-3 ">Live Preview <i className="fa-regular fa-eye"></i></ShinyButton>
              
              <a href={"/checkout"}  className='w-full flex items-center justify-center'>
              <ShinyButton className="bg-[#05194a] hover:bg-[#2d5dd7] md:w-[180px]  md2:w-[200px] rounded-lg sm:py-2 md:py-3  ">Buy <i className="fa-solid fa-cart-shopping"></i></ShinyButton>

              </a>


                          
           

            </div>
                
           </div>
          



      </section>






    </section>
  );
}

export default ProDet_hero
