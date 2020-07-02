import React from 'react'

import { Container, PaymentCard } from './styles';

const Payment = ({ payment }) => {
    const { CVV, Exp, PAN } = payment
    return (
        <Container>
            <PaymentCard>
                <p>CVV:{CVV}</p>
                <p>Exp:{Exp}</p>
                <p>PAN:{PAN}</p>
            </PaymentCard>
        </Container>
    )
}

export default Payment;
