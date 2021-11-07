import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

class Footer extends React.Component {
    render(){
        return(
            <Navbar className="footer-home">
                <Nav className="footer-home-menu">
                    <Nav.Link className="style-navhome">About</Nav.Link>
                    <Nav.Link className="style-navhome">Articles</Nav.Link>
                    <Nav.Link className="style-navhome">Home</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Footer

