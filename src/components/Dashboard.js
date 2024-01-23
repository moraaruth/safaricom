import React, { useState, UseEffect, useEffect } from "react";

function Dashboard() {

    const [accoutBalances, setAccountBalances] = useState({});
    const [appInfo, setAppInfo] = useState('');

    useEffect(() => {
        fetch('')
        .then(response => response.json())
        .then(data => setAccountBalances(data))
        .catch(error => console.error('Error fetching account balances:', error ))
    })

    return ( 
        <div>
            <h1>Safaricom Dashboard</h1>

            <div>
                <h2>Your Account Balances</h2>
                <p>Airtime: {accountBalances.airtime || 'Loading...'}</p>
                <p>SMS: {accountBalances.sms || 'Loading...'}</p>
                <p>Data: {accountBalances.data || 'Loading...'}</p>
            </div>

        </div>

    )
}
export default Dashboard