import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className='w-full bg-rose-50 pt-8 pb-4'>
      <div className='max-w-7xl mx-auto px-6 lg:px-8'>
        {/* Main Footer Content */}
        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-12'>
          {/* Brand Section */}
          <div>
            <h3 className='text-2xl md:text-2xl font-bold mb-4 custom-font'>
              <span className='text-rose-300'>Pretty</span>
              <span className='text-rose-400'>BMUA</span>
            </h3>
            <p className='text-gray-600 text-sm md:text-sm leading-relaxed'>
              Professional makeup artistry for your special moments. Enhancing natural beauty with expertise and care.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className='text-gray-900 font-base text-lg mb-6 custom-font'>
              QUICK LINKS
            </h4>
            <ul className='space-y-3'>
              <li>
                <a href='#home' className='text-gray-600 hover:text-rose-400 transition-colors text-sm'>
                  Home
                </a>
              </li>
              <li>
                <a href='#services' className='text-gray-600 hover:text-rose-400 transition-colors text-sm'>
                  Services
                </a>
              </li>
              <li>
                <Link to='/terms' className='text-gray-600 hover:text-rose-400 transition-colors text-sm'>
                  Terms & Info
                </Link>
              </li>
              <li>
                <Link to='/terms' className='text-gray-600 hover:text-rose-400 transition-colors text-sm'>
                  Book Appointment
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Us */}
          <div>
            <h4 className='text-gray-900 font-base text-lg mb-6 custom-font'>
              CONTACT US
            </h4>
            <ul className='space-y-4'>
              <li className='flex items-start text-gray-600 text-sm'>
                <svg
                  className='w-5 h-5 mr-3 mt-0.5 text-rose-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
                <span>Richmond, Texas United States</span>
              </li>
              <li className='flex items-center text-gray-600 text-sm'>
                <svg
                  className='w-5 h-5 mr-3 text-rose-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    d='M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z'
                  />
                </svg>
                <a href='tel:+16303971565' className='hover:text-rose-400 transition-colors'>
                  +1 (630) 397-1565
                </a>
              </li>
              <li className='flex items-center text-gray-600 text-sm'>
                <svg
                  className='w-5 h-5 mr-3 text-rose-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    d='M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z'
                  />
                  <path
                    d='M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z'
                  />
                </svg>
                <a href='mailto:bolasoile@yahoo.com' className='hover:text-rose-400 transition-colors'>
                  bolasoile@yahoo.com
                </a>
              </li>
            </ul>

            {/* Follow Us */}
            <div className='mt-8'>
              <h4 className='text-gray-900 font-bold text-lg mb-4'>
                FOLLOW US
              </h4>
              <a
                href='https://www.instagram.com/prettyb_mua'
                target='_blank'
                rel='noopener noreferrer'
                className='inline-flex items-center justify-center w-10 h-10  hover:text-rose-400 transition-colors'
              >
                <svg
                  className='w-5 h-5'
                  fill='currentColor'
                  viewBox='0 0 28 28'
                >
                  <path
                    d='M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z'
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className='border-t border-gray-300 pt-8'>
          <p className='text-center text-gray-600 text-sm'>
            © {new Date().getFullYear()} PrettyBMUA. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}

export default Footer