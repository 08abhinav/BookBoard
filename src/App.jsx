import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='min-h-screen bg-gray-900'>
        <NavBar/>
        <Banner/>
      </div>
    </>
  )
}

export default App
