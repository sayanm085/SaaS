import React from 'react'


function AboutMain() {
  return (
    <section className='h-auto w-full py-12 px-4'>
      <div className='max-w-6xl mx-auto'>
        <h1 className='text-4xl font-bold text-center mb-8 text-white'>About Shotlin</h1>
        
        <div className='grid md:grid-cols-2 gap-8'>
          <div className="h-auto  p-8 bg-white rounded-2xl mx-auto border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)' }}>
            <h2 className='text-2xl font-semibold mb-4 text-white'>Our Mission</h2>
            <p className='text-white leading-relaxed'>
              At Shotlin, we are dedicated to providing innovative solutions in sports analytics
              and performance tracking. Our goal is to empower athletes and teams to reach their
              full potential through cutting-edge technology.
            </p>
          </div>

          <div className="h-auto p-8 bg-white rounded-2xl mx-auto border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)' }}>
            <h2 className='text-2xl font-semibold mb-4 text-white'>Who We Are</h2>
            <p className='text-white leading-relaxed'>
              Founded by passionate sports enthusiasts and tech experts, Shotlin combines
              advanced analytics with practical sports knowledge to deliver comprehensive
              solutions for athletes at all levels.
            </p>
          </div>
        </div>

        <div className="h-auto  p-8 mt-6 bg-white rounded-2xl mx-auto border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]" style={{ background: 'linear-gradient(180deg,rgba(74,83,255,.04) 0%,rgba(18,30,255,.25) 130%)' }}>
          <h2 className='text-2xl font-semibold mb-4 text-white'>Our Values</h2>
          <ul className='grid md:grid-cols-3 gap-4'>
            <li className='text-white p-4  rounded'>
              <span className='font-semibold'>Innovation</span>: Pushing boundaries in sports technology
            </li>
            <li className='text-white p-4 rounded'>
              <span className='font-semibold'>Excellence</span>: Striving for the highest quality
            </li>
            <li className='text-white p-4  rounded'>
              <span className='font-semibold'>Integrity</span>: Maintaining honest relationships
            </li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default AboutMain