import Animation1 from '@/components/animations/animation1'
import Animation2 from '@/components/animations/animation2'

import React from 'react'

const HeroSection = () => {
  return (
    <div className='min-h-screen bg-blue-50 grid grid-cols-1 min-lg:grid-cols-2 gap-8 px-4 lg:px-25 lg:py-12 lg:pt-36'>
      <Animation1>
      <div className='flex flex-col items-start justify-center gap-2 lg:gap-2'>
        <h1 className='text-blue-950 text-md lg:text-xs font-semibold'>Software Engineer Tayyab Qaisar</h1>
        <h1 className='text-gray-800 font-semibold text-5xl'>I create <span className='text-blue-800'>Web Applications</span> and <span className='text-blue-800'>Softwares</span></h1>
        <p className='text-blue-950 font-semibold text-lg'>I am a graduate of FAST NUCES Islamabad BS-SE-2024</p>
        <button className='bg-blue-700 lg:text-sm px-4 py-2 rounded-sm text-white max-lg:mt-4'>
            Get In Touch
        </button>
      </div>
      </Animation1>
      <Animation2>
      <div className='flex items-center justify-end mb-10'>
        <img src={"pic.jpg"} alt="profile photo" className='w-full rounded-4xl'></img>
      </div>
      </Animation2>
    </div>
  )
}

export default HeroSection
