import React, { useState, useEffect } from 'react';
import PageTemplate from '../components/PageTemplate';
import { API_BASE_URL } from '../constant';

export default function AddPerson() {
  const [personID, setPersonID] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [locationID, setLocationID] = useState('');
  const [taxID, setTaxID] = useState('');
  const [experience, setExperience] = useState('');
  const [miles, setMiles] = useState('');
  const [funds, setFunds] = useState('');
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = 'Add Person';
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!personID || !firstName || !locationID) {
      alert("Person ID, First Name, and Location ID are required.");
      return;
    }

    if (taxID.trim() !== "" && miles.trim() !== "") {
      alert("A person cannot be a pilot and passenger at the same time.");
      return;
    }


    setLoading(true);
    try {
      const body = {
        personID,
        first_name: firstName,
        last_name: lastName || null,
        locationID,
        taxID: taxID || null,
        experience: isNaN(parseInt(experience, 10))
          ? null
          : parseInt(experience, 10),
        miles: isNaN(parseInt(miles, 10)) ? null : parseInt(miles, 10),
        funds: isNaN(parseFloat(funds)) ? null : parseFloat(funds),
      };

      const res = await fetch(`${API_BASE_URL}/procedures/add_person`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(body),
      });
      const data = await res.json();
      alert(res.ok ? data.message || 'Person added successfully!' : data.details || `Failed: ${res.status}`);
      if (res.ok) resetForm();
    } catch (err) {
      alert(`Error: ${err.message}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setPersonID('');
    setFirstName('');
    setLastName('');
    setLocationID('');
    setTaxID('');
    setExperience('');
    setMiles('');
    setFunds('');
  };

  return (
    <PageTemplate title="Add Person">
      <div style={{ maxWidth: 400, margin: '40px auto', padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Add Person</h2>
        <form onSubmit={handleSubmit}>
          {[
            { label: 'Person ID *', value: personID, set: setPersonID, placeholder: 'e.g. p61', required: true },
            { label: 'First Name *', value: firstName, set: setFirstName, placeholder: 'e.g. Sabrina', required: true },
            { label: 'Last Name *', value: lastName, set: setLastName, placeholder: 'e.g. Duncan', required: true },
            { label: 'Location ID *', value: locationID, set: setLocationID, placeholder: 'e.g. port_1' },
            { label: 'Tax ID', value: taxID, set: setTaxID, placeholder: 'e.g. 366-50-3732' },
            { label: 'Experience', value: experience, set: setExperience, placeholder: 'e.g. 27', type: 'number' },
            { label: 'Miles', value: miles, set: setMiles, placeholder: 'e.g. 1200', type: 'number' },
            { label: 'Funds', value: funds, set: setFunds, placeholder: 'e.g. 5000', type: 'number' },
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
