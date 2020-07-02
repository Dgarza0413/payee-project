import React from 'react'
import data from '../data/sample.json';

import Table from '../components/Table';

const Dashboard = () => {

    return (
        <div>
            <button>To add?</button>
            <button>To remove?</button>
            <div>Payees Table</div>
            <Table payee={data} />
        </div>
    )
}

export default Dashboard
