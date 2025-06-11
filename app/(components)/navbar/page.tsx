"use client"

import React, { useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full bg-white fixed top-0 left-0 shadow-md z-50 px-6 lg:px-12 py-3 flex justify-between items-center'>

      <Link className='flex items-center gap-2' href='/'>
        <FaCode className='h-6 w-6 text-blue-500' />
        <h1 className='text-blue-700 font-semibold text-xl' >Tayyab</h1>
        <FaCode className='h-6 w-6 text-blue-900' />
      </Link>

      <div className='hidden lg:flex gap-8'>
        <Link className='text-gray-700' href='#services'>Services</Link>
        <Link className='text-gray-700' href='#portfolio'>Portfolio</Link>
        <Link className='text-gray-700' href='#testimonials'>Testimonials</Link>
      </div>

      <div className='hidden lg:block'>
        <Link className='bg-blue-700 px-4 py-2 rounded-sm lg:text-sm text-white font-medium' href='#contact'>
          Contact
        </Link>
      </div>

      <div className='lg:hidden flex flex-row items-center justify-center gap-4'>
        <Link className='bg-blue-700 text-white text-md px-4 py-1 lg:py-2 rounded-sm' href='#contact'>
            Contact
        </Link>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className='h-7 w-7' /> : <FaBars className='h-7 w-7' />}
        </button>
      </div>

      {menuOpen && (
        <div className='absolute top-full right-0 mt-2 bg-white shadow-lg w-48 p-4 flex flex-col gap-3 lg:hidden'>
          <Link className='text-gray-700 text-left' href='#services'>Services</Link>
        <Link className='text-gray-700 text-left' href='#portfolio'>Portfolio</Link>
        <Link className='text-gray-700 text-left' href='#testimonials'>Testimonials</Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
