import React from 'react'

const RemittanceTable = ({ remittance }) => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(remittance[0]).map((e, i) => {
                        return (
                            <th key={i}>{e}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {remittance.map(e => {
                    return (
                        <>
                            <tr>
                                {Object.values(e).map((e, i) => {
                                    return (
                                        <td key={i}>{e}</td>
                                    )
                                })}
                            </tr>
                        </>
                    )
                })}
            </tbody>
        </table>
    )
}

export default RemittanceTable