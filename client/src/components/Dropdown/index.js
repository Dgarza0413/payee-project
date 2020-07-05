import React from 'react';
import Dropdown from 'rc-dropdown';
import Menu, { Item as MenuItem, Divider } from 'rc-menu';
import 'rc-dropdown/assets/index.css';

/* eslint-disable no-console */
const DropdownMenu = ({ payee, setValue, value }) => {

    const onSelect = ({ key }) => {
        setValue(key)
    }

    const onVisibleChange = (visible) => {
        console.log(visible);
    }

    const menu = () => {
        return (
            <Menu onSelect={onSelect}>
                {Object.keys(payee[0].Payee).map(e => (
                    (e === "Address")
                        ? ""
                        : <MenuItem key={e}>{e}</MenuItem>
                ))
                }
            </Menu>
        )
    }

    return (
        <div style={{ margin: 20, display: 'inline' }}>
            <Dropdown
                trigger={['click']}
                overlay={menu}
                animation="slide-up"
                onVisibleChange={onVisibleChange}
            >
                <button>{value || "Name"}</button>
            </Dropdown>
        </div>
    )
}

export default DropdownMenu