import React, { useState } from 'react';
import {
  Typography, Box, Paper, Table, TableBody, TableCell, TableContainer,
  TableHead, TableRow, Chip, IconButton, Tooltip, TextField, InputAdornment
} from '@mui/material';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import InfoIcon from '@mui/icons-material/Info';
import SearchIcon from '@mui/icons-material/Search';
import RefreshIcon from '@mui/icons-material/Refresh';

// Sample data for demonstration purposes
const mockFlights = [
  {
    id: 'FL1001',
    airline: 'Delta Airlines',
    tailNumber: 'N123DL',
    routeID: 'RT456',
    origin: 'ATL',
    destination: 'LAX',
    departureTime: '2023-05-01 08:30',
    arrivalTime: '2023-05-01 11:45',
    currentLocation: { lat: 36.1231, lng: -95.2312 },
    altitude: 35000,
    speed: 550,
    progress: 65,
    planeType: 'Boeing 737',
    status: 'On Time'
  },
  {
    id: 'FL2002',
    airline: 'United Airlines',
    tailNumber: 'N456UA',
    routeID: 'RT789',
    origin: 'ORD',
    destination: 'SFO',
    departureTime: '2023-05-01 09:15',
    arrivalTime: '2023-05-01 12:30',
    currentLocation: { lat: 41.8781, lng: -93.0369 },
    altitude: 38000,
    speed: 575,
    progress: 40,
    planeType: 'Boeing 787',
    status: 'Delayed'
  },
  {
    id: 'FL3003',
    airline: 'American Airlines',
    tailNumber: 'N789AA',
    routeID: 'RT321',
    origin: 'DFW',
    destination: 'MIA',
    departureTime: '2023-05-01 10:00',
    arrivalTime: '2023-05-01 13:45',
    currentLocation: { lat: 30.1975, lng: -85.6356 },
    altitude: 32000,
    speed: 530,
    progress: 80,
    planeType: 'Airbus A321',
    status: 'On Time'
  },
  {
    id: 'FL4004',
    airline: 'Southwest Airlines',
    tailNumber: 'N321WN',
    routeID: 'RT654',
    origin: 'LAS',
    destination: 'DEN',
    departureTime: '2023-05-01 11:30',
    arrivalTime: '2023-05-01 14:15',
    currentLocation: { lat: 38.8026, lng: -111.7162 },
    altitude: 30000,
    speed: 510,
    progress: 55,
    planeType: 'Boeing 737',
    status: 'On Time'
  },
  {
    id: 'FL5005',
    airline: 'JetBlue Airways',
    tailNumber: 'N555JB',
    routeID: 'RT987',
    origin: 'JFK',
    destination: 'LAX',
    departureTime: '2023-05-01 07:45',
    arrivalTime: '2023-05-01 11:30',
    currentLocation: { lat: 40.1164, lng: -105.9420 },
    altitude: 39000,
    speed: 585,
    progress: 70,
    planeType: 'Airbus A320',
    status: 'On Time'
  }
];

export default function FlightsInAir() {
  const [flights, setFlights] = useState(mockFlights);
  const [searchTerm, setSearchTerm] = useState('');
  
  // Filter flights based on search term
  const filteredFlights = flights.filter(flight => 
    flight.id.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.airline.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.tailNumber.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.origin.toLowerCase().includes(searchTerm.toLowerCase()) ||
    flight.destination.toLowerCase().includes(searchTerm.toLowerCase())
  );
  
  // Handle search
  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };
  
  // Simulate refresh
  const handleRefresh = () => {
    // In a real application, this would fetch fresh data from the API
    console.log('Refreshing flight data');
    // For demo, just simulate a quick delay
    setTimeout(() => {
      setFlights([...mockFlights]);
    }, 500);
  };
  
  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <FlightTakeoffIcon sx={{ mr: 2, fontSize: 30, color: 'primary.main' }} />
          <Typography variant="h5">Flights Currently in the Air</Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Tooltip title="Refresh data">
            <IconButton onClick={handleRefresh} sx={{ ml: 1 }}>
              <RefreshIcon />
            </IconButton>
          </Tooltip>
        </Box>
        
        <TextField
          fullWidth
          variant="outlined"
          placeholder="Search flights by ID, airline, tail number, origin, or destination"
          value={searchTerm}
          onChange={handleSearch}
          sx={{ mb: 3 }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <SearchIcon />
              </InputAdornment>
            ),
          }}
        />
        
        <TableContainer>
          <Table sx={{ minWidth: 650 }}>
            <TableHead>
              <TableRow>
                <TableCell><Typography fontWeight="bold">Flight ID</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Airline</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Tail Number</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Route</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Departure</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Arrival</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Progress</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Status</Typography></TableCell>
                <TableCell><Typography fontWeight="bold">Details</Typography></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredFlights.length > 0 ? filteredFlights.map((flight) => (
                <TableRow 
                  key={flight.id}
                  hover
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell component="th" scope="row">
                    <Typography fontWeight="medium">{flight.id}</Typography>
                  </TableCell>
                  <TableCell>{flight.airline}</TableCell>
                  <TableCell>{flight.tailNumber}</TableCell>
                  <TableCell>{`${flight.origin} → ${flight.destination}`}</TableCell>
                  <TableCell>{flight.departureTime}</TableCell>
                  <TableCell>{flight.arrivalTime}</TableCell>
                  <TableCell>
                    <Box sx={{ display: 'flex', alignItems: 'center' }}>
                      <Box
                        sx={{
                          width: '100%',
                          mr: 1,
                          height: 8,
                          borderRadius: 5,
                          bgcolor: 'background.paper',
                          position: 'relative',
                          overflow: 'hidden'
                        }}
                      >
                        <Box
                          sx={{
                            width: `${flight.progress}%`,
                            height: '100%',
                            borderRadius: 5,
                            bgcolor: flight.status === 'On Time' ? 'success.main' : 'warning.main'
                          }}
                        />
                      </Box>
                      <Typography variant="body2">{`${flight.progress}%`}</Typography>
                    </Box>
                  </TableCell>
                  <TableCell>
                    <Chip 
                      label={flight.status} 
                      color={flight.status === 'On Time' ? 'success' : 'warning'} 
                      size="small" 
                    />
                  </TableCell>
                  <TableCell>
                    <Tooltip title="View Flight Details">
                      <IconButton size="small">
                        <InfoIcon fontSize="small" />
                      </IconButton>
                    </Tooltip>
                  </TableCell>
                </TableRow>
              )) : (
                <TableRow>
                  <TableCell colSpan={9} align="center">
                    <Typography variant="body1" color="text.secondary" sx={{ py: 3 }}>
                      No flights found matching your search criteria.
                    </Typography>
                  </TableCell>
                </TableRow>
              )}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      
      <Paper elevation={2} sx={{ p: 3, borderRadius: 2 }}>
        <Typography variant="h6" gutterBottom>Flight Statistics</Typography>
        <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, mt: 2 }}>
          <Paper elevation={1} sx={{ p: 2, flex: '1 1 200px', bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary">Total Flights In Air</Typography>
            <Typography variant="h4" color="primary.main">{filteredFlights.length}</Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2, flex: '1 1 200px', bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary">On-Time Flights</Typography>
            <Typography variant="h4" color="success.main">
              {filteredFlights.filter(f => f.status === 'On Time').length}
            </Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2, flex: '1 1 200px', bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary">Delayed Flights</Typography>
            <Typography variant="h4" color="warning.main">
              {filteredFlights.filter(f => f.status === 'Delayed').length}
            </Typography>
          </Paper>
          <Paper elevation={1} sx={{ p: 2, flex: '1 1 200px', bgcolor: '#f5f5f5', borderRadius: 2 }}>
            <Typography variant="body2" color="text.secondary">Average Progress</Typography>
            <Typography variant="h4" color="info.main">
              {Math.round(filteredFlights.reduce((acc, curr) => acc + curr.progress, 0) / filteredFlights.length)}%
            </Typography>
          </Paper>
        </Box>
      </Paper>
    </Box>
  );
} 