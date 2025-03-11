import React, { useState } from 'react'

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false)
  return (
    <nav className='sticky top-0 bg-gray-900/95 backdrop-blur-2xl border-b
    border-gray-800 shadow-[0_0_60px_-15px_rbg(96,165,250,0.3)]'>
        <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
            <div className='flex min-h-[4rem] md:min-h-[5rem] item-center justify-between
            flex-wrap gap-y-3 gap-x-4 py-2'>
                <div className='dynamic-gradient relative overflow-hidden rounded-2xl
                p-1 hover:scale-105 transition-transform duration-300 order-1 md:order-none'
                onMouseEnter={()=> setIsHovered(true)}
                onMouseLeave={()=> setIsHovered(false)}
                style={{'--mouse-x': '0px' ,
                    '--mouse-y': '0px',
                    background: isHovered ? `radial-gradient(400px circle at var(--mouse-x) var(--mouse-y), 
                    rgba(59, 130,246, 0.4), tranparent: 40%)`: 'transparent'                    
                }}>
                </div>
            </div>
        </div>

    </nav>
  )
}

export default NavBar