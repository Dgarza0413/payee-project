import React from 'react'
import data from '../data/sample.json';

import Table from '../components/Table';

const Dashboard = () => {
    return (
        <div>
            <Table payee={data} />
        </div>
    )
}

export default Dashboard
