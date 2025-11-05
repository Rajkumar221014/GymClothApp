import React from 'react'
import img1 from '../assets/g2.jpg'

const Sale = () => {
  return (
    <div className='bg-black text-white w-full h-[32rem] flex justify-center'>
      <div>
      <img  src={img1} alt="" />
      </div>
      <div className='pl-32 pt-44   ' >
        <h1 className='uppercase text-4xl'>Sale up to 40% off</h1>
        <h1 className='uppercase text-3xl mt-4'>Your New pr starts now</h1>
        <h1 className='uppercase text-2xl'>Deep discounts on our entire taining collection</h1>
        <h1 className='uppercase text-2xl mt-5'>Clock is ticking <i class="ri-hourglass-2-fill"></i></h1>
        <button className='uppercase text-2xl rounded-full border mt-8 p-3 bg-gray-500 border-gray-100 bg-linear-to-b from-white to-black hover:bg-linear-to-t from-black cursor-pointer'>Shop now</button>
      </div>
    </div>
  )
}

export default Sale
