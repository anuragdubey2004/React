import { useEffect } from 'react';
import { useState } from 'react'

const App = () => {

const [a, seta] = useState(0);
const [b, setb] = useState(0);

const changeA = () => {
   seta(a+1);
}

const changeB = () => {
   setb(b-1);
}

useEffect(function(){
  console.log("A value is changed");
}, [a]);

useEffect(function(){
  console.log("B value is changed");
}, [b]);

  return (
    <div>
      <h1>A is {a} </h1>
      <h1>B is {b} </h1>
      <button onClick={changeA}>Change A</button>
      <button onClick={changeB}>Change B</button>
    </div>
  )
}

export default App
