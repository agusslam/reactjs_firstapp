import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class NavbarProduct extends React.Component {
    render() {
        return (
            <Navbar id="navbar">
                <Nav className="logo-white">LOGO</Nav>
                <Nav className="menu">
                    <Nav className="wrapper-list-menu-white">
                        <Nav.Link className="style-nav">ABOUT</Nav.Link>
                        <Nav.Link className="style-nav">PRODUCTS</Nav.Link>
                        <Nav.Link className="style-nav">ARTICLES</Nav.Link>
                        <Nav.Link className="subscribe">SUBSCRIBE</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>

        )
    }
}

export default NavbarProduct