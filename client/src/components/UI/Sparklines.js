import React from 'react'
import { Sparklines, SparklinesLine } from 'react-sparklines';

const LineSummary = ({ data }) => {
    return (
        <Sparklines data={data}>
            <SparklinesLine color="blue" />
        </Sparklines>
    )
}

export default LineSummary