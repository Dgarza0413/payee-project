import React from 'react'

import Form from 'react-bootstrap/Form'
import { Container, PaymentCard, Pan, Cvv, Ex, PanItem, Chip, Title, ChipLeft, BackDrop } from './styles';

const Payment = ({ payment }) => {
    const { CVV, Exp, PAN } = payment

    return (
        <>
            <Form className="shadow-sm p-3">
                <h3>Payment Info</h3>
                <Form.Row className={"justify-content-center"}>
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
                </Form.Row>
            </Form>
        </>
    )
}

export default Payment;
