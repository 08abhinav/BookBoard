import React, { useState } from 'react'

const Hero = ({searchQuery}) => {
    const [books, setBooks] = useState([])
    const [loading, setLoading] = useState(true)
    const [currentPage, setCurrentPage] = useState(1)
    const itemsPerPage = 6
    const totalPages = 6

    const paginatedBooks = books.slice((currentPage-1)*itemsPerPage, currentPage*itemsPerPage)
  return (
    <div className='min-h-screen pt-16 md:pt-20 bg-gradient-to-b 
    from-gray-900 to-gray-800 p-4 sm:p-6 md:p-8'>
        <div className='max-w-7xl mx-auto'>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 
            md:gap-6 lg:gap-8'>
                {paginatedBooks.map((book, i)=>{
                    if(books.dummy){
                        return(
                            <div key={book.id || i}></div>
                        )
                    }
                })}
            </div>
        </div>
    </div>
  )
}

export default Hero