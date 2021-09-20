import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, capital, population, region, flag } = props.country;
  return (
    <div className="country">
      <h3>Country Name: {name}</h3>
      <img className="flag" src={flag} alt="" />
      <p>
        <small>Country region: {region}</small>
      </p>
      <p>Country Capital: {capital}</p>
      <p>Country Population: {population}</p>
    </div>
  );
};

export default Country;
