import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const AddAirport = () => {
  const [airportId, setAirportId] = useState('');
  const [airportName, setAirportName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [locationId, setLocationId] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // 这里添加API调用逻辑
    // 示例: const response = await fetch('/api/airports', { method: 'POST', body: ... })
    
    alert('Airport added successfully!');
    setLoading(false);
    
    // 重置表单
    resetForm();
  };

  const resetForm = () => {
    setAirportId('');
    setAirportName('');
    setCity('');
    setState('');
    setCountry('');
    setLocationId('');
  };

  return (
    <PageTemplate 
      title="Add Airport" 
      description="Register a new airport in the system"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Airport ID</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={airportId}
            onChange={(e) => setAirportId(e.target.value)}
            placeholder="e.g. LAX"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Airport Name</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={airportName}
            onChange={(e) => setAirportName(e.target.value)}
            placeholder="e.g. Los Angeles International Airport"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">City</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            placeholder="e.g. Los Angeles"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">State</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={state}
            onChange={(e) => setState(e.target.value)}
            placeholder="e.g. California"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Country</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={country}
            onChange={(e) => setCountry(e.target.value)}
            placeholder="e.g. USA"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Location ID</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={locationId}
            onChange={(e) => setLocationId(e.target.value)}
            placeholder="e.g. port_33"
            required
          />
        </div>

        <div className="pt-4 flex justify-between">
          <button 
            type="button"
            className="bg-gray-600 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            onClick={resetForm}
          >
            Cancel
          </button>
          
          <button 
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            <span className="mr-2">+</span>
            {loading ? 'Adding...' : 'Add Airport'}
          </button>
        </div>
      </form>
    </PageTemplate>
  );
};

export default AddAirport; 