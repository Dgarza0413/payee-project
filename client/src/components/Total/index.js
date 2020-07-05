import React from 'react'

import Card from 'react-bootstrap/Card';

const TotalSum = ({ sum }) => {
    return (
        <Card border="light" bg={'light'} className={"h-100"}>
            <Card.Header>Total Sum</Card.Header>
            <Card.Body>
                <h1 className="text-center">${parseInt(sum) / 100}</h1>
            </Card.Body>
        </Card>
    )
}

export default TotalSum;