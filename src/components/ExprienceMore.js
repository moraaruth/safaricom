import React from 'react'
import './Style.css'


function ExprienceMore() {

    return (
        <>


            <div className='exprience'>
                <h2 >Experience more on Safaricom World</h2>
                <div className='container'>

                    <div className='content'>
                        <div className='exprience-container'>
                            <img className='exprienceImage' src='mpesa-icon.2ba5d6c9.svg' alt='m-pesa' />
                            <h6 style={{ fontSize: '22px', fontWeight: '450' }}>View M-PESA statement</h6><br />

                        </div><br />
                        <p>This is a DIY (Do-It-Yourself) service that enables you to access an e-stamped M-PESA statements on demand without the need to visit a Safaricom Retail Shop.</p>

                        <br /><br />
                        <div className='exprience-container'>
                            <img className='exprienceImage' src='data-sharing-icon.386b4646.svg' alt='data sharing' />
                            <h6 style={{ fontSize: '22px', fontWeight: '450' }}>Data Sharing</h6><br />
                        </div><br />
                        <p>A convenient and hassle free Data sharing solution. You can add up to six numbers to your line. Afterward, you can choose how much data each number should access from your line, ranging from 10MBs to 1GB.</p>

                    </div><br />
                    <div className='content'>
                        <div className='exprience-container'>
                            <img className='exprienceImage' src='tunukiwa-offers-icon.85475bdf.svg' alt='tunukiwa' />
                            <h6 style={{ fontSize: '22px', fontWeight: '450' }}>Tunukiwa Offers</h6><br />
                        </div><br />
                        <p>We have deals for everyone, everyday. Get personalised offers that give you access to the products, services and bundles you will love, at prices you will love. Go on - check what offers and discounts you can receive right NOW with Tunukiwa.</p>

                        <br />
                        <div className='exprience-container'>
                            <img className='exprienceImage' src='discover-more-icon.b13469aa.svg' alt='discover more' />
                            <h6 style={{ fontSize: '22px', fontWeight: '450' }}>Discover More Lifestyle</h6><br />
                        </div><br />
                        <p>The one stop destination for all things Safaricom. Manage your account, buy bundles, view our latest promotions, pay your bills, get exclusive access to Music, Movies and educational platforms, PLUS so much MORE!</p>

                    </div>
                </div>
            </div>
        </>
    )

}

export default ExprienceMore