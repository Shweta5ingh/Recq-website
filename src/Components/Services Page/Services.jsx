import React from 'react';
import {Container, Typography, Grid, } from '@mui/material'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const Services = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar/>
      <Container maxWidth="xl">
      <Grid container spacing={3} style={{padding:'40px', alignItems:'center', height:'400px'}}>
        {/* First Column */}
        <Grid item xs={12} md={4} style={{alignItems:'center'}}>
          
            <img src="images/image2.png" alt='' style={{ width: '50%' }} />
            <Typography variant="h5">Content 1</Typography>
            <Typography variant="h7">Content 1</Typography>
          
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} md={4}>
          
            <img src="images/image2.png" alt='' style={{ width: '50%' }} />
            <Typography variant="h5">Content 2</Typography>
            <Typography variant="h7">Content 2</Typography>
          
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} md={4}>
          
            <img src="images/image2.png" alt='' style={{ width: '50%' }} />
            <Typography variant="h5">Content 3</Typography>
            <Typography variant="h7">Content 3</Typography>
          
        </Grid>
      </Grid>
    </Container>

    <Container maxWidth="xl" >
         hello
    </Container>


      
      <Footer/>
    </div>
  )
}

export default Services;