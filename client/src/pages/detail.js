import React from 'react'
import data from '../data/sample.json';
import Address from '../components/Address';
import Reciever from '../components/Payee';
import PaymentCard from '../components/Payment';

const Detail = (props) => {
    const dataId = parseInt(props.match.params.id)
    const { Payee, Payment, Remittance } = data.find((e, i) => i === dataId)


    return (
        <>
            <Reciever payee={Payee} />
            <Address address={Payee.Address} />
            <PaymentCard payment={Payment} />
        </>
    )
}

export default Detail