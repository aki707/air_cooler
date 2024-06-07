import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import './Readings.css';
import Divider from '@mui/material/Divider';


export default function Readings() {
    const theme = useTheme();

    return (
        <Card sx={{ display: 'flex' }} className='Card-1'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                className='temp-icon'
                component="img"
                sx={{ width: 101, maxHeight:101 }}
                image="/temp.png"
                alt="temperature-icon"
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        Temperature
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        25°C
                    </Typography>
                </CardContent>
                
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                component="img"
                className='humidity-icon'
                sx={{ width: 101, maxHeight:101 }}
                image="/humidity.png"
                alt="humidity-icon "
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        humidity
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        50%
                    </Typography>
                </CardContent>
                
        
                </Box>
                <Divider />
                <Box sx={{ display: 'flex', flexDirection: 'row' }}>
                <CardMedia
                className='weather-icon'
                component="img"
                sx={{ width: 101, maxHeight:101 }}
                image="weather.png"
                alt="weather-icon"
                />
                <CardContent sx={{ flex: '1 0 auto' }}>
                    <Typography component="div" variant="h6">
                        weather
                    </Typography>
                    <Typography variant="subtitle1" color="text.secondary" component="div">
                        sunny
                    </Typography>
                </CardContent>
                </Box>
            </Box>
        </Card>
    );
}
