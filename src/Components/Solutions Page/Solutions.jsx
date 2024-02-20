import React from 'react';
import { Card, CardContent, Typography, Grid, } from '@mui/material'
import '/src/index.css'
import Navbar from '../Common/Navbar';
import Footer from '../Common/Footer';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';





const Solutions = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      {/*
      <Container maxWidth="xl">
      <Grid container spacing={3} style={{padding:'40px', alignItems:'center', height:'400px'}}>
        
        <Grid item xs={12} md={4} style={{alignItems:'center'}}>
          
            <img src="images/image2.png" alt='' style={{ width: '50%' }} />
            <Typography variant="h5">Content 1</Typography>
            <Typography variant="h7">Content 1</Typography>
          
        </Grid>

        
        <Grid item xs={12} md={4}>
          
            <img src="images/image2.png" alt='' style={{ width: '50%' }} />
            <Typography variant="h5">Content 2</Typography>
            <Typography variant="h7">Content 2</Typography>
          
        </Grid>

        
        <Grid item xs={12} md={4}>
          
            <img src="images/image2.png" alt='' style={{ width: '50%' }} />
            <Typography variant="h5">Content 3</Typography>
            <Typography variant="h7">Content 3</Typography>
          
        </Grid>
      </Grid>
    </Container>
    */}

      <div style={{ backgroundImage: 'url(images/background.png)' }}>
        <div className="tile">
          <div className="main-title" style={{ color: 'white', marginTop: '50px' }}>
            Specialized software designed to streamline and automate the process of
            recovering outstanding debts owed by individuals or businesses.
          </div>
        </div>
        

        <Grid container spacing={2} style={{padding:'40px'}}>
          {/* First row */}
          <Grid item xs={12} sm={4}>
            <Card className="bordered-card">
              <CardContent>
                <Typography variant="h5">
                  Automates communication with debtors via email, SMS, WhatsApp, and letters.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="bordered-card">
              <CardContent>
                <Typography variant="h5">
                  Organizes and centralizes debtor information.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={4}>
            <Card className="bordered-card">
              <CardContent>
                <Typography variant="h5">
                  Tracks payment histories and outstanding balances.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          {/* Second row */}
          <Grid item xs={12} sm={6}>
            <Card className="bordered-card">
              <CardContent>
                <Typography variant="h5">
                  Generates reports and analytics for better decision-making.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Card className="bordered-card">
              <CardContent>
                <Typography variant="h5">
                  Supports compliance with debt collection laws and regulations.
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </div>

      <Footer />
    </div>
  )
}

export default Solutions;