import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const OfferFlight = () => {
  const [flightId, setFlightId] = useState('');
  const [routeId, setRouteId] = useState('');
  const [supportAirline, setSupportAirline] = useState('');
  const [progress, setProgress] = useState('');
  const [nextTime, setNextTime] = useState('');
  const [supportTail, setSupportTail] = useState('');
  const [cost, setCost] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // 这里添加API调用逻辑
    alert('Flight offered successfully!');
    setLoading(false);
    
    // 重置表单
    resetForm();
  };

  const resetForm = () => {
    setFlightId('');
    setRouteId('');
    setSupportAirline('');
    setProgress('');
    setNextTime('');
    setSupportTail('');
    setCost('');
  };

  return (
    <PageTemplate 
      title="Offer Flight" 
      description="Create a new flight offer in the system"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Flight ID</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={flightId}
            onChange={(e) => setFlightId(e.target.value)}
            placeholder="e.g. un_41"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Route ID</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={routeId}
            onChange={(e) => setRouteId(e.target.value)}
            placeholder="e.g. americas_three"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Support Airline</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={supportAirline}
            onChange={(e) => setSupportAirline(e.target.value)}
            placeholder="e.g. United"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Progress</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={progress}
            onChange={(e) => setProgress(e.target.value)}
            placeholder="e.g. 0"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Next Time</label>
          <input
            type="time"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={nextTime}
            onChange={(e) => setNextTime(e.target.value)}
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Support Tail</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={supportTail}
            onChange={(e) => setSupportTail(e.target.value)}
            placeholder="e.g. n330ss"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Cost</label>
          <input
            type="number"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={cost}
            onChange={(e) => setCost(e.target.value)}
            placeholder="e.g. 400"
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
            {loading ? 'Offering...' : 'Add Flight'}
          </button>
        </div>
      </form>
    </PageTemplate>
  );
};

export default OfferFlight; 