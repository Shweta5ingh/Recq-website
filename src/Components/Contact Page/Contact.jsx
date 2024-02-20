import React, { useEffect } from 'react';
import {Container, Typography, Button, Grid, TextField} from '@mui/material'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import {LocationOn, Email, Phone} from '@mui/icons-material';

const Contact = () => {


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar/>
      
      <Container>
      <Grid container spacing={3} style={{marginTop:'10px'}}>
        {/* Form */}
        <Grid item xs={12} md={8}>
          <form>
            <Typography variant="h5" gutterBottom>
              Contact Us
            </Typography>
            <TextField
              label="Name"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Email"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Contact"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Subject"
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <TextField
              label="Message"
              multiline
              rows={4}
              fullWidth
              margin="normal"
              variant="outlined"
            />
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Grid>
        {/* Address Information */}
        
        <Grid item xs={12} md={4}>
        <Typography variant="h5" gutterBottom>
            Our Address
          </Typography>
          <Typography style={{padding:'10px'}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus.
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
          Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus.
          </Typography>
          <Grid container alignItems="center" spacing={1} style={{padding:'10px'}}>
            <Grid item style={{color:'#1976d2'}}><LocationOn /></Grid>
            <Grid item><Typography variant="subtitle1">123 Main Street, City, Country</Typography></Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1} style={{padding:'10px'}}>
            <Grid item style={{color:'#1976d2'}}><Email /></Grid>
            <Grid item><Typography variant="subtitle1">info@example.com</Typography></Grid>
          </Grid>
          <Grid container alignItems="center" spacing={1} style={{padding:'10px'}}>
            <Grid item style={{color:'#1976d2'}}><Phone /></Grid>
            <Grid item><Typography variant="subtitle1">+1234567890</Typography></Grid>
          </Grid>
        </Grid>
      </Grid>

    </Container>
  
      <Footer/>
    </div>
  )
}

export default Contact;