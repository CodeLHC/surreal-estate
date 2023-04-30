import React, { useState, useEffect } from "react";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";
import getProperties from "../requests/getProperties";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    getProperties(setProperties, setAlert);
  }, []);
  return (
    <div className="properties-page">
      <div className="properties-title">
        <h2>Properties Page</h2>
      </div>
      <div className="properties">
        <Alert message={alert.message} />
        {properties.map((property) => {
          return <PropertyCard property={property} key={property._id} />;
        })}
      </div>
    </div>
  );
};

export default Properties;
