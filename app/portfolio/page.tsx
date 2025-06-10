import React from 'react'

const Portfolio = () => {
  return (
    <div className='mt-12 lg:mt-20 bg-white flex flex-col items-start justify-center gap-2 lg:gap-8 px-4 min-lg:px-25 min-lg:py-4'>
      <h1 className='text-gray-800 text-md lg:text-xs font-semibold'>Recent Projects</h1>
      <div className='lg:w-full flex flex-col lg:flex-row justify-between'>
        <h1 className='text-gray-800 font-semibold text-4xl lg:text-5xl mb-8'>My Portfolio</h1>
        <a
          href='https://www.linkedin.com/in/tayyab-qaisar-958055254/'
          className='flex items-center justify-center bg-blue-500 text-md px-6 py-3 h-12 rounded-sm text-white font-medium'
          target='_blank'
          rel='noopener noreferrer'
        >
            Visit My LinkedIn
        </a>
      </div>
      <div className='grid grid-cols-1 min-md:grid-cols-2 min-lg:grid-cols-3 min-lg:flex-row justify-center items-center my-12 gap-8'>
        <div className='rounded-lg shadow-lg'>
            <div>
                <img src={"movie app.jpg"} alt='icon' className='w-full'></img>
            </div>
            <div className='p-6'>
                <h1 className='text-xl font-bold text-gray-800 mb-3'>Movie App</h1>
                <p className='text-lg text-gray-800 mb-8'>Want to watch movies, we bring for you about 10,000 movies at our platform!</p>
                <div className='py-1 border-b-1 border-blue-600 w-10 hover:scale-110'>
                    <a href="https://movieapplicationreact-pink.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-gray-800 font-semibold'>View</a>
                </div>
            </div>
        </div>
        <div className='rounded-lg shadow-lg'>
            <div>
                <img src={"ai app.jpg"} alt='icon' className='w-full'></img>
            </div>
            <div className='p-6'>
                <h1 className='text-xl font-bold text-gray-800 mb-3'>AI Chatbot</h1>
                <p className='text-lg text-gray-800 mb-8'>Having an issue or want to search or discuss something, our AI is here for you!</p>
                <div className='py-1 border-b-1 border-blue-600 w-10 hover:scale-110'>
                    <a href="" target="_blank" rel="noopener noreferrer" className='text-gray-800 font-semibold'>View</a>
                </div>
            </div>
        </div>
        <div className='rounded-lg shadow-lg'>
            <div>
                <img src={"portfolio.jpeg"} alt='icon' className='w-full'></img>
            </div>
            <div className='p-6'>
                <h1 className='text-xl font-bold text-gray-800 mb-3'>Portfolio</h1>
                <p className='text-lg text-gray-800 mb-8'>Want to see what have I done, once visit my portfolio!</p>
                <div className='py-1 border-b-1 border-blue-600 w-10 hover:scale-110'>
                    <a href="https://portfoliooo-theta.vercel.app/" target="_blank" rel="noopener noreferrer" className='text-gray-800 font-semibold'>View</a>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Portfolio
