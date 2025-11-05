import React from 'react'
import img1 from "../assets/e4.jpg"
import img2 from "../assets/e2.jpg"
import img3 from "../assets/e3.jpg"


const Best = () => {
  return (
    <div className='w-full h-screen bg-[#121927] pt-5'>
           <div className='text-6xl leading-none tracking-tight text-center bg-linear-to-b from-pink-400 via-sky-400 to-gray-400 bg-clip-text text-transparent
font-style: italic '>
        <h1>Best Seller</h1>
      </div>
      <div>
     <div className='flex '>
          <div className='mt-12 '>
          <div className='ml-24 '>
            <div className='w-100 h-120  '>
          <img className='rounded-tl-2xl rounded-tr-2xl w-full h-full' src={img2} alt="" />
          </div>
         
          </div>
           <div className='  pt-3 w-100 text-white ml-24 pl-3 bg-[#a000c8] rounded-bl-2xl rounded-br-2xl'>
            <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
           <i class="ri-star-smile-fill"></i>
            <h1>Gym Rat Core</h1>
            <h1> $499.00</h1>
            <div className='pb-5 mt-2'>
                <button className='border rounded-2xl p-3 cursor-pointer'>View Details</button>
                <button className='border ml-7 cursor-pointer rounded-2xl p-3 bg-[#7600bc] hover:bg-black hover:text-white'>Add To Cart</button>
            </div>
          </div>
        </div>
          <div className='mt-7'>
          <div className='ml-16'>
            <div className='w-100 h-130  '>
          <img className='rounded-tl-2xl rounded-tr-2xl w-full h-full' src={img1} alt="" />
          </div>
         
          </div>
           <div className=' pt-3 w-100 text-white ml-16 pl-3 bg-[#960df2] rounded-bl-2xl rounded-br-2xl'>
          <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
           <i class="ri-star-smile-fill"></i>
            <h1>Reclusive Fit</h1>
            <h1> $349.00</h1>
            <div className='pb-5 mt-2'>
                <button className='border cursor-pointer rounded-2xl p-3'>View Details</button>
                <button className='border cursor-pointer ml-7 rounded-2xl p-3 bg-[#7600bc]  hover:bg-black hover:text-white'>Add To Cart</button>
            </div>
          </div>
        </div>
          <div className='mt-12'>
          <div className='ml-16'>
            <div className='w-100 h-120 '>
          <img className='rounded-tl-2xl rounded-tr-2xl w-full h-full' src={img3} alt="" />
          </div>
         
          </div>
           <div className=' pt-3 w-100 text-white ml-16 pl-3 bg-[#a000c8] rounded-bl-2xl rounded-br-2xl'>
            <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
            <i class="ri-star-smile-fill"></i>
           <i class="ri-star-smile-fill"></i>
            <h1>High Intensity Training Kit</h1>
            <h1> $399.00</h1>
            <div className='pb-5 mt-2'>
                <button className='border cursor-pointer rounded-2xl p-3'>View Details</button>
                <button className='border cursor-pointer ml-7 rounded-2xl p-3 bg-[#7600bc]  hover:bg-black hover:text-white'>Add To Cart</button>
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}

export default Best
