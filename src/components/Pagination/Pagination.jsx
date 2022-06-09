import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io"
import { IconContext } from "react-icons"

import "./Pagination.css"


const Pagination = ({ currentPage, totalPages, handlePreviousPage, handleNextPage  }) => {
    return (
        <IconContext.Provider value={{ style: { fontSize: 24 } }}>
            <div className="table-pagination d-flex flex-row justify-content-center align-items-center">
                <div className="table-pagination__range">{`Page ${currentPage} of ${totalPages}`}</div>
                {Number(currentPage) === 1
                    ?
                    <button
                        className="table-pagination__button d-flex justify-content-center align-items-center"
                        disabled
                    >
                        <IoIosArrowBack />
                    </button>
                    :
                    <button
                        className="table-pagination__button d-flex justify-content-center align-items-center"
                        onClick={handlePreviousPage(currentPage)}
                    >
                        <IoIosArrowBack />
                    </button>
                }

                {Number(currentPage) === Number(totalPages)
                    ?
                    <button
                        className="table-pagination__button justify-content-center d-flex align-items-center"
                        disabled
                    >
                        <IoIosArrowForward />
                    </button>
                    :
                    <button
                        className="table-pagination__button justify-content-center d-flex align-items-center"
                        onClick={handleNextPage(currentPage)}
                    >
                        <IoIosArrowForward />
                    </button>
                }
            </div>
        </IconContext.Provider>
    )
}



export default Pagination