import React from 'react'
import { Link } from 'react-router-dom'
import { useLocation } from 'react-router-dom';

const TermsAndInfo = () => {
    const location = useLocation();
  const selectedService = location.state?.selectedService;

  return (
    <div className='min-h-screen bg-gray-50 py-12 px-4 md:px-6 lg:px-8'>
      <div className='max-w-2xl mx-auto'>
        <div className='text-center mb-12'>
          <div className='flex justify-center mb-6'>
            <div className='w-12 h-12 rounded-full border-2 border-rose-300 flex items-center justify-center'>
              <svg
                className='w-6 h-6 text-rose-300'
                fill='none'
                stroke='currentColor'
                viewBox='0 0 24 24'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
          </div>

          <h1 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4 custom-font'>
            PLEASE READ INSTRUCTIONS BEFORE CONTINUING
          </h1>
          <p className='text-gray-600 text-sm md:text-base '>
            To ensure the best experience for your appointment, please review our policies below.
          </p>
        </div>

        <div className='bg-white border-t-8 border-rose-200 mb-6 overflow-hidden shadow-md'>
          <div className='px-6 py-4'>
            <div className='flex items-center'>
              <svg
                className='w-5 h-5 text-rose-400 mr-3'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M4 4a2 2 0 012-2h8a2 2 0 012 2v12a1 1 0 110 2h-3a1 1 0 01-1-1v-2a1 1 0 00-1-1H9a1 1 0 00-1 1v2a1 1 0 01-1 1H4a1 1 0 110-2V4zm3 1h2v2H7V5zm2 4H7v2h2V9zm2-4h2v2h-2V5zm2 4h-2v2h2V9z'
                  clipRule='evenodd'
                />
              </svg>
              <h2 className='text-lg md:text-xl font-medium text-gray-900'>
                Deposit & Late Fee Policy
              </h2>
            </div>
          </div>

          <div className='p-6 space-y-6'>
            <div className='flex items-start'>
              <div className='shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 mt-1'>
                <svg
                  className='w-4 h-4 text-rose-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M4 4a2 2 0 00-2 2v4a2 2 0 002 2V6h10a2 2 0 00-2-2H4zm2 6a2 2 0 012-2h8a2 2 0 012 2v4a2 2 0 01-2 2H8a2 2 0 01-2-2v-4zm6 4a2 2 0 100-4 2 2 0 000 4z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-900 mb-1'>50% Deposit Required</h3>
                <p className='text-gray-600 text-sm'>
                  A 50% deposit is required to secure your appointment.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 mt-1'>
                <svg
                  className='w-4 h-4 text-rose-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-900 mb-1'>Late Fees</h3>
                <p className='text-gray-600 text-sm'>
                  A $20 late fee will be applied for every 20 minutes you are delayed. Please plan to arrive on time to ensure we have adequate time for your service.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 mt-1'>
                <svg
                  className='w-4 h-4 text-rose-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-900 mb-1'>Cancellations & Refunds</h3>
                <p className='text-gray-600 text-sm'>
                  We require a 24-hour notice for any cancellations. Please note that all deposits are strictly non-refundable.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white border-t-8 border-rose-200 mb-8 overflow-hidden shadow-md'>
          <div className='px-6 py-4'>
            <div className='flex items-center'>
              <svg
                className='w-5 h-5 text-rose-400 mr-3'
                fill='currentColor'
                viewBox='0 0 20 20'
              >
                <path
                  fillRule='evenodd'
                  d='M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z'
                  clipRule='evenodd'
                />
              </svg>
              <h2 className='text-lg md:text-xl font-medium text-gray-900'>
                Location & Travel Inquiry
              </h2>
            </div>
          </div>

          {/* Policy Items */}
          <div className='p-6 space-y-6'>
            {/* Travel Requirements */}
            <div className='flex items-start'>
              <div className='shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 mt-1'>
                <svg
                  className='w-4 h-4 text-rose-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    d='M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z'
                  />
                  <path
                    d='M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-900 mb-1'>Travel Requirements</h3>
                <p className='text-gray-600 text-sm'>
                  Travel services are available for groups of 4 or more people minimum. Travel fees start at $100+ depending on the location and distance.
                </p>
              </div>
            </div>

            <div className='flex items-start'>
              <div className='shrink-0 w-8 h-8 rounded-full bg-rose-50 flex items-center justify-center mr-4 mt-1'>
                <svg
                  className='w-4 h-4 text-rose-400'
                  fill='currentColor'
                  viewBox='0 0 20 20'
                >
                  <path
                    fillRule='evenodd'
                    d='M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div>
                <h3 className='font-medium text-gray-900 mb-1'>Early Appointments</h3>
                <p className='text-gray-600 text-sm'>
                  Any appointments scheduled for 8:00 AM or earlier will incur an early appointment inconvenience fee.
                </p>
              </div>
            </div>

            <div className='bg-rose-50 p-4 border border-rose-200'>
              <h3 className='font-medium text-gray-900 mb-2'>How to Inquire for Travel:</h3>
              <p className='text-gray-600 text-sm'>
                For all travel inquiries, please reach out via WhatsApp with your event details, location, and number of people requiring services.
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col sm:flex-row items-center justify-between gap-4'>
          <Link
            to='/'
            className='flex items-center text-gray-600 hover:text-gray-900 transition-colors font-medium'
          >
            <svg
              className='w-5 h-5 mr-2'
              fill='none'
              stroke='currentColor'
              viewBox='0 0 24 24'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M10 19l-7-7m0 0l7-7m-7 7h18'
              />
            </svg>
            Back to Home
          </Link>

          <Link
            to='/book'
            state={{ selectedService }}
            className='bg-rose-300 hover:bg-rose-400 text-gray-900 px-8 py-3 transition-colors font-medium flex items-center shadow-md'
          >
            I Agree & Continue to Booking
            <svg
              className='w-5 h-5 ml-2'
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
      </div>
    </div>
  )
}

export default TermsAndInfo