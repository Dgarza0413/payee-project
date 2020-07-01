import React from 'react';
import { Link } from 'react-router-dom';

const Table = ({ payee }) => {
    return (
        <table>
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Phone</th>
                    <th>SubbmissionDate</th>
                    {/* {Object.keys(payee.Payee)} */}
                </tr>
            </thead>
            <tbody>
                {payee.map((e, i) => {
                    return (
                        <tr key={i}>
                            <td>
                                {/* <Link to={`/detail/${i}`}> */}
                                {e.Payee.Name}
                                {/* </Link> */}
                            </td>
                            <td>
                                {e.Payee.Phone}
                            </td>
                            <td>
                                {e.Payee.SubmissionDate}
                            </td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    )
}

export default Table
