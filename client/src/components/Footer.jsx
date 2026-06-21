import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
  return (
     <footer className='bg-black py-12 px-4 sm:px-6 lg:px-8'>
    <div className='w-full max-w-7xl mx-auto'>

        <div className="flex flex-wrap justify-between gap-y-12 lg:gap-x-8">

            <div className="w-full md:w-[45%] lg:w-[35%] flex flex-col items-center md:items-start text-center md:text-left">
               
                   <img className="w-36 h-auto" src={assets.logo} alt="logo" />
                       
                <div className='w-full max-w-52 h-px mt-8 bg-linear-to-r from-black via-white/25 to-black'></div>
                <p className='text-sm text-white/60 mt-6 max-w-sm leading-relaxed'>
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Vero cupiditate totam optio minus impedit? Excepturi ducimus laborum iusto velit amet.
                </p>
            </div>
            <div className='flex items-center gap-2 mt-4'>
              <img src={assets.googlePlay} alt="google play" className=' h-9 w-auto ' />
              <img src={assets.appStore} alt="app store" className=' h-9 w-auto '/>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className='text-sm text-white font-medium'>Important Links</h3>
                <div className="flex flex-col gap-2 mt-6">
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Home</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>About</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Portfolio</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Contact</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>FAQ</a>
                </div>
            </div>

            <div className="w-full md:w-[45%] lg:w-[15%] flex flex-col items-center md:items-start text-center md:text-left">
                <h3 className='text-sm text-white font-medium'>Social Links</h3>
                <div className="flex flex-col gap-2 mt-6">
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Twitter</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Instagram</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Youtube</a>
                    <a href="#" className='text-sm text-white/60 hover:text-white transition-colors'>Linkedin</a>
                </div>
            </div>

            

        </div>

        <div className='w-full h-px mt-16 mb-4 bg-linear-to-r from-black via-white/25 to-black'></div>

        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className='text-xs text-white/60'>© 2025 PrebuiltUI</p>
            <div className="flex items-center gap-6">
                <a href='#' className='text-xs text-white/60 hover:text-white transition-colors'>Terms & Conditions</a>
                <div className='w-px h-4 bg-white/20'></div>
                <a href='#' className='text-xs text-white/60 hover:text-white transition-colors'>Privacy Policy</a>
            </div>
        </div>
    </div>
</footer>
  )
}

export default Footer