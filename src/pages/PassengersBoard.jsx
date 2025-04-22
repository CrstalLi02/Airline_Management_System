import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function PassengersBoard() {
  const [flightID, setFlightID] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState(''); // success or error text
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    document.title = 'Passengers Board';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!flightID) {
      alert('Please enter a Flight ID.');
      return;
    }
    setLoading(true);
    setMessage('');
    setIsError(false);
    try {
      const res = await fetch(`${API_BASE_URL}/procedures/passengers_board`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ flightID }),
      });
      const data = await res.json();
      if (res.ok) {
        setMessage(data.message || 'Passengers boarded successfully!');
        setFlightID('');
      } else {
        setIsError(true);
        setMessage(data.details || `Failed: ${res.status}`);
      }
    } catch (err) {
      setIsError(true);
      setMessage(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFlightID('');
    setMessage('');
    setIsError(false);
  };

  return (
    <PageTemplate title="Passengers Board">
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Passengers Board</h2>

        {message && (
          <div
            style={{
              marginBottom: 16,
              padding: 12,
              borderRadius: 4,
              background: isError ? '#fdecea' : '#e6f9f0',
              color: isError ? '#c53030' : '#276749',
              border: `1px solid ${isError ? '#feb2b2' : '#9ae6b4'}`,
            }}
          >
            {message}
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 12 }}>
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
              {loading ? 'Processing...' : 'Board'}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
