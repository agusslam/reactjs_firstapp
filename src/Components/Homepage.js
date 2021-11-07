import React from 'react'
import Navbar from './Navbar/HomeNavbar'
import { Container } from 'react-bootstrap'
import Banner from './Banner/HomeBanner'
import ProductList from './Product/HomeProduct'
import ProductAbout from './Product/HomeAbout'
import ProductSubscribe from './Product/HomeSubscribe'
import Footer from './Footer/HomeFooter'
import '../Assets/style.css'

class Homepage extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />
                <Banner />
                <ProductList /> 
                <ProductAbout />
                <ProductSubscribe />
                <Footer />               
            </Container>
        )
    }
}

export default Homepage