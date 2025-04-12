import React, { useEffect, useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const RouteSummary = () => {
  const [routeData, setRouteData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟数据获取 - 实际项目中会从API获取
    const fetchRouteData = async () => {
      try {
        // 模拟数据 - 符合图片中的格式
        const mockData = [
          { 
            route: 'americas_hub_exchange',
            num_legs: 1,
            leg_sequence: 'leg_4',
            route_length: 600,
            num_flights: 1,
            flight_list: 'aa_12',
            airport_sequence: 'ATL->ORD'
          },
          { 
            route: 'americas_one',
            num_legs: 2,
            leg_sequence: 'leg_2/leg_1',
            route_length: 4300,
            num_flights: 1,
            flight_list: 'dl_10',
            airport_sequence: 'ATL->AMS, AMS->BER'
          }
        ];
        
        setRouteData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch route summary data');
        setLoading(false);
      }
    };

    fetchRouteData();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="Route Summary" 
        description="View route summary information"
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
        title="Route Summary" 
        description="View route summary information"
      >
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title="Route Summary" 
      description="View route summary information"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">View: Route Summary</h2>
        <p className="text-lg text-gray-600 mb-6 font-medium">route_summary()</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left font-semibold">Route</th>
                <th className="py-3 px-4 text-left font-semibold">Num Legs</th>
                <th className="py-3 px-4 text-left font-semibold">Leg Sequence</th>
                <th className="py-3 px-4 text-left font-semibold">Route Length</th>
                <th className="py-3 px-4 text-left font-semibold">Num Flights</th>
                <th className="py-3 px-4 text-left font-semibold">Flight List</th>
                <th className="py-3 px-4 text-left font-semibold">Airport Sequence</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {routeData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.route}</td>
                  <td className="py-3 px-4">{item.num_legs}</td>
                  <td className="py-3 px-4">{item.leg_sequence}</td>
                  <td className="py-3 px-4">{item.route_length}</td>
                  <td className="py-3 px-4">{item.num_flights}</td>
                  <td className="py-3 px-4">{item.flight_list}</td>
                  <td className="py-3 px-4">{item.airport_sequence}</td>
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
        
        {routeData.length === 0 && (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"></path>
            </svg>
            <p className="text-gray-500">No route summary data found</p>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default RouteSummary; 