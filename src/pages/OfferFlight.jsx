import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function OfferFlight() {
  const [flightID, setFlightID] = useState('');
  const [routeID, setRouteID] = useState('');
  const [supportAirline, setSupportAirline] = useState('');
  const [progress, setProgress] = useState('');
  const [nextTime, setNextTime] = useState('');
  const [supportTail, setSupportTail] = useState('');
  const [cost, setCost] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Offer Flight';
  }, []);

  const requiredFilled = () => flightID && routeID && supportAirline && progress !== '' && nextTime && supportTail && cost !== '';

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!requiredFilled()) {
      alert('Please fill in all required fields.');
      return;
    }
    setLoading(true);
    try {
      const body = {
        flightID,
        routeID,
        support_airline: supportAirline,
        support_tail: supportTail,
        progress: parseInt(progress, 10),
        next_time: nextTime,
        cost: parseFloat(cost),
      };

      const res = await fetch(`${API_BASE_URL}/procedures/offer_flight`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      alert(res.ok ? data.message || 'Flight offered successfully!' : data.details || `Failed: ${res.status}`);
      if (res.ok) resetForm();
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setFlightID('');
    setRouteID('');
    setSupportAirline('');
    setProgress('');
    setNextTime('');
    setSupportTail('');
    setCost('');
  };

  return (
    <PageTemplate title="Offer Flight">
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Offer Flight</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Flight ID *', value: flightID, set: setFlightID, placeholder: 'e.g. un_41', required: true },
            { label: 'Route ID *', value: routeID, set: setRouteID, placeholder: 'e.g. americas_three', required: true },
            { label: 'Support Airline *', value: supportAirline, set: setSupportAirline, placeholder: 'e.g. United', required: true },
            { label: 'Progress *', value: progress, set: setProgress, placeholder: 'e.g. 0', type: 'number', required: true },
            { label: 'Next Time *', value: nextTime, set: setNextTime, type: 'time', required: true },
            { label: 'Support Tail *', value: supportTail, set: setSupportTail, placeholder: 'e.g. n330ss', required: true },
            { label: 'Cost *', value: cost, set: setCost, placeholder: 'e.g. 400', type: 'number', required: true },
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
              {loading ? 'Offering...' : 'Add Flight'}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}