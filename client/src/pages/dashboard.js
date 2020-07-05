import React from 'react'
import data from '../data/sample.json';

import TableDisplay from '../components/Table';

import Container from 'react-bootstrap/Container';

const Dashboard = () => {
    return (
        <Container>
            <TableDisplay payee={data} />
        </Container>
    )
}

export default Dashboard
