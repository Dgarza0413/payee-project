import React from 'react'

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Payee = ({ payee }) => {
    const {
        Attention,
        Fax,
        Name,
        Phone,
        SubmissionDate
    } = payee;

    return (
        <Form className="shadow-sm p-3 rounded">
            <h3>Contact Info</h3>
            <Form.Row>
                <Col xs={7} className="mb-4">
                    <Form.Label>Attention</Form.Label>
                    <Form.Control
                        value={Attention}
                        placeholder="Disabled input"
                        disabled
                    />
                </Col>
                <Col xs={5} className="mb-4">
                    <Form.Label>Fax</Form.Label>
                    <Form.Control
                        value={Fax}
                        placeholder="Fax"
                        disabled
                    />
                </Col>
                <Col xs={4} className="mb-4">
                    <Form.Label>Name</Form.Label>
                    <Form.Control
                        value={Name}
                        placeholder="Name"
                        disabled
                    />
                </Col>
                <Col xs={4} className="mb-4">
                    <Form.Label>Phone</Form.Label>
                    <Form.Control
                        value={Phone}
                        placeholder="Phone"
                        disabled
                    />
                </Col>
                <Col xs={4} className="mb-4">
                    <Form.Label>SubmissionDate</Form.Label>
                    <Form.Control
                        value={SubmissionDate}
                        placeholder="SubmissionDate"
                        disabled
                    />
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Payee;