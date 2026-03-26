import React from 'react'
import { Link } from 'react-router-dom'

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex items-center justify-center overflow-hidden bg-rose-300'>
      <div className='relative z-10 text-center px-4 max-w-5xl mx-auto'>
        <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 custom-font'>
          PrettyBMUA
        </h1>

        <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 md:mb-8 custom-font'>
          Professional Makeup Artist
        </h2>

        <p className='text-lg md:text-xl lg:text-2xl text-gray-800 mb-8 md:mb-12 font-light'>
          Looking forward to beating your face to perfection
        </p>

        <Link
          to='/terms'
          className='inline-block bg-gray-900 hover:bg-gray-800 text-white text-lg md:text-xl font-light px-8 py-3 shadow-lg transition-all'
        >
          Book Appointment
        </Link>
      </div>
    </section>
  )
}

export default Hero