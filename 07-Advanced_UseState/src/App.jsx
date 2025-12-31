import { useState } from 'react'

const App = () => {

  const [num, setnum] = useState({user:'Anurag', age:21});

  const changed = () => {
    const newnum = {...num}; // {} -> obj and []-> array
    newnum.user = 'Jack';
    newnum.age = 32;
    setnum(newnum);
  }
  return (
    <div>
      <h1>{num.user}, {num.age}</h1>
      <button onClick={changed} className='btn'>Click Me</button>
    </div>
  )
}

export default App
