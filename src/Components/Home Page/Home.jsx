import React from 'react';
import { useState } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { Typography, Paper, Button, IconButton, Grid, TextField, Link } from '@mui/material';

//import {Carousel} from 'react-responsive-carousel';
import { ArrowBack, ArrowForward } from '@mui/icons-material';

const items = [
  {
    name: 'Item 1',
    description: 'Description for Item 1',
    image: 'images/slider1.jpg',
    link:'/#'

  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'images/slider2.jpg',
    link:'/#'
  },
  {
    name: 'Item 3',
    description: 'Description for Item 3',
    image: 'images/slider1.jpg',
    link:'/#'
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
  return (
<>
    <Navbar />
    <div className="banner">
      <div className="banner-item">
        <img src={items[currentItem].image}  alt={items[currentItem].name}/>
        <div className='banner-cap'>
          <div className="container cap-box">
            <Typography variant="h3">{items[currentItem].name}</Typography>
            <Typography variant="h5">{items[currentItem].description}</Typography>
            <Link href= {items[currentItem].link}>Read More</Link>
            </div>
        </div>
        <IconButton aria-label="previous" style={{left: 20}} onClick={handlePrev}><ArrowBack /></IconButton>
        <IconButton aria-label="next" style={{right: 20}} onClick={handleNext}><ArrowForward /></IconButton>
      </div>
    </div>
    <div className='our-service'>
      <div className="container">
        <div className="tile">
          <div className="small-title">Features</div>
          <div className="main-title">Best Features Ever</div>
        </div>
        <Grid container spacing={2} className='features'>
          <Grid item xs={12} md={3}>
              <img src="images/feature-img5.png" alt="Example" />
              <div class="elementor-image-box-content">
                <h3 class="image-box-title">Automated Communication</h3>
                <p class="image-box-description">Lorem ipsum dolor amet, consec adipisicing elit, sdo eiuscididunut labore dolore magna.</p>
              </div>
          </Grid>
          <Grid item xs={12} md={3}>
              <img src="images/feature-img5.png" alt="Example" />
              <div class="elementor-image-box-content">
                <h3 class="image-box-title">Track Payments</h3>
                <p class="image-box-description">Lorem ipsum dolor amet, consec adipisicing elit, sdo eiuscididunut labore dolore magna.</p>
              </div>
          </Grid>
          <Grid item xs={12} md={3}>
              <img src="images/feature-img5.png" alt="Example" />
              <div class="elementor-image-box-content">
                <h3 class="image-box-title">Compliance supported debt Collection</h3>
                <p class="image-box-description">Lorem ipsum dolor amet, consec adipisicing elit, sdo eiuscididunut labore dolore magna.</p>
              </div>
          </Grid>
          <Grid item xs={12} md={3}>
              <img src="images/feature-img5.png" alt="Example" />
              <div class="elementor-image-box-content">
                <h3 class="image-box-title">BI Generated Reports & Analytics </h3>
                <p class="image-box-description">Lorem ipsum dolor amet, consec adipisicing elit, sdo eiuscididunut labore dolore magna.</p>
              </div>
          </Grid>
      </Grid>
      </div>
    </div>    
    <div className='our-service'>
      <div className="container">
        <div className="tile">
          <div className="small-title">Features</div>
          <div className="main-title">Best Features Ever</div>
        </div>
      </div>
    </div>
    <div className='home-container' style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', overflow:'hidden' }}>
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
    </>
  );
};

export default Home;
