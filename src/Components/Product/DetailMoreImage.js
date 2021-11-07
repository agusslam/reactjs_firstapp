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
                        <h6 className="text-center">More Images</h6>
                    </Col>
                </Row>
                <Row className="list-style-detail">
                    <Col md="3" className="wrapper-box-detail">
                        <Row className="wrapper-box-list-detail">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image1})` 
                            }}></Col>
                        </Row>
                    </Col>
                    <Col md="3" className="wrapper-box-detail">
                        <Row className="wrapper-box-list-detail">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image2})` 
                            }}></Col>
                        </Row>
                    </Col>
                    <Col md="3" className="wrapper-box-detail">
                        <Row className="wrapper-box-list-detail">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image3})` 
                            }}></Col>
                        </Row>
                    </Col>
                    <Col md="3" className="wrapper-box-detail">
                        <Row className="wrapper-box-list-detail">
                            <Col md="12" className="img-classhome" style={{
                            backgroundImage: `url(${Image3})` 
                            }}></Col>
                        </Row>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default ProductHome