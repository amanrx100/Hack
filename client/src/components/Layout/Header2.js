import React from 'react'
import useCategory from "../../hooks/useCategory";
import { NavLink} from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

const Header2 = () => {
    const categories = useCategory();

    return (
        <>
           <div className='d-flex justify-content-center mx-auto algin-items-center border-none'>
           <Navbar expand="lg" bg="danger" variant="danger" className='bg-black m-0'>
                {/* <Navbar.Brand href="#home">Logo</Navbar.Brand> */}
                {/* <Navbar.Toggle aria-controls="navbar-nav" /> */}
                <Navbar.Collapse id="navbar-nav" className='d-flex justify-content-center mx-auto'>
                    <Nav className="mr-auto gap-5 mb-0">
                        {categories.map((category) => (
                            <NavLink key={category._id} to={`/category/${category.slug}`} className= "nav-link text-white">
                                {category.name}
                            </NavLink>
                        ))}
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
           </div>
        </>
    )
}

export default Header2