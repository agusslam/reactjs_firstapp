import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Col, Row, Container, Button } from 'react-bootstrap'
import dataTesters from '../../Assets/data.json'
import Navbar from '../Navbar/Navbar'
import Footer from '../Footer/Footer'

class ProdDetail extends React.Component {
    state = {
        id: null
    }

    constructor(props) {
        super(props)
        // console.log(props)
        this.state.id = props.match.params.id
    }

    render() {
        let idBaru = parseInt(this.state.id)
        let data = dataTesters.filter(function (item) { return item.idproduk === idBaru })
        return (
            <Container fluid id="main-component">
                <Navbar />
                <Container fluid id="prod-detail">
                    {
                        data.map((item, index) => (
                            <Row className="detail-content" key={index}>
                                <Col md="3" className="image-detail"
                                    style={{ backgroundImage: `url(${require('../../' + item.image).default})` }}>
                                </Col>
                                <Col md="9" className="description-product">
                                    <Row className="wrapper-desc">
                                        <Col md="12" className="title"><p>{item.nameproduk}</p></Col>
                                        <Col md="12">
                                            <Row className="description">
                                                <Col md="1">Description</Col>
                                                <Col md="1" className="titikdua">:</Col>
                                                <Col md="9" className="desc-detail">{item.desc}</Col>
                                            </Row>
                                        </Col>
                                        <Col md="12">
                                            <Row className="qty-det">
                                                <Col md="1">Price</Col>
                                                <Col md="1" className="titikdua">:</Col>
                                                <Col md="9" className="price-detail">{item.price}</Col>
                                            </Row>
                                        </Col>
                                        <Col md="12">
                                            <Row className="qty-det">
                                                <Col md="1">Quantity</Col>
                                                <Col md="1" className="titikdua">:</Col>
                                                <Col md="9" className="qty-detail">{item.qty}</Col>
                                            </Row>
                                        </Col>
                                        <Col md="12">
                                            <Button type="button" className="btn buy">Buy</Button>
                                        </Col>
                                    </Row>

                                </Col>
                                <Col md="12" className="title-slider">
                                    <h5><b>Slider Image</b></h5>
                                </Col>
                                <Col md="12" className="slider-image">
                                    <h4>Carousel</h4>
                                </Col>
                                <Col md="12" className="title-ulas">
                                    <h5><b>Ulasan</b></h5>
                                </Col>
                                <Col md="12" className="content-ulas">
                                    {
                                        item.ulasan.map( (ulas,index) => {
                                            return(
                                                <>
                                                <Row className="wrapper-ulas" key={index}>
                                                    <Col md="1">
                                                        <p>{ulas.tgl}</p>
                                                    </Col>
                                                    <Col md="1">
                                                        <p>{ulas.rat}</p>
                                                    </Col>
                                                    <Col md="10">
                                                        <p>{ulas.user}</p>
                                                    </Col>
                                                </Row>
                                                <Row className="ulas-isi">
                                                    <Col md="12" className="isi">
                                                        <p>{ulas.isi}</p>
                                                    </Col>
                                                </Row>
                                                </>
                                            )
                                        })
                                    }
                                </Col>

                            </Row>
                        ))
                    }
                </Container>
                <Footer />
            </Container>

        )
    }
}

export default ProdDetail