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

      <div className='w-section our-service'>
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
      <div className='g-section about-section'>
        <div className="container">
          <Grid container spacing={2}>
            {/* Image */}
            <Grid item xs={12} md={6}>
              <div className="about-img">
                <img src="images/about-img.jpg" alt="About us" style={{ width: '100%', maxWidth: '100%', height: '100%', borderRadius: 4 }} />
              </div>
            </Grid>
            {/* Text */}
            <Grid item xs={12} md={6}>
              <div className="about-text">

                <div style={{textAlign: 'left', color: '#0068b9'}} className="small-title">About RecQarz</div>
                <div style={{textAlign: 'left'}} className="main-title">Who We Are</div>
                <ul style={{ listStyleType: 'none', padding: 5 }}>
                    <li style={{ display: 'flex', alignItems: 'center'}}>
                      <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                      Managing communication was never so easy. 
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center'}}>
                      <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                      Ready to use account level information. 
                    </li>
                    <li style={{ display: 'flex', alignItems: 'center'}}>
                      <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                      Initiate and monitor physical or digital notices with real-time updates. 
                    </li>
                  </ul>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='w-section blog-sec'>
        <div className="container">
          <div className="tile">
            <div className="small-title">Latest Blog</div>
            <div className="main-title">Our News</div>
          </div>
          <Grid container spacing={2}>
            <Grid item xs={12} md={4}>
              <div className='post-item'>
                <div className="post-img">
                  <img src="images/post-img2.jpg" alt="Post Img" />
                </div>
                <h3 className='post-title'>Lorem ipsum dolor amet, consec adipisicing elit, sdo</h3>
                <Link>Read More</Link>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='post-item'>
                <div className="post-img">
                  <img src="images/post-img2.jpg" alt="Post Img" />
                </div>
                <h3 className='post-title'>Lorem ipsum dolor amet, consec adipisicing elit, sdo</h3>
                <Link>Read More</Link>
              </div>
            </Grid>
            <Grid item xs={12} md={4}>
              <div className='post-item'>
                <div className="post-img">
                  <img src="images/post-img2.jpg" alt="Post Img" />
                </div>
                <h3 className='post-title'>Lorem ipsum dolor amet, consec adipisicing elit, sdo</h3>
                <Link>Read More </Link>
              </div>
            </Grid>
          </Grid>
        </div>
      </div>
      <div className='g-section testimonial-sec'>
        <div className="container">
          <div className="tile">
            <div className="small-title">Testimonials</div>
            <div className="main-title">Our Happy Users</div>
          </div>
          <Grid container spacing={2}>
            {/* Testimonial Section 1 */}
            <Grid item xs={12} md={6}>
              <Paper className='testi-item' elevation={3} style={{ padding: '20px', height: '80%', borderRadius: '10px', background: 'linear-gradient(to right, #00a4ff, #f72f84)', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.3s' }}>
                <Avatar src="https://randomuser.me/api/portraits/men/1.jpg" alt="Avatar" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
                <p className='testi-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus."</p>
                <p className='testi-name'>- John Doe</p>
              </Paper>
            </Grid>
            {/* Testimonial Section 2 */}
            <Grid item xs={12} md={6}>
              <Paper className='testi-item' elevation={3} style={{ padding: '20px', height: '80%', borderRadius: '10px', background: 'linear-gradient(to right, #00a4ff, #f72f84)', boxShadow: '0px 0px 20px rgba(0, 0, 0, 0.2)', transition: 'box-shadow 0.3s' }}>
                <Avatar src="https://randomuser.me/api/portraits/women/1.jpg" alt="Avatar" style={{ width: '60px', height: '60px', marginBottom: '20px' }} />
                <p className='testi-text'>"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus feugiat massa quis nibh convallis, sit amet congue libero faucibus."</p>
                <p className='testi-name'>- Lorem Ipsum</p>
              </Paper>
            </Grid>
          </Grid>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default Home;
