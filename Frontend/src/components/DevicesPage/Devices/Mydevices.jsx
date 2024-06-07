import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
//var cooler = require('D:\React\React\Website\src\assets\cooler.png');


export default function Mydevices() {
  const theme = useTheme();

  return (
    <Card sx={{ display: 'flex', height: 301 }}>
       <CardMedia
        component="img"
        sx={{ width: 221, minHeight: 151}}
        image="/Coolernew.jpg"
        alt="Cooler-image"
      />
      <Box sx={{ display: 'flex', flexDirection: 'column', paddingLeft:3, paddingTop:7  }}>
        <CardContent sx={{ flex: '1 0 auto' }}>
          <Typography component="div" variant="h3">
            Device Name
          </Typography>
          <Typography variant="h4" color="text.secondary" component="div">
            Model Number
          </Typography>
          <Typography variant="h4" color="text.secondary" component="div">
            Status
          </Typography>
        </CardContent>
      </Box>
    </Card>
  );
}