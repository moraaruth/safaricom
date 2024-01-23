import React, { useState, UseEffect, useEffect } from "react";

function Dashboard() {

    const [accoutBalances, setAccountBalances] = useState({});
    const [appInfo, setAppInfo] = useState('');

    useEffect(() => {
        fetch('')
        .then(response => response.json())
        .then(data => setAccountBalances(data))
        .catch(error => console.error('Error fetching account balances:', error ))

    fetch('')
      .then(response => response.json())
      .then(data => setAppInfo(data))
      .catch(error => console.error('Error fetching app Info', error))
    }, []);

    const handleTopUp = () => {
        console.log('Top-up button clicked')
    }

    return ( 
        <div>
            <h1>Safaricom Dashboard</h1>

            {/* <div>
                <h2>Your Account Balances</h2>
                <p>Airtime: {accountBalances.airtime || 'Loading...'}</p>
                <p>SMS: {accountBalances.sms || 'Loading...'}</p>
                <p>Data: {accountBalances.data || 'Loading...'}</p>
            </div> */}

            <button onClick={handleTopUp}>Top Up</button>

            <div>
                <h2>Safaricom World Web App</h2>
                <p>{appInfo || 'Loading...'}</p>
            </div>

        </div>

    )
}
export default Dashboard