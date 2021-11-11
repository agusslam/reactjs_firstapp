import React from 'react'
import Axios from 'axios'
import { Container, Row, Col, Form, Button, Stack } from 'react-bootstrap'
import Navbar from './Navbar/Navbar'

class AxiosOMDB extends React.Component {
    state = {
        Config: {
            url: 'http://www.omdbapi.com/?apikey=54ece844&s=avenger',
            method: 'get'
        },
        OMDBData: null
    }

    constructor(props) {
        super(props)
    }

    componentDidMount() {
        Axios(this.state.Config)
            .then(response => {
                // console.log(response)
                this.setState({ OMDBData: response.data.Search })
            })
            .catch(err => { console.log(err) })
    }

    render() {
        return (
            <Container fluid id="main-component">
                <Navbar />
                <Container fluid>
                    <Row className="product-list-new">
                        <Col md="12" className="text-articles">
                            <h6 className="text-center">Movie List</h6>
                        </Col>
                    </Row>
                    <Row className="wrapper-box-omdb">
                        {
                            this.state.OMDBData !== null ?
                                this.state.OMDBData.map((item, index) => {
                                    return (
                                        <div className="col-sm-12 col-md-4 wrapper-box-detail-omdb" key={index}>
                                            <div className="wrapper-box-list-omdb">
                                                <div className="img-class-omdb">
                                                    <img className="img-prod-omdb rounded" src={item.Poster} alt={item.Title} ></img>
                                                </div>
                                                <div className="tittle-class-omdb text-center">
                                                    <a>
                                                        <p className="link-tittle">{item.Title}</p>
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="wrapper-box-list-newdet" >
                                                <div className="detail-tittle text-center">
                                                    <button type="button" className="btn btn-detail-product">Detail</button>
                                                </div>
                                            </div>
                                        </div>

                                    )
                                })
                                : null
                        }
                    </Row>
                </Container>
            </Container>

        )
    }
}

export default AxiosOMDB