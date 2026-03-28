import React from 'react'
import { Link } from 'react-router-dom'
import { video1 } from '../../imports'

const Hero = () => {
  return (
    <section className='relative w-full h-screen flex items-center justify-center overflow-hidden'>
      {/* Video Background */}
      <div className='absolute inset-0'>
        <video
          autoPlay
          loop
          muted
          playsInline
          controls={false}
          disablePictureInPicture
          controlsList="nodownload nofullscreen noremoteplayback"
          className='w-full h-full object-cover object-[50%_30%]'
          style={{
            pointerEvents: 'none'
          }}
        >
          <source src={video1} type='video/mp4' />
        </video>

        {/* Dark Overlay for text readability */}
        <div className='absolute inset-0 bg-black/50'></div>
      </div>

      {/* Content */}
      <div className='relative z-10 text-center px-4 max-w-5xl mx-auto'>
        <h1 className='text-5xl md:text-5xl lg:text-6xl font-bold text-white mb-4 md:mb-6 custom-font drop-shadow-lg'>
          PrettyBMUA
        </h1>

        <h2 className='text-3xl md:text-5xl lg:text-6xl font-bold text-rose-300 mb-6 md:mb-8 custom-font drop-shadow-lg'>
          Professional Makeup Artist
        </h2>

        <p className='text-lg md:text-xl lg:text-2xl text-white mb-8 md:mb-12 font-light drop-shadow-md'>
          Looking forward to beating your face to perfection
        </p>

        <Link
          to='/terms'
          className='inline-block bg-rose-400 hover:bg-rose-500 text-white text-lg md:text-xl font-light px-8 py-3 shadow-lg transition-all hover:scale-105'
        >
          Book Appointment
        </Link>
      </div>
    </section>
  )
}

export default Hero