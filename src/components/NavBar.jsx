import React, { useState } from 'react'
import { BookOpenIcon } from '@heroicons/react/24/outline'

const NavBar = () => {
    const [isHovered, setIsHovered] = useState(false);
    const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

    // const handleMouseMove = (e) => {
    //     const { left, top } = e.currentTarget.getBoundingClientRect();
    //     setMousePos({
    //         x: `${e.clientX - left}px`,
    //         y: `${e.clientY - top}px`
    //     });
    // };

    return (
        <nav className='sticky top-0 bg-gray-900/95 backdrop-blur-2xl border-b
        border-gray-800 shadow-[0_0_60px_-15px_rgba(96,165,250,0.3)]'>
            <div className='mx-auto max-w-7xl px-4 sm:px-6 lg:px-8'>
                <div className='flex min-h-[4rem] md:min-h-[5rem] items-center justify-between
                flex-wrap gap-y-3 gap-x-4 py-2'>

                    <div className='relative overflow-hidden rounded-2xl p-1 hover:scale-105 
                    transition-transform duration-300 order-1 md:order-none'
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                        // onMouseMove={handleMouseMove}
                        style={{
                            background: isHovered
                                ? `radial-gradient(400px circle at ${mousePos.x} ${mousePos.y}, 
                                rgba(59, 130, 246, 0.4), transparent 40%)`
                                : "transparent",
                        }}
                    >
                        <div className='bg-gray-900/80 backdrop-blur-sm rounded-xl p-2'>
                            <h1 className='text-lg md:text-2xl font-bold bg-gradient-to-r from-cyan-400
                            via-blue-400 to-purple-400 bg-clip-text text-transparent animate-text-shine'>
                                <BookOpenIcon className='w-5 h-5 md:h-6 md:w-6 inline-block
                                animate-float text-cyan-400 mr-1 md:mr-2 stroke-[2.5]' />
                                <a href="/" className='ml-1 md:ml-2 shadow-[0_0_10px_rgba(96,165,250,0.5)]'>
                                    BookBoard
                                </a>
                            </h1>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default NavBar
