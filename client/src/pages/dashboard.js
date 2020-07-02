import React from 'react'
import data from '../data/sample.json';

import Table from '../components/Table';
import LineSummary from '../components/UI/Sparklines';

const Dashboard = () => {

    return (
        <div>
            <button>To add?</button>
            <button>To remove?</button>

            <div>Payees Table</div>
            <LineSummary />
            <Table payee={data} />
        </div>
    )
}

export default Dashboard
