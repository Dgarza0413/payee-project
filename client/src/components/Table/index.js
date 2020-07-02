import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Table = ({ payee }) => {
    const [filterData, setFilterData] = useState({
        search: ''
    })
    const handleSort = (value, data) => {
        console.log("handle Sort clicked")
        console.log(value)
        console.log(data)
    }
    console.log(filterData)

    const searchData = (e) => {
        setFilterData({ [e.target.name]: e.target.value })
    }


    return (
        <>
            <label>Search</label>
            <input
                name={'search'}
                value={filterData.search}
                onChange={searchData}
            />
            <table>
                <thead>
                    <tr>
                        <th onClick={() => handleSort("Name", payee)}>Name</th>
                        <th>Phone</th>
                        <th>SubmissionDate</th>
                    </tr>
                </thead>
                <tbody>
                    {payee.filter(e => {
                        return filterData
                            ? e.Payee.Name.toLowerCase().startsWith(filterData.search)
                            : e
                    }).map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <Link to={`/detail/${i}`}>
                                        {e.Payee.Name}
                                    </Link>
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
                    {/* {payee.map((e, i) => {
                        return (
                            <tr key={i}>
                                <td>
                                    <Link to={`/detail/${i}`}>
                                        {e.Payee.Name}
                                    </Link>
                                </td>
                                <td>
                                    {e.Payee.Phone}
                                </td>
                                <td>
                                    {e.Payee.SubmissionDate}
                                </td>
                            </tr>
                        )
                    })} */}
                </tbody>
            </table>
        </>
    )
}

export default Table
