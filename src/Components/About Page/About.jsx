import React from 'react';
import { Typography, Grid, Paper, Card, CardContent } from '@mui/material'
import { CheckCircle } from '@mui/icons-material';
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <Navbar />

  
      {/* <Grid className='page-content' container spacing={2} style={{backgroundImage:'url(images/background.png)', marginTop:0}}>
        <div className="container">
          <div className="tile">
            <div className="main-title">About RecQarz</div>
          </div>
          <Grid className='about-info' item xs={12}>
            <Typography variant="h5">
              Recht Tech Private Limited (RECQARZ) takespride in delivering exceptional legal and consulting services in India. 
              We ensure to abide by our core competencies of startegic business advisory, seamless business establishment, and realistic everyday solutions.
            </Typography>
            <Typography variant="h5">
              Our unconventional ethos, client-centeredness, innovative approaches and solutions define our reputation as the leaders of our industry. 
              Considering the evolution of the 'new normal,' our cutting edge legal services outperform the traditional methodologies.
            </Typography><Typography variant="h5">
              Our mantra of Experience, Ethics, and Execellence positions as the pioneers of the industry.
            </Typography>
          </Grid>

          
        </div>
      </Grid> */}
      <div className='page-content'>
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

                  <div style={{textAlign: 'left'}} className="main-title">About RecQarz</div>
                  <ul style={{ listStyleType: 'none', padding: 5 }}>
                      <li style={{ display: 'flex', alignItems: 'top'}}>
                        <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                        Recht Tech Private Limited (RECQARZ) takespride in delivering exceptional legal and consulting services in India. 
                We ensure to abide by our core competencies of startegic business advisory, seamless business establishment, and realistic everyday solutions. 
                      </li>
                      <li style={{ display: 'flex', alignItems: 'top'}}>
                        <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                        Our unconventional ethos, client-centeredness, innovative approaches and solutions define our reputation as the leaders of our industry. 
                Considering the evolution of the 'new normal,' our cutting edge legal services outperform the traditional methodologies. 
                      </li>
                      <li style={{ display: 'flex', alignItems: 'top'}}>
                        <CheckCircle style={{ marginRight: '10px', color: 'black' }} />
                        Our mantra of Experience, Ethics, and Execellence positions as the pioneers of the industry.
                      </li>
                    </ul>
                </div>
              </Grid>
            </Grid>
          </div>
        </div>
      </div>
      
      <Footer />
    </div>
  )
}

export default About;