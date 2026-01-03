import React from 'react'
import {Link} from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='flex justify-between px-6 py-4 items-center bg-violet-600 text-white'>
      <h2 className='font-bold tracking-wider text-2xl text-white bg-black rounded-2xl px-4 py-2'>Navbar</h2>
      <div className='flex px-10 gap-10'>
        <Link className='font-semibold tracking-wide text-lg px-2' to='/'>Home</Link>
        <Link className='font-semibold tracking-wide text-lg px-2' to='/product'>Product</Link>
        <Link className='font-semibold tracking-wide text-lg px-2' to='/about'>About</Link>
        <Link className='font-semibold tracking-wide text-lg px-2' to='/courses'>Courses</Link>
        
      </div>
    </div>
  )
}

export default Navbar
