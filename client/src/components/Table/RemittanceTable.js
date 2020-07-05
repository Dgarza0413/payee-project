import React from 'react'

import Table from 'react-bootstrap/Table';

const RemittanceTable = ({ remittance }) => {
    return (
        <Table striped bordered hover borderless={true}>
            <thead>
                <tr>
                    {Object.keys(remittance[0]).map((e, i) => {
                        return <th key={i}>{e}</th>
                    })}
                </tr>
            </thead>
            <tbody>
                {remittance.map(e => {
                    return (
                        <>
                            <tr>
                                {Object.values(e).map((e, i) => {
                                    return <td key={i}>{e}</td>
                                })}
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </Table>
    )
}

export default RemittanceTable