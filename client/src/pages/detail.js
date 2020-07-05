import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom';
import data from '../data/sample.json';
import Address from '../components/Address';
import Reciever from '../components/Payee';
import PaymentCard from '../components/Payment';
import Remittances from '../components/Remittance';
import MapLayout from '../components/Map';

import LineSummary from '../components/UI/Sparklines';
import BarSummary from '../components/UI/Sparkbars';
import TotalSum from '../components/Total';

import ModalDialog from '../components/Modal';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Breadcrumb from 'react-bootstrap/Breadcrumb';


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
        <Container>
            <Row>
                <Col sm={12}>
                    <Breadcrumb>
                        <Breadcrumb.Item>
                            <Link to={'/'}>
                                Home
                            </Link>
                        </Breadcrumb.Item>
                        <Breadcrumb.Item active>{`Detail - ${Payee.Name}`}</Breadcrumb.Item>
                    </Breadcrumb>
                </Col>
                <Col sm={6} className="mb-3">
                    <Reciever payee={Payee} />
                </Col>
                <Col sm={6}>
                    <PaymentCard payment={Payment} />
                </Col>
                <Col sm={6} className="mb-3">
                    <MapLayout />
                </Col>
                <Col sm={6} className="mb-3">
                    <Address address={Payee.Address} />
                </Col>
                <Col sm={4} className="mb-3">
                    <TotalSum sum={sum} />
                </Col>
                <Col sm={4} className="mb-3">
                    <LineSummary data={series.runningTotal} />
                </Col>
                <Col sm={4} className="mb-3">
                    <BarSummary data={series.series} />
                </Col>
                <Col sm={12} className="mb-3">
                    <Remittances remittance={Remittance} />
                </Col>
            </Row>
        </Container>
    )
}

export default Detail