import React from 'react';
import './styles/Pagination.css'

const Pagination = ({ totalPosts, postPerPage, setCurrentPage, currentPage }) => {

	let pages = []

	for (let i = 1; i <= Math.ceil(totalPosts / postPerPage); i++) {
		pages.push(i)
	}

	const nextPage = () =>{
		currentPage < pages.length && setCurrentPage(currentPage + 1)
	} 
	const prevPage = () => {
		currentPage > 1 && setCurrentPage(currentPage - 1)
	} 
  return (
    <nav  className='navPagination'>
        <button onClick={prevPage} className="Prev">Prev</button>
          {
          pages.map((page)=>{
            return (
              <button key={page} className={page === currentPage ? "paginationCurrent" : "normal"}  onClick={() => setCurrentPage(page)}>{page}</button>
            )
          })
          }
          <button   onClick={nextPage}  className={`Next ${currentPage === pages.length ? 'disabled': 'Next'}`} >Next</button>
    </nav>
  )
}
export default Pagination