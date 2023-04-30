import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBed,
  faToiletPaper,
  faMapPin,
  faSterlingSign,
  faEnvelope,
} from "@fortawesome/free-solid-svg-icons";

const PropertyCard = ({ property }) => {
  const { title, type, bathrooms, bedrooms, price, city, email } = property;
  return (
    <div className="property-card">
      <h3>{title}</h3>
      <p className="property-type">{type}</p>
      <p>
        <FontAwesomeIcon icon={faBed} style={{ color: "#9667e0" }} />
        {bedrooms} bedrooms{" "}
      </p>
      <p>
        <FontAwesomeIcon icon={faToiletPaper} style={{ color: "#9667e0" }} />
        {bathrooms} bathrooms
      </p>
      <p>
        <FontAwesomeIcon icon={faMapPin} style={{ color: "#9667e0" }} />
        {city}
      </p>
      <p>
        <FontAwesomeIcon icon={faSterlingSign} style={{ color: "#9667e0" }} />
        {price}
      </p>
      <p>
        <FontAwesomeIcon icon={faEnvelope} style={{ color: "#9667e0" }} />
        <a href={`mailto${email}`}>Contact Seller</a>
      </p>
    </div>
  );
};

export default PropertyCard;
