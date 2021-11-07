import React from 'react'
import { Nav, Navbar } from 'react-bootstrap'

class Footer extends React.Component {
    render(){
        return(
            <Navbar className="footer-green">
                <Nav className="footer-green-menu">
                    <Nav.Link className="style-nav">About</Nav.Link>
                    <Nav.Link className="style-nav">Articles</Nav.Link>
                    <Nav.Link className="style-nav">Home</Nav.Link>
                </Nav>
            </Navbar>
        )
    }
}

export default Footer

