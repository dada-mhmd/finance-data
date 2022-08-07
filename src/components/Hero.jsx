import React from 'react'
import Typed from 'react-typed'

const Hero = () => {
  return (
    <div className='text-white'>
      <div className='max-w-[800px] w-full h-screen mt-[-96px] mx-auto text-center flex flex-col justify-center'>
        <p className='text-[#00df9a] font-bold p-2 uppercase'>
          Growing With Data Analytics
        </p>
        <h1 className='uppercase md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
          Grow with data.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold py-4'>
            Fast, flexible financing for
          </p>
          <Typed
            className='md:text-5xl sm:text-4xl text-xl font-bold md:pl-4 pl-2'
            strings={['BTB', 'BTC', 'SASS']}
            typeSpeed={120}
            backSpeed={140}
            loop
          />
        </div>

        <p className='md:text-2xl text-xl from-bold text-gray-500'>
          Monitor your data analytics to increase revenue for BTB, BTC, & SASS
          platforms.
        </p>

        <button className='bg-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-auto px-6 py-4 text-black'>
          Get Started
        </button>
      </div>
    </div>
  )
}

export default Hero
