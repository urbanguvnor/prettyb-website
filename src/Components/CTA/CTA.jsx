import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='w-full py-20 md:py-18 bg-rose-50'>
      <div className='max-w-4xl mx-auto px-6 text-center'>
        <h2 className='text-xl md:text-2xl lg:text-4xl font-bold text-gray-900 mb-6 md:mb-8'>
          Ready to Look Your Best?
        </h2>

        <p className='text-gray-600 text-lg md:text-xl lg:text-lg mb-10 md:mb-12 max-w-3xl mx-auto'>
          Schedule your appointment today and let us create the perfect look for your special occasion
        </p>

        <Link
          to='/book'
          className='inline-flex items-center bg-rose-300  text-gray-900 text-sm md:text-lg font-medium px-10 py-4 md:px-6 md:py-3 transition-all duration-300 hover:shadow-lg'
        >
          Schedule Your Appointment
          <svg
            className='w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform'
            fill='none'
            stroke='currentColor'
            viewBox='0 0 24 24'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M17 8l4 4m0 0l-4 4m4-4H3'
            />
          </svg>
        </Link>
      </div>
    </section>
  )
}

export default CTA