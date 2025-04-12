import React, { useEffect, useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const PeopleOnTheGround = () => {
  const [peopleData, setPeopleData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // 模拟数据获取 - 实际项目中会从API获取
    const fetchPeopleOnGroundData = async () => {
      try {
        // 模拟数据 - 符合图片中的格式
        const mockData = [
          { 
            airport: 'ATL',
            airport_code: 'port_1',
            airport_name: 'Atlanta Hartsfield Jackson International',
            city: 'Atlanta',
            state: 'Georgia',
            country: 'USA',
            num_pilots: 6,
            num_passengers: 0,
            joint_pilots_passengers: 6,
            person_list: 'p1/p2/p3/p4/p5/p6'
          },
          { 
            airport: 'BCN',
            airport_code: 'port_15',
            airport_name: 'Barcelona International',
            city: 'Barcelona',
            state: 'Catalonia',
            country: 'ESP',
            num_pilots: 0,
            num_passengers: 2,
            joint_pilots_passengers: 2,
            person_list: 'p39/p44'
          }
        ];
        
        setPeopleData(mockData);
        setLoading(false);
      } catch (err) {
        setError('Failed to fetch people on the ground data');
        setLoading(false);
      }
    };

    fetchPeopleOnGroundData();
  }, []);

  if (loading) {
    return (
      <PageTemplate 
        title="People On The Ground" 
        description="Monitor people currently on the ground"
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
        title="People On The Ground" 
        description="Monitor people currently on the ground"
      >
        <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
          <p>{error}</p>
        </div>
      </PageTemplate>
    );
  }

  return (
    <PageTemplate 
      title="People On The Ground" 
      description="Monitor people currently on the ground"
    >
      <div className="bg-white rounded-lg shadow-md p-6">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">View: People On The Ground</h2>
        <p className="text-lg text-gray-600 mb-6 font-medium">people_on_ground()</p>
        
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white">
            <thead>
              <tr className="bg-blue-600 text-white">
                <th className="py-3 px-4 text-left font-semibold">Airport</th>
                <th className="py-3 px-4 text-left font-semibold">Airport Code</th>
                <th className="py-3 px-4 text-left font-semibold">Airport Name</th>
                <th className="py-3 px-4 text-left font-semibold">City</th>
                <th className="py-3 px-4 text-left font-semibold">State</th>
                <th className="py-3 px-4 text-left font-semibold">Country</th>
                <th className="py-3 px-4 text-left font-semibold">Num Pilots</th>
                <th className="py-3 px-4 text-left font-semibold">Num Passengers</th>
                <th className="py-3 px-4 text-left font-semibold">Joint Pilots Passengers</th>
                <th className="py-3 px-4 text-left font-semibold">Person List</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {peopleData.map((item, index) => (
                <tr key={index} className="hover:bg-gray-50">
                  <td className="py-3 px-4">{item.airport}</td>
                  <td className="py-3 px-4">{item.airport_code}</td>
                  <td className="py-3 px-4">{item.airport_name}</td>
                  <td className="py-3 px-4">{item.city}</td>
                  <td className="py-3 px-4">{item.state}</td>
                  <td className="py-3 px-4">{item.country}</td>
                  <td className="py-3 px-4">{item.num_pilots}</td>
                  <td className="py-3 px-4">{item.num_passengers}</td>
                  <td className="py-3 px-4">{item.joint_pilots_passengers}</td>
                  <td className="py-3 px-4">{item.person_list}</td>
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
              </tr>
            </tbody>
          </table>
        </div>
        
        {peopleData.length === 0 && (
          <div className="text-center py-8">
            <svg className="w-12 h-12 text-gray-300 mx-auto mb-3" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"></path>
            </svg>
            <p className="text-gray-500">No people on ground data found</p>
          </div>
        )}
      </div>
    </PageTemplate>
  );
};

export default PeopleOnTheGround; 