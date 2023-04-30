import React, { useState, useEffect } from "react";
import axios from "axios";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/v1/PropertyListing")
      .then((response) => {
        console.log("sup", response.data);
        setProperties(response.data);
      })
      .catch(function (error) {
        setAlert({ message: "Server error. Please try again later." });
        console.log(error);
      });
  }, []);
  return (
    <div className="properties">
      <h2>Properties Page</h2>
      <Alert message={alert.message} />
      {properties.map((property) => {
        return <PropertyCard property={property} key={property._id} />;
      })}
    </div>
  );
};

export default Properties;
