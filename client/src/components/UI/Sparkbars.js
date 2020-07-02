import React from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines';

const LineSummary = ({ data }) => {
    return (
        <Sparklines data={data}>
            <SparklinesBars color="#1c8cdc" />
        </Sparklines>
    )
}

export default LineSummary