import React, { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { 
  AppBar, Toolbar, Typography, Box, Drawer, List, ListItem, 
  ListItemIcon, ListItemText, Divider, IconButton, ListItemButton
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import FlightLandIcon from '@mui/icons-material/FlightLand';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';
import AirportIcon from '@mui/icons-material/LocalAirport';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import BadgeIcon from '@mui/icons-material/Badge';
import AddLocationIcon from '@mui/icons-material/AddLocation';
import PeopleIcon from '@mui/icons-material/People';
import RouteIcon from '@mui/icons-material/Route';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import EventIcon from '@mui/icons-material/Event';
import RotateRightIcon from '@mui/icons-material/RotateRight';
import DashboardIcon from '@mui/icons-material/Dashboard';

const drawerWidth = 280;

const procedures = [
  { name: 'Add Airplane', icon: <AirplaneTicketIcon />, path: '/procedures/add-airplane' },
  { name: 'Add Airport', icon: <AirportIcon />, path: '/procedures/add-airport' },
  { name: 'Add Person', icon: <PersonAddIcon />, path: '/procedures/add-person' },
  { name: 'Grant/Revoke Pilot License', icon: <BadgeIcon />, path: '/procedures/pilot-license' },
  { name: 'Offer Flight', icon: <AddLocationIcon />, path: '/procedures/offer-flight' },
  { name: 'Flight Landing', icon: <FlightLandIcon />, path: '/procedures/flight-landing' },
  { name: 'Flight Takeoff', icon: <FlightTakeoffIcon />, path: '/procedures/flight-takeoff' },
  { name: 'Passengers Board', icon: <PeopleIcon />, path: '/procedures/passengers-board' },
  { name: 'Passengers Disembark', icon: <PeopleIcon />, path: '/procedures/passengers-disembark' },
  { name: 'Assign Pilot', icon: <PersonAddIcon />, path: '/procedures/assign-pilot' },
  { name: 'Recycle Crew', icon: <RotateRightIcon />, path: '/procedures/recycle-crew' },
  { name: 'Retire Flight', icon: <EventIcon />, path: '/procedures/retire-flight' },
  { name: 'Simulation Cycle', icon: <AccessTimeIcon />, path: '/procedures/simulation-cycle' },
];

const views = [
  { name: 'Flights in the Air', icon: <FlightTakeoffIcon />, path: '/views/flights-in-air' },
  { name: 'Flights on the Ground', icon: <FlightLandIcon />, path: '/views/flights-on-ground' },
  { name: 'People in the Air', icon: <PeopleIcon />, path: '/views/people-in-air' },
  { name: 'People on the Ground', icon: <PeopleIcon />, path: '/views/people-on-ground' },
  { name: 'Route Summary', icon: <RouteIcon />, path: '/views/route-summary' },
  { name: 'Alternate Airports', icon: <AirportIcon />, path: '/views/alternate-airports' },
];

export default function MainLayout({ children }) {
  const [mobileOpen, setMobileOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const handleNavigation = (path) => {
    navigate(path);
    setMobileOpen(false);
  };

  const drawer = (
    <div>
      <Toolbar sx={{ display: 'flex', justifyContent: 'center' }}>
        <Typography variant="h6" noWrap component="div">
          Airline Management
        </Typography>
      </Toolbar>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton 
            selected={location.pathname === '/'} 
            onClick={() => handleNavigation('/')}
          >
            <ListItemIcon>
              <DashboardIcon />
            </ListItemIcon>
            <ListItemText primary="Dashboard" />
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <Typography sx={{ px: 2, py: 1, fontWeight: 'bold' }}>Procedures</Typography>
      <List>
        {procedures.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              selected={location.pathname === item.path} 
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
      <Divider />
      <Typography sx={{ px: 2, py: 1, fontWeight: 'bold' }}>Views</Typography>
      <List>
        {views.map((item) => (
          <ListItem key={item.name} disablePadding>
            <ListItemButton 
              selected={location.pathname === item.path} 
              onClick={() => handleNavigation(item.path)}
            >
              <ListItemIcon>
                {item.icon}
              </ListItemIcon>
              <ListItemText primary={item.name} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <AppBar
        position="fixed"
        sx={{
          width: { sm: `calc(100% - ${drawerWidth}px)` },
          ml: { sm: `${drawerWidth}px` },
        }}
      >
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: 'none' } }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            Airline Management System
          </Typography>
        </Toolbar>
      </AppBar>
      <Box
        component="nav"
        sx={{ width: { sm: drawerWidth }, flexShrink: { sm: 0 } }}
      >
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: 'block', sm: 'none' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
        >
          {drawer}
        </Drawer>
        <Drawer
          variant="permanent"
          sx={{
            display: { xs: 'none', sm: 'block' },
            '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
          }}
          open
        >
          {drawer}
        </Drawer>
      </Box>
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 3, width: { sm: `calc(100% - ${drawerWidth}px)` } }}
      >
        <Toolbar />
        {children}
      </Box>
    </Box>
  );
} 