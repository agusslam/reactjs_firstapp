import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import ImageBanner from '../../Assets/Images/product-3.jpg'

class Detailpage extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="artic-style">
                    <Col md="8" className="box-left-articles">
                        <div className="image-article" style={{
                            backgroundImage: `url(${ImageBanner})`
                        }} >
                        </div>
                    </Col>
                    <Col md="4" className="text-article">
                        <h1>The Articles</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
                            Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                            when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                            It has survived not only five centuries, but also the leap into electronic typesetting,
                            remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset
                            sheets containing Lorem Ipsum passages, and more recently with desktop publishing software
                            like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default Detailpage