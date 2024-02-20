import React from "react";
import { AppBar, Toolbar, Typography, Button, IconButton, Grid, ButtonGroup } from '@mui/material';
import { Facebook, Twitter, Instagram, LocationOn, Phone } from '@mui/icons-material'

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-top">
          <div className="container">
            <Grid container spacing={2}>
                <Grid item xs={12} md={4}>
                  <div className="f-box about-ingo">
                    <h3>About Us</h3>
                    <Typography variant="body1" paragraph>
                      Lorem ipsum dolor sit amet, <br/>consectetur adipiscing elit.<br/>
                      Phasellus feugiat massa quis<br/> nibh convallis, sit amet congue<br/>
                      libero faucibus.
                    </Typography>
                  </div>
                </Grid>
                <Grid item xs={12} md={4}>
                <div className="f-box q-link">
                  <h3>Quick Links</h3>
                  <div className="f-link">
                    <a href="#">- Home</a>
                    <a href="#">- About Us</a>
                    <a href="#">- Our Solutions</a>
                    <a href="#">- Contact Us</a>
                  </div>
                </div>
                </Grid>
                <Grid item xs={12} md={4}>
                  <div className="f-box cont-info">
                    <h3>Contact Info</h3>
                    <p>235 Ground Floor Deepak Enclave  <br/>Jaidev Park Punjabi Bagh <br/>Sec III West Delhi - 110026</p>
                    <p><b>Phone:</b>  1.800.555.6789<br/>
                    <b>E-mail:</b> info@recqarz.com<br/>
                    <b>Website:</b> http://recqarz.com/</p>
                  </div>
                </Grid>
              </Grid>
          </div>
        </div>
       
        <div className="footer-bottom">
          <div className="container">
            <div className="top-in">
              <div className="top-left">
                <p>© 2024 Recqarz, All Rights Reserved</p>
              </div>
              <div className="top-right">
                <IconButton href="https://www.facebook.com/" target="_blank"><Facebook /></IconButton>
                <IconButton href="https://twitter.com/" target="_blank"><Twitter /></IconButton>
                <IconButton href="https://www.instagram.com/" target="_blank"><Instagram /></IconButton>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
