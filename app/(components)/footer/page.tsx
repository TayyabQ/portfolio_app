"use client"

import React, { useState } from 'react';
import { FaCode} from 'react-icons/fa';
import { FaLinkedin } from 'react-icons/fa';
import Link from 'next/link'

const Footer = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className='w-full'>
        <div className='bg-blue-50 px-6 lg:px-12 py-16 gap-8 lg:gap-0 shadow-md flex flex-col lg:flex-row justify-between items-center'>
        <div className='flex items-center gap-2'>
            <FaCode className='h-6 w-6 text-blue-500' />
            <Link className='text-blue-700 font-semibold text-xl' href='/'>Tayyab</Link>
            <FaCode className='h-6 w-6 text-blue-900' />
        </div>

        <div className='flex flex-col lg:flex-row items-center justify-center gap-2 lg:gap-8'>
            <Link className='text-gray-700' href='/services'>Services</Link>
            <Link className='text-gray-700' href='/portfolio'>Portfolio</Link>
            <Link className='text-gray-700' href='/testimonials'>Testimonials</Link>
        </div>

        <div className='block'>
            <a href="https://www.linkedin.com/in/tayyab-qaisar-958055254/" target="_blank" rel="noopener noreferrer" className='text-gray-800 font-semibold'><FaLinkedin className='w-6 h-6'/></a>
        </div>
    </div>
        
    <div className='bg-gray-800 h-0.5 px-6 lg:px-12'>

    </div>
    <div className='bg-blue-50 px-6 lg:px-12 pt-6 pb-16 shadow-md flex flex-row justify-center items-center'>
       <h1 className='font-normal text-md'>Made by Tayyab Qaisar</h1>
    </div>
</div>
  );
};

export default Footer;
