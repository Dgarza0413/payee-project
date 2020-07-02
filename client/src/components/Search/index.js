import React, { useState } from 'react'

const Search = () => {
    const [filterData, setFilterData] = useState({})

    console.log(filterData)

    const searchData = (e) => {
        setFilterData({ [e.target.name]: e.target.value })
    }

    return (
        <div>
            <label>Search</label>
            <input
                name={'search'}
                value={filterData.search || ''}
                onChange={searchData}
            />
        </div>
    )
}

export default Search;