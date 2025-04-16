# Airline Management System

A modern web application for managing airline operations, including flights, airports, airplanes, and personnel.

## Features

### Procedures (Forms/Actions)

- **Add Airplane** – Register a new airplane with details (tail number, type, speed, airline, etc.)
- **Add Airport** – Add a new airport to the system (ID, name, city, state, country)
- **Add Person** – Register new individuals (crew, passengers) with personal details
- **Grant/Revoke Pilot License** – Manage pilot licensing
- **Offer Flight** – Create new flight offerings
- **Flight Landing/Takeoff** – Manage flight arrival and departure
- **Passengers Board/Disembark** – Track passenger movement
- **Assign Pilot** – Assign pilots to flights
- **Recycle Crew** – Reassign crew members
- **Retire Flight** – Remove flights from the system
- **Simulation Cycle** – Progress the simulation

### Views (System Information)

- **Flights in the Air** – Real-time tracking of airborne flights
- **Flights on the Ground** – View grounded flights and locations
- **People in the Air** – Track passengers and crew in flight
- **People on the Ground** – View people at airports
- **Route Summary** – Information about all routes
- **Alternate Airports** – View cities with multiple airports

## Technology Stack

- React.js
- Material UI
- React Router

## Getting Started

### Prerequisites

- Node.js 14.0 or higher
- npm or yarn

### Installation

1. Clone the repository
2. Install dependencies:
   ```
   npm install
   ```
3. Start the development server:
   ```
   npm start
   ```

## Project Structure

- `src/components/procedures/` - Forms for performing actions
- `src/components/views/` - Read-only data displays
- `src/layouts/` - Page layouts and navigation
- `src/assets/` - Static assets

## Screenshots

![Dashboard](src/assets/dashboard-screenshot.png)
![Add Airplane Form](src/assets/add-airplane-screenshot.png)
![Flights in Air View](src/assets/flights-in-air-screenshot.png)

## Future Enhancements

- Backend API integration
- User authentication
- Real-time data updates
- Interactive maps for flight tracking
- Mobile responsiveness improvements 