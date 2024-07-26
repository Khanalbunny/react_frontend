import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Toolbar from './components/Navigation/Toolbar'
import Footer from './components/Navigation/Footer'
import Home from './components/Pages/home'

import{Routes,Route } from 'react-router-dom'
import About from './components/Pages/about'
import Class from './components/Pages/class'
import Contact from './components/Pages/contact'
import Blog from './components/Pages/blog'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    
<Toolbar />
     <Routes>
      <Route path='/' element={<Home />} />
      <Route path='/about' element={<About />} />
      <Route path='/class' element={<Class />} />
      <Route path='/contact' element={<Contact />} />
      <Route path='/blog' element={<Blog />} />

     </Routes>
     
     
     <Footer />
    </>
  )
}

export default App
