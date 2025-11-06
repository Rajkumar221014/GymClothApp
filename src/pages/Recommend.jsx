import React from 'react'
import Cards from '../components/Cards'

const Recommend = () => {
  return (
    <div className='w-full h-screen bg-[#121927] mt-3 '>
      <div className='text-6xl leading-none tracking-tight text-center bg-linear-to-b from-white to-sky-400 bg-clip-text text-transparent  '>
        <h1>Recommended For You</h1>
      </div>
      <div>
        <Cards/>
      </div>
    </div>
  )
}

export default Recommend
