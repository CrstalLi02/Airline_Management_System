import React, { useEffect, useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const PeopleInTheAir = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟数据获取 - 实际项目中会从API获取
    const fetchPeopleInAirData = async () => {
      try {
        // 模拟数据 - 符合图片中的格式
        const mockData = [
          { 
            departing_from: 'BCN',
            arriving_at: 'CDG',
            num_airplanes: 1,
            airplane_list: 'plane_8',
            flight_list: 'lf_20',
            earliest_arrival: '11:00:00',
            latest_arrival: '11:00:00',
            num_pilots: 1,
            num_passengers: 2,
            joint_pilots_passengers: 3,
            persons_list: 'p27/p28/p52'
          },
          { 
            departing_from: 'BER',
            arriving_at: 'CAN',
            num_airplanes: 1,
            airplane_list: 'plane_20',
            flight_list: 'ja_35',
            earliest_arrival: '09:30:00',
            latest_arrival: '09:30:00',
            num_pilots: 1,
            num_passengers: 2,
            joint_pilots_passengers: 3,
            persons_list: 'p33/p34/p53'
          }
        ];
        
        setPeopleData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch people in the air data');
        setLoading(false);
      }
    };

    fetchPeopleInAirData();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="People In The Air" 
        description="Monitor people currently in the air"
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
        title="People In The Air" 
        description="Monitor people currently in the air"
      >
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title="People In The Air" 
      description="Monitor people currently in the air"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">View: People In The Air</h2>
        <p className="text-lg text-gray-600 mb-6 font-medium">people_in_air()</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left font-semibold">Departing From</th>
                <th className="py-3 px-4 text-left font-semibold">Arriving At</th>
                <th className="py-3 px-4 text-left font-semibold">Num Airplanes</th>
                <th className="py-3 px-4 text-left font-semibold">Airplane List</th>
                <th className="py-3 px-4 text-left font-semibold">Flight List</th>
                <th className="py-3 px-4 text-left font-semibold">Earliest Arrival</th>
                <th className="py-3 px-4 text-left font-semibold">Latest Arrival</th>
                <th className="py-3 px-4 text-left font-semibold">Num Pilots</th>
                <th className="py-3 px-4 text-left font-semibold">Num Passengers</th>
                <th className="py-3 px-4 text-left font-semibold">Joint Pilots Passengers</th>
                <th className="py-3 px-4 text-left font-semibold">Persons List</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {peopleData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.departing_from}</td>
                  <td className="py-3 px-4">{item.arriving_at}</td>
                  <td className="py-3 px-4">{item.num_airplanes}</td>
                  <td className="py-3 px-4">{item.airplane_list}</td>
                  <td className="py-3 px-4">{item.flight_list}</td>
                  <td className="py-3 px-4">{item.earliest_arrival}</td>
                  <td className="py-3 px-4">{item.latest_arrival}</td>
                  <td className="py-3 px-4">{item.num_pilots}</td>
                  <td className="py-3 px-4">{item.num_passengers}</td>
                  <td className="py-3 px-4">{item.joint_pilots_passengers}</td>
                  <td className="py-3 px-4">{item.persons_list}</td>
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
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
                <td className="py-3 px-4">...</td>
              </tr>
            </tbody>
          </table>
        </div>
        
        {peopleData.length === 0 && (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <p className="text-gray-500">No people in air data found</p>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default PeopleInTheAir; 