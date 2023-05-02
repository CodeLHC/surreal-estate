import React from "react";
import { Link, useLocation } from "react-router-dom";
import qs from "qs";

const buildQueryString = (operation, valueObj) => {
  const { search } = useLocation();
  const currentQueryParams = qs.parse(search, { ignoreQueryPrefix: true });
  const newQueryParams = {
    ...currentQueryParams,
    [operation]: JSON.stringify(valueObj),
  };
  return qs.stringify(newQueryParams, { addQueryPrefix: true, encode: false });
};

const SideBar = () => {
  return (
    <div>
      Filter by City
      <Link to={buildQueryString("query", { city: "Manchester" })}>
        Manchester
      </Link>
      <Link to={buildQueryString("query", { city: "Leeds" })}>Leeds</Link>
      <Link to={buildQueryString("query", { city: "Sheffield" })}>
        Sheffield
      </Link>
      <Link to={buildQueryString("query", { city: "Liverpool" })}>
        Liverpool
      </Link>
      Sort by
      <Link to={buildQueryString("sort", { price: +1 })}>Price ascending</Link>
      <Link to={buildQueryString("sort", { price: -1 })}>Price descending</Link>
    </div>
  );
};

export default SideBar;
