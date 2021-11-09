import React from 'react'
import { Row, Col, Container, Button } from 'react-bootstrap'
import dataTesters from '../../Assets/data.json'

class ProductList extends React.Component {

    HoverImages = (e) => { document.querySelector(`#idbut${e}`).style.display = 'block' } 
    
    LeaveImages = (e) => { document.querySelector(`#idbut${e}`).style.display = 'none'  }

    ClickImages = (e) => { window.location.href=`/product/${e}/detail` }


    render() {
        return (
            <Container fluid>
                <Row className="product-style">
                    <Col md="12" className="product-list">
                        <h6 className="text-center">Products</h6>
                    </Col>
                </Row>
                <Row className="list-style">
                    {
                        dataTesters.map((item, index) => {
                            return (
                                <Col md="4" className="wrapper-box-detail-new" id={`id${index}`} key={index} onMouseOver={()=>this.HoverImages(index)} onMouseLeave={()=>this.LeaveImages(index)} onClick={()=>this.ClickImages(item.idproduk)}>
                                    <Row className="wrapper-box-list-new">
                                        <Col md="12" className="img-class" style={{
                                            backgroundImage: `url(${require('../../'+item.image).default})`
                                        }}></Col>
                                        <Col md="12" className="tittle-class text-center">
                                            <p style={{fontWeight:"bold"}}>{item.nameproduk}</p>
                                        </Col>
                                    </Row>
                                    {/* <Row className="wrapper-box-list-new2" id={`idbut${index}`} style={this.state.dsp === false ? {display: 'none'} : {display: 'block'} }> */}
                                    <Row className="wrapper-box-list-new2" id={`idbut${index}`} style={{display: 'none'}}>
                                        <Col md="12" className="tittle-class text-center">
                                            <Button variant="success" className="btn-detail">Detail</Button>
                                        </Col>
                                    </Row>
                                </Col>
                            )
                        })
                    }
                </Row>
            </Container>
        )
    }
}

export default ProductList