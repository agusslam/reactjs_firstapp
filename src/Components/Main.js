import React from 'react'
import Navbar from './Navbar/Navbar'
import { Container } from 'react-bootstrap'
import Banner from './Banner/Banner'
import ProductList from './Product/ProductList'
import Footer from './Footer/Footer'
import '../Assets/style.css'

class Main extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />
                <Banner />
                <ProductList /> 
                <Footer />               
            </Container>
        )
    }
}

export default Main