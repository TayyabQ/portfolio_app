import Animation1 from '@/components/animations/animation1'
import Animation2 from '@/components/animations/animation2'

import React from 'react'

const HeroSection = () => {
  return (
    <div className='bg-blue-50 grid grid-cols-1 min-lg:grid-cols-2 gap-8 px-10 py-20 lg:px-16 lg:py-25 position: sticky'>
      <div className='flex flex-col items-start justify-center gap-2 lg:gap-2'>
        <Animation1>
        <h1 className='text-blue-950 text-md lg:text-[16px] font-semibold'>Software Engineer Tayyab Qaisar</h1>
        </Animation1>
        <Animation1>
        <h1 className='text-gray-800 font-semibold text-[40px] md:text-[56px]'>I create <span className='text-blue-800'>Web Applications</span> and <span className='text-blue-800'>Softwares</span></h1>
        </Animation1>
        <Animation1>
        <p className='text-blue-950 font-semibold text-[18px]'>I am a graduate of FAST NUCES Islamabad BS-SE-2024</p>
        </Animation1>
        <Animation1>
        <button className='bg-blue-700 lg:text-[16px] px-8 py-3.5 rounded-sm text-white mt-8'>
            Get In Touch
        </button>
        </Animation1>
      </div>
      <Animation1>
      <div className='flex items-center justify-center mb-0'>
        <img src={"pic.jpg"} alt="profile photo" className='w-full rounded-4xl'></img>
      </div>
      </Animation1>
    </div>
  )
}

export default HeroSection
