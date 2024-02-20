import React from 'react';
import { Typography, Grid, Paper, Card, CardContent } from '@mui/material'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';

const About = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>

      <Navbar />

  
      <Grid container spacing={2} style={{backgroundImage:'url(images/background.png)', marginTop:0}}>
      {/* First Card */}
      <Grid item xs={12} style={{margin:'30px'}}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              Recht Tech Private Limited (RECQARZ) takespride in delivering exceptional legal and consulting services in India. 
              We ensure to abide by our core competencies of startegic business advisory, seamless business establishment, and realistic everyday solutions.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Second Card */}
      <Grid item xs={12} style={{margin:'30px'}}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              Our unconventional ethos, client-centeredness, innovative approaches and solutions define our reputation as the leaders of our industry. 
              Considering the evolution of the 'new normal,' our cutting edge legal services outperform the traditional methodologies.
            </Typography>
          </CardContent>
        </Card>
      </Grid>

      {/* Third Card */}
      <Grid item xs={12} style={{margin:'30px'}}>
        <Card>
          <CardContent>
            <Typography variant="h5">
              Our mantra of Experience, Ethics, and Execellence positions as the pioneers of the industry.
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>

      

      <Footer />
    </div>
  )
}

export default About;