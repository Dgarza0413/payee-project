import React from 'react'

const Payment = ({ payment }) => {
    const { CVV, Exp, PAN } = payment
    return (
        <div>
            <p>{CVV}</p>
            <p>{Exp}</p>
            <p>{PAN}</p>
        </div>
    )
}

export default Payment;
