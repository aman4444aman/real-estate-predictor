import React, { useState } from "react";

const cityMapping = {
  Toronto: 1,
  Vancouver: 2,
  Montreal: 3,
  Ottawa: 4,
};

const PropertyForm = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    location: "Toronto", // Default city
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData({
      ...formData,
      [name]: name === "location" ? cityMapping[value] : Number(value),
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onPredict(formData);
  };

  return (
    <form onSubmit={handleSubmit} className="mb-3">
      <div className="mb-3">
        <label className="form-label">Area (1000-9000 sq ft)</label>
        <input
          type="number"
          className="form-control"
          name="area"
          value={formData.area}
          onChange={handleChange}
          required
          placeholder="Enter area"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Bedrooms (1-6)</label>
        <input
          type="number"
          className="form-control"
          name="bedrooms"
          value={formData.bedrooms}
          onChange={handleChange}
          required
          placeholder="Enter number of bedrooms"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Bathrooms (1-3)</label>
        <input
          type="number"
          className="form-control"
          name="bathrooms"
          value={formData.bathrooms}
          onChange={handleChange}
          required
          placeholder="Enter number of bathrooms"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Location</label>
        <select
          className="form-control"
          name="location"
          value={Object.keys(cityMapping).find(
            (key) => cityMapping[key] === formData.location
          )}
          onChange={handleChange}
        >
          {Object.keys(cityMapping).map((city) => (
            <option key={city} value={city}>
              {city}
            </option>
          ))}
        </select>
      </div>

      <div className="mb-3">
        <label className="form-label">Age of Property (0-10 years)</label>
        <input
          type="number"
          className="form-control"
          name="age"
          value={formData.age}
          onChange={handleChange}
          required
          placeholder="Enter age of the property"
        />
      </div>

      <button type="submit" className="btn btn-success w-100">
        Predict
      </button>
    </form>
  );
};

export default PropertyForm;
