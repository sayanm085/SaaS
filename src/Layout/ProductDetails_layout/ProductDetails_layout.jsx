import React from 'react'
import {ProDet_hero, Prodet_Overview, ProDet_img} from './Pro_Details_compo/index'
import Particles from '@/components/ui/particles'
function ProductDetails_layout() {
  return (
    <section className=' h-auto bg-[#05071A] relative '> 
           
       <Particles
        className="absolute inset-0"
        quantity={400}
        ease={80}
        color={'#ffffff'}
        refresh
      />

      <ProDet_hero />
      <ProDet_img />
      <Prodet_Overview />
    </section>
  )
}

export default ProductDetails_layout
