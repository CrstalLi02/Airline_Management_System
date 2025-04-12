import React, { useState, useEffect } from 'react';
import { API_BASE_URL } from '../constant';

export default function AddPerson() {
  const [personID, setPersonID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [locationID, setLocationID] = useState('');
  const [taxID, setTaxID] = useState('');
  const [experience, setExperience] = useState('');
  const [miles, setMiles] = useState('');
  const [funds, setFunds] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Set the document title
    document.title = 'Add Person | Airline Management System';
  }, []);

  const handleAddPerson = async () => {
    setLoading(true);

    if (!personID || !firstName || !lastName) {
      alert('Person ID, First Name, and Last Name are required.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`${API_BASE_URL}/procedures/add_person`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          personID: personID,
          firstName: firstName,
          lastName: lastName,
          locationID: locationID,
          taxID: taxID,
          experience: experience ? parseInt(experience) : null,
          miles: miles,
          funds: funds
        }),
      });

      if (response.ok) {
        // Reset form after successful submission
        setPersonID('');
        setFirstName('');
        setLastName('');
        setLocationID('');
        setTaxID('');
        setExperience('');
        setMiles('');
        setFunds('');
        
        // Show success message
        alert('Person added successfully!');
      } else {
        const errorData = await response.json();
        alert(errorData.error || 'Failed to add person.');
      }
    } catch (err) {
      console.error('Error adding person:', err);
      alert('An unexpected error occurred.');
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
              <path d="M20 21V19C20 16.7909 18.2091 15 16 15H8C5.79086 15 4 16.7909 4 19V21" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
            Add Person
          </h1>
          <p className="text-gray-500 mb-8">Register a new person in the system</p>
        </header>

        <div className="bg-white p-8 rounded-lg shadow-sm">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Person ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={personID}
                onChange={(e) => setPersonID(e.target.value)}
                placeholder="Enter person ID (e.g. p61)"
                required
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                placeholder="Enter first name"
                required
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                placeholder="Enter last name"
                required
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Location ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={locationID}
                onChange={(e) => setLocationID(e.target.value)}
                placeholder="Enter location ID (e.g. port_1)"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Tax ID</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={taxID}
                onChange={(e) => setTaxID(e.target.value)}
                placeholder="Enter tax ID (e.g. 366-50-3732)"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Experience</label>
              <input
                type="number"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={experience}
                onChange={(e) => setExperience(e.target.value)}
                placeholder="Enter experience (e.g. 27)"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Miles</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={miles}
                onChange={(e) => setMiles(e.target.value)}
                placeholder="Enter miles or NULL"
              />
            </div>

            <div className="form-group">
              <label className="block text-sm font-medium text-gray-700 mb-1">Funds</label>
              <input
                type="text"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                value={funds}
                onChange={(e) => setFunds(e.target.value)}
                placeholder="Enter funds or NULL"
              />
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
              onClick={handleAddPerson}
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