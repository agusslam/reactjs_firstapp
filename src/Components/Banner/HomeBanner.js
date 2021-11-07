import React from 'react'
import { Container, Col, Row } from 'react-bootstrap'
import ImageBanner from '../../Assets/Images/banner_home.jpg'

class Bannerhome extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row>
                    <Col md="12" className="banner-style">
                        <div className="image-stylehome" style={{
                            backgroundImage: `url(${ImageBanner})`
                        }} >
                        </div>
                        <div className="box-text-banner">
                            <div className="text-center">
                                <h1 className="arthome tittle-h1-banner">ART OF PLAN</h1>
                                <h5 className="description-p-bannerhome">ALL ABOUT OF NATURE</h5>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Bannerhome