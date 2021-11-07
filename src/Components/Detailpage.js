import React from 'react'
import Navbar from './Navbar/HomeNavbar'
import { Container } from 'react-bootstrap'
import Article from './Banner/DetailArticle'
import ProductList from './Product/DetailMoreImage'
import ProductAbout from './Product/DetailAbout'
import ProductPrice from './Product/DetailPrice'
import Footer from './Footer/Footer'
import '../Assets/style.css'

class DetailPage extends React.Component {
    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />
                <Article />
                <ProductList /> 
                <ProductAbout />
                <ProductPrice />
                <Footer />               
            </Container>
        )
    }
}

export default DetailPage