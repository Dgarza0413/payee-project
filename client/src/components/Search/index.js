import React, { useState } from 'react';

import InputGroup from 'react-bootstrap/InputGroup';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import FormControl from 'react-bootstrap/FormControl';

const Search = ({ payee, setValue, value, setFilterData }) => {
    // const [filterData, setFilterData] = useState({})

    // console.log(filterData)

    const searchData = (e) => {
        setValue(e)
    }

    const handleChange = (e) => {
        setFilterData({ "search": e.target.value })
    }

    return (
        <InputGroup className="mb-3" onChange={handleChange} name={"search"}>
            <DropdownButton
                as={InputGroup.Prepend}
                variant="outline-secondary"
                title={value || 'Name'}
                id="input-group-dropdown-1"
            >
                {Object.keys(payee[0].Payee).map(e => (
                    (e === "Address")
                        ? ""
                        : <Dropdown.Item
                            onSelect={() => searchData(e)}
                            key={e}>{e}</Dropdown.Item>
                ))
                }
            </DropdownButton>
            <FormControl aria-describedby="basic-addon1" />
        </InputGroup>
    )
}

export default Search;