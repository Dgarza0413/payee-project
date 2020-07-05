import React from 'react'

import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';

const Address = ({ address }) => {
    const {
        Address1,
        Address2,
        City,
        Country,
        PostalCode,
        StateOrProvince
    } = address

    return (
        <Form className="shadow-sm p-3 rounded">
            <h3>Address Info</h3>
            <Form.Row>
                <Col xs={7} className="mb-4">
                    <Form.Label>Address1</Form.Label>
                    <Form.Control
                        value={Address1}
                        placeholder="Address1"
                        disabled
                    />
                </Col>
                <Col xs={5} className="mb-4">
                    <Form.Label>Address2</Form.Label>
                    <Form.Control
                        value={Address2}
                        placeholder="Fax"
                        disabled
                    />
                </Col>
                <Col xs={4} className="mb-4">
                    <Form.Label>City</Form.Label>
                    <Form.Control
                        value={City}
                        placeholder="City"
                        disabled
                    />
                </Col>
                <Col xs={4} className="mb-4">
                    <Form.Label>Country</Form.Label>
                    <Form.Control
                        value={Country}
                        placeholder="Country"
                        disabled
                    />
                </Col>
                <Col xs={4} className="mb-4">
                    <Form.Label>PostalCode</Form.Label>
                    <Form.Control
                        value={PostalCode}
                        placeholder="SubmissionDate"
                        disabled
                    />
                </Col>
                <Col xs={4} className="mb-4">
                    <Form.Label>StateOrProvince</Form.Label>
                    <Form.Control
                        value={StateOrProvince}
                        placeholder="SubmissionDate"
                        disabled
                    />
                </Col>
            </Form.Row>
        </Form>
    )
}

export default Address;