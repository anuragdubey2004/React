import React from 'react'

const App = () => {

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("form Submitted")
  }

  return (
    <div className='container'>
      <form onSubmit={(e) => {
         submitHandler(e)
      }} className='form'>
        <input className='box' type="text" placeholder='Enter your name'></input>
        <button className='btn'>Submit</button>
      </form>
    </div>
  )
}

export default App
