

import React, { useEffect, useState } from 'react'
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
// import { Facebook, Twitter, Instagram, LocationOn, Phone } from '@mui/icons-material'


const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Clean up the event listener when the component unmounts
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []); // Empty dependency array ensures the effect runs only once

  const handleScroll = () => {
    var scroll = window.scrollY;

    // Check if the user has scrolled beyond a certain point (e.g., 300 pixels)
    if (scroll >= 200) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  };
  return (
    <>
    {/* <div className="top-bar">
      <div className="container">
        <div className="top-in">
          <div className="top-left">
            <Typography><LocationOn /> Global Business Park, MG Road, Gurugram</Typography>
            <Typography><Phone/> +1234567890</Typography>
          </div>
          <div className="top-right">
            <IconButton href="https://www.facebook.com/" target="_blank"><Facebook /></IconButton>
            <IconButton href="https://twitter.com/" target="_blank"><Twitter /></IconButton>
            <IconButton href="https://www.instagram.com/" target="_blank"><Instagram /></IconButton>
          </div>
        </div>
      </div>
    </div> */}
    <div className={`main-header ${isScrolled ? 'fix-header' : ''}`}>
      <div className="container">
        <div className="top-bt">
          <div className="logo-sec">
           <Link className='logo' to="/"><img src='images/logo.png' alt="Logo" /> </Link>
          </div>
          <div className="top-links">
            <Link className='mneu-item' to="/">Home</Link>
            <Link className='mneu-item' to="/about">About Us</Link>
            <Link className='mneu-item' to="/solutions">Our Solutions</Link>
            <Link className='mneu-item' to="/contact">Contact Us</Link>
          </div>
        </div>
      </div>
    </div>
    </>
  );

};
export default Navbar;

