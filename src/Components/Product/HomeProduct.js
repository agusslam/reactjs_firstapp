import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Image1 from '../../Assets/Images/product-1.jpg'
import Image2 from '../../Assets/Images/product-2.jpg'
import Image3 from '../../Assets/Images/product-3.jpg'

class ProductHome extends React.Component {
    render() {
        return (
            <Container fluid className="product-bg">
                <Row className="product-style">
                    <Col md="12" className="product-list">
                        <h6 className="text-center">LATEST ARTICLES</h6>
                    </Col>
                </Row>
                <Row className="list-style">
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image1})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>Tittle Of Articles</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image2})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>Tittle Of Articles</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </Col>
                        </Row>
                    </Col>
                    <Col md="4" className="wrapper-box-detail-home">
                        <Row className="wrapper-box-list-home">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image3})` 
                            }}></Col>
                            <Col md="12" className="tittle-class text-center">
                                <h6 style={{ fontWeight: 'bold' }}>Tittle Of Articles</h6>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProductHome