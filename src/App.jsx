import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import "./App.css";

// 导入已创建的页面组件
import MainPage from './pages/MainPage';
import AddAirplane from './pages/AddAirplane';
import AddAirport from './pages/AddAirport';
import AddPerson from './pages/AddPerson';
import GrantOrRevokeLicense from './pages/GrantOrRevokeLicense';
import OfferFlight from './pages/OfferFlight';
import FlightLanding from './pages/FlightLanding';
import FlightTakeoff from './pages/FlightTakeoff';
import PassengersBoard from './pages/PassengersBoard';
import FlightsInTheAir from './pages/FlightsInTheAir';
import FlightsOnTheGround from './pages/FlightsOnTheGround';
import PassengersDisembark from './pages/PassengersDisembark';
import AssignPilot from './pages/AssignPilot';
import RecycleCrew from './pages/RecycleCrew2';
import RetireFlight from './pages/RetireFlight2';
import SimulationCycle from './pages/SimulationCycle2';
import PeopleInTheAir from './pages/PeopleInTheAir';
import PeopleOnTheGround from './pages/PeopleOnTheGround';
import RouteSummary from './pages/RouteSummary';
import AlternateAirports from './pages/AlternateAirports';

// 创建一个通用的占位组件用于未实现的页面
const PlaceholderPage = ({ title }) => (
  <div className="min-h-screen bg-gray-50 flex items-center justify-center">
    <div className="text-center p-6 bg-white rounded-lg shadow-sm">
      <h1 className="text-2xl font-bold text-gray-800 mb-2">{title}</h1>
      <p className="text-gray-600">This page is under construction.</p>
      <a href="/" className="mt-4 inline-block text-blue-500 hover:underline">
        Return to Dashboard
      </a>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          {/* 主页 */}
          <Route path="/" element={<MainPage />} />
          <Route path="/dashboard" element={<MainPage />} />
          
          {/* 已创建的组件 */}
          <Route path="/add-airplane" element={<AddAirplane />} />
          <Route path="/add-airport" element={<AddAirport />} />
          <Route path="/add-person" element={<AddPerson />} />
          <Route path="/grant-revoke-license" element={<GrantOrRevokeLicense />} />
          <Route path="/offer-flight" element={<OfferFlight />} />
          <Route path="/flight-landing" element={<FlightLanding />} />
          <Route path="/flight-takeoff" element={<FlightTakeoff />} />
          <Route path="/passengers-board" element={<PassengersBoard />} />
          <Route path="/flights-in-the-air" element={<FlightsInTheAir />} />
          <Route path="/flights-on-the-ground" element={<FlightsOnTheGround />} />
          <Route path="/passengers-disembark" element={<PassengersDisembark />} />
          <Route path="/assign-pilot" element={<AssignPilot />} />
          <Route path="/recycle-crew" element={<RecycleCrew />} />
          <Route path="/retire-flight" element={<RetireFlight />} />
          <Route path="/simulation-cycle" element={<SimulationCycle />} />
          
          {/* 新创建的组件 */}
          <Route path="/people-in-the-air" element={<PeopleInTheAir />} />
          <Route path="/people-on-the-ground" element={<PeopleOnTheGround />} />
          <Route path="/route-summary" element={<RouteSummary />} />
          <Route path="/alternate-airports" element={<AlternateAirports />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App; 