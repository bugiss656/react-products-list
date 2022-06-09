import { FaRegListAlt } from "react-icons/fa"


const Navbar = () => {
    return (
        <nav className="navbar navbar-light bg-light">
            <div className="container-fluid">
                <h3 className="d-flex align-items-center">
                    <FaRegListAlt style={{ margin: '0 5px' }} />
                    Products list  
                </h3>
            </div>
        </nav>
    )
}

export default Navbar