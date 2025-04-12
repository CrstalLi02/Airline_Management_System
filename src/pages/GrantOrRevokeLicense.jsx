import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const GrantOrRevokeLicense = () => {
  const [personId, setPersonId] = useState('');
  const [licenseType, setLicenseType] = useState('pilot');
  const [action, setAction] = useState('grant');
  const [licenseNumber, setLicenseNumber] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    // 这里添加API调用逻辑
    const message = action === 'grant' 
      ? 'License granted successfully!' 
      : 'License revoked successfully!';
    
    alert(message);
    setLoading(false);
    
    // 重置表单
    resetForm();
  };

  const resetForm = () => {
    setPersonId('');
    setLicenseType('pilot');
    setAction('grant');
    setLicenseNumber('');
  };

  return (
    <PageTemplate 
      title="Grant or Revoke License" 
      description="Manage pilot and crew member licenses"
    >
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Person ID</label>
          <input
            type="text"
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={personId}
            onChange={(e) => setPersonId(e.target.value)}
            placeholder="Enter person ID"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">License Type</label>
          <select
            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            value={licenseType}
            onChange={(e) => setLicenseType(e.target.value)}
          >
            <option value="pilot">Pilot License</option>
            <option value="attendant">Flight Attendant Certification</option>
            <option value="maintenance">Maintenance Certification</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Action</label>
          <div className="flex space-x-4">
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-blue-600"
                value="grant"
                checked={action === 'grant'}
                onChange={() => setAction('grant')}
              />
              <span className="ml-2">Grant License</span>
            </label>
            <label className="inline-flex items-center">
              <input
                type="radio"
                className="form-radio h-4 w-4 text-red-600"
                value="revoke"
                checked={action === 'revoke'}
                onChange={() => setAction('revoke')}
              />
              <span className="ml-2">Revoke License</span>
            </label>
          </div>
        </div>

        {action === 'grant' && (
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License Number</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={licenseNumber}
              onChange={(e) => setLicenseNumber(e.target.value)}
              placeholder="Enter license number"
              required
            />
          </div>
        )}

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
            className={`flex items-center justify-center ${
              action === 'grant' ? 'bg-blue-600 hover:bg-blue-700' : 'bg-red-600 hover:bg-red-700'
            } text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed`}
          >
            {loading ? 'Processing...' : action === 'grant' ? 'Grant License' : 'Revoke License'}
          </button>
        </div>
      </form>
    </PageTemplate>
  );
};

export default GrantOrRevokeLicense; 