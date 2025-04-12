import React, { useState } from 'react';
import PageTemplate from '../components/PageTemplate';

const GrantOrRevokeLicense = () => {
  const [personId, setPersonId] = useState('');
  const [license, setLicense] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    
    try {
      // 模拟API调用
      await new Promise(resolve => setTimeout(resolve, 500));
      alert('License operation completed successfully!');
    } catch (error) {
      alert('Failed to complete operation.');
    } finally {
      setLoading(false);
    }
  };

  const handleCancel = () => {
    // 返回主页或重置表单
    window.location.href = '/';
  };

  return (
    <PageTemplate 
      title="Grant or Revoke License" 
      description="Manage pilot and crew member licenses"
    >
      <div className="max-w-lg mx-auto">
        <h2 className="text-xl font-semibold mb-6"></h2>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Person ID</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={personId}
              onChange={(e) => setPersonId(e.target.value)}
              placeholder="Enter person ID (e.g. p1)"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">License</label>
            <input
              type="text"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              placeholder="Enter license type (e.g. Airbus)"
              required
            />
          </div>

          <div className="pt-6 flex justify-between">
            <button 
              type="button"
              onClick={handleCancel}
              className="bg-gray-600 hover:bg-gray-700 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            
            <button 
              type="submit"
              disabled={loading}
              className="bg-blue-600 hover:bg-blue-700 text-white py-2 px-6 rounded-md font-medium focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 disabled:opacity-50"
            >
              {loading ? 'Processing...' : 'Add / Revoke'}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
};

export default GrantOrRevokeLicense; 