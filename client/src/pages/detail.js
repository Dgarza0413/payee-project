import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import data from '../data/sample.json';
import Address from '../components/Address';
import Reciever from '../components/Payee';
import PaymentCard from '../components/Payment';
import Remittances from '../components/Remittance';

import LineSummary from '../components/UI/Sparklines';
import BarSummary from '../components/UI/Sparkbars';

const Detail = (props) => {
    const [sum, setSum] = useState()
    const [series, setSeries] = useState({})
    const dataId = parseInt(props.match.params.id)
    const { Payee, Payment, Remittance } = data.find((e, i) => i === dataId)

    const totalRemittance = () => {
        let total = 0
        let arr = [];
        let arr2 = [];

        Remittance.map(e => {
            arr.push(total += parseInt(e.Amount.replace(/[^a-zA-Z0-9]/g, '')))
            arr2.push(parseInt(e.Amount.replace(/[^a-zA-Z0-9]/g, '')))
        })

        setSum(arr.reduce((acc, cur) => acc + cur))
        setSeries({
            runningTotal: arr,
            series: arr2
        })
    }

    useEffect(() => {
        totalRemittance()
    }, [])

    return (
        <>
            <Link to={`/`}>Go Back</Link>
            <Reciever payee={Payee} />
            <Address address={Payee.Address} />
            <PaymentCard payment={Payment} />
            <div>total transactions: ${sum}</div>
            <LineSummary data={series.runningTotal} />
            <BarSummary data={series.series} />
            <Remittances remittance={Remittance} />
        </>
    )
}

export default Detail