import React from 'react'
import { Row, Col, Container, Button, Stack } from 'react-bootstrap'
import Image1 from '../../Assets/Images/img-price.jpg'

class DetailPrice extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="wrapper-price">
                    <Col md="3" className="price-left">
                        <img className="img-price" src={Image1} alt="img"></img>
                    </Col>
                    <Col md="9" className="price-right">
                        <Row className="wrapper-price-right">
                            <Col md="12" className="title-price">
                                <h1>Price</h1>
                                <p>List Package :</p>
                            </Col>
                            <Col md="12" className="list-price">
                                <Row>
                                    <Col md="8">
                                        <p>1. Plant Bucket 1 So Awesome</p>
                                    </Col>
                                    <Col md="4" className="text-price">
                                        <p>Rp. 340.000</p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col md="8">
                                        <p>2. Sun Flower Bucket 2 Amaze</p>
                                    </Col>
                                    <Col md="4" className="text-price">
                                        <p>Rp. 570.000</p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col md="12" className="list-price">
                                <Row>
                                    <Col md="8">
                                        <p>Total</p>
                                    </Col>
                                    <Col md="4" className="text-price">
                                        <p>Rp. 910.000</p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                <Row className="buy-product">
                    <Col md="3"></Col>
                    <Col md="9" className="btn-pad">
                        <Stack direction="horizontal" gap={3}>
                        <Button type="button" className="btn-green ms-auto">Buy Products</Button>
                        </Stack>
                        
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default DetailPrice