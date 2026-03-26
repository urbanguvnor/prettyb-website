import React from 'react'
import { Link } from 'react-router-dom'

// image link https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg
const Hero = () => {
  return (
    <section className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
      <div 
        className='absolute inset-0 bg-cover bg-center bg-no-repeat'
        style={{
          backgroundImage: 'url(https://t4.ftcdn.net/jpg/02/73/55/33/360_F_273553300_sBBxIPpLSn5iC5vC8FwzFh6BJDKvUeaC.jpg)'
        }}
      >
        <div className='absolute inset-0 bg-black/40'></div>
      </div>

      <div className='relative z-10 text-center px-4 max-w-5xl mx-auto'>
        <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6'>
          PrettyBMUA
        </h1>

        <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-rose-300 mb-6 md:mb-8'>
          Professional Makeup Artist
        </h2>

        <p className='text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-12 font-bold'>
          Looking forward to beating your face to perfection
        </p>

        <Link
          to='/book'
          className='inline-block bg-rose-300 hover:bg-rose-400 text-gray-900 text-lg md:text-xl font-light px-8 py-3 shadow-lg'
        >
          Book Appointment
        </Link>
      </div>
    </section>
  )
}

export default Hero