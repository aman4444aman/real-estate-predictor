import React, { useState } from "react";

const PropertyForm = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    location: "",
    age: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: Number(e.target.value) });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      {Object.keys(formData).map((key) => (
        <div key={key} className="mb-3">
          <label className="form-label">
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </label>
          <input
            type="number"
            className="form-control"
            name={key}
            value={formData[key]}
            onChange={handleChange}
            required
            placeholder={`Enter ${key}`}
          />
        </div>
      ))}
      <button type="submit" className="btn btn-success w-100">
        Predict
      </button>
    </form>
  );
};

export default PropertyForm;
