import React from 'react'
import './Style.css'

function Discover() {
    return (
        <>
            <h3>Discover Safaricom World</h3>
            <div className='container'>
                <div className='content' style={{ position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                        <h6>Get to read your favourite Newspaper publication</h6>
                        <p>Right from Safaricom News, do your shopping at Masoko, Enjoy your favourite videos, music and so much more on Safaricom World.</p>
                    </div>
                    <img className='newspaper-image' src="reading-newspaper.webp" alt="reading newspaper Logo" style={{ position: 'absolute', bottom: 0, right: 0 }} />
                </div>

                <div className='content'  style={{ position: 'relative' }}>
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
                    <h6>View and analyse your spending</h6>
                    <p>Get a detailed breakdown of the usage of your bundles, track and manage the most consuming apps.</p>
                    </div>
                    <img className="newspaper-image"src="stats.webp" alt='stats' style={{ position: 'absolute', bottom: 0, right: 0 }}/>
                </div>
            </div>
        </>
    )

}
export default Discover;