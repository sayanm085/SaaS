import React from 'react'
import { Link } from 'react-router-dom'
import   {imgtem1, imgtem2, imgtem3} from "@/Layout/ServiceProduct/img"

function ProDet_img() {
  return (
    <section className='h-auto w-full flex justify-center '>
      <div className="h-auto w-[96%] md:w-10/12 md2:w-4/5 bg-white rounded-lg flex items-center  mx-auto border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(rgba(74, 83, 255, 0.03) 0%, rgba(18, 30, 255, 0.02) 130%)' }}>

    {/*//*1st product box */}
    <div className='w-full h-auto flex justify-center md:justify-between flex-wrap gap-4 p-5 '>

      {/* 1st product */}
      <Link to={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-full md:w-[48%] xl:w-[49%]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem1} alt="imgtem1" className='w-full rounded-2xl' />
        </div>
      </Link>

      {/* 2nd product */}
      <Link to={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-full md:w-[48%] xl:w-[49%]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem3} alt="imgtem1" className='w-full rounded-2xl' />
        </div>
      </Link>

      {/* 3rd product */}
      <Link to={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-full md:w-[48%] xl:w-[49%] '>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem2} alt="imgtem1" className='w-full rounded-2xl' />
        </div>
      </Link>




      <Link to={"/products/ProductDetails"} className='h-auto w-11/12 sm:w-full md:w-[48%] xl:w-[49%]'>
        <div className="rounded-2xl mx-auto border-[#414141] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]">
          <img src={imgtem3} alt="imgtem1" className='w-full rounded-2xl' />
        </div>
      </Link>

     


    </div>

    {/*//*1st product box end */}
      
      
      
      
       </div>
      
    </section>
  )
}

export default ProDet_img
