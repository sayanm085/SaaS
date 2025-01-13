import React from 'react'
import Button from '@mui/material/Button';
import '../../App.css'
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import { motion} from 'framer-motion';
import UseblurAnimation from '@/Hooks/Animation/UseblurAnimation';

function AboutContact() {
  return (
    <section className="w-full h-80 bg-[#05071A] ">
      <motion.div
        variants={UseblurAnimation()}
        initial="offscreen"
        whileInView="onscreen"
        exit="exit"
        viewport={{ once: true }}
       className=' h-full w-full flex flex-col gap-8 justify-center items-center'>
        <div className="flex flex-col justify-center items-center gap-5 h-auto ">
          <h2 className=" text-lg ds:text-2xl  sm:text-3xl md:text-3xl  lg:text-4xl text-white sora-regular md:w-10/12 lg:w-4/6 px-5 text-center">
            Here at Conversion, we focus on returns. We're dedicated to scaling
            your brand with paid advertising. Break free and take your brand to
            next level.
          </h2>
        </div>

        <Button
          variant="contained"
          id="but-about-cont"
          className="h-10 bg-[#2563EB]"
          onMouseEnter={(e) =>
            (e.target.style.boxShadow = "0 0 0 0.2rem rgba(0,123,255,.5)")
          }
          onMouseLeave={(e) => (e.target.style.boxShadow = "none")}
        >
          Book a 15-min call
          <ArrowRightAltIcon />
        </Button>
      </motion.div>
    </section>
  );
}

export default AboutContact
