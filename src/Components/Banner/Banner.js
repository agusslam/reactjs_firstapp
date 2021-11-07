import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ImageBanner from '../../Assets/Images/banner.jpg'

class BannerProduct extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md="12" className="banner-style">
                        <div className="image-style" style={{
                            backgroundImage: `url(${ImageBanner})`
                        }} >
                        </div>
                        <div className="box-text-banner position-absolute top-50 start-50 translate-middle">
                            <div className="text-center">
                                <h1 className="art tittle-h1-banner">All Products Here</h1>
                                <h5 className="description-p-banner">We brings our best product to you</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default BannerProduct