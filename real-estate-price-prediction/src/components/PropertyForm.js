import React, { useState } from "react";
import "./PropertyForm.css"; // Added new CSS file for styling

const PropertyForm = ({ onPredict }) => {
  const [formData, setFormData] = useState({
    area: "",
    bedrooms: "",
    bathrooms: "",
    location: "",
    age: "",
  });

  const [errors, setErrors] = useState({});

  const validateForm = () => {
    const newErrors = {};

    if (!formData.area || formData.area <= 0) {
      newErrors.area = "Area must be a positive number between 1000 and 10000";
    }

    if (!formData.bedrooms || formData.bedrooms <= 0 || formData.bedrooms > 10) {
      newErrors.bedrooms = "Bedrooms must be between 1 and 10";
    }

    if (!formData.bathrooms || formData.bathrooms <= 0 || formData.bathrooms > 10) {
      newErrors.bathrooms = "Bathrooms must be between 1 and 10";
    }

    if (!formData.location || !["Toronto", "Vancouver", "Montreal", "Ottawa"].includes(formData.location)) {
      newErrors.location = "Location must be Toronto, Vancouver, Montreal, or Ottawa";
    }

    if (!formData.age || formData.age < 0 || formData.age > 100) {
      newErrors.age = "Age must be between 0 and 10 years";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      onPredict(formData);
    }
  };

  return (
    <form className="property-form" onSubmit={handleSubmit}>
      <label>Area (sq ft)</label>
      <input
        type="number"
        name="area"
        value={formData.area}
        onChange={handleChange}
      />
      {errors.area && <div className="error-message">{errors.area}</div>}

      <label>Bedrooms</label>
      <input
        type="number"
        name="bedrooms"
        value={formData.bedrooms}
        onChange={handleChange}
      />
      {errors.bedrooms && <div className="error-message">{errors.bedrooms}</div>}

      <label>Bathrooms</label>
      <input
        type="number"
        name="bathrooms"
        value={formData.bathrooms}
        onChange={handleChange}
      />
      {errors.bathrooms && <div className="error-message">{errors.bathrooms}</div>}

      <label>Location</label>
      <select
        name="location"
        value={formData.location}
        onChange={handleChange}
      >
        <option value="">Select Location</option>
        <option value="Toronto">Toronto</option>
        <option value="Vancouver">Vancouver</option>
        <option value="Montreal">Montreal</option>
        <option value="Ottawa">Ottawa</option>
      </select>
      {errors.location && <div className="error-message">{errors.location}</div>}

      <div className="property-age">
        <label>Age of Property (Years)</label>
        <input
          type="number"
          name="age"
          value={formData.age}
          onChange={handleChange}
        />
        {errors.age && <div className="error-message">{errors.age}</div>}
      </div>

      <button className="submit-button" type="submit">
        Predict Price
      </button>
    </form>
  );
};

export default PropertyForm;
