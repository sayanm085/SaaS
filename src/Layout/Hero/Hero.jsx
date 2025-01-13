import React from 'react'
import '../../App.css'
import Particles from '@/components/ui/particles';
import Meteors from '@/components/ui/meteors';
import ShinyButton from "@/components/ui/shiny-button";
import HeroVideoDialog from "@/components/ui/hero-video-dialog"
import { motion } from 'framer-motion';


function Hero() {

  let blurAnimation = {
    hidden: { opacity: 0, filter: 'blur(10px)' },
    visible: { opacity: 1, filter: 'blur(0px)', transition: { duration: 1, staggerChildren:0.3 } },
    exit: { opacity: 0, filter: 'blur(10px)', transition: { duration: 1 } }
  }



  const cardVariants = {
    offscreen: {
      y: 100,
      scale: 0.5 ,
    },
    onscreen: {
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        bounce: 0.4,
       
        duration: 0.9
      }
    }
  };
    
  






  return (
    <>
      <section className="flex flex-col items-center  h-auto relative overflow-hidden bg-[#05071A] ">
       <Meteors number={30} />
       <Particles
        className="absolute inset-0"
        quantity={400}
        ease={80}
        color={'#ffffff'}
        refresh
      />
      {/* div 1 */}
        <div className="w-full flex justify-center text-center mt-44 md:mt-52 lg:mt-72  relative z-50">
          <motion.div
          initial="hidden"
          animate="visible"
          exit="exit"
          variants={blurAnimation}
           className="md:w-10/12 xl:w-2/3 sm:w-11/12 w-11/12">
            <motion.h1 

            variants={blurAnimation}


             className="text-3xl ds:text-[2rem] sm:text-[2.49rem] sm:leading-[2.9rem]  md:text-[2.7rem] lg:text-[3.55rem] lg:leading-[3.3rem] sora-regular text-white">Boost your <span className='noto-serif text-white'>brand</span> with unique visuals and <span className='instrument-serif-regular-italic text-white'>flawless</span> sites.</motion.h1>
            <motion.p

            variants={blurAnimation}
             className="py-6 text-sm md:text-sm lg:text-lg text-[#c1c1c1]">
            Where innovation intersects perfection. Reimagine your brand through captivating websites, striking photographs, effortless apps, and robust campaigns. Discover the blend of impeccable service and artistry.
            </motion.p>
            <ShinyButton className="bg-[#3d74ff] rounded-lg sm:py-2 sm:px-6 md:py-3 md:px-7 text-[white] text-lg">Get Started</ShinyButton>
          </motion.div>
        </div>
      {/* div 1 end */}

      {/* div 2 */}

      <motion.div
      initial="offscreen"
      whileInView="onscreen"
      variants={cardVariants}
      viewport={{ once: true }}
       className='relative   lg:h-[600px] w-full flex z-[999] items-end justify-center overflow-hidden mt-12 sm:mt-12  lg:mt-0'>
        <div className='relative  h-auto w-[500px] md:w-[80%]  lg:w-[850px]  top-3 bg-slate-800 rounded-md '>
        <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/Pzk-x8ze9KA?si=8icHrTUQ41UXDX-Q"
        thumbnailSrc="https://www.framer.com/marketplace/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F47552%2Faston-qx8BWhQamGdZwZDeyLOepQwilSzIEN&w=1080&q=100"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/Pzk-x8ze9KA?si=8icHrTUQ41UXDX-Q"
        thumbnailSrc="https://www.framer.com/marketplace/_next/image/?url=https%3A%2F%2Fy4pdgnepgswqffpt.public.blob.vercel-storage.com%2Ftemplates%2F47552%2Faston-qx8BWhQamGdZwZDeyLOepQwilSzIEN&w=1080&q=100"
        thumbnailAlt="Hero Video"
      />


        </div>

      </motion.div>

      <div className=' absolute z-0 h-full top-[55%] xs1:top-[40%] ds:top-[26%]  sm:top-[35%]  md:top-[27%] lg:top-[17%] xl:top-0 '>

        <img  src="https://framerusercontent.com/images/0pkkUPiiBy68AdWhcnSLJijrCvQ.svg" alt="background img"  className='w-screen brightness-90 relative'/>
        
      </div>


      </section>
    </>
  );
}

export default Hero
