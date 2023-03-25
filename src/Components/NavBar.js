import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';
import '../index.css';


export const NavBar = () => {
    return (
        <div>
            <Nav.Link as= {Link} to={"/"}>
                <Navbar bg="dark" variant="dark navbar-expand-sm ">
                    <Container>                        
                        <Navbar.Brand ><img className='logo' src='./logo1.jpg' alt='Logo Sitio'></img></Navbar.Brand>
                            <Nav className="me-auto, Justify-content-center">
                                <Nav.Link as={Link} to="/">Inicio</Nav.Link>
                                <Nav.Link as={Link} to="/category/maceta">Maceta</Nav.Link>
                                <Nav.Link as={Link} to="/category/velas">Velas</Nav.Link>
                                
                            </Nav>
                            <Link to="/cart">
                                <CartWidget/>
                            </Link>    
                    
                    </Container>
                    
                </Navbar>
            </Nav.Link>
        </div>
        );
}
