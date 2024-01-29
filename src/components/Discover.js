import React from 'react'
import './Style.css'

function Discover() {
    return (
        <>
            <h3>Discover Safaricom World</h3>
            <div className='container'>
                <div className='content'>
                    <h6>Get to read your favourite Newspaper publication</h6>
                    <p>Right from Safaricom News, do your shopping at Masoko, Enjoy your favourite videos, music and so much more on Safaricom World.</p>
                    <img src="reading-newspaper.webp" alt="reading newspaper Logo" />
                </div>
                <div className='content'>
                    <h6>View and analyse your spending</h6>
                    <p>Get a detailed breakdown of the usage of your bundles, track and manage the most consuming apps.</p>
                    <img src="stats.webp"  alt='stats'/>
                </div>
            </div>
        </>
    )

}
export default Discover;