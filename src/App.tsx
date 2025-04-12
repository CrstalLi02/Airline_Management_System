import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import ViewFlights from './pages/ViewFlights';
import PassengerDeplane from './pages/PassengerDeplane';
import FlightLand from './pages/FlightLand';
import SimulationCycle from './pages/SimulationCycle';
import AddAirplane from './pages/AddAirplane';
import './App.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/view-flights" element={<ViewFlights />} />
        <Route path="/passenger-deplane" element={<PassengerDeplane />} />
        <Route path="/flight-land" element={<FlightLand />} />
        <Route path="/simulation-cycle" element={<SimulationCycle />} />
        <Route path="/add-airplane" element={<AddAirplane />} />
      </Routes>
    </div>
  );
};

export default App; 