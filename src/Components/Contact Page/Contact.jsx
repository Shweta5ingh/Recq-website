import React, { useState } from 'react';
import {Container, Typography, Button, Grid, TextField} from '@mui/material'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import {LocationOn, Email, Phone} from '@mui/icons-material';

const Contact = () => {


  const [formData, setFormData] = useState({
    name: '',
    email: '',
    contact: '',
    subject: '',
    message: ''
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(formData); // Log form data to console
    // Add logic here to send form data to server or perform other actions
  };


  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar/>
      
      <Container  style={{ marginBottom: '20px', backgroundColor:'ButtonShadow'}}>

   
      <Grid container spacing={3} style={{ marginTop: '10px', height: '80vh' }}>
    
      <Grid item xs={12} md={8}>
        <form onSubmit={handleSubmit}>
          <Typography variant="h5" gutterBottom>
            Contact Us
          </Typography>
          <TextField
            label="Name"
            fullWidth
            margin="normal"
            variant="outlined"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
          <TextField
            label="Email"
            fullWidth
            margin="normal"
            variant="outlined"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
          <TextField
            label="Contact"
            fullWidth
            margin="normal"
            variant="outlined"
            name="contact"
            value={formData.contact}
            onChange={handleChange}
          />
          <TextField
            label="Subject"
            fullWidth
            margin="normal"
            variant="outlined"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
          />
          <TextField
            label="Message"
            multiline
            rows={4}
            fullWidth
            margin="normal"
            variant="outlined"
            name="message"
            value={formData.message}
            onChange={handleChange}
          />
          <Button type="submit" variant="contained" color="primary" fullWidth>
            Submit
          </Button>
        </form>
      </Grid>
      {/* Address Information */}
      <Grid item xs={12} md={4} >
        <Typography variant="h5" gutterBottom>
          Our Address
        </Typography>
        <Typography style={{ padding: '10px' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus.
        </Typography>
        <Grid container alignItems="center" spacing={1} style={{ padding: '10px' }}>
          <Grid item style={{ color: '#1976d2' }}><LocationOn /></Grid>
          <Grid item><Typography variant="subtitle1">Global Business Park, MG Road Gurugram</Typography></Grid>
        </Grid>
        <Grid container alignItems="center" spacing={1} style={{ padding: '10px' }}>
          <Grid item style={{ color: '#1976d2' }}><Email /></Grid>
          <Grid item><Typography variant="subtitle1">info@recqarz.com</Typography></Grid>
        </Grid>
        <Grid container alignItems="center" spacing={1} style={{ padding: '10px' }}>
          <Grid item style={{ color: '#1976d2' }}><Phone /></Grid>
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