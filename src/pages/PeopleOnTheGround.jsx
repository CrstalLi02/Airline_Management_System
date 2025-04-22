import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function PeopleOnTheGround() {
  const [rows, setRows] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    document.title = 'People on the Ground';
    const fetchData = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/views/people_on_the_ground`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const json = await res.json();
        // API returns { data: [...] }
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
    'Departing',
    'Airport',
    'Airport Code',
    'Airport Name',
    'City',
    'State',
    'Country',
    '#Pilots',
    '#Passengers',
    'Total',
    'Person List',
  ];

  return (
    <PageTemplate title="People on the Ground">
      <div style={{ maxWidth: 1000, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>People on the Ground</h2>
        {loading && <p style={{ textAlign: 'center' }}>Loading...</p>}
        {error && <p style={{ textAlign: 'center', color: 'red' }}>Error: {error}</p>}
        {!loading && !error && rows.length === 0 && (
          <p style={{ textAlign: 'center' }}>No people on the ground.</p>
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
                    <td style={{ padding: 8 }}>{r.departing_from || '-'}</td>
                    <td style={{ padding: 8 }}>{r.airport}</td>
                    <td style={{ padding: 8 }}>{r.airport_code}</td>
                    <td style={{ padding: 8 }}>{r.airport_name}</td>
                    <td style={{ padding: 8 }}>{r.city}</td>
                    <td style={{ padding: 8 }}>{r.state}</td>
                    <td style={{ padding: 8 }}>{r.country}</td>
                    <td style={{ padding: 8 }}>{r.num_pilots}</td>
                    <td style={{ padding: 8 }}>{r.num_passengers}</td>
                    <td style={{ padding: 8 }}>{r.joint_pilots_passengers}</td>
                    <td style={{ padding: 8 }}>{r.person_list}</td>
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