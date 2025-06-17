import Animation1 from '@/components/animations/animation1'
import Animation2 from '@/components/animations/animation2'

import React from 'react'

const Services = () => {
  return (
    <div className='bg-white flex flex-col items-start justify-center gap-2 lg:gap-8 px-10 py-24 min-lg:px-16 min-lg:py-28'>
      <Animation1>
      <h1 className='text-gray-800 text-md lg:text-xs font-semibold mb-6'>My Skills</h1>
      <h1 className='text-gray-800 font-semibold text-4xl lg:text-5xl'>My Expertise</h1>
      </Animation1>
      <div className='w-full'>
        <Animation2>
      <div className='grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-4 min-lg:flex-row justify-center items-center lg:items-start my-8 gap-8'>
        <div className='bg-blue-50 p-6 rounded-lg hover:border-b-3 hover:border-blue-700'>
            <img src={"development.png"} alt='icon' className='h-8 w-8 mb-6'></img>
            <h1 className='text-xl font-bold text-gray-800 mb-3 lg:mb-6'>Software Engineering</h1>
            <p className='text-lg text-gray-800'>Just bring to me a problem and I will provide you solution for that!</p>
        </div>
        <div className='bg-blue-50 p-6 rounded-lg hover:border-b-3 hover:border-blue-700'>
            <img src={"code (1).png"} alt='icon' className='h-8 w-8 mb-6'></img>
            <h1 className='text-xl font-bold text-gray-800 mb-3 lg:mb-6'>Web Development</h1>
            <p className='text-lg text-gray-800'>Want a website or web app for your business. I am here for you!</p>
        </div>
        <div className='bg-blue-50 p-6 rounded-lg hover:border-b-3 hover:border-blue-700'>
            <img src={"app-development.png"} alt='icon' className='h-8 w-8 mb-6'></img>
            <h1 className='text-xl font-bold text-gray-800 mb-3 lg:mb-6'>Mobile Development</h1>
            <p className='text-lg text-gray-800'>To provide ease to users, come to me for a mobile app!</p>
        </div>
        <div className='bg-blue-50 p-6 rounded-lg hover:border-b-3 hover:border-blue-700'>
            <img src={"devops.png"} alt='icon' className='h-8 w-8 mb-6'></img>
            <h1 className='text-xl font-bold text-gray-800 mb-3 lg:mb-6'>DevOps</h1>
            <p className='text-lg text-gray-800'>Need Automation in your system, just reach out to me!</p>
        </div>
      </div>
      </Animation2>
      </div>
    </div>
  )
}

export default Services
