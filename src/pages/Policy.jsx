import React from 'react'

const Policy = () => {
  return (
    <div className='w-full h-60 bg-gray-600 text-white pt-14 '>
      <div className='flex items-center justify-around '>
        <div className='text-4xl'>
            <i class="ri-truck-line"></i>
            <h1 className='text-3xl pt-3'>Free Shipping</h1>
            <h1 className='text-2xl'>Order Above $200</h1>
            </div>
            
        <div className='text-4xl'>
            <i class="ri-cash-fill"></i>
            <h1 className='text-3xl pt-3 '>Money Back</h1>
            <h1 className='text-2xl'>30 Days Guarantee</h1>
            </div>
        <div className='text-4xl'>
            <i class="ri-secure-payment-fill"></i>
            <h1 className='text-3xl pt-3'>Secure Payments</h1>
            <h1 className='text-2xl'>Secured By Stripe</h1>
            </div>
        <div className='text-4xl'>
            <i class="ri-phone-line"></i>
            <h1 className='text-3xl pt-3'>27/4 Support</h1>
            <h1 className='text-2xl'>phone and Email Support </h1>
            </div>
      </div>
    </div>
  )
}

export default Policy
