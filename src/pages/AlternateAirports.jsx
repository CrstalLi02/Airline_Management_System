import React, { useEffect, useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const AlternateAirports = () => {
  const [airportData, setAirportData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟数据获取 - 实际项目中会从API获取
    const fetchAirportsData = async () => {
      try {
        // 模拟数据 - 符合图片中的格式
        const mockData = [
          { 
            city: 'Chicago',
            state: 'Illinois',
            country: 'USA',
            num_airports: 2,
            airport_code_list: 'MDW, ORD',
            airport_names_list: 'Chicago Midway International, O_Hare International'
          },
          { 
            city: 'Houston',
            state: 'Texas',
            country: 'USA',
            num_airports: 2,
            airport_code_list: 'HOU, IAH',
            airport_names_list: 'William P. Hobby International, George Bush Intercontinental'
          }
        ];
        
        setAirportData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch alternate airports data');
        setLoading(false);
      }
    };

    fetchAirportsData();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="Alternate Airports" 
        description="View alternate airports by city"
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
        title="Alternate Airports" 
        description="View alternate airports by city"
      >
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title="Alternate Airports" 
      description="View alternate airports by city"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">View: Alternate Airports</h2>
        <p className="text-lg text-gray-600 mb-6 font-medium">alternative_airports()</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left font-semibold">City</th>
                <th className="py-3 px-4 text-left font-semibold">State</th>
                <th className="py-3 px-4 text-left font-semibold">Country</th>
                <th className="py-3 px-4 text-left font-semibold">Num Airports</th>
                <th className="py-3 px-4 text-left font-semibold">Airport Code List</th>
                <th className="py-3 px-4 text-left font-semibold">Airport Names List</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {airportData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.city}</td>
                  <td className="py-3 px-4">{item.state}</td>
                  <td className="py-3 px-4">{item.country}</td>
                  <td className="py-3 px-4">{item.num_airports}</td>
                  <td className="py-3 px-4">{item.airport_code_list}</td>
                  <td className="py-3 px-4">{item.airport_names_list}</td>
                </tr>
              ))}
              <tr className="text-gray-400">
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
        
        {airportData.length === 0 && (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z"></path>
            </svg>
            <p className="text-gray-500">No alternate airports found</p>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default AlternateAirports; 