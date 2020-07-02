import React from 'react'

const RemittanceTable = ({ remittance }) => {
    return (
        <table>
            <thead>
                <tr>
                    {Object.keys(remittance[0]).map(e => {
                        return (
                            <th>{e}</th>
                        )
                    })}
                </tr>
            </thead>
            <tbody>
                {remittance.map(e => {
                    return (
                        <tr>
                            {Object.values(e).map(e => {
                                return (
                                    <td>
                                        {e}
                                    </td>
                                )
                            })}
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default RemittanceTable