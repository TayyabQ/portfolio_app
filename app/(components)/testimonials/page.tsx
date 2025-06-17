import Animation1 from '@/components/animations/animation1'
import Animation2 from '@/components/animations/animation2'

import React from 'react'
import { FaStar } from 'react-icons/fa';

const Testimonials = () => {
  return (
    <div className='bg-blue-50 flex flex-col items-start justify-center gap-2 lg:gap-8 px-10 py-14 min-lg:px-16 min-lg:py-25'>
        <Animation1>
      <h1 className='text-gray-800 text-md lg:text-xs font-semibold mb-6'>Client's Feedback</h1>
      <h1 className='text-gray-800 font-semibold text-4xl lg:text-5xl'>Customer Testimonials</h1>
      </Animation1>
      <div className='w-full'>
        <Animation2>
      <div className='grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-3 min-lg:flex-row justify-center items-center lg:items-start my-8 gap-8'>
        <div className='flex flex-col bg-blue-50 p-8 rounded-lg border-1 border-gray-800 hover:border-blue-700'>
            <div className='h-full w-full flex flex-row items-center justify-start gap-1 pb-4'>
                <FaStar  className='text-green-700'/>
                <FaStar  className='text-green-700'/>
                <FaStar  className='text-green-700'/>
                <FaStar  className=''/>
                <FaStar  className=''/>
            </div>
            <div className='h-full'>
            <p className='text-lg text-gray-800'>Tayyab is an excellent Developer who made a very user-friendly no-code engine to make web apps using ui drag and drop builder for the ease of small and non-technical businesses</p>
            </div>
            <div className='flex flex-row items-center justify-start gap-4 pt-4'>
                <img src={'code.svg'} alt='icon' className='w-6 h-6'></img>
                <div className='flex flex-col'>
                    <h1 className='text-md font-bold text-gray-800'>FAST NUCES</h1>
                    <p className='text-md text-gray-800'>FYP Panel</p>
                </div>
            </div>
        </div>
        <div className='h-full w-full flex flex-col bg-blue-50 p-8 rounded-lg border-1 border-gray-800 hover:border-blue-700'>
            <div className='flex flex-row items-center justify-start gap-1 pb-4'>
                <FaStar className='text-green-700'/>
                <FaStar className='text-green-700'/>
                <FaStar className='text-green-700'/>
                <FaStar className='text-green-700'/>
                <FaStar className=''/>
            </div>
            <div className='h-full'>
                <p className='text-lg text-gray-800'>Tayyab provides great and timely development services. He did both, Development & Operations</p>
            </div>
            <div className='flex flex-row items-center justify-start gap-4 pt-4'>
                <img src={'code.svg'} alt='icon' className='w-6 h-6'></img>
                <div className='flex flex-col bottom-0'>
                    <h1 className='text-md font-bold text-gray-800'>CMYK Technologies, Gujranwala</h1>
                    <p className='text-md text-gray-800'>CEO</p>
                </div>
            </div>
        </div>
        <div className='h-full w-full flex flex-col bg-blue-50 p-8 rounded-lg border-1 border-gray-800 hover:border-blue-700'>
            <div className='flex flex-row items-center justify-start gap-1 pb-4'>
                <FaStar className='text-green-700'/>
                <FaStar className='text-green-700'/>
                <FaStar className='text-green-700'/>
                <FaStar className='text-green-700'/>
                <FaStar className='text-green-700'/>
            </div>
            <div className='h-full'>
                <p className='text-lg text-gray-800'>Tayyab has done very well work!</p>
            </div>
            <div className='flex flex-row items-center justify-start gap-4 pt-4'>
                <img src={'code.svg'} alt='icon' className='w-6 h-6'></img>
                <div className='flex flex-col'>
                    <h1 className='text-md font-bold text-gray-800'>Soltridge, Rawalpindi</h1>
                    <p className='text-md text-gray-800'>Mr. Abdul Ahad Shams</p>
                </div>
            </div>
        </div>
      </div>
      </Animation2>
      </div>
    </div>
  )
}

export default Testimonials
