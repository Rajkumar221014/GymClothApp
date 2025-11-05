import React from 'react'

const Navbar = () => {
  return (
    <div className='pt-7 text-white fontt'>
      <div className='flex justify-between  items-center'>
        <h1 className='text-6xl ml-10 '>claivo</h1>
        <input className='text-[#7D8391] font-semibold text-4xl  border w-160 pl-3 pt-2 pb-2 rounded-2xl border-e-neutral-600 ' type="search" name="" id="" placeholder='What is you looking for ?'/>
        <div className='flex gap-5 mr-20 text-3xl ml-2 font-normal cursor-pointer'>
          <h1>Home</h1>
          <h1>Shop</h1>
          <h1>Product</h1>
          <h1>Contact us</h1>
          <h1><i class="ri-shopping-cart-fill"></i></h1>
        </div>
      </div>
    </div>
  )
}

export default Navbar
