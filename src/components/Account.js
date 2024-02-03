import React from 'react'

function Account() {
    return (
        <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'flex-start' }}>

            <div style={{ flex: '1', marginRight: '1rem', marginTop:'25%' }}>

            <h2 style={{ textAlign: 'left', marginLeft: '9.5rem' }}>Manage Your Safaricom <br />Account</h2>
            <br />
            <p style={{ textAlign: 'left', marginLeft: '9.5rem' }}>
            Manage your Postpay or Prepay account here at Safaricom.com.<br /> Check you Credit limits, 
            pay your bills, manage your Bonga Points <br /> and so much more.
            </p>
            </div>
            <img src='desktop3.png' alt='account'style={{alignSelf: 'flex-end', marginTop: '2rem'}}/>

        </div>

    )
}

export default Account