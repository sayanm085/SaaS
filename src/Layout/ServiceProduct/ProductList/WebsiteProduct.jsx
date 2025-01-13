import React from 'react'
import { imgtem1, imgtem2, imgtem3 } from '../img/index'

function WebsiteProduct() {
  return (
    <section id="center-product-box" className="w-full ds:w-[90%] h-full flex flex-col px-7">
    {/* 1st box */}

   <div className='w-full flex items-center gap-3 '>
    <div className='py-5 ml-5 w-full xs1:w-[300px] md2:w-[240px] flex items-center gap-3 '>
       <h1 className='text-white text-lg w-fit'>All Web Product</h1>
       <a href="/products" className='text-[#9e9e9e] hover:text-white w-fit'>Explore all <i class="fa-solid fa-chevron-right text-sm "></i></a>
     </div>

     <div className=' hidden md:block  md:w-[70%] h-[0.5px] bg-[#ffffff5c] '></div>
   </div>


    {/*//*1st product box */}
    <div className='w-full h-auto flex justify-center md:justify-between flex-wrap gap-6 '>

      {/* 1st product */}
      <a href={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-[70%] md:w-[19.1rem] md2:w-[22.5rem]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem1} alt="imgtem1" className='w-full rounded-2xl' />
        </div>

        <div className="h-20 w-full px-2 pt-2">
          <div className="w-full flex justify-between items-center ">
             <p className="text-white text-base">Solopreneur</p>
             <div className="text-[#9e9e9e] text-sm">$400</div>
          </div>

          <div className=' text-[#b7b7b7] text-xs'>
             <p>React App</p>
          </div>

        </div>

      </a>

      {/* 2nd product */}
      <a href={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-[70%] md:w-[19.1rem] md2:w-[22.5rem]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem2} alt="imgtem1" className='w-full rounded-2xl' />
        </div>

        <div className="h-20 w-full px-2 pt-2">
          <div className="w-full flex justify-between items-center ">
             <p className="text-white text-base">Featureful</p>
             <div className="text-[#9e9e9e] text-sm">$150</div>
          </div>

          <div className=' text-[#b7b7b7] text-xs'>
             <p>Node app</p>
          </div>

        </div>

      </a>

      {/* 3rd product */}
      <a href={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-[70%] md:w-[19.1rem] md2:w-[22.5rem]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem3} alt="imgtem1" className='w-full rounded-2xl' />
        </div>

        <div className="h-20 w-full px-2 pt-2">
          <div className="w-full flex justify-between items-center ">
             <p className="text-white text-base">Solop</p>
             <div className="text-[#9e9e9e] text-sm">$500</div>
          </div>

          <div className=' text-[#b7b7b7] text-xs'>
             <p>MERN App</p>
          </div>

        </div>

      </a>




      <a href={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-[70%] md:w-[19.1rem] md2:w-[22.5rem]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem1} alt="imgtem1" className='w-full rounded-2xl' />
        </div>

        <div className="h-20 w-full px-2 pt-2">
          <div className="w-full flex justify-between items-center ">
             <p className="text-white text-base">Solopreneur</p>
             <div className="text-[#9e9e9e] text-sm">$400</div>
          </div>

          <div className=' text-[#b7b7b7] text-xs'>
             <p>React App</p>
          </div>

        </div>

      </a>

      {/* 2nd product */}
      <a href={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-[70%] md:w-[19.1rem] md2:w-[22.5rem]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem2} alt="imgtem1" className='w-full rounded-2xl' />
        </div>

        <div className="h-20 w-full px-2 pt-2">
          <div className="w-full flex justify-between items-center ">
             <p className="text-white text-base">Featureful</p>
             <div className="text-[#9e9e9e] text-sm">$150</div>
          </div>

          <div className=' text-[#b7b7b7] text-xs'>
             <p>Node app</p>
          </div>

        </div>

      </a>

      {/* 3rd product */}
      <a href={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-[70%] md:w-[19.1rem] md2:w-[22.5rem]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem3} alt="imgtem1" className='w-full rounded-2xl' />
        </div>

        <div className="h-20 w-full px-2 pt-2">
          <div className="w-full flex justify-between items-center ">
             <p className="text-white text-base">Solop</p>
             <div className="text-[#9e9e9e] text-sm">$500</div>
          </div>

          <div className=' text-[#b7b7b7] text-xs'>
             <p>MERN App</p>
          </div>

        </div>

      </a>


    </div>

    {/*//*1st product box end */}

    </section>
  )
}

export default WebsiteProduct
