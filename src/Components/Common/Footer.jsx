import React from 'react';
import { AppBar, Toolbar, Typography, Container, Grid, TextField, Button } from '@mui/material';

const Footer = () => {
  return (
    <AppBar position="static" color="primary">


      <Grid container spacing={2} style={{ padding: '50px', backgroundColor: 'black', marginLeft: 0, width: '1520px', marginTop: 0 }}>
        <Grid container item xs={12} spacing={2} alignItems="center">
          {/* First Content Row */}
          <Grid item xs={4} style={{ color: 'white' }}>
            <Typography variant="h5" gutterBottom>
              About Us
            </Typography>
            <Typography variant="body1" paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus.
            </Typography>
          </Grid>
          {/* Second Content Row */}
          <Grid item xs={4} style={{ color: 'white' }}>
            <Typography variant="h5" gutterBottom>
              Collections
            </Typography>
            <Typography variant="body1" paragraph>
              Sed sodales, lorem eget euismod porttitor, nisl nunc vestibulum lorem, nec aliquam ipsum justo nec quam. Integer ac tempor magna.
            </Typography>
          </Grid>
          {/* Third Content Row with Inputs and Button */}
          <Grid item xs={4} style={{ color: 'white' }}>
            <Typography variant="h5" gutterBottom>
              Third Row
            </Typography>
            
            <form style={{ backgroundColor: 'rgba(255, 255, 255, 0.2)', padding: '20px', borderRadius: '8px' }}>
              <TextField
                fullWidth
                label="Name"
                variant="outlined"
                style={{ marginBottom: '10px' }}
                InputProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '4px' } }}
              />
              <TextField
                fullWidth
                label="Email"
                variant="outlined"
                style={{ marginBottom: '10px' }}
                InputProps={{ style: { backgroundColor: 'rgba(255, 255, 255, 0.9)', borderRadius: '4px' } }}
              />
              <Button variant="contained" color="primary" fullWidth>
                Submit
              </Button>
            </form>

          </Grid>
        </Grid>
      </Grid>
      <Toolbar>
        <Container>
          <Typography variant="body1" color="inherit" style={{ top: '0', bottom: 0, position: 'sticky' }}>
            Copyrights © 2024 Recqarz All rights reserved
          </Typography>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Footer;
