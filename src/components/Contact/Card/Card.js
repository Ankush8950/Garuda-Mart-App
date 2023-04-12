import React from 'react'
import { Link } from 'react-router-dom'
import contact_icon1 from "../../../image/contact-icon-1.webp"
import contact_icon2 from "../../../image/contact-icon-2.webp"
import contact_icon3 from "../../../image/contact-icon-3.webp"


const Card = () => {
  return (
    <div className='flex flex-wrap items-center justify-center space-x-5 mt-20 h-full w-full'>
        <div className='mt-4 w-40 sm:w-48 md:w-60 lg:w-80 h-72 lg:h-80 rounded-xl shadow-2xl flex flex-col items-center justify-center bg-white'>
            <img className='w-20 md:w-auto' src={contact_icon1} alt="" />
            <div className='flex flex-col items-center mt-7 '>
            <Link >
            <button className='font-medium text-sm lg:text-xl mt-2 font-roboto hover:text-red opacity-60 border-b-[1px] border-black'>Contact</button>
            </Link>

                <button className='font-medium text-sm lg:text-xl mt-2 font-roboto hover:text-red'>location@website.com</button>
            <h1 className='mt-2 font-bold text-sm lg:text-xl font-roboto hover:text-red '>+(602) 762 472 96</h1>
            </div>
        </div>
        <div className='mt-4 w-40 sm:w-48 md:w-60 lg:w-80 h-72 lg:h-80 rounded-xl shadow-2xl flex flex-col items-center justify-center bg-white'>
            <img className='' src={contact_icon2} alt="" />
            <div className='flex flex-col items-center mt-7'>
            <Link >
            <button className='font-medium text-sm lg:text-xl mt-2 font-roboto hover:text-red opacity-60 border-b-[1px] border-black'>Location</button>
            </Link>
                <button className='font-medium text-sm lg:text-xl mt-10 font-roboto hover:text-red '>location@website.com</button>
            <h1 className='mt-2 font-bold text-sm lg:text-xl font-roboto hover:text-red '>+(602) 762 472 96</h1>
            </div>
        </div>
        <div className='mt-4 w-40 sm:w-48 md:w-60 lg:w-80 h-72 lg:h-80 rounded-xl shadow-2xl flex flex-col items-center justify-center bg-white'>
            <img className='' src={contact_icon3} alt="" />
            <div className='flex flex-col items-center mt-7'>
            <Link >
            <button className='font-medium text-sm lg:text-xl mt-2 font-roboto hover:text-red opacity-60 border-b-[1px] border-black'>Social media</button>
            </Link>
                <button className='font-medium text-sm lg:text-xl mt-10 font-roboto hover:text-red'>location@website.com</button>
            
            <h1 className='mt-2 font-bold text-sm lg:text-xl font-roboto hover:text-red '>+(602) 762 472 96</h1>
            </div>
        </div>
        
    </div>
  )
}

export default Card