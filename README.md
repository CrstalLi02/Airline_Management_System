# Flight Tracking System Frontend

A React-based application for managing airline operations.

## Features

- Dashboard with quick access to all operations
- View and manage airborne flights
- Process passenger deplaning
- Register flight landings
- Run simulation cycles
- Add new airplanes

## Technology Stack

- React
- TypeScript
- React Router
- Tailwind CSS
- Lucide React (for icons)

## Getting Started

### Prerequisites

- Node.js (v14.0.0 or higher)
- npm or yarn

### Installation

1. Clone the repository
```
https://github.com/CrstalLi02/Airline_Management_System.git
```

2. Install dependencies
```
npm install
```
or
```
yarn
```

### Running the Application

1. Start the development server
```
npm start
```
or
```
yarn start
```

2. Open your browser and navigate to `http://localhost:3000`

## How It Works

This React app functions as the user interface for an flight tracking system.

- Users fill forms, and the app validates input before submitting it via `fetch()` to backend API endpoints.

-  The app sends HTTP requests to backend routes like `/procedures/add_person`, which then invoke corresponding stored procedures in the MySQL database.

## Contributor
Yixuan Li and Yiting Zhang were working on the frontend

## Backend repo
``` bash
https://github.com/Li-8023/cs4400-flight-tracking-backend
```