import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { css } from '@emotion/styled';
import DropdownMenu from '../Dropdown';
import Search from '../Search';
import Table from 'react-bootstrap/Table';

import './styles.css';

const TableDisplay = ({ payee }) => {
    const { Payee, Payment, Remittance } = payee
    const [dropdownValue, setDropdownValue] = useState()
    const [filterData, setFilterData] = useState({
        search: ''
    })

    console.log(filterData)

    const handleSort = (value, data) => {
        console.log("handle Sort clicked")
        data.sort((a, b) => {
            console.log(a.Payee.value)
            console.log(a)
            // return a.value - b
        })
    }

    const searchData = (e) => {
        setFilterData({ [e.target.name]: e.target.value })
    }

    return (
        <>
            <Search
                payee={payee}
                setValue={setDropdownValue}
                setFilterData={setFilterData}
                value={dropdownValue}
            />

            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th onClick={() => handleSort("Attention", payee)}>Attention</th>
                        <th onClick={() => handleSort("Name", payee)}>Name</th>
                        <th onClick={() => handleSort("Phone", payee)}>Phone</th>
                        <th onClick={() => handleSort("Fax", payee)}>Fax</th>
                        <th onClick={() => handleSort("SubmissionDate", payee)}>SubmissionDate</th>
                    </tr>
                </thead>
                <tbody>
                    {payee.filter(e => {
                        return filterData
                            ? e.Payee[dropdownValue || "Name"]
                                .toLowerCase()
                                .startsWith(filterData.search)
                            : e
                    }).map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>{e.Payee.Attention}</td>
                                <td>
                                    <Link to={`/detail/${i}`}>
                                        {e.Payee.Name}
                                    </Link>
                                </td>
                                <td>{e.Payee.Phone}</td>
                                <td>{e.Payee.Fax}</td>
                                <td>{e.Payee.SubmissionDate}</td>
                            </tr>
                        )
                    })}
                </tbody>
            </Table>
        </>
    )
}

export default TableDisplay
