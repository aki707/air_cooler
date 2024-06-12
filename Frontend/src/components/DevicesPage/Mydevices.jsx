import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//var cooler = require('D:\React\React\Website\src\assets\cooler.png');
import './Mydevices.css';

export default function Mydevices() {
  const theme = useTheme();

  return (
    <div className="zoomable">
      <Card sx={{ display: 'flex', height: 280, width: 201 }}>
        <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <div className='model_image'>
            <CardMedia
              component="img"
              sx={{ width: 200, minHeight: 160, margin: 'auto' }} // Add margin: 'auto' to center the image
              image="/Coolernew.jpg"
              alt="Cooler-image"
            />
          </div>
          <div className='model_info'>
            <CardContent sx={{ flex: '1 0 auto' }}>
              <Typography component="div" variant="h6">
                Device Name
              </Typography>
              <Typography variant="h6" color="text.secondary" component="div">
                Model Number
              </Typography>
              {/* <Typography variant="h6" color="text.secondary" component="div">
                Status
              </Typography> */}
            </CardContent>
          </div>
        </Box>
      </Card>
    </div>
  );
}