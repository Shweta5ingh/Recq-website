import React from 'react';
import {Container, Typography, Grid, } from '@mui/material'
import '/src/index.css'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';





const Solutions = () => {
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
    

    <div className="video-container">
      <div className="video-wrapper">
        {/* Video Player */}
        <div className="video-player">
          {/* Stylish Play Button */}
          <a href="https://www.youtube.com/watch?v=YOUR_VIDEO_ID" target="_blank" rel="noopener noreferrer" className="play-button"></a>
        </div>
      </div>
      {/* Experience Title */}
      <h2 className="experience-title">Experience</h2>
      {/* Content */}
      <p className="content">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla tristique magna eu ultricies semper. Fusce vitae blandit lorem.
      </p>
      {/* Watch More Button */}
      <a href="https://www.youtube.com/channel/YOUR_CHANNEL" target="_blank" rel="noopener noreferrer" className="watch-more-button">
        Watch More
      </a>
    </div>

    
      <Footer/>
    </div>
  )
}

export default Solutions;