import React from 'react'


function Footer() {
    const footerStyle = {
        backgroundColor: '#808080',
        color: 'white',
        padding: '1rem',
        textAlign: 'center',
        fontFamily: 'Arial, sans-serif',
        fontWeight: 'bold'
        
    };

    const textWithPaddingStyle = {
        padding: '0 10px'
    }

    const lineStyle = {
        borderLeft: '1px solid white',
        margin: 'o 10px',
        height: '1em',
        paddingLeft: '5px',
        paddingRight: '5px',
    }

    return (
        <footer style={footerStyle}>
            <p>&copy; <span style={textWithPaddingStyle}>Safaricom PLC </span>
                <span style={lineStyle}></span>

                All Rights Reserved</p>
        </footer>
    );
}


export default Footer;