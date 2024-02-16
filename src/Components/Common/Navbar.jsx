

import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, ButtonGroup } from '@mui/material';
import { Link } from 'react-router-dom';
import { Facebook, Twitter, Instagram, LocationOn, Phone } from '@mui/icons-material';



const Navbar = () => {
  return (
    <div>
      <AppBar position="static" color='primary'>
        <Toolbar>
          <Typography>
            <Grid container alignItems="center" spacing={1} style={{ padding: '10px' }}>
              <Grid item style={{ color: 'white' }}><LocationOn /></Grid>
              <Grid item><Typography variant="subtitle1" >123 Main Street, City, Country</Typography></Grid>
              <Grid item style={{ color: 'white' }}><Phone /></Grid>
              <Grid item><Typography variant="subtitle1">+1234567890</Typography></Grid>
            </Grid>
          </Typography>
          <IconButton
            edge="end"
            aria-label="Facebook"
            color="inherit"
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ marginLeft: 'auto' }}
          >
            <Facebook />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="Twitter"
            color="inherit"
            href="https://twitter.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter />
          </IconButton>
          <IconButton
            edge="end"
            aria-label="Instagram"
            color="inherit"
            href="https://www.instagram.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Instagram />
          </IconButton>
        </Toolbar>
      </AppBar>
      <AppBar position="static" style={{ backgroundColor: 'black' }}>
        <Toolbar >
          <Link to="/">
            <img src='images/logo.png' alt="Logo" style={{ maxHeight: '50px', marginRight: '20px', marginTop: '5px' }} />
          </Link>
          <ButtonGroup sx={{marginLeft:'auto'}}>
          <Button color="inherit" component={Link} to="/" style={{ textDecoration: 'none', color: 'inherit', backgroundColor:'ActiveBorder' }}>
            Home
          </Button>
          <Button color="inherit" component={Link} to="/about" style={{ textDecoration: 'none', color: 'inherit', backgroundColor:'ActiveBorder' }}>
            About Us
          </Button>
          <Button color="inherit" component={Link} to="/services" style={{ textDecoration: 'none', color: 'inherit', backgroundColor:'steelblue' }}>
            Our Services
          </Button>
          <Button color="inherit" component={Link} to="/contact" style={{ textDecoration: 'none', color: 'inherit', backgroundColor:'steelblue' }}>
            Contact Us
          </Button>
          <Button color="inherit" component={Link} to="/blog" style={{ textDecoration: 'none', color: 'inherit', backgroundColor:'steelblue' }}>
            Blog
          </Button>
          </ButtonGroup>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;


