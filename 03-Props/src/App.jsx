import React from 'react'
import Cards from './Components/Cards'

const App = () => {
  return (
    <div className="parent">
        <Cards user='Anurag Dubey' />
        <Cards user='Aman Singh' />
        <Cards user = 'jay Chandra'/>
        <Cards user = 'Bhole Baba'/>
    </div>
  )
}

export default App
