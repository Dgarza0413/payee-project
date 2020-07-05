import React from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines';

import Card from 'react-bootstrap/Card';

const BarSummary = ({ data }) => {
    return (
        <Card border="light" bg={'light'} className="shadow-sm">
            <Card.Header>Transactions</Card.Header>
            <Card.Body>
                <Sparklines data={data}>
                    <SparklinesBars color="#1c8cdc" />
                </Sparklines>
            </Card.Body>
        </Card>
    )
}

export default BarSummary