import React, { useState } from "react";
import "../styles/addProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      propertyType: "Flat",
      bathrooms: "",
      bedrooms: "",
      email: "",
      price: "",
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const handleAddProperty = (event) => {
    event.preventDefault();
    console.log(fields);
  };
  const handleFieldChange = (event) => {
    setFields({ ...fields, [event.target.name]: event.target.value });
  };
  return (
    <div className="add-property">
      Add your property to Surreal Estate
      <form onSubmit={handleAddProperty}>
        <div className="title">
          <label htmlFor="title">
            Where is your property?
            <input
              id="title"
              name="title"
              value={fields.title}
              onChange={handleFieldChange}
              placeholder="Norris Road, Sale"
            />
          </label>
        </div>
        <div className="city">
          <label htmlFor="city">
            City:
            <select
              id="city"
              name="city"
              value={fields.city}
              onChange={handleFieldChange}
            >
              <option value="Manchester">Manchester</option>
              <option value="Leeds">Leeds</option>
              <option value="Sheffield">Sheffield</option>
              <option value="Liverpool">Liverpool</option>
            </select>
          </label>
        </div>
        <div className="propertyType">
          What type of property is it?
          <label htmlFor="propertyType">
            <select
              id="propertyType"
              name="propertyType"
              value={fields.propertyType}
              onChange={handleFieldChange}
            >
              <option value="Flat">Flat</option>
              <option value="Detached">Detached</option>
              <option value="Semi-Detached">Semi-Detached</option>
              <option value="Terraced">Terraced</option>
              <option value="End of Terrace">End of Terrace</option>
              <option value="Cottage">Cottage</option>
              <option value="Bungalow">Bungalow</option>
            </select>
          </label>
        </div>
        <div className="bedrooms">
          <label htmlFor="bedrooms">
            Bedrooms:
            <input
              id="bedrooms"
              name="bedrooms"
              placeholder="2"
              value={fields.bedrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="bathrooms">
          <label htmlFor="bathrooms">
            Bathrooms:
            <input
              id="bathrooms"
              name="bathrooms"
              placeholder="1"
              value={fields.bathrooms}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="price">
          <label htmlFor="price">
            Price(£):
            <input
              id="price"
              name="price"
              placeholder="1000"
              value={fields.price}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <div className="email">
          <label htmlFor="email">
            Contact details:
            <input
              id="email"
              name="email"
              placeholder="who@email.com"
              value={fields.email}
              onChange={handleFieldChange}
            />
          </label>
        </div>
        <button type="submit">Add</button>
      </form>
    </div>
  );
};

export default AddProperty;
