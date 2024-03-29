import React, { useState } from "react";
import postProperty from "../requests/postProperty";
import Alert from "./Alert";
import "../styles/addProperty.css";

const AddProperty = () => {
  const initialState = {
    fields: {
      title: "",
      city: "Manchester",
      type: "Flat",
      bathrooms: 0,
      bedrooms: 0,
      email: "",
      price: 0,
    },
    alert: {
      message: "",
      isSuccess: false,
    },
  };
  const [fields, setFields] = useState(initialState.fields);
  const [alert, setAlert] = useState(initialState.alert);
  const handleAddProperty = (event) => {
    event.preventDefault();
    setAlert({ message: "", isSuccess: false });
    postProperty(fields, setAlert);
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
        <div className="type">
          What type of property is it?
          <label htmlFor="type">
            <select
              id="type"
              name="type"
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
        <Alert message={alert.message} success={alert.isSuccess} />
      </form>
    </div>
  );
};

export default AddProperty;
