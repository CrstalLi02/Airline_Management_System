import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function AlternateAirports() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'Alternate Airports';

    const fetchData = async () => {
      const tryFetch = async (url) => {
        const res = await fetch(url);
        if (res.status === 404) return { notFound: true };
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        return { data: Array.isArray(json.data) ? json.data : Array.isArray(json) ? json : [] };
      };

      try {
        /* API spec says the endpoint is  <BASE>/api/views/alternative_airports  */
        let result = await tryFetch(`${API_BASE_URL}/api/views/alternative_airports`);
        if (result.notFound) {
          // fallback (older path without /api prefix)
          result = await tryFetch(`${API_BASE_URL}/views/alternative_airports`);
        }
        setRows(result.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const headers = ['City', 'State', 'Country', '# Airports', 'Codes', 'Names'];

  return (
    <PageTemplate title="Alternate Airports">
      <div style={{ maxWidth: 800, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Alternate Airports</h2>
        {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>}
        {!loading && !error && rows.length === 0 && (
          <p style={{ textAlign: 'center' }}>No alternate airports found.</p>
        )}
        {!loading && !error && rows.length > 0 && (
          <div style={{ overflowX: 'auto' }}>
            <table style={{ minWidth: 700, width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
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
                    <td style={{ padding: 8 }}>{r.city}</td>
                    <td style={{ padding: 8 }}>{r.state}</td>
                    <td style={{ padding: 8 }}>{r.country}</td>
                    <td style={{ padding: 8 }}>{r.num_airports}</td>
                    <td style={{ padding: 8 }}>{r.airport_code_list}</td>
                    <td style={{ padding: 8 }}>{r.airport_name_list}</td>
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