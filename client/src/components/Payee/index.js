import React from 'react'

const Payee = ({ payee }) => {
    const {
        Attention,
        Fax,
        Name,
        Phone,
        SubmissionDate
    } = payee;

    return (
        <div>
            <p>Attention: {Attention}</p>
            <p>Fax: {Fax}</p>
            <p>Name: {Name}</p>
            <p>Phone: {Phone}</p>
            <p>SubmissionDate: {SubmissionDate}</p>
        </div>
    )
}

export default Payee;