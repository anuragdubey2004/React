import React from 'react'
import { useNavigate } from 'react-router-dom'

const Navbar2 = () => {

// Navigation
    const navigate = useNavigate()
    const btnClicked = () => {
        navigate('/')
    }

    const btnClicked2 = () => {
        navigate(-1)
    }

  return (
    <div className='w-full bg-violet-500 flex items-center'>
      <button 
      className='text-white bg-red-600 px-4 py-2 mt-4 ml-4 mb-2.5 rounded cursor-pointer active:scale-95'
      onClick={btnClicked}
      >Return to Home</button>

      <button 
      className='text-white bg-red-600 px-4 py-2 mt-4 ml-4 mb-2.5 rounded cursor-pointer active:scale-95'
      onClick={btnClicked2}
      >Back</button>
    </div>
  )
}

export default Navbar2
