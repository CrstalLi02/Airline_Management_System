import React from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  Box, Typography, Grid, Card, CardContent, CardActionArea, 
  CardMedia, Divider, Paper
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AirportIcon from '@mui/icons-material/LocalAirport';
import PeopleIcon from '@mui/icons-material/People';
import RouteIcon from '@mui/icons-material/Route';

export default function Dashboard() {
  const navigate = useNavigate();

  const procedureCards = [
    { title: 'Add Airplane', icon: <AirplaneTicketIcon sx={{ fontSize: 40 }} />, path: '/procedures/add-airplane', description: 'Register a new airplane with details' },
    { title: 'Add Airport', icon: <AirportIcon sx={{ fontSize: 40 }} />, path: '/procedures/add-airport', description: 'Add a new airport to the system' },
    { title: 'Offer Flight', icon: <FlightTakeoffIcon sx={{ fontSize: 40 }} />, path: '/procedures/offer-flight', description: 'Create a new flight offering' },
    { title: 'Flight Operations', icon: <FlightLandIcon sx={{ fontSize: 40 }} />, path: '/procedures/flight-landing', description: 'Manage flight landings and takeoffs' },
  ];

  const viewCards = [
    { title: 'Flights in Air', icon: <FlightTakeoffIcon sx={{ fontSize: 40 }} />, path: '/views/flights-in-air', description: 'View all airborne flights' },
    { title: 'People Tracking', icon: <PeopleIcon sx={{ fontSize: 40 }} />, path: '/views/people-in-air', description: 'Track people in air and on ground' },
    { title: 'Route Summary', icon: <RouteIcon sx={{ fontSize: 40 }} />, path: '/views/route-summary', description: 'View summary of all routes' },
    { title: 'Airports', icon: <AirportIcon sx={{ fontSize: 40 }} />, path: '/views/alternate-airports', description: 'See airports by city' },
  ];

  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2, bgcolor: '#f8f9ff' }}>
        <Typography variant="h4" gutterBottom>
          Welcome to Airline Management System
        </Typography>
        <Typography variant="body1" color="text.secondary">
          A comprehensive system for managing flights, airports, and passengers.
          Use the sidebar to navigate to different procedures and views.
        </Typography>
      </Paper>

      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        Common Procedures
      </Typography>
      <Grid container spacing={3}>
        {procedureCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                }
              }}
            >
              <CardActionArea 
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                onClick={() => navigate(card.path)}
              >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', width: '100%' }}>
                  {card.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1, width: '100%' }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>

      <Typography variant="h5" gutterBottom sx={{ mt: 4, mb: 2 }}>
        System Views
      </Typography>
      <Grid container spacing={3}>
        {viewCards.map((card) => (
          <Grid item xs={12} sm={6} md={3} key={card.title}>
            <Card 
              elevation={2} 
              sx={{ 
                height: '100%', 
                display: 'flex', 
                flexDirection: 'column',
                transition: 'transform 0.2s, box-shadow 0.2s',
                '&:hover': {
                  transform: 'translateY(-4px)',
                  boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                }
              }}
            >
              <CardActionArea 
                sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}
                onClick={() => navigate(card.path)}
              >
                <Box sx={{ p: 2, display: 'flex', justifyContent: 'center', width: '100%' }}>
                  {card.icon}
                </Box>
                <CardContent sx={{ flexGrow: 1, width: '100%' }}>
                  <Typography gutterBottom variant="h6" component="div">
                    {card.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {card.description}
                  </Typography>
                </CardContent>
              </CardActionArea>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
} 