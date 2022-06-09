import AlertBox from "../AlertBox/AlertBox"


const ProductsTable = ({ products }) => {
    return (
        <>
            {products.length !== 0
                ?
                <Table>
                    <TableHeader />
                    <TableBody>
                        {products &&
                            products.map(row =>
                                <TableRow
                                    key={row.id}
                                    id={row.id}
                                    name={row.name}
                                    year={row.year}
                                    color={row.color}
                                />
                            )
                        }
                    </TableBody>
                </Table>
                :
                <AlertBox message='No results found' />
            }
        </>
    )
}

const Table = ({children}) => {
    return (
        <table className="table table-hover">
            {children}
        </table>
    )
}

const TableHeader = () => {
    return (
        <thead>
            <tr>
                <th>ID</th>
                <th>Name</th>
                <th>Year</th>
            </tr>
        </thead>
    )
}

const TableBody = ({ children }) => {
    return (
        <tbody>
            {children}
        </tbody>
    )
}

const TableRow = ({ id, name, year, color }) => {
    return (
        <tr style={{ backgroundColor: color }}>
            <th>{id}</th>
            <th>{name}</th>
            <th>{year}</th>
        </tr>
    )
}

const Message = ({ text }) => {
    return (
        <div className='d-flex justify-content-center align-items-center'>
            {text}
        </div>
    )
}

export default ProductsTable