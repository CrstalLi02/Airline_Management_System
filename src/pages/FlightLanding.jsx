import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function FlightLanding() {
  const [flightID, setFlightID] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Flight Landing';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!flightID) {
      alert('Please enter a Flight ID.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/procedures/flight_landing`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flightID }),
      });
      const data = await res.json();
      alert(res.ok ? data.message || `Flight ${flightID} landed successfully!` : data.error || `Failed: ${res.status}`);
      if (res.ok) setFlightID('');
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => setFlightID('');

  return (
    <PageTemplate title="Flight Landing">
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Flight Landing</h2>
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: 'block', marginBottom: 4 }}>Flight ID *</label>
            <input
              type="text"
              value={flightID}
              onChange={(e) => setFlightID(e.target.value)}
              placeholder="e.g. DL_10"
              style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
              required
            />
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              type="button"
              onClick={resetForm}
              style={{ padding: '8px 16px', background: '#888', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, cursor: loading ? 'default' : 'pointer' }}
            >
              {loading ? 'Processing...' : 'Land Flight'}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}