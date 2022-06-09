import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useSearchParams } from "react-router-dom"

import { 
    fetchTotalPages,
    fetchProducts,
    selectPerPage,
    selectTotalPages,   
    selectProducts,
    selectError,
} from "../../features/products/productsSlice"

import Container from "../../components/Container/Container"
import NumberInput from "../../components/NumberInput/NumberInput"
import Pagination from "../../components/Pagination/Pagination"
import ProductsTable from "../../components/ProductsTable/ProductsTable"
import AlertBox from "../../components/AlertBox/AlertBox"



const Dashboard = () => {
    const dispatch = useDispatch()
    
    const url = '?page=1&id=0'
    const [searchParams, setSearchParams] = useSearchParams(url)
    const [filterQuery, setFilterQuery] = useState(searchParams.get('id'))
    const [currentPage, setCurrentPage] = useState(searchParams.get('page'))

    const perPage = useSelector(selectPerPage)
    const totalPages = useSelector(selectTotalPages)
    const products = useSelector(selectProducts)
    const error = useSelector(selectError)


    const filterProductsById = (filter, products) => {
        return products.filter(product => {
            if (Number(filter) === 0) {
                return product.id
            } else {
                return product.id === Number(filter)
            }
        })
    }

    const handlePreviousPage = (curr) => () => {
        if (Number(curr) !== 1) {
            setCurrentPage(Number(curr) - 1)
        }
    }

    const handleNextPage = (curr, total) => () => {
        if (Number(curr) !== total) {
           setCurrentPage(Number(curr) + 1)
        }
    }

    useEffect(() => {
        dispatch(fetchTotalPages(`https://reqres.in/api/products?page=${currentPage}&per_page=${perPage}`))
        dispatch(fetchProducts(`https://reqres.in/api/products?page=${currentPage}&per_page=${perPage}`))
    }, [])

    useEffect(() => {
        dispatch(fetchProducts(`https://reqres.in/api/products?page=${currentPage}&per_page=${perPage}`))
    }, [currentPage])

    useEffect(() => {
        setSearchParams({ page: currentPage, id: filterQuery })
    }, [currentPage, filterQuery])


    return (
        <>
            <Container className='d-flex flex-column justify-content-center my-5'>
                <NumberInput
                    labelText="Filter prducts by id"
                    value={filterQuery}
                    onChange={(e) => {setFilterQuery(e.target.value)}}
                />
            </Container>
            
            <Container className='my-5'>
                {error && <AlertBox message={error} />}
                {products &&
                    <ProductsTable products={filterProductsById(filterQuery, products)} />
                }
                <Pagination 
                    currentPage={currentPage}
                    totalPages={totalPages}
                    handlePreviousPage={handlePreviousPage}
                    handleNextPage={handleNextPage}
                />
            </Container>
        </>
    )
}

export default Dashboard