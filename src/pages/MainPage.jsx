import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

const MainPage = () => {
  useEffect(() => {
    console.log("MainPage component rendered");
    
    // 检查Tailwind CSS是否加载
    const styles = window.getComputedStyle(document.documentElement);
    console.log("Body background color:", styles.getPropertyValue('background-color'));
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4 py-8 max-w-6xl">
        <header className="mb-8">
          <div className="flex items-center">
            <svg className="w-8 h-8 mr-3" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 16.32C22 17.3249 21.3249 18 20.32 18H8.68C7.67508 18 7 17.3249 7 16.32M2 8.68C2 7.67508 2.67508 7 3.68 7H15.32C16.3249 7 17 7.67508 17 8.68" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M16.36 11.47L21.69 11.47" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M2.30957 14.53L7.63957 14.53" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            <h1 className="text-3xl font-bold">Airline Management System</h1>
          </div>
          <p className="text-gray-500 mt-2">Operations Dashboard</p>
        </header>
        
        {/* Flight Operations */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
              <path d="M16 12H18M18 12L16.5 10.5M18 12L16.5 13.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M7 12L10 9M10 9V15M10 9H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Flight Operations
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/flight-takeoff" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 21L19 5M19 5H7M19 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Flight Takeoff</h2>
                <p className="text-gray-500 text-sm">Authorize a flight to take off</p>
              </div>
            </Link>
          
            <Link to="/flight-landing" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 21L19 5M19 5H7M19 5V17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Flight Landing</h2>
                <p className="text-gray-500 text-sm">Register landing of incoming flights</p>
              </div>
            </Link>
            
            <Link to="/offer-flight" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 12V20C4 21.1046 4.89543 22 6 22H18C19.1046 22 20 21.1046 20 20V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 6L12 2L8 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 2V15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Offer Flight</h2>
                <p className="text-gray-500 text-sm">Schedule a new flight</p>
              </div>
            </Link>
            
            <Link to="/retire-flight" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 5L5 19M5 5L19 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 12H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Retire Flight</h2>
                <p className="text-gray-500 text-sm">Remove flight from active schedule</p>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Passenger Management */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Passenger Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/passengers-board" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9986 17.1771 21.7033 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C17.7055 3.58385 19.0031 5.17973 19.0031 7.005C19.0031 8.83027 17.7055 10.4261 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Passengers Board</h2>
                <p className="text-gray-500 text-sm">Process passenger boarding for flights</p>
              </div>
            </Link>
            
            <Link to="/passengers-disembark" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 21V19C17 16.7909 15.2091 15 13 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 11C11.2091 11 13 9.20914 13 7C13 4.79086 11.2091 3 9 3C6.79086 3 5 4.79086 5 7C5 9.20914 6.79086 11 9 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 21V19C22.9986 17.1771 21.7033 15.5857 20 15.13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 3.13C17.7055 3.58385 19.0031 5.17973 19.0031 7.005C19.0031 8.83027 17.7055 10.4261 16 10.88" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Passengers Disembark</h2>
                <p className="text-gray-500 text-sm">Process passenger deplaning for arrived flights</p>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Personnel Management */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 4.35418C12.7329 3.52375 13.8053 3 15 3C17.2091 3 19 4.79086 19 7C19 9.20914 17.2091 11 15 11C13.8053 11 12.7329 10.4762 12 9.64582M15 21H3V20C3 16.6863 5.68629 14 9 14C12.3137 14 15 16.6863 15 20V21ZM15 21H21V20C21 16.6863 18.3137 14 15 14C13.9071 14 12.8825 14.2922 12 14.8027M13 7C13 9.20914 11.2091 11 9 11C6.79086 11 5 9.20914 5 7C5 4.79086 6.79086 3 9 3C11.2091 3 13 4.79086 13 7Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Personnel Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/add-person" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M20 8V14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M23 11H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Add Person</h2>
                <p className="text-gray-500 text-sm">Register a new employee or passenger</p>
              </div>
            </Link>
            
            <Link to="/grant-revoke-license" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M4 4H20C21.1 4 22 4.9 22 6V18C22 19.1 21.1 20 20 20H4C2.9 20 2 19.1 2 18V6C2 4.9 2.9 4 4 4Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 11C13.1046 11 14 10.1046 14 9C14 7.89543 13.1046 7 12 7C10.8954 7 10 7.89543 10 9C10 10.1046 10.8954 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 16H8V15C8 13.3431 9.34315 12 11 12H13C14.6569 12 16 13.3431 16 15V16Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Grant/Revoke License</h2>
                <p className="text-gray-500 text-sm">Manage pilot and crew licenses</p>
              </div>
            </Link>
            
            <Link to="/assign-pilot" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M16 21V19C16 16.7909 14.2091 15 12 15H5C2.79086 15 1 16.7909 1 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8.5 11C10.7091 11 12.5 9.20914 12.5 7C12.5 4.79086 10.7091 3 8.5 3C6.29086 3 4.5 4.79086 4.5 7C4.5 9.20914 6.29086 11 8.5 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M22 21V19C21.9986 16.8581 20.6418 15.036 18.67 14.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M15 3.5C16.9709 3.9354 18.3231 5.75537 18.32 7.89C18.32 10.0015 16.9839 11.8118 15.04 12.25" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Assign Pilot</h2>
                <p className="text-gray-500 text-sm">Assign a pilot to a scheduled flight</p>
              </div>
            </Link>
            
            <Link to="/recycle-crew" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M8 11L4 7M4 7L8 3M4 7H16C17.0609 7 18.0783 7.42143 18.8284 8.17157C19.5786 8.92172 20 9.93913 20 11C20 12.0609 19.5786 13.0783 18.8284 13.8284C18.0783 14.5786 17.0609 15 16 15H10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 19L20 15M20 15L16 11M20 15H8C6.93913 15 5.92172 14.5786 5.17157 13.8284C4.42143 13.0783 4 12.0609 4 11C4 9.93913 4.42143 8.92172 5.17157 8.17157C5.92172 7.42143 6.93913 7 8 7H14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Recycle Crew</h2>
                <p className="text-gray-500 text-sm">Reassign flight crew to different flights</p>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Infrastructure */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M19 9.77806V16.2C19 17.8802 19 18.7202 18.673 19.362C18.3854 19.9265 17.9265 20.3854 17.362 20.673C16.7202 21 15.8802 21 14.2 21H9.8C8.11984 21 7.27976 21 6.63803 20.673C6.07354 20.3854 5.6146 19.9265 5.32698 19.362C5 18.7202 5 17.8802 5 16.2V9.77806M3 11L10.375 3.60722C11.0931 2.87786 12.267 2.87786 12.9851 3.60722L20.36 11M9 21V17C9 15.8954 9.89543 15 11 15H13C14.1046 15 15 15.8954 15 17V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Infrastructure
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/add-airplane" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M19 3H5C3.89543 3 3 3.89543 3 5V19C3 20.1046 3.89543 21 5 21H19C20.1046 21 21 20.1046 21 19V5C21 3.89543 20.1046 3 19 3Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 8V16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 12H16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Add Airplane</h2>
                <p className="text-gray-500 text-sm">Register a new airplane in the system</p>
              </div>
            </Link>
            
            <Link to="/add-airport" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 7H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3 14H21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 7V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M8 3.5L12 7L16 3.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Add Airport</h2>
                <p className="text-gray-500 text-sm">Register a new airport in the system</p>
              </div>
            </Link>
            
            <Link to="/alternate-airports" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17.9207 20C19.8128 20 20.7207 19.2091 20.7207 17.5C20.7207 15.7909 19.8128 15 17.9207 15H6.92075C5.02867 15 4.12075 15.7909 4.12075 17.5C4.12075 19.2091 5.02867 20 6.92075 20M17.9207 20H6.92075M17.9207 20V12C17.9207 8 15.9207 6 13.9207 6H10.9207C8.92075 6 6.92075 8 6.92075 12V20M13.9207 6V3M10.9207 6V3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Alternate Airports</h2>
                <p className="text-gray-500 text-sm">Manage alternate landing sites</p>
              </div>
            </Link>
          </div>
        </div>
        
        {/* Monitoring & Reports */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 21H14M10 21H6.2C5.07989 21 4.51984 21 4.09202 20.782C3.71569 20.5903 3.40973 20.2843 3.21799 19.908C3 19.4802 3 18.9201 3 17.8V8.2C3 7.07989 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V17.8C21 18.9201 21 19.4802 20.782 19.908C20.5903 20.2843 20.2843 20.5903 19.908 20.782C19.4802 21 18.9201 21 17.8 21H14M10 21V16M14 21V16M5 8H19M9 3L12 5L15 3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Monitoring & Reports
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/flights-in-the-air" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 17.27L18.18 21.5L16.54 14.97L22 10.24L15.45 9.83L12 3.5L8.55001 9.83L2.00001 10.24L7.45001 14.97L5.82001 21.5L12 17.27Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Flights In The Air</h2>
                <p className="text-gray-500 text-sm">Monitor currently airborne flights</p>
              </div>
            </Link>
            
            <Link to="/flights-on-the-ground" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M3 9L12 2L21 9V20C21 20.5304 20.7893 21.0391 20.4142 21.4142C20.0391 21.7893 19.5304 22 19 22H5C4.46957 22 3.96086 21.7893 3.58579 21.4142C3.21071 21.0391 3 20.5304 3 20V9Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M9 22V12H15V22" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Flights On The Ground</h2>
                <p className="text-gray-500 text-sm">View flights currently on ground</p>
              </div>
            </Link>
            
            <Link to="/people-in-the-air" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 12H19M19 12L16 9M19 12L16 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M19 6V5C19 3.89543 18.1046 3 17 3H7C5.89543 3 5 3.89543 5 5V19C5 20.1046 5.89543 21 7 21H17C18.1046 21 19 20.1046 19 19V18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">People In The Air</h2>
                <p className="text-gray-500 text-sm">Monitor people currently on flights</p>
              </div>
            </Link>
            
            <Link to="/people-on-the-ground" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M12 21C16.9706 21 21 16.9706 21 12C21 7.02944 16.9706 3 12 3C7.02944 3 3 7.02944 3 12C3 16.9706 7.02944 21 12 21Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.6 9H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M3.6 15H20.4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3C13.657 5.22923 14.5421 7.98407 14.5421 12C14.5421 16.0159 13.657 18.7708 12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M12 3C10.343 5.22923 9.45789 7.98407 9.45789 12C9.45789 16.0159 10.343 18.7708 12 21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">People On The Ground</h2>
                <p className="text-gray-500 text-sm">View people at airports or stations</p>
              </div>
            </Link>
            
            <Link to="/route-summary" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M14 2H6C5.46957 2 4.96086 2.21071 4.58579 2.58579C4.21071 2.96086 4 3.46957 4 4V20C4 20.5304 4.21071 21.0391 4.58579 21.4142C4.96086 21.7893 5.46957 22 6 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V8L14 2Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M14 2V8H20" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 13H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M16 17H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M10 9H9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Route Summary</h2>
                <p className="text-gray-500 text-sm">View summaries of flight routes</p>
              </div>
            </Link>
          </div>
        </div>
        
        {/* System Management */}
        <div className="mb-8">
          <h2 className="text-xl font-bold text-gray-700 mb-4 pb-2 border-b border-gray-200">
            <svg className="w-5 h-5 inline-block mr-2" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M12 15C13.6569 15 15 13.6569 15 12C15 10.3431 13.6569 9 12 9C10.3431 9 9 10.3431 9 12C9 13.6569 10.3431 15 12 15Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M21.1679 8C19.6247 4.46819 16.1006 2 11.9999 2C7.89926 2 4.37511 4.46819 2.83197 8M2.83197 16C4.37511 19.5318 7.89926 22 11.9999 22C16.1006 22 19.6247 19.5318 21.1679 16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            System Management
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            <Link to="/simulation-cycle" className="bg-white p-6 rounded-md shadow-sm flex items-start hover:shadow-md transition-shadow">
              <div className="bg-gray-100 p-3 rounded-md mr-4">
                <svg className="w-6 h-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M2 12C2 6.47715 6.47715 2 12 2C17.5228 2 22 6.47715 22 12C22 17.5228 17.5228 22 12 22C6.47715 22 2 17.5228 2 12Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  <path d="M7 12H9L11 8L13 16L15 12H17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div>
                <h2 className="text-lg font-semibold mb-1">Simulation Cycle</h2>
                <p className="text-gray-500 text-sm">Trigger a simulation cycle in the system</p>
              </div>
            </Link>
          </div>
        </div>
      </div>
      
      <footer className="w-full py-4 mt-12 border-t border-gray-200">
        <div className="container mx-auto px-4 text-center text-gray-500 text-sm">
          Airline Management System
        </div>
      </footer>
    </div>
  );
};

export default MainPage; 