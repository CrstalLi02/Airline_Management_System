import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function SimulationCycle() {
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [isError, setIsError] = useState(false);

  useEffect(() => {
    document.title = 'Simulation Cycle';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setMessage('');
    setIsError(false);

    try {
      const res = await fetch(`${API_BASE_URL}/procedures/simulation_cycle`, {
        method: 'POST',
      });
      const data = await res.json();
      if (res.ok) {
        const result = data.data;
        const msg = result
          ? `Flight ${result.flight_id} ${result.action}`
          : data.message || "Simulation cycle executed successfully!";
        setMessage(msg);
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

  return (
    <PageTemplate title="Simulation Cycle">
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Simulation Cycle</h2>

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
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <button
              type="button"
              onClick={() => window.history.back()}
              style={{ padding: '8px 16px', background: '#888', color: '#fff', border: 'none', borderRadius: 4, cursor: 'pointer' }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{ padding: '8px 16px', background: '#007bff', color: '#fff', border: 'none', borderRadius: 4, cursor: loading ? 'default' : 'pointer' }}
            >
              {loading ? 'Processing...' : 'Next Step'}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
