import React from 'react'
import { Sparklines, SparklinesBars } from 'react-sparklines';

const BarSummary = ({ data }) => {
    return (
        <Sparklines data={data}>
            <SparklinesBars color="#1c8cdc" />
        </Sparklines>
    )
}

export default BarSummary