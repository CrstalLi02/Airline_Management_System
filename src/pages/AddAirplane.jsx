import React, { useState, useEffect } from "react";
import PageTemplate from "../components/PageTemplate";
import { API_BASE_URL } from "../constant";

export default function AddAirplane() {
  const [airlineID, setAirlineID] = useState("");
  const [tailNum, setTailNum] = useState("");
  const [seatCapacity, setSeatCapacity] = useState("");
  const [speed, setSpeed] = useState("");
  const [locationID, setLocationID] = useState("");
  const [planeType, setPlaneType] = useState("");
  const [maintenanced, setMaintenanced] = useState("");
  const [model, setModel] = useState("");
  const [neo, setNeo] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    document.title = "Add Airplane";
  }, []);

  const parseBoolOrNull = (v) =>
    v === "1" || v === "true" ? 1 : v === "0" || v === "false" ? 0 : null;

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!airlineID || !tailNum || !seatCapacity || !speed) {
      alert("Airline ID, Tail Number, Seat Capacity, and Speed are required.");
      return;
    }
    setLoading(true);
    try {
      const body = {
        airlineID,
        tail_num: tailNum,
        seat_capacity: parseInt(seatCapacity, 10) || 0,
        speed: parseInt(speed, 10) || 0,
        locationID: locationID || null,
        plane_type: planeType,
        maintenanced: parseBoolOrNull(maintenanced),
        model: model.trim() === "" || model === "null" ? null : model,
        neo: parseBoolOrNull(neo),
      };
      const res = await fetch(`${API_BASE_URL}/procedures/add_airplane`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });
      const text = await res.text();
      const data = text ? JSON.parse(text) : {};

      alert(
        res.ok
          ? data.message || "Airplane added successfully!"
          : data.details || `Failed: ${res.status}`
      );
      if (res.ok) resetForm();
    } catch (err) {
      alert(`Error: ${err.details}`);
    } finally {
      setLoading(false);
    }
  };

  const resetForm = () => {
    setAirlineID("");
    setTailNum("");
    setSeatCapacity("");
    setSpeed("");
    setLocationID("");
    setPlaneType("");
    setMaintenanced("");
    setModel("");
    setNeo("");
  };

  return (
    <PageTemplate title="Add Airplane">
      <div style={{ maxWidth: 400, margin: "40px auto", padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Add Airplane</h2>
        <form onSubmit={handleSubmit}>
          {[
            {
              label: "Airline ID *",
              value: airlineID,
              set: setAirlineID,
              placeholder: "e.g. American",
              required: true,
            },
            {
              label: "Tail Number *",
              value: tailNum,
              set: setTailNum,
              placeholder: "e.g. n817pw",
              required: true,
            },
            {
              label: "Seat Capacity *",
              value: seatCapacity,
              set: setSeatCapacity,
              placeholder: "e.g. 10",
              type: "number",
              required: true,
            },
            {
              label: "Speed *",
              value: speed,
              set: setSpeed,
              placeholder: "e.g. 900",
              type: "number",
              required: true,
            },
            {
              label: "Location ID",
              value: locationID,
              set: setLocationID,
              placeholder: "e.g. plane_2",
            },
            {
              label: "Plane Type",
              value: planeType,
              set: setPlaneType,
              placeholder: "e.g. Boeing",
            },
            {
              label: "Maintenanced",
              value: maintenanced,
              set: setMaintenanced,
              placeholder: "0/1",
            },
            {
              label: "Model",
              value: model,
              set: setModel,
              placeholder: "e.g. 787",
            },
            {
              label: "Neo",
              value: neo,
              set: setNeo,
              placeholder: "0/1",
            },
          ].map(
            (
              { label, value, set, placeholder, type = "text", required },
              idx
            ) => (
              <div key={idx} style={{ marginBottom: 12 }}>
                <label style={{ display: "block", marginBottom: 4 }}>
                  {label}
                </label>
                <input
                  type={type}
                  value={value}
                  onChange={(e) => set(e.target.value)}
                  placeholder={placeholder}
                  style={{
                    width: "100%",
                    padding: 8,
                    border: "1px solid #ccc",
                    borderRadius: 4,
                  }}
                  {...(required ? { required: true } : {})}
                />
              </div>
            )
          )}

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              onClick={resetForm}
              style={{
                padding: "8px 16px",
                background: "#ccc",
                border: "none",
                borderRadius: 4,
                cursor: "pointer",
              }}
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={loading}
              style={{
                padding: "8px 16px",
                background: "#007bff",
                color: "#fff",
                border: "none",
                borderRadius: 4,
                cursor: loading ? "default" : "pointer",
              }}
            >
              {loading ? "Adding..." : "Add"}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
}
