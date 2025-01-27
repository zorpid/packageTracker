import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Packages from './packages'
import Navbar from './navbar'
import Footer from './footer'
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Navbar/>
       <Packages/>
       <Footer/>
      
      
    </>
  )
}

export default App
