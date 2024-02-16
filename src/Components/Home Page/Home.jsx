import React from 'react';
import { useState } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { Typography, Paper, Button, IconButton, Grid, TextField } from '@mui/material';

//import {Carousel} from 'react-responsive-carousel';
import { ArrowBack, ArrowForward } from '@mui/icons-material';


const items = [
  {
    name: 'Item 1',
    description: 'Description for Item 1',
    image: 'images/image2.png',
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'images/image1.jpg',
  },
  {
    name: 'Item 3',
    description: 'Description for Item 3',
    image: 'images/images.jpg',
  },
];



const Home = () => {


  const [currentItem, setCurrentItem] = useState(0);

  const handlePrev = () => {
    setCurrentItem((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };


const imageStyle = {
  width: '100%',
  height: '600px',
  position: 'relative',
};

const overlayStyle = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  width: '100%',
  display: 'flex',
  justifyContent: 'center',
  textAlign: 'center',
  color: '#fff', // Text color on top of the image
};

  return (
    <div className='home-container' style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', overflow:'hidden' }}>
      <Navbar />
     
      <div style={{ padding: '10px', backgroundColor: 'black', maxWidth: '2200px', position: 'relative' }}>
      <img src={items[currentItem].image} alt={items[currentItem].name} style={imageStyle} />
      <div style={{ ...overlayStyle, background: 'rgba(0,0,0,0.3)', padding: '20px', width:'1445px' }}>
        <div>
          <Typography variant="h4">{items[currentItem].name}</Typography>
          <Typography variant="body1">{items[currentItem].description}</Typography>
        </div>
      </div>
      <IconButton aria-label="previous" style={{ color: 'white', position: 'absolute', left: 20, top: '50%', transform: 'translate(-50%, -50%)', zIndex: 1 }} onClick={handlePrev}>
        <ArrowBack />
      </IconButton>
      <IconButton aria-label="next" style={{ color: 'white', position: 'absolute', right: 20, top: '50%', transform: 'translate(50%, -50%)', zIndex: 1 }} onClick={handleNext}>
        <ArrowForward />
      </IconButton>
      </div> 

      <Paper elevation={3} style={{ padding: '20px', maxWidth: '1500px', height: '400px' }}>
        {/* Content including text and images */}
        <Typography variant="h4" gutterBottom paragraph style={{ textAlign: 'center' }}>
          Our Services
        </Typography>
        <Typography variant="body1" paragraph style={{ textAlign: 'center' }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus.
        </Typography>
        <img src="images/image2.png" alt="Example" style={{ width: '20%', marginBottom: '20px' }} />
        <Typography variant="body1" paragraph style={{ textAlign: 'center' }}>
          Sed sodales, lorem eget euismod porttitor, nisl nunc vestibulum lorem, nec aliquam ipsum justo nec quam. Integer ac tempor magna.
        </Typography>
      </Paper>


      <Grid container spacing={2} style={{ padding: '30px', backgroundColor: 'black' }}>
        {/* Image */}
        <Grid item xs={12} md={6}>
          <img src="images/image2.png" alt="Example" style={{ width: '100%', maxWidth: '100%', height: 'auto' }} />
        </Grid>
        {/* Text */}
        <Grid item xs={12} md={6} style={{ padding: '60px' }}>
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
      </Grid>


      <Grid container spacing={2} style={{ padding: '60px', backgroundColor: '#f0f0f0', height:'500px' }}>
        <Grid item xs={12}>
          <Typography variant="h4" gutterBottom style={{textAlign:'center'}}>
            Counters
          </Typography>
        </Grid>
        {[1, 2, 3, 4].map((counter) => (
          <Grid key={counter} item xs={12} sm={6} md={3} >
            <Paper elevation={3} style={{ padding: '20px', height: '60%' }}>
              <Typography variant="h5" align="center" gutterBottom>
                Counter {counter}
              </Typography>
              <Typography variant="h3" align="center">
                {counter * 10}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>

    <Grid container spacing={2} style={{ padding: '80px', backgroundColor: 'black', height: '600px' }}>
      <Grid item xs={12}>
        <Typography variant="h4" gutterBottom={true} style={{textAlign:'center'}}>
          Features
        </Typography>
      </Grid>
      {[1, 2, 3].map((feature) => (
        <Grid key={feature} item xs={12} sm={6} md={4}>
          <Paper elevation={3} style={{ padding: '20px', height: '100%', position: 'relative' }}>
            <Typography variant="h5" align="center" gutterBottom>
              Feature {feature}
            </Typography>
            <Typography variant="body1">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus.
            </Typography>
            <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '4px', backgroundColor: '#1967d2' }}></div>
          </Paper>
        </Grid>
      ))}
    </Grid>

    <Grid container style={{ height: '100vh', backgroundImage: 'url(images/image2.png)', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <Grid item xs={12} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', padding: '20px' }}>
        <Paper elevation={3} style={{ width: '40%', padding: '20px', backgroundColor: 'rgba(255, 255, 255, 0.7)' }}>
          <Typography variant="h4" gutterBottom>
            Contact Us
          </Typography>
          <form>
            <TextField fullWidth margin="normal" label="Name" variant="outlined" />
            <TextField fullWidth margin="normal" label="Email" variant="outlined" />
            <TextField fullWidth margin="normal" label="Contact" variant="outlined" />
            <TextField fullWidth margin="normal" label="Subject" variant="outlined" />
            <TextField fullWidth multiline rows={4} margin="normal" label="Message" variant="outlined" />
            <Button variant="contained" color="primary" fullWidth>
              Submit
            </Button>
          </form>
        </Paper>
      </Grid>
    </Grid>
      <Footer />
    </div>
  );
};

export default Home;
