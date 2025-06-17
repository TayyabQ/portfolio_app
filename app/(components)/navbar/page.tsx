"use client"

import React, { useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full bg-white overlay sticky top-0 left-0 shadow-md z-50 px-6 lg:px-12 py-3 flex justify-between items-center h-[5.625rem]'>

      <Link className='flex items-center gap-2' href='/'>
        <img src={"code (2).png"} alt='icon' className='h-16 w-16'></img>
      </Link>

      <div className='hidden lg:flex gap-8'>
        <Link className='text-gray-700' href='#services'>Services</Link>
        <Link className='text-gray-700' href='#portfolio'>Portfolio</Link>
        <Link className='text-gray-700' href='#testimonials'>Testimonials</Link>
      </div>

      <div className='hidden lg:block'>
        <Link className='bg-blue-700 px-5 py-2 rounded-sm lg:text-md text-white font-medium' href='#contact'>
          Contact
        </Link>
      </div>

      <div className='lg:hidden flex flex-row items-center justify-center gap-4'>
        <Link className='bg-blue-700 text-white text-md px-4 py-1 lg:py-2 rounded-sm' href='#contact'>
            Contact
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className='h-7 w-7 text-black' /> : <FaBars className='h-7 w-7 text-black' />}
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-full left-1/2 -translate-x-1/2 bg-white shadow-lg w-48 p-4 flex flex-col gap-3 lg:hidden justify-center items-center'>
          <Link className='text-gray-700 text-left text-[18px]' href='#services'>Services</Link>
        <Link className='text-gray-700 text-left text-[18px]' href='#portfolio'>Portfolio</Link>
        <Link className='text-gray-700 text-left text-[18px]' href='#testimonials'>Testimonials</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
