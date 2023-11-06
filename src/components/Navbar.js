import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Button from '@mui/material/Button';
import ShareIcon from '@mui/icons-material/Share';

import './Style.css';

function Navbar() {
  const customButtonStyle = {
    backgroundColor: 'rgb(15, 131, 15)',
    color: 'white',
    borderRadius: '50%',
    minWidth: '3.0rem',
    minHeight: '3.0rem',
    padding: '0.5rem',
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="/">Safaricom</a>
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
            <a className="nav-link mx-4" href="/">Home</a> 
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="/about">Discover</a> 
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="/contact">Experience More</a> 
          </li>
          <li className="nav-item">
            <a className="nav-link mx-4" href="/testimonials">Testimonials</a> 
          </li>
          <li className="nav-item">
            <button type="button" className="btn btn-primary signin mx-2">Sign in</button>
          </li>
          <li className="nav-item mx-4">
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
