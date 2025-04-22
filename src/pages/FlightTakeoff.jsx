import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function OfferFlight() {
  const [flightId, setFlightId] = useState('');
  const [routeId, setRouteId] = useState('');
  const [supportAirline, setSupportAirline] = useState('');
  const [progress, setProgress] = useState('');
  const [nextTime, setNextTime] = useState('');
  const [supportTail, setSupportTail] = useState('');
  const [cost, setCost] = useState('');
  const [loading, setLoading] = useState(false);

  const resetForm = () => {
    setFlightId('');
    setRouteId('');
    setSupportAirline('');
    setProgress('');
    setNextTime('');
    setSupportTail('');
    setCost('');
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // TODO: replace with real API call
    alert('Flight offered!');
    setLoading(false);
    resetForm();
  };

  return (
    <PageTemplate title="Offer Flight" description="Create a new flight offer">
      <form onSubmit={handleSubmit}>
        <div>
          <label>Flight ID</label><br />
          <input
            type="text"
            value={flightId}
            onChange={e => setFlightId(e.target.value)}
            placeholder="un_41"
            required
            style={{ width: '100%', padding: 6 }}
          />
        </div>

        <div>
          <label>Route ID</label><br />
          <input
            type="text"
            value={routeId}
            onChange={e => setRouteId(e.target.value)}
            placeholder="americas_three"
            required
            style={{ width: '100%', padding: 6 }}
          />
        </div>

        <div>
          <label>Support Airline</label><br />
          <input
            type="text"
            value={supportAirline}
            onChange={e => setSupportAirline(e.target.value)}
            placeholder="United"
            required
            style={{ width: '100%', padding: 6 }}
          />
        </div>

        <div>
          <label>Progress</label><br />
          <input
            type="number"
            value={progress}
            onChange={e => setProgress(e.target.value)}
            placeholder="0"
            required
            style={{ width: '100%', padding: 6 }}
          />
        </div>

        <div>
          <label>Next Time</label><br />
          <input
            type="time"
            value={nextTime}
            onChange={e => setNextTime(e.target.value)}
            required
            style={{ width: '100%', padding: 6 }}
          />
        </div>

        <div>
          <label>Support Tail</label><br />
          <input
            type="text"
            value={supportTail}
            onChange={e => setSupportTail(e.target.value)}
            placeholder="n330ss"
            required
            style={{ width: '100%', padding: 6 }}
          />
        </div>

        <div>
          <label>Cost</label><br />
          <input
            type="number"
            value={cost}
            onChange={e => setCost(e.target.value)}
            placeholder="400"
            required
            style={{ width: '100%', padding: 6 }}
          />
        </div>

        <div style={{ marginTop: 16, display: 'flex', justifyContent: 'space-between' }}>
          <button
            type="button"
            onClick={resetForm}
            style={{ padding: '6px 12px' }}
          >
            Cancel
          </button>
          <button
            type="submit"
            disabled={loading}
            style={{ padding: '6px 12px' }}
          >
            {loading ? 'Offering...' : 'Add Flight'}
          </button>
        </div>
      </form>
    </PageTemplate>
  );
}
