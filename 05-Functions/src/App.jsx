import React from 'react'

function btnclicked(){
  console.log("btn is clicked");
}

const btn = () => {
  console.log("3rd is clicked");
}

const changing = (val)=>{
  console.log(val);
}

const App = () => {
  return (
    <div>
      {/* <button onClick={btnclicked} > Click here</button>

      <button onClick={()=>{
        console.log("2nd is clicked")
      }}> 2nd Button</button>

      <button onClick={btn}>3rd Buton</button>

      <button onClick={function(){
        console.log("4th is clicked")
      }} >4th Button</button> */}

      <input onChange={function(elem){  //we cannot directly call function, so that why we create a function inside event listener
         changing(elem.target.value);
      }} placeholder='Enter name'></input>

    </div>
  )
}

export default App
