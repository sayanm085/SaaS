import React from 'react'
import ShinyButton from "@/components/ui/shiny-button";

function Prodet_Overview() {
  return (
    <section className='h-auto w-full flex justify-center mt-6 '>
     <section className='h-full w-[96%] md:w-10/12 md2:w-4/5 flex justify-between gap-6 flex-wrap-reverse  lg:flex-nowrap'>
       <section className="h-full w-full lg:w-2/3 bg-white rounded-lg flex   border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(rgba(74, 83, 255, 0.03) 0%, rgba(18, 30, 255, 0.02) 130%)' }}>

        <div className='h-auto w-full p-5 pl-7' >

          <div className='w-full '>
            <h1 className='text-4xl text-white'>Overview</h1>
          </div>

          <div className='w-full mt-5'>
            <p className='text-gray-400 text-base'>Introducing Featureful - the premium Framer template built to help you easily & beautifully showcase the roadmap for your website or app. Don’t leave your users in the dark about upcoming changes to your website or app. Instantly increase user engagement and retention with Featureful. <br /> <br />Easily add new features using the powerful CMS integration and showcase all the necessary information about your upcoming feature including estimated date and current status. Featureful works right out of the box, simply duplicate to your Framer website and you instantly have a fully-functional roadmap.</p>

          </div>

          <div className='w-full mt-5'>
            <h1 className='text-2xl text-white'>Features</h1>

            <div className='w-full mt-5'>
              <ul className='list-disc pl-8'>
                <li >
                  <p className='text-gray-400 text-base'>Featureful is fully responsive and works on all devices.</p>
                </li>

                <li>
                  <p className='text-gray-400 text-base'>Easily add new features using the powerful CMS integration.</p>
                </li>

                <li>
                  <p className='text-gray-400 text-base'>Featureful comes with a dark mode option.</p>
                </li>

                <li>
                  <p className='text-gray-400 text-base'>Featureful is easy to customize and update.</p>
                </li>
              </ul>
            </div>
          </div>


          <div className='w-full mt-5'>
            <h1 className='text-2xl text-white'>Pages</h1>

            <div className='w-full mt-5'>
              <ul className='list-disc pl-8'>
                <li >
                  <p className='text-gray-400 text-base'>Home</p>
                </li>

                <li>
                  <p className='text-gray-400 text-base'>Features</p>
                </li>
                
                <li>
                  <p className='text-gray-400 text-base'>Blog</p>
                </li>
                
                <li>
                  <p className='text-gray-400 text-base'>Terms Page</p>
                </li>

                <li>
                  <p className='text-gray-400 text-base'>404</p>
                </li>

                <li>
                  <p className='text-gray-400 text-base'>Destination (CMS)</p>
                </li>

                <li>
                  <p className='text-gray-400 text-base'>Pricing</p>
                </li>

                <li>
                  <p className='text-gray-400 text-base'>Contact</p>
                </li>
              </ul>
              </div>

          </div>

          
           
        </div>


       </section>

       <section className=" h-a lg:h-[270px] w-full lg:w-[31%] bg-white relative lg:sticky z-50 lg:top-24 rounded-lg flex  lg:flex-col justify-around  p-5  border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(rgba(74, 83, 255, 0.03) 0%, rgba(18, 30, 255, 0.02) 130%)' }}>

        <div className='w-full hidden  md:flex flex-col  justify-start gap-0  '>
          <h1 className='text-3xl font-semibold text-white'>Solopreneur</h1>
          <p className='text-sm text-gray-400 font-[550] mt-3'>You manage your business and personal life</p>
        </div>

            <div className='w-full flex flex-col items-center justify-center gap-5'>


            <a href={"/checkout"}  className=' w-full'>
          <ShinyButton className=" w-full md:w-[180px] lg:w-full rounded-lg sm:py-2  md:py-3 ">Live Preview <i className="fa-regular fa-eye"></i></ShinyButton>
            </a>


            <a href={"/checkout"} className=' w-full'>

              <ShinyButton className="bg-[#05194a] hover:bg-[#2d5dd7] w-full  md:w-[180px]  lg:w-full rounded-lg sm:py-2 md:py-3  ">Buy <i className="fa-solid fa-cart-shopping"></i></ShinyButton>

            </a>             


            </div>

       </section>


     </section>
      
    </section>
  )
}

export default Prodet_Overview
