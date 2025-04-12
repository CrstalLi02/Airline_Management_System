import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const SimulationCycle = () => {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);
    
    try {
      // 这里添加API调用逻辑
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      alert('Simulation cycle executed successfully!');
      setSuccess(true);
    } catch (err) {
      setError('Failed to execute simulation cycle. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <PageTemplate 
      title="Simulation Cycle" 
      description="Execute a simulation cycle in the system"
    >
      {success && (
        <div className="mb-6 bg-green-50 border border-green-200 text-green-700 px-4 py-3 rounded flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
          </svg>
          <span>Simulation cycle executed successfully!</span>
        </div>
      )}

      {error && (
        <div className="mb-6 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded flex items-center">
          <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
          </svg>
          <span>{error}</span>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="pt-4 flex justify-between">
          <button 
            type="button"
            className="bg-gray-600 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            onClick={() => window.history.back()}
          >
            Cancel
          </button>
          
          <button 
            type="submit"
            disabled={loading}
            className="flex items-center justify-center bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? 'Processing...' : 'Next Step'}
          </button>
        </div>
      </form>
    </PageTemplate>
  );
};

export default SimulationCycle; 