import React, { useState } from 'react';
import {
  Typography, Box, TextField, Button, Paper, Grid,
  FormControl, InputLabel, Select, MenuItem, Alert, Snackbar
} from '@mui/material';
import AirplaneTicketIcon from '@mui/icons-material/AirplaneTicket';

export default function AddAirplane() {
  const [formData, setFormData] = useState({
    tailNumber: '',
    type: '',
    airlineName: '',
    speed: '',
    locationID: '',
    seatCapacity: '',
    maintStatus: 'Operational'
  });
  
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Validate form
    if (!formData.tailNumber || !formData.type || !formData.airlineName) {
      setError(true);
      return;
    }
    
    // In a real application, this would be an API call
    console.log('Submitting airplane data:', formData);
    
    // Show success message
    setSuccess(true);
    
    // Reset form
    setFormData({
      tailNumber: '',
      type: '',
      airlineName: '',
      speed: '',
      locationID: '',
      seatCapacity: '',
      maintStatus: 'Operational'
    });
  };
  
  const handleCloseSnackbar = () => {
    setSuccess(false);
    setError(false);
  };
  
  return (
    <Box>
      <Paper elevation={2} sx={{ p: 3, mb: 4, borderRadius: 2 }}>
        <Box sx={{ display: 'flex', alignItems: 'center', mb: 2 }}>
          <AirplaneTicketIcon sx={{ mr: 2, fontSize: 30, color: 'primary.main' }} />
          <Typography variant="h5">Add New Airplane</Typography>
        </Box>
        <Typography variant="body2" color="text.secondary" paragraph>
          Enter the details of the airplane you want to add to the system.
        </Typography>
        
        <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
          <Grid container spacing={3}>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="tailNumber"
                label="Airplane Tail Number"
                name="tailNumber"
                value={formData.tailNumber}
                onChange={handleChange}
                variant="outlined"
                helperText="Enter the unique tail number"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="type"
                label="Airplane Type"
                name="type"
                value={formData.type}
                onChange={handleChange}
                variant="outlined"
                helperText="E.g., Boeing 737, Airbus A320, etc."
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                required
                fullWidth
                id="airlineName"
                label="Airline Name"
                name="airlineName"
                value={formData.airlineName}
                onChange={handleChange}
                variant="outlined"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="speed"
                label="Cruising Speed (mph)"
                name="speed"
                type="number"
                value={formData.speed}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ inputProps: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="locationID"
                label="Current Location ID"
                name="locationID"
                value={formData.locationID}
                onChange={handleChange}
                variant="outlined"
                helperText="Airport code where the plane is currently located"
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                id="seatCapacity"
                label="Seat Capacity"
                name="seatCapacity"
                type="number"
                value={formData.seatCapacity}
                onChange={handleChange}
                variant="outlined"
                InputProps={{ inputProps: { min: 0 } }}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <FormControl fullWidth>
                <InputLabel id="maintStatus-label">Maintenance Status</InputLabel>
                <Select
                  labelId="maintStatus-label"
                  id="maintStatus"
                  name="maintStatus"
                  value={formData.maintStatus}
                  label="Maintenance Status"
                  onChange={handleChange}
                >
                  <MenuItem value="Operational">Operational</MenuItem>
                  <MenuItem value="Maintenance">In Maintenance</MenuItem>
                  <MenuItem value="Grounded">Grounded</MenuItem>
                </Select>
              </FormControl>
            </Grid>
            <Grid item xs={12} sx={{ mt: 2 }}>
              <Button
                type="submit"
                variant="contained"
                size="large"
                sx={{ mr: 2 }}
              >
                Add Airplane
              </Button>
              <Button
                variant="outlined"
                size="large"
                onClick={() => {
                  setFormData({
                    tailNumber: '',
                    type: '',
                    airlineName: '',
                    speed: '',
                    locationID: '',
                    seatCapacity: '',
                    maintStatus: 'Operational'
                  });
                }}
              >
                Clear Form
              </Button>
            </Grid>
          </Grid>
        </Box>
      </Paper>
      
      <Snackbar open={success} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="success" sx={{ width: '100%' }}>
          Airplane added successfully!
        </Alert>
      </Snackbar>
      
      <Snackbar open={error} autoHideDuration={6000} onClose={handleCloseSnackbar}>
        <Alert onClose={handleCloseSnackbar} severity="error" sx={{ width: '100%' }}>
          Please fill all required fields!
        </Alert>
      </Snackbar>
    </Box>
  );
} 