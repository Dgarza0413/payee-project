import React from 'react'
import { Link } from 'react-router-dom';
import data from '../data/sample.json';
import Address from '../components/Address';
import Reciever from '../components/Payee';
import PaymentCard from '../components/Payment';
import Remittances from '../components/Remittance';

const Detail = (props) => {
    const dataId = parseInt(props.match.params.id)
    const { Payee, Payment, Remittance } = data.find((e, i) => i === dataId)


    return (
        <>
            <Link to={`/`}>Go Back</Link>
            <Reciever payee={Payee} />
            <Address address={Payee.Address} />
            <PaymentCard payment={Payment} />
            <div>Need total transactions</div>
            <Remittances remittance={Remittance} />
        </>
    )
}

export default Detail