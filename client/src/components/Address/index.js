import React from 'react'

const Address = ({ address }) => {
    const {
        Address1,
        Address2,
        City,
        Country,
        PostalCode,
        StateOrProvince
    } = address
    return (
        <div>
            <p>Address: {Address1}</p>
            <p>Address2: {Address2}</p>
            <p>City: {City}</p>
            <p>Country: {Country}</p>
            <p>PostalCode: {PostalCode}</p>
            <p>StateOrProvince: {StateOrProvince}</p>
        </div>
    )
}

export default Address;