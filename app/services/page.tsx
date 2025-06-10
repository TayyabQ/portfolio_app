import React from 'react'

const Services = () => {
  return (
    <div className='mt-12 lg:mt-20 mb-6 lg:mb-20 bg-white flex flex-col items-start justify-center gap-2 lg:gap-8 px-4 min-lg:px-25 min-lg:py-4'>
      <h1 className='text-gray-800 text-md lg:text-xs font-semibold'>My Skills</h1>
      <h1 className='text-gray-800 font-semibold text-4xl lg:text-5xl'>My Expertise</h1>
      <div className='w-full'>
      <div className='grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-4 min-lg:flex-row justify-center items-center lg:items-start my-8 gap-8'>
        <div className='bg-blue-50 p-6 rounded-lg hover:border-b-3 hover:border-blue-700'>
            <img src={"code.svg"} alt='icon' className='h-8 w-8 mb-6'></img>
            <h1 className='text-xl font-bold text-gray-800 mb-3 lg:mb-6'>Software Engineering</h1>
            <p className='text-lg text-gray-800'>Just bring to me a problem and I will provide you solution for that!</p>
        </div>
        <div className='bg-blue-50 p-6 rounded-lg hover:border-b-3 hover:border-blue-700'>
            <img src={"code.svg"} alt='icon' className='h-8 w-8 mb-6'></img>
            <h1 className='text-xl font-bold text-gray-800 mb-3 lg:mb-6'>Web Development</h1>
            <p className='text-lg text-gray-800'>Want a website or web app for your business. I am here for you!</p>
        </div>
        <div className='bg-blue-50 p-6 rounded-lg hover:border-b-3 hover:border-blue-700'>
            <img src={"code.svg"} alt='icon' className='h-8 w-8 mb-6'></img>
            <h1 className='text-xl font-bold text-gray-800 mb-3 lg:mb-6'>Mobile Development</h1>
            <p className='text-lg text-gray-800'>To provide ease to users, come to me for a mobile app!</p>
        </div>
        <div className='bg-blue-50 p-6 rounded-lg hover:border-b-3 hover:border-blue-700'>
            <img src={"code.svg"} alt='icon' className='h-8 w-8 mb-6'></img>
            <h1 className='text-xl font-bold text-gray-800 mb-3 lg:mb-6'>DevOps</h1>
            <p className='text-lg text-gray-800'>Need Automation in your system, just reach out to me!</p>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Services
