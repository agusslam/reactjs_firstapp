import React from 'react'
import { Row, Col, Container } from 'react-bootstrap'
import Image1 from '../../Assets/Images/product-detail.jpg'

class Productabout extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="product-detail">
                    <Col md="6" className="box-left" style={{ backgroundImage: `url(${Image1})` }}>
                    </Col>
                    <Col md="6">
                        <Row className="wrapper-desc-detail">
                            <Col md="12" className="box-right">
                                <h6 className="text-center">ABOUT</h6>
                                <p className="p-text">
                                    Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                                    Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                    when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                                    It has survived not only five centuries, but also the leap into electronic typesetting,
                                    remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                                    sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like
                                    Aldus PageMaker including versions of Lorem Ipsum.
                                </p>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </Container>

        )
    }
}

export default Productabout