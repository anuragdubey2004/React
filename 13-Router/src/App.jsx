import React from 'react'
import {Route, Routes} from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import { Link } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <h1>This is navbar, They always seen in all pages, because on Routes contain gets changed</h1>
      <div>
        {/* instead of using a tag use this, beacuse its not re render  */}
        <Link to = '/'>Home</Link>  
        <Link to = '/contact'>Contact</Link>
        <Link to = '/about'>About</Link>
      </div>
       <Routes >
          <Route path='/' element={<Home />}/>
          <Route path='/contact' element={<Contact />}/>
          <Route path='/about' element={<About />}/>
       </Routes>
    </div>
  )
}

export default App
