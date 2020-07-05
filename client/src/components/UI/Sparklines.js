import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

import Card from 'react-bootstrap/Card';

const LineSummary = ({ data }) => {
    return (
        <Card border="light" bg={'light'}>
            <Card.Header>Rolling Total</Card.Header>
            <Card.Body>
                <Sparklines data={data}>
                    <SparklinesLine color="blue" />
                </Sparklines>
            </Card.Body>
        </Card>
    )
}

export default LineSummary