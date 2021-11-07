import React from 'react'
import { Container, Row, Col, Form, Button, Stack } from 'react-bootstrap'

class SubscribeHome extends React.Component {
    render() {
        return (
            <Container fluid>
                <Row className="box-subscribe">
                    <Col md='12' className="wrapper-subscribe">
                        <h6>SUBSCRIBE</h6>
                        <p>Sign up to our newsletters</p>
                        <Form.Control type="text" className="input-subscribe" placeholder="Your email here..." />
                        <Stack gap={2} className="col-md-3 mx-auto">
                            <Button type="button" className="btn-subscribe" variant="outline-secondary">SUBMIT</Button>
                        </Stack>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default SubscribeHome