"use client"

import React, { useState } from 'react';
import { FaCode, FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full bg-white fixed top-0 left-0 shadow-md z-50 px-6 lg:px-12 py-3 flex justify-between items-center'>
      {/* Left side logo */}
      <div className='flex items-center gap-2'>
        <FaCode className='h-6 w-6 text-blue-500' />
        <h1 className='text-blue-700 font-semibold text-xl'>Tayyab</h1>
        <FaCode className='h-6 w-6 text-blue-900' />
      </div>

      {/* Desktop menu */}
      <div className='hidden lg:flex gap-8'>
        <button className='text-gray-700'>Services</button>
        <button className='text-gray-700'>Portfolio</button>
        <button className='text-gray-700'>Testimonials</button>
      </div>

      {/* Contact button */}
      <div className='hidden lg:block'>
        <button className='bg-blue-700 px-4 py-2 rounded-sm lg:text-sm text-white font-medium'>
          Contact
        </button>
      </div>

      {/* Hamburger for mobile */}
      <div className='lg:hidden flex flex-row items-center justify-center gap-4'>
        <button className='bg-blue-700 text-white text-md px-4 py-1 lg:py-2 rounded-sm'>
            Contact
        </button>
        <button onClick={() => setMenuOpen(!menuOpen)}>
          {menuOpen ? <FaTimes className='h-7 w-7' /> : <FaBars className='h-7 w-7' />}
        </button>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className='absolute top-full right-0 mt-2 bg-white shadow-lg w-48 p-4 flex flex-col gap-3 lg:hidden'>
          <button className='text-gray-700 text-left'>Services</button>
          <button className='text-gray-700 text-left'>Portfolio</button>
          <button className='text-gray-700 text-left'>Testimonials</button>
        </div>
      )}
    </div>
  );
};

export default Navbar;
