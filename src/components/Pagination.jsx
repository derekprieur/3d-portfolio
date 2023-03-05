import React, { useState } from 'react'

import { projects } from '../constants'

const Pagination = ({ projectsPerPage, currentPage, setCurrentPage }) => {
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
        pageNumbers.push(i)
    }

    console.log(pageNumbers)

    return (
        <div className='w-full flex justify-center mt-8'>
            {/* previous button */}
            <button disabled={currentPage <= 1} onClick={() => paginate(currentPage - 1)} className='bg-primary text-white px-3 py-1 rounded-md'>
                Prev
            </button>
            {pageNumbers.map((number) => (
                <div key={number} className='mx-1'>
                    <button onClick={() => paginate(number)} className='bg-primary text-white px-3 py-1 rounded-md'>
                        {number}
                    </button>
                </div>
            ))}
            {/* next button */}
            <button disabled={currentPage >= pageNumbers.length} onClick={() => paginate(currentPage + 1)} className='bg-primary text-white px-3 py-1 rounded-md'>
                Next
            </button>
        </div>
    )
}

export default Pagination