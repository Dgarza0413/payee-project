import React from 'react'

import { Container, PaymentCard, Pan, Cvv, Ex, PanItem, Chip, Title, ChipLeft, BackDrop } from './styles';

const Payment = ({ payment }) => {
    const { CVV, Exp, PAN } = payment

    return (
        <Container>
            <PaymentCard>
                <BackDrop />
                <Title>Card Details</Title>
                <Chip>
                    <ChipLeft />
                </Chip>
                <Cvv>CVV: {CVV}</Cvv>
                <Pan>{PAN
                    .toString()
                    .match(/.{1,4}/g)
                    .map(e => {
                        return (
                            <PanItem>
                                {e}
                            </PanItem>
                        )
                    })}</Pan>
                <Ex>Valid Thru: {Exp}</Ex>
            </PaymentCard>
        </Container>
    )
}

export default Payment;
