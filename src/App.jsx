import { useState } from 'react'
import './App.css'
import HeroSection from './Page/HeroSection'
import Navbar from './Component/Navbar'

function App() {
  const [count, setCount] = useState(0)



  return (
    <>
      <Navbar />
      <HeroSection />

    </>
  )
}

export default App
