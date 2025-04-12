import React, { useEffect, useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const FlightsInTheAir = () => {
  const [flightGroups, setFlightGroups] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 示例数据获取 - 实际项目中会从API获取
    const fetchFlights = async () => {
      try {
        // 模拟数据 - 符合图片中的格式
        const mockData = [
          { 
            departing_from: 'ATL', 
            arriving_at: 'BCN',
            num_flights: 1,
            flight_list: 'dl_10',
            earliest_arrival: '08:00:00',
            latest_arrival: '08:00:00',
            airplane_list: 'plane_1'
          },
          { 
            departing_from: 'BCN', 
            arriving_at: 'CDG',
            num_flights: 1,
            flight_list: 'lf_20',
            earliest_arrival: '11:00:00',
            latest_arrival: '11:00:00',
            airplane_list: 'plane_8'
          }
        ];
        
        setFlightGroups(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch flights data');
        setLoading(false);
      }
    };

    fetchFlights();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="Flights in the Air" 
        description="Monitor currently airborne flights"
      >
        <div className="flex justify-center items-center py-12">
          <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-blue-500"></div>
        </div>
      </PageTemplate>
    );
  }

  if (error) {
    return (
      <PageTemplate 
        title="Flights in the Air" 
        description="Monitor currently airborne flights"
      >
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title="Flights in the Air" 
      description="Monitor currently airborne flights"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">View: Flights in the Air</h2>
        <p className="text-lg text-gray-600 mb-6 font-medium">flights_in_the_air()</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left font-semibold">departing_from</th>
                <th className="py-3 px-4 text-left font-semibold">arriving_at</th>
                <th className="py-3 px-4 text-left font-semibold">num_flights</th>
                <th className="py-3 px-4 text-left font-semibold">flight_list</th>
                <th className="py-3 px-4 text-left font-semibold">earliest_arrival</th>
                <th className="py-3 px-4 text-left font-semibold">latest_arrival</th>
                <th className="py-3 px-4 text-left font-semibold">airplane_list</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {flightGroups.map((group, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{group.departing_from}</td>
                  <td className="py-3 px-4">{group.arriving_at}</td>
                  <td className="py-3 px-4">{group.num_flights}</td>
                  <td className="py-3 px-4">{group.flight_list}</td>
                  <td className="py-3 px-4">{group.earliest_arrival}</td>
                  <td className="py-3 px-4">{group.latest_arrival}</td>
                  <td className="py-3 px-4">{group.airplane_list}</td>
                </tr>
              ))}
              <tr className="text-gray-400">
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {flightGroups.length === 0 && (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
            <p className="text-gray-500">No airborne flights found</p>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default FlightsInTheAir; 