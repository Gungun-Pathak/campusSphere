import { useState } from 'react'
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<Navbar />
{/* <Sidebar /> */}
    </>
  )
}

export default App
