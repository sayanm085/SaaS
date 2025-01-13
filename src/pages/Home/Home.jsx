import React from 'react'
import{Hero,LoopSlider,Services,Comparison,AboutContact,OurClients,NewsLetter,FAQs,WhyChoose } from '../../Layout'


function Home() {
  return (
    <>
    <Hero/>
    <LoopSlider pro={{show:true}} bg={{color:"#05071A"}}/>
    <Services/>
    <WhyChoose/>
    <Comparison/>
    <AboutContact/>
   <OurClients/>
    <FAQs/>
   <NewsLetter/> 
    </>
  )
}

export default Home
