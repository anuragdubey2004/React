import { useState } from 'react'

const App = () => {

  const [num, setNum] = useState(0);

  const increaseN = () =>{
    setNum(num+1); // we cannot use num++
  }

  const decreaseN = () => {
    setNum(num-1);
  }

  return (
    <div className='container'>
      <div className="box"><h1>{num}</h1></div> 
      <div className="btn">
         <button onClick={increaseN}>Increase</button>
         <button onClick={decreaseN}>Decrease</button>
      </div>
    </div>
  )
}

export default App
