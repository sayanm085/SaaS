import React from 'react'

function NewsLetter() {
  return (
   <section className='h-auto w-full bg-[#05071A] flex items-center justify-center py-4 '>

    <div className='bg-blue-500 h-[350px] w-[95%] sm:w-10/12 md:w-3/4 flex justify-center items-center rounded-2xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]' style={{ background: 'linear-gradient(rgba(74, 83, 255, 0.04) 0%, rgba(0, 3, 51, 0.25) 130%)' }}>
          
        {/* Newsletter background box !! Don't touch*/}
        <div className='h-[100%] w-[100%]  absolute overflow-hidden -z-[1] left-1/2 -translate-x-1/2  flex justify-center '>

         <div className='h-[410px] w-[600px] rounded-full bg-[#2B006A]   mt-36 blur-3xl ' >

         </div>

        </div>
        
        
        <div className= ' w-full  text-white flex flex-col justify-center items-center gap-11 '>
          {/* Newsletter Title */}
          <div  className= ' w-full  text-white flex flex-col justify-center items-center gap-3 px-4'>
            <h1 className='text-[1.6rem] ds:text-3xl sm:text-4xl font-bold text-center '>Subscribe to our newsletter</h1>
            <p className='text-[#d3d3d3] text-center '>Get the latest news and updates from us</p>
          </div>

         {/* //TODO: Newsletter Input  css Improve */}
          <div className='flex gap-3 w-full flex-wrap ds:flex-nowrap justify-center px-4'>
            <input type='text' placeholder='Enter your email address' className='w-full ds:w-[70%] sm:w-96 h-12 bg-white rounded-lg px-4' />
            <button className=' w-28 ds:w-24 h-12 bg-blue-500 rounded-lg text-white'>Subscribe</button>
          </div>
        </div>





    </div>

   </section>
  );
}

export default NewsLetter
