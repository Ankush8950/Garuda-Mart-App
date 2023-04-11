import React from 'react'
import message_bg from  "../../image/cta-bg1.jpg"

const Message = () => {
  return (
    <div className="w-full h-80 mt-10 flex items-center justify-center p-[50px]" style={{ backgroundImage: `url(${message_bg})`,backgroundPosition:"center",backgroundSize:"cover" }}>
        <div className='w-full h-52 bg-white flex flex-col md:flex-row items-center justify-between p-10'>
        <h1 className='font-bold text-4xl leading-2'>Subscribe for <br/>
Latest Trends & Offers</h1>
    <div className='flex border-2 p-2 mt-2 md:mt-0'>
        <input className='border-none outline-none ' type="text" name="" id="" placeholder='Enter your Email' />
        <button className='bg-black text-white pl-4 pr-4 rounded'>Subscribe</button>
    </div>
        </div>
    </div>
  )
}

export default Message