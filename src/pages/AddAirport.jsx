import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function AddAirport() {
  const [airportId, setAirportId] = useState('');
  const [airportName, setAirportName] = useState('');
  const [city, setCity] = useState('');
  const [state, setState] = useState('');
  const [country, setCountry] = useState('');
  const [locationId, setLocationId] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Add Airport';
  }, []);

  const requiredFilled = () => airportId && airportName && city && state && country;

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!requiredFilled()) {
      alert('Please fill in all required fields.');
      return;
    }

    setLoading(true);
    try {
      const res = await fetch(`${API_BASE_URL}/procedures/add_airport`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ airportId, airportName, city, state, country, locationId }),
      });
      const data = await res.json();
      alert(res.ok ? data.message || 'Airport added successfully!' : data.error || `Failed: ${res.status}`);
      if (res.ok) resetForm();
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setAirportId('');
    setAirportName('');
    setCity('');
    setState('');
    setCountry('');
    setLocationId('');
  };

  return (
    <PageTemplate title="Add Airport">
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Add Airport</h2>
        <form onSubmit={handleSubmit}>
          {[
            {
              label: 'Airport ID *',
              value: airportId,
              set: setAirportId,
              placeholder: 'e.g. LAX',
              required: true,
            },
            {
              label: 'Airport Name *',
              value: airportName,
              set: setAirportName,
              placeholder: 'e.g. Los Angeles International Airport',
              required: true,
            },
            {
              label: 'City *',
              value: city,
              set: setCity,
              placeholder: 'e.g. Los Angeles',
              required: true,
            },
            {
              label: 'State *',
              value: state,
              set: setState,
              placeholder: 'e.g. California',
              required: true,
            },
            {
              label: 'Country *',
              value: country,
              set: setCountry,
              placeholder: 'e.g. USA',
              required: true,
            },
            {
              label: 'Location ID',
              value: locationId,
              set: setLocationId,
              placeholder: 'e.g. port_33',
            },
          ].map(({ label, value, set, placeholder, type = 'text', required }, idx) => (
            <div key={idx} style={{ marginBottom: 12 }}>
              <label style={{ display: 'block', marginBottom: 4 }}>{label}</label>
              <input
                type={type}
                value={value}
                onChange={(e) => set(e.target.value)}
                placeholder={placeholder}
                style={{ width: '100%', padding: 8, border: '1px solid #ccc', borderRadius: 4 }}
                {...(required ? { required: true } : {})}
              />
            </div>
          ))}

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
              {loading ? 'Adding...' : 'Add'}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}