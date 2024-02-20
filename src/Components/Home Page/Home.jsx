import React from 'react';
import { useState, useEffect } from 'react';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import { Typography, Paper, Button, IconButton, Grid, TextField, Link, Avatar } from '@mui/material';
import { CheckCircle } from '@mui/icons-material';

//import {Carousel} from 'react-responsive-carousel';
import { ArrowBack, ArrowForward } from '@mui/icons-material';


const items = [
  {
    name: 'Item 1',
    description: 'Description for Item 1',
    image: 'images/slider3.webp',
    link: '/#'
  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'images/slider1.jpg',
    link: '/#'
  },
  {
    name: 'Item 3',
    description: 'Description for Item 3',
    image: 'images/slider2.jpg',
    link: 'info@recqarz.com'
  },
  {
    name: 'Item 4',
    description: 'Description for Item 3',
    image: 'images/slider4.jpg',
    link: 'info@recqarz.com'
  },
];

const Home = () => {
  const [currentItem, setCurrentItem] = useState(0);

  // Function to handle next item
  const handleNext = () => {
    setCurrentItem((prev) => (prev === items.length - 1 ? 0 : prev + 1));
  };

  // Function to handle previous item
  const handlePrev = () => {
    setCurrentItem((prev) => (prev === 0 ? items.length - 1 : prev - 1));
  };

  // Auto change banner image
  useEffect(() => {
    const intervalId = setInterval(handleNext, 5000); // Change image every 5 seconds
    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);

{/*
const items = [
  {
    name: 'Item 1',
    description: 'Description for Item 1',
    image: 'images/slider1.jpg',
    link: '/#'

  },
  {
    name: 'Item 2',
    description: 'Description for Item 2',
    image: 'images/slider2.jpg',
    link: '/#'
  },
  {
    name: 'Item 3',
    description: 'Description for Item 3',
    image: 'images/slider1.jpg',
    link: 'info@recqarz.com'
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

*/}
  return (
    <>
      <Navbar />

      <div className="banner">
      <div className="banner-item">
        <img src={items[currentItem].image} alt={items[currentItem].name} />
        <div className="banner-cap">
          <div className="container cap-box">
            <Typography variant="h3">{items[currentItem].name}</Typography>
            <Typography variant="h5">{items[currentItem].description}</Typography>
            <Link href={items[currentItem].link}>Read More</Link>
          </div>
        </div>
        <IconButton aria-label="previous" style={{ left: 20 }} onClick={handlePrev}><ArrowBack /></IconButton>
        <IconButton aria-label="next" style={{ right: 20 }} onClick={handleNext}><ArrowForward /></IconButton>
      </div>
    </div>


{/*
      <div className="banner">
        <div className="banner-item">
          <img src={items[currentItem].image} alt={items[currentItem].name} />
          <div className='banner-cap'>
            <div className="container cap-box">
              <Typography variant="h3">{items[currentItem].name}</Typography>
              <Typography variant="h5">{items[currentItem].description}</Typography>
              <Link href={items[currentItem].link}>Read More</Link>
            </div>
          </div>
          <IconButton aria-label="previous" style={{ left: 20 }} onClick={handlePrev}><ArrowBack /></IconButton>
          <IconButton aria-label="next" style={{ right: 20 }} onClick={handleNext}><ArrowForward /></IconButton>
        </div>
      </div>
  */}

      <div className='our-service'>
        <div className="container">
          <div className="tile">
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

      <div className='home-container' style={{ display: 'flex', flexDirection: 'column', minHeight: '80vh', overflow: 'hidden' }}>
        <Paper>
          {/*  b<div className="elementor-shape elementor-shape-bottom">
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" preserveAspectRatio="none">
        <path class="elementor-shape-fill" d="M421.9,6.5c22.6-2.5,51.5,0.4,75.5,5.3c23.6,4.9,70.9,23.5,100.5,35.7c75.8,32.2,133.7,44.5,192.6,49.7
          c23.6,2.1,48.7,3.5,103.4-2.5c54.7-6,106.2-25.6,106.2-25.6V0H0v30.3c0,0,72,32.6,158.4,30.5c39.2-0.7,92.8-6.7,134-22.4
          c21.2-8.1,52.2-18.2,79.7-24.2C399.3,7.9,411.6,7.5,421.9,6.5z"></path>
        </svg> 
      </div> */}
        </Paper>


        <Grid container spacing={2} style={{ padding: '30px', backgroundImage: 'url(images/background.png)' }}>
          {/* Image */}
          <Grid item xs={12} md={6}>
            <img src="images/slider2.jpg" alt="Example" style={{ width: '100%', maxWidth: '100%', height: '100%', borderRadius: 10 }} />
          </Grid>
          {/* Text */}
          <Grid item xs={12} md={6} style={{ padding: '40px' }}>
            <Paper elevation={3} style={{ padding: '20px', height: '90%' }}>
              <Typography variant="h4" gutterBottom>
                About RecQarz
              </Typography>
              <Typography variant="body1" paragraph>
                <ul style={{ listStyleType: 'none', padding: 5 }}>
                  <li style={{ display: 'flex', alignItems: 'center',padding:'12px'  }}>
                    <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                    Managing Communication was never so easy. 
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center', padding:'12px' }}>
                    <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                    Ready to use account level information. 
                  </li>
                  <li style={{ display: 'flex', alignItems: 'center',padding:'12px' }}>
                    <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                    Initiate and monitor physical or digital notices with real-time updates. 
                  </li>
                </ul>
              </Typography>
            </Paper>
          </Grid>
        </Grid>


        


        <div style={{ width: '100vw', overflow: 'hidden' }}>
      
      <div className="tile" style={{marginTop:'40px'}}>
            <div className="main-title">Our Happy Users</div>
          </div>
        <Grid container spacing={2} style={{ padding: '30px', width: '100vw', overflow: 'hidden', height:'300px' }}>
      
      {/* Testimonial Section 1 */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px', height: '80%', borderRadius: '10px', background: 'linear-gradient(to right, #00a4ff, #f72f84)', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.3s' }}>
          <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="Avatar" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus."
          </Typography>
          <Typography variant="body2" style={{ color: '#fff', fontStyle: 'italic' }}>
            - John Doe
          </Typography>
        </Paper>
      </Grid>
      {/* Testimonial Section 2 */}
      <Grid item xs={12} md={6}>
        <Paper elevation={3} style={{ padding: '20px', height: '80%', borderRadius: '10px', background: 'linear-gradient(to right, #00a4ff, #f72f84)', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.3s' }}>
          <Avatar src="https://randomuser.me/api/portraits/women/1.jpg" alt="Avatar" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
          <Typography variant="body1" paragraph style={{ color: '#fff' }}>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus."
          </Typography>
          <Typography variant="body2" style={{ color: '#fff', fontStyle: 'italic' }}>
            - Jane Doe
          </Typography>
        </Paper>
      </Grid>
    </Grid>
    </div>


      


        {/*
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
        */}

        {/*
        <Grid container spacing={2} style={{ padding: '80px', backgroundColor: 'black', height: '600px' }}>
          <Grid item xs={12}>
            <Typography variant="h4" gutterBottom={true} style={{ textAlign: 'center' }}>
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
          */}

        <Footer />
      </div>
    </>
  );
};

export default Home;
