import { projects } from '../constants'

const Pagination = ({ projectsPerPage, currentPage, setCurrentPage }) => {
    const indexOfLastProject = currentPage * projectsPerPage
    const indexOfFirstProject = indexOfLastProject - projectsPerPage

    const paginate = (pageNumber) => setCurrentPage(pageNumber)

    const pageNumbers = []

    for (let i = 1; i <= Math.ceil(projects.length / projectsPerPage); i++) {
        pageNumbers.push(i)
    }

    console.log(pageNumbers, 'pageNumbers')
    console.log(currentPage, 'currentPage')
    console.log(projectsPerPage, 'projectsPerPage')

    return (
        <div className='w-full flex justify-center mt-8 z-50 mb-4'>
            <button disabled={currentPage <= 1} onClick={() => paginate(currentPage - 1)} className='bg-primary text-white disabled:text-white/50 px-3 py-1 rounded-md'>
                Prev
            </button>
            {currentPage > 3 && (
                <>
                    <button onClick={() => paginate(1)} className='bg-primary text-white disabled:text-[#9153ff] px-3 py-1 rounded-md'>
                        1
                    </button>
                    <button disabled className='bg-primary text-white px-3 py-1 rounded-md'>
                        ...
                    </button>
                </>
            )}
            {pageNumbers.slice(currentPage - 1, currentPage + 2).map((number) => (
                <div key={number} className='mx-1'>
                    <button disabled={number === currentPage} onClick={() => paginate(number)} className='bg-primary text-white disabled:text-[#9153ff] px-3 py-1 rounded-md'>
                        {number}
                    </button>
                </div>
            ))}
            {currentPage < pageNumbers.length - 2 && (
                <>
                    <button disabled className='bg-primary text-white px-3 py-1 rounded-md'>
                        ...
                    </button>
                    <button onClick={() => paginate(pageNumbers.length)} className='bg-primary text-white disabled:text-[#9153ff] px-3 py-1 rounded-md'>
                        {pageNumbers.length}
                    </button>
                </>
            )}
            <button disabled={currentPage >= pageNumbers.length} onClick={() => paginate(currentPage + 1)} className='bg-primary text-white disabled:text-white/50 px-3 py-1 rounded-md'>
                Next
            </button>
        </div>
    )
}

export default Pagination