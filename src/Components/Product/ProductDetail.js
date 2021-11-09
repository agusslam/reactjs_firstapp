import React from 'react'
import { Col, Row, Container } from 'react-bootstrap'
import dataTesters from '../../Assets/data.json'

class ProdDetail extends React.Component {
    state = {
        id: null
    }

    constructor(props) {
        super(props)
        this.state.id = props.match.params.id
    }

    render() {
        let idBaru = parseInt(this.state.id)
        let data = dataTesters.filter(function (item) { return item.idproduk === idBaru })
        return (
            <Col>
                {
                    // console.log(data)
                    data.map(item => (
                        <Row>
                            <h3>{item.nameproduk}</h3>
                            <h4>{item.desc}</h4>
                        </Row>
                ))
            }
            </Col>
        )
    }
}

export default ProdDetail