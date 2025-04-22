import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function GrantOrRevokeLicense() {
  const [personID, setPersonID] = useState('');
  const [license, setLicense] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Grant / Revoke License';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!personID || !license) {
      alert('Please fill in both fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/procedures/grant_or_revoke_pilot_license`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ personID, license }),
      });
      const data = await res.json();
      alert(res.ok ? data.message || 'Operation successful!' : data.error || `Failed: ${res.status}`);
      if (res.ok) resetForm();
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setPersonID('');
    setLicense('');
  };

  return (
    <PageTemplate title="Grant or Revoke License">
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Grant or Revoke License</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Person ID *</label>
            <input
              type="text"
              value={personID}
              onChange={(e) => setPersonID(e.target.value)}
              placeholder="e.g. P1001"
              style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
              required
            />
          </div>
          <div style={{ marginBottom: 24 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>License *</label>
            <input
              type="text"
              value={license}
              onChange={(e) => setLicense(e.target.value)}
              placeholder="e.g. Airbus"
              style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              type="button"
              onClick={resetForm}
              style={{ padding: '8px 16px', background: '#ccc', border: 'none', borderRadius: 4, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, cursor: loading ? 'default' : 'pointer' }}
            >
              {loading ? 'Processing...' : 'Submit'}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
