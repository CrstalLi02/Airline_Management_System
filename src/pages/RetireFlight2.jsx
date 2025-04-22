import React, { useState, useEffect } from "react";
import PageTemplate from "../components/PageTemplate";
import { API_BASE_URL } from "../constant";

const RetireFlight = () => {
  const [flightID, setFlightId] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    document.title = "Retire Flight";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/procedures/retire_flight`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ flightID}),
      });
      const data = await res.json();
      alert(
        res.ok
          ? data.message || "Operation successful!"
          : data.details || `Failed: ${res.status}`
      );
      if (res.ok) resetForm();
    } catch (err) {
      alert(`Error: ${err.details}`);
    } finally {
      setLoading(false);
    }

    // try {
    //   // 这里添加API调用逻辑
    //   await new Promise((resolve) => setTimeout(resolve, 1000));

    //   alert("Flight retired successfully!");
    //   setSuccess(true);

    //   // 重置表单
    //   resetForm();
    // } catch (err) {
    //   setError("Failed to retire flight. Please try again.");
    // } finally {
    //   setLoading(false);
    // }
  };

  const resetForm = () => {
    setFlightId("");
  };

  return (
    <PageTemplate title="Retire Flight">
      <div style={{ maxWidth: 400, margin: "40px auto", padding: 16 }}>
        <h2 style={{ marginBottom: 16 }}>Retire Flight</h2>

        {success && (
          <div
            style={{
              marginBottom: 16,
              padding: "10px",
              backgroundColor: "#d4edda",
              border: "1px solid #c3e6cb",
              color: "#155724",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>Flight retired successfully!</span>
          </div>
        )}

        {error && (
          <div
            style={{
              marginBottom: 16,
              padding: "10px",
              backgroundColor: "#f8d7da",
              border: "1px solid #f5c6cb",
              color: "#721c24",
              borderRadius: "4px",
              display: "flex",
              alignItems: "center",
            }}
          >
            <span>{error}</span>
          </div>
        )}

        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: 16 }}>
            <label style={{ display: "block", marginBottom: 4 }}>
              Flight ID *
            </label>
            <input
              type="text"
              value={flightID}
              onChange={(e) => setFlightId(e.target.value)}
              placeholder="e.g. aa_12"
              style={{
                width: "100%",
                padding: 8,
                border: "1px solid #ccc",
                borderRadius: 4,
              }}
              required
            />
          </div>

          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <button
              type="button"
              onClick={resetForm}
              style={{
                padding: "8px 16px",
                background: "#888",
                color: "#fff",
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
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? "Processing..." : "Retire Flight"}
            </button>
          </div>
        </form>
      </div>
    </PageTemplate>
  );
};

export default RetireFlight;
