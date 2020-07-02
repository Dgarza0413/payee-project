import React from 'react'
import data from '../data/sample.json';
import Address from '../components/Address';

const Detail = (props) => {
    const dataId = parseInt(props.match.params.id)
    // const findId = data.find((e, i) => i === dataId)
    const { Payee, Payment, Remittance } = data.find((e, i) => i === dataId)
    console.log(Payee.Address)
    // console.log(findId)
    return (
        <>
            <Address address={Payee.Address} />
        </>
    )
}

export default Detail