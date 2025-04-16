import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import MainLayout from './layouts/MainLayout';

// Procedures
import AddAirplane from './components/procedures/AddAirplane';
import AddAirport from './components/procedures/AddAirport';
import AddPerson from './components/procedures/AddPerson';
import PilotLicense from './components/procedures/PilotLicense';
import OfferFlight from './components/procedures/OfferFlight';
import FlightLanding from './components/procedures/FlightLanding';
import FlightTakeoff from './components/procedures/FlightTakeoff';
import PassengersBoard from './components/procedures/PassengersBoard';
import PassengersDisembark from './components/procedures/PassengersDisembark';
import AssignPilot from './components/procedures/AssignPilot';
import RecycleCrew from './components/procedures/RecycleCrew';
import RetireFlight from './components/procedures/RetireFlight';
import SimulationCycle from './components/procedures/SimulationCycle';

// Views
import FlightsInAir from './components/views/FlightsInAir';
import FlightsOnGround from './components/views/FlightsOnGround';
import PeopleInAir from './components/views/PeopleInAir';
import PeopleOnGround from './components/views/PeopleOnGround';
import RouteSummary from './components/views/RouteSummary';
import AlternateAirports from './components/views/AlternateAirports';
import Dashboard from './components/Dashboard';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#dc004e',
    },
    background: {
      default: '#f5f7fa',
    },
  },
  typography: {
    fontFamily: [
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      'Oxygen',
      'Ubuntu',
      'Cantarell',
      'Fira Sans',
      'Droid Sans',
      'Helvetica Neue',
      'sans-serif',
    ].join(','),
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <MainLayout>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          
          {/* Procedures */}
          <Route path="/procedures/add-airplane" element={<AddAirplane />} />
          <Route path="/procedures/add-airport" element={<AddAirport />} />
          <Route path="/procedures/add-person" element={<AddPerson />} />
          <Route path="/procedures/pilot-license" element={<PilotLicense />} />
          <Route path="/procedures/offer-flight" element={<OfferFlight />} />
          <Route path="/procedures/flight-landing" element={<FlightLanding />} />
          <Route path="/procedures/flight-takeoff" element={<FlightTakeoff />} />
          <Route path="/procedures/passengers-board" element={<PassengersBoard />} />
          <Route path="/procedures/passengers-disembark" element={<PassengersDisembark />} />
          <Route path="/procedures/assign-pilot" element={<AssignPilot />} />
          <Route path="/procedures/recycle-crew" element={<RecycleCrew />} />
          <Route path="/procedures/retire-flight" element={<RetireFlight />} />
          <Route path="/procedures/simulation-cycle" element={<SimulationCycle />} />
          
          {/* Views */}
          <Route path="/views/flights-in-air" element={<FlightsInAir />} />
          <Route path="/views/flights-on-ground" element={<FlightsOnGround />} />
          <Route path="/views/people-in-air" element={<PeopleInAir />} />
          <Route path="/views/people-on-ground" element={<PeopleOnGround />} />
          <Route path="/views/route-summary" element={<RouteSummary />} />
          <Route path="/views/alternate-airports" element={<AlternateAirports />} />
        </Routes>
      </MainLayout>
    </ThemeProvider>
  );
}

export default App; 