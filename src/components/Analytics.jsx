import React from 'react'
import Laptop from '../assets/laptop.jpg'

const Analytics = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
      <div className='max-w-[1240px] mx-auto grid md:grid-cols-2'>
        <img className='w-[500px] mx-auto my-4' src={Laptop} alt='/' />
        <div className='flex flex-col justify-center'>
          <p className='text-[#00d9fa] font-bold'>DATA ANALYTICS DASHBOARD</p>
          <h1 className='md:text-4xl sm:text-3xl text-2xl font-bold py-2'>
            Manage Data Analytics Centrally
          </h1>
          <p className=''>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maxime
            impedit vero consequuntur cumque libero, labore in et quam, veniam
            deleniti iure, unde ducimus officia quidem?
          </p>
          <button className='bg-black text-[#00df9a] w-[200px] rounded-lg font-medium my-6 mx-auto px-6 py-4 md:mx-0'>
            Get Started
          </button>
        </div>
      </div>
    </div>
  )
}

export default Analytics
