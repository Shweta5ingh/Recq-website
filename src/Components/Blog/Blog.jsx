

import React from 'react';
import { useLocation } from 'react-router-dom';
import { Paper, Typography } from '@mui/material';
import Navbar from '../Common/Navbar';

const Blog = () => {
    const location = useLocation();

    return (
        <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
            <Navbar />
            <Paper style={{
                padding: '10px',
                marginBottom: '20px',
                backgroundImage: 'url(images/image2.png)',
                backgroundSize: 'cover',
                color: 'white'
            }}>
                <Typography variant="subtitle1">
                    {location.pathname}
                </Typography>

            </Paper>
        </div>
    );
};

export default Blog;


