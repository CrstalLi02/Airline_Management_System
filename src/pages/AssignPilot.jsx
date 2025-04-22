import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function AssignPilot() {
  const [flightID, setFlightID] = useState('');
  const [personID, setPersonID] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Assign Pilot';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!flightID || !personID) {
      alert('Please fill in both fields.');
      return;
    }
    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/procedures/assign_pilot`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flightID, personID }),
      });
      const data = await res.json();
      alert(res.ok ? data.message || 'Pilot assigned!' : data.details || `Failed: ${res.status}`);
      if (res.ok) resetForm();
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFlightID('');
    setPersonID('');
  };

  return (
    <PageTemplate title="Assign Pilot">
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Assign Pilot</h2>
        <form onSubmit={handleSubmit}>
          {[{ label: 'Flight ID *', value: flightID, set: setFlightID, placeholder: 'e.g. DL_42' }, { label: 'Person ID *', value: personID, set: setPersonID, placeholder: 'e.g. P7' }].map(({ label, value, set, placeholder }, idx) => (
            <div key={idx} style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>
              <input
                type="text"
                value={value}
                onChange={(e) => set(e.target.value)}
                placeholder={placeholder}
                style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
                required
              />
            </div>
          ))}
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
              {loading ? 'Assigning...' : 'Assign'}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}