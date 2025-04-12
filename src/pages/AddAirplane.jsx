import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constant';

export default function AddAirplane() {
  const [airlineID, setAirlineID] = useState('');
  const [tailNum, setTailNum] = useState('');
  const [seatCapacity, setSeatCapacity] = useState('');
  const [speed, setSpeed] = useState('');
  const [locationID, setLocationID] = useState('');
  const [planeType, setPlaneType] = useState('');
  const [maintenanced, setMaintenanced] = useState(false);
  const [model, setModel] = useState('');
  const [neo, setNeo] = useState(false);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    // Set the document title
    document.title = 'Add Airplane | Airline Management System';
  }, []);

  const handleAddAirplane = async () => {
    setMessage('');
    setError('');
    setLoading(true);

    if (!airlineID || !tailNum || !planeType) {
      setError('Airline ID, Tail Number, and Plane Type are required.');
      setLoading(false);
      return;
    }

    try {
      // 使用从constant.js导入的API_BASE_URL
      const response = await fetch(`${API_BASE_URL}/procedures/add_airplane`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          airlineID: airlineID,
          tail_num: tailNum,
          seat_capacity: parseInt(seatCapacity) || 0,
          speed: parseInt(speed) || 0,
          locationID: locationID || null,
          plane_type: planeType,
          maintenanced: maintenanced,
          model: model || null,
          neo: neo,
        }),
      });

      if (response.ok) {
        const data = await response.json();
        setMessage(data.message || 'Airplane added successfully!');
        // Reset form after successful submission
        setAirlineID('');
        setTailNum('');
        setSeatCapacity('');
        setSpeed('');
        setLocationID('');
        setPlaneType('');
        setMaintenanced(false);
        setModel('');
        setNeo(false);
      } else {
        const errorData = await response.json();
        setError(errorData.error || 'Failed to add airplane.');
      }
    } catch (err) {
      console.error('Error adding airplane:', err);
      setError('An unexpected error occurred. Please check if the API server is running.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // Navigate back or reset form
    window.location.href = '/';
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-3xl">
        <header className="mb-8">
          <a href="/" className="inline-flex items-center text-gray-600 mb-6 hover:text-gray-900">
            <svg className="w-5 h-5 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 19L5 12L12 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Back to Dashboard
          </a>

          <h1 className="text-3xl font-bold mb-2 flex items-center">
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3 8H21L21 10H3V8Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M5 10H19V17H5V10Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M8 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16 17V19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 10L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add Airplane
          </h1>
          <p className="text-gray-500 mb-8">Register a new airplane in the system</p>
        </header>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          {message && (
            <div className="bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded mb-6">
              {message}
            </div>
          )}
          
          {error && (
            <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded mb-6">
              {error}
            </div>
          )}

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Airline ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={airlineID}
                onChange={(e) => setAirlineID(e.target.value)}
                placeholder="Enter airline ID (e.g. AA001)"
                required
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tail Number</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={tailNum}
                onChange={(e) => setTailNum(e.target.value)}
                placeholder="Enter tail number (e.g. TAIL123)"
                required
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Seat Capacity</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={seatCapacity}
                onChange={(e) => setSeatCapacity(e.target.value)}
                placeholder="Enter seat capacity (e.g. 180)"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Speed</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={speed}
                onChange={(e) => setSpeed(e.target.value)}
                placeholder="Enter speed (e.g. 900)"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Location ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={locationID}
                onChange={(e) => setLocationID(e.target.value)}
                placeholder="Enter location ID (e.g. LAX1)"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Plane Type</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={planeType}
                onChange={(e) => setPlaneType(e.target.value)}
                placeholder="Enter plane type (e.g. Boeing)"
                required
              />
            </div>

            <div className="form-group">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={maintenanced}
                  onChange={(e) => setMaintenanced(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">Maintenanced</span>
              </label>
              <p className="text-xs text-gray-500 mt-1">Check if the airplane is maintenanced</p>
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Model</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={model}
                onChange={(e) => setModel(e.target.value)}
                placeholder="Enter model (e.g. 737-MAX)"
              />
            </div>

            <div className="form-group">
              <label className="flex items-center space-x-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={neo}
                  onChange={(e) => setNeo(e.target.checked)}
                  className="h-4 w-4 text-blue-600 focus:ring-blue-500 border-gray-300 rounded"
                />
                <span className="text-sm font-medium text-gray-700">Neo</span>
              </label>
              <p className="text-xs text-gray-500 mt-1">Check if this is a neo model</p>
            </div>
          </div>

          <div className="mt-8 flex justify-center space-x-4">
            <button 
              onClick={handleCancel}
              className="bg-gray-500 hover:bg-gray-600 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            
            <button 
              onClick={handleAddAirplane} 
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Adding...' : 'Add'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
} 