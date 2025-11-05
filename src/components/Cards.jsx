import React from 'react'
import img1 from "../assets/c1.jpg"
import img2 from "../assets/c2.jpg"
import img3 from "../assets/c3.jpg"

const Cards = () => {
  return (
  <div className='flex '>
      <div className='mt-12 '>
      <div className='ml-24 '>
        <div className='w-100 h-120  '>
      <img className='rounded-tl-2xl rounded-tr-2xl' src={img1} alt="" />
      </div>
     
      </div>
       <div className='mt-5 pt-3 w-100 text-white ml-24 pl-3 bg-[#403E57] rounded-bl-2xl rounded-br-2xl'>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <h1>Midnight Street Style</h1>
        <h1> $299.00</h1>
        <div className='pb-5 mt-2'>
            <button className='border rounded-2xl p-3 cursor-pointer'>View Details</button>
            <button className='border ml-7 rounded-2xl p-3 bg-[#0C1F43] cursor-pointer'>Add To Cart</button>
        </div>
      </div>
    </div>
      <div className='mt-12'>
      <div className='ml-16'>
        <div className='w-100 h-120 '>
      <img className='rounded-tl-2xl rounded-tr-2xl' src={img2} alt="" />
      </div>
     
      </div>
       <div className='mt-5 pt-3 w-100 text-white ml-16 pl-3 bg-[#403E57] rounded-bl-2xl rounded-br-2xl'>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <h1>Charcoal Street Essential</h1>
        <h1> $349.00</h1>
        <div className='pb-5 mt-2'>
            <button className='border cursor-pointer rounded-2xl p-3'>View Details</button>
            <button className='border cursor-pointer ml-7 rounded-2xl p-3 bg-[#0C1F43]'>Add To Cart</button>
        </div>
      </div>
    </div>
      <div className='mt-12'>
      <div className='ml-16'>
        <div className='w-100 h-120 '>
      <img className='rounded-tl-2xl rounded-tr-2xl' src={img3} alt="" />
      </div>
     
      </div>
       <div className='mt-5 pt-3 w-100 text-white ml-16 pl-3 bg-[#403E57] rounded-bl-2xl rounded-br-2xl'>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <i class="ri-star-fill"></i>
        <h1>The Sleek '90s Revival</h1>
        <h1> $499.00</h1>
        <div className='pb-5 mt-2'>
            <button className='border cursor-pointer rounded-2xl p-3'>View Details</button>
            <button className='border cursor-pointer ml-7 rounded-2xl p-3 bg-[#0C1F43]'>Add To Cart</button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Cards
