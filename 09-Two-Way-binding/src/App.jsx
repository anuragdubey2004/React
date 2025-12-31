import React, { useState } from 'react'

const App = () => {

  const [title, setTitle] = useState('')

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form Submitted by", title); 

    setTitle('');
  }

  return (
    <div className='container'>
      <form onSubmit={(e) => {
         submitHandler(e)
      }} className='form'>
        <input className='box' 
                type="text" 
                placeholder='Enter your name'
                value = {title} 
                onChange={(e)=>{
                  setTitle(e.target.value);
                }} 
  
        />
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default App
