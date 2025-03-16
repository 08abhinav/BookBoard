import { useState } from 'react'
import NavBar from './components/NavBar'
import Banner from './components/Banner'
import Hero from './components/Hero'

function App() {
  const [searchQuery, setSearchQuery] = useState('best sellers')

  return (
    <>
      <div className='min-h-screen bg-gray-900'>
        <NavBar handleSearch={(term)=> setSearchQuery(term)}/>
        <Banner/>
        <Hero/>
      </div>
    </>
  )
}

export default App
