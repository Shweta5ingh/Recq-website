import React from 'react';
import { Typography, Grid, Paper } from '@mui/material'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <Navbar />

      <Grid container spacing={2} style={{ padding: '30px', backgroundColor: '#c2c2c2', maxWidth: '100%', overflowX: 'hidden', marginTop: 0, marginLeft: 0 }}>
        {/* Text */}
        <Grid item xs={12} md={6} style={{ padding: '40px' }}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%' }}>
            <Typography variant="h4" gutterBottom>
              Lorem Ipsum
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus.
            </Typography>
            <Typography variant="body1">
              Sed sodales, lorem eget euismod porttitor, nisl nunc vestibulum lorem, nec aliquam ipsum justo nec quam. Integer ac tempor magna.
            </Typography>
          </Paper>
        </Grid>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <img src="images/image2.png" alt="Example" style={{ width: '100%', height: 'auto' }} />
        </Grid>
      </Grid>

      

      <Footer />
    </div>
  )
}

export default About;