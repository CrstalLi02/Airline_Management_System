import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function RouteSummary() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Route Summary';
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/views/route_summary`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        const dataArray = Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : [];
        setRows(dataArray);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  const headers = [
    'Route',
    '# Legs',
    'Leg Sequence',
    'Route Length',
    '# Flights',
    'Flight List',
    'Airport Sequence',
  ];

  return (
    <PageTemplate title="Route Summary">
      <div style={{ maxWidth: 1000, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Route Summary</h2>
        {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>}
        {!loading && !error && rows.length === 0 && (
          <p style={{ textAlign: 'center' }}>No route summary data.</p>
        )}
        {!loading && !error && rows.length > 0 && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ minWidth: 900, width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
              <thead>
                <tr>
                  {headers.map((h) => (
                    <th key={h} style={{ border: '1px solid #ccc', padding: 8, background: '#f0f0f0' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {rows.map((r, idx) => (
                  <tr key={idx} style={{ borderBottom: '1px solid #eee' }}>
                    <td style={{ padding: 8 }}>{r.route}</td>
                    <td style={{ padding: 8 }}>{r.num_legs}</td>
                    <td style={{ padding: 8 }}>{r.leg_sequence}</td>
                    <td style={{ padding: 8 }}>{r.route_length}</td>
                    <td style={{ padding: 8 }}>{r.num_flights}</td>
                    <td style={{ padding: 8 }}>{r.flight_list}</td>
                    <td style={{ padding: 8 }}>{r.airport_sequence}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </PageTemplate>
  );
}