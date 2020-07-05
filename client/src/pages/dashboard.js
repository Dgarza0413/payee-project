import React from 'react'
import data from '../data/sample.json';

import TableDisplay from '../components/Table';

import Container from 'react-bootstrap/Container';
import Card from 'react-bootstrap/Card';

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Dashboard = () => {
    return (
        <Container>
            <Row>
                <Col sm={8} className={'mb-4'}>
                    <Card border="light" bg={'light'} className="shadow-sm h-100">
                        <Card.Header>Paymerang</Card.Header>
                        <Card.Body>
                            <h3>Make a selection (lowercase and special char)</h3>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={4} className={'mb-4'}>
                    <Card border="light" bg={'light'} className="shadow-sm h-100">
                        <Card.Header>Total Vendors</Card.Header>
                        <Card.Body>
                            <h1>{data.length}</h1>
                        </Card.Body>
                    </Card>
                </Col>
                <Col sm={12}>
                    <TableDisplay payee={data} />
                </Col>
            </Row>
        </Container>
    )
}

export default Dashboard
