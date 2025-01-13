import React from 'react'
import { useState } from 'react';

function Header() {

  let [show, setShow] = useState(false)
  
  const handleShow = () => {
    setShow(!show)
  }
  /**
   * Handles the click event outside of the header element.
   * If the click is detected outside the header, it sets the show state to false.
   *
   * @param {Event} event - The click event object.
   */
  const handleClickOutside = (event) => {
    if (event.target.closest('header') === null) {
      setShow(false);
    }
  };

  React.useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="h-20 flex justify-center items-center fixed z-[1000] w-full left-1/2 -translate-x-1/2 mt-2">
        <div className='flex items-center justify-evenly relative z-[1000] bg-black w-[96%] ds:w-[96%] md:w-[600px] lg:w-[800px] h-[3.85rem] rounded-xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px]' style={{ background: 'linear-gradient(rgba(74, 83, 255, 0.04) 0%, rgba(0, 9, 170, 0.19) 130%)' }}>
          <h1 className='text-xl font-bold text-white'>Logo</h1>
          <nav className='w-7/12'>
            <ul className='ds:flex hidden items-center justify-evenly font-semibold text-sm w-full text-white'>
              <li><a href="/" className='text-white'>Home</a></li>
              <li><a href="/services" className='text-white'>Services</a></li>
              <li><a href="/contact" className='text-white'>Contact</a></li>
              <li><a href="/about" className='text-white'>About</a></li>
            </ul>
          </nav>

          <button className='bg-blue-600 hidden ds:flex rounded-lg py-2 px-4 text-gray-50 text-base'><a href="/signin">Login</a> </button>
          <label className="flex flex-col gap-2 w-8 ds:hidden">
            <input className="peer hidden" type="checkbox" checked={show} onChange={handleShow} />
            <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 peer-checked:rotate-[225deg] origin-right peer-checked:-translate-x-[12px] peer-checked:-translate-y-[1px]" />
            <div className="rounded-2xl h-[3px] w-full bg-white duration-500 peer-checked:-rotate-45" />
            <div className="rounded-2xl h-[3px] w-1/2 bg-white duration-500 place-self-end peer-checked:rotate-[225deg] origin-left peer-checked:translate-x-[12px] peer-checked:translate-y-[1px]" />
          </label>
        </div>

        {/* Mobile Nav */}
        <div className={`absolute bg-[#003989] block sm:hidden h-auto w-[96%] mt-[27rem] rounded-xl border-[#001170] backdrop-blur-md border-b-[1px] border-r-[1.7px] border-l-[1px] border-t-[1.7px] py-4 transition-all duration-500 opacity-100 translate-y-0 ${show ? ' block' : ' hidden '}`} style={{ background: 'linear-gradient(rgba(74, 83, 255, 0.04) 0%, rgba(0, 9, 170, 0.19) 130%)' }}>
          <nav className='sm:hidden flex items-center justify-evenly h-full text-white font-semibold text-sm'>
            <ul className='flex flex-col items-center gap-12 h-full font-semibold text-sm w-full text-white'>
              <li><a href="/" className='text-white' onClick={handleShow} >Home</a></li>
              <li><a href="/about" className='text-white' onClick={handleShow} >About</a></li>
              <li><a href="/services" className='text-white' onClick={handleShow} >Services</a></li>
              <li><a href="/contact" className='text-white' onClick={handleShow} >Contact</a></li>
              <button className='bg-blue-600 rounded-lg py-2 px-4 text-gray-50 text-base' onClick={handleShow} >Book Now</button>
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header
