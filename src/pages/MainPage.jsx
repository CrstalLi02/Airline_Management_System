import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function MainPage() {
  useEffect(() => {
    console.log('MainPage rendered');
  }, []);

  // ---- simple inline styles ----
  const container = {
    padding: 20,
    maxWidth: 650,
    margin: '40px auto',
    fontFamily: 'Arial, sans-serif',
  };
  const title = { textAlign: 'center', marginBottom: 28, fontSize: 26, fontWeight: 'bold' };
  const sectionTitle = { fontSize: 18, fontWeight: 'bold', margin: '20px 0 12px' };

  const list = { listStyle: 'none', padding: 0, margin: 0 };
  const item = {
    background: '#e0e0e0',
    marginBottom: 8,
    borderRadius: 4,
  };
  const link = {
    display: 'block',
    padding: '12px 16px',
    textDecoration: 'none',
    color: '#000',
    fontWeight: 600,
  };

  const MenuItem = ({ to, children }) => (
    <li className="menu-item" style={item}>
      <Link to={to} style={link}>{children}</Link>
    </li>
  );

  return (
    <div style={container}>
      {/* simple hover effect via style tag */}
      <style>{`.menu-item:hover{background:#d0d0d0}`}</style>

      <h1 style={title}>Airline Management System</h1>

      <section>
        <h2 style={sectionTitle}>Procedures</h2>
        <ul style={list}>
          <MenuItem to="/add-airplane">Add Airplane</MenuItem>
          <MenuItem to="/add-airport">Add Airport</MenuItem>
          <MenuItem to="/add-person">Add Person</MenuItem>
          <MenuItem to="/grant-revoke-license">Grant / Revoke Pilot License</MenuItem>
          <MenuItem to="/offer-flight">Offer Flight</MenuItem>
          <MenuItem to="/flight-landing">Flight Landing</MenuItem>
          <MenuItem to="/flight-takeoff">Flight Takeoff</MenuItem>
          <MenuItem to="/passengers-board">Passengers Board</MenuItem>
          <MenuItem to="/passengers-disembark">Passengers Disembark</MenuItem>
          <MenuItem to="/assign-pilot">Assign Pilot</MenuItem>
          <MenuItem to="/recycle-crew">Recycle Crew</MenuItem>
          <MenuItem to="/retire-flight">Retire Flight</MenuItem>
          <MenuItem to="/simulation-cycle">Simulation Cycle</MenuItem>
        </ul>
      </section>

      <section>
        <h2 style={sectionTitle}>Views</h2>
        <ul style={list}>
          <MenuItem to="/flights-in-the-air">Flights in the Air</MenuItem>
          <MenuItem to="/flights-on-the-ground">Flights on the Ground</MenuItem>
          <MenuItem to="/people-in-the-air">People in the Air</MenuItem>
          <MenuItem to="/people-on-the-ground">People on the Ground</MenuItem>
          <MenuItem to="/route-summary">Route Summary</MenuItem>
          <MenuItem to="/alternate-airports">Alternate Airports</MenuItem>
        </ul>
      </section>
    </div>
  );
}
