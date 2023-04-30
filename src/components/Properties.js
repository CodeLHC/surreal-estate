import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import PropertyCard from "./PropertyCard";
import Alert from "./Alert";
import "../styles/properties.css";
import getProperties from "../requests/getProperties";
import SideBar from "./SideBar";
import getByCity from "../requests/getByCity";

const Properties = () => {
  const [properties, setProperties] = useState([]);
  const [alert, setAlert] = useState({ message: "" });

  useEffect(() => {
    getProperties(setProperties, setAlert);
  }, []);

  const { search } = useLocation();
  useEffect(() => {
    getByCity({ search }, setProperties);
  }, [search]);

  return (
    <div className="properties-page">
      <SideBar />
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
