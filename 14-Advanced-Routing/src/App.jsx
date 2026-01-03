import Navbar from './components/Navbar'
import Footer from './components/Footer'
import {Routes, Route} from 'react-router-dom'
import Product from './pages/Product'
import About from './pages/About'
import Home from './pages/Home'
import NotFound from './pages/NotFound'
import Men from './pages/Men'
import Women from './pages/Women'
import Courses from './pages/Courses'
import CourseDetails from './CourseDetails'
import Navbar2 from './components/Navbar2'

const App = () => {
  return (
    <div className='bg-black h-screen'>
      <Navbar />
      <Navbar2 />
      
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/about' element={<About />}></Route>

        {/* Dynamic Routing */}
        <Route path='/courses' element={<Courses />}></Route>
        <Route path='/courses/:name' element={<CourseDetails />}></Route>

        {/* Nested Route */}
        <Route path='/product' element={<Product />}>
            <Route path='men' element={<Men />}></Route>
            <Route path='women' element={<Women />}></Route>
        </Route>
        

        <Route path='*' element={<NotFound />}></Route>  
      </Routes>

      <Footer />
    </div>
  )
}

export default App
