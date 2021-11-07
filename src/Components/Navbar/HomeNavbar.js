import React from 'react'
import { Navbar, Nav } from 'react-bootstrap';

class NavbarHomepage extends React.Component {
    render() {
        return (
            <Navbar id="navbarhome">
                <Nav className="logo">LOGO</Nav>
                <Nav className="menu">
                    <Nav className="wrapper-list-menu-white">
                        <Nav.Link className="style-navhome">ABOUT</Nav.Link>
                        <Nav.Link className="style-navhome">PRODUCTS</Nav.Link>
                        <Nav.Link className="style-navhome">ARTICLES</Nav.Link>
                        <Nav.Link className="subscribehome">SUBSCRIBE</Nav.Link>
                    </Nav>
                </Nav>
            </Navbar>

        )
    }
}

export default NavbarHomepage