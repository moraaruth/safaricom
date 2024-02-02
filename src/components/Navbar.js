import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';

import './Style.css';

function Navbar() {
  const customButtonStyle = {
    backgroundColor: 'rgb(100, 194, 100)',
    color: 'white',
    borderRadius: '50%',
    minWidth: '2.7rem',
    minHeight: '2.7rem',
    paddingRight: '0.5rem',
  };

  const customLinkStyle = {
    fontSize: '1.0rem',
    fontWeight: 'bold',
  };

  const navbarStyle = {
    marginTop: '20px', // Add margin to the top of the navbar
  };

  return (
    <nav className="navbar navbar-expand-lg " style={navbarStyle}>
      <a className="navbar-brand" href="/"><img src='safaricomlogo.png'   alt='safaricom' className='logo'/></a>
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarNav"
        aria-controls="navbarNav"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <a className="nav-link mx-4" style={customLinkStyle} href="/">Home</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" style={customLinkStyle} href="/about">Discover</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" style={customLinkStyle} href="/contact">Experience More</a>
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" style={customLinkStyle} href="/testimonials">Testimonials</a>
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-primary signin mx-2" style={customLinkStyle}>Sign in</button>
          </li>
          <li className="nav-item mx-4" style={customLinkStyle}>
            <Button
              variant="contained"
              sx={customButtonStyle}
              startIcon={<ShareIcon />}
            >

            </Button>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
