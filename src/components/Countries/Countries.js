import React, { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    fetch(`https://restcountries.eu/rest/v2/all`)
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);
  return (
    <div>
      <h1 className="text-success mt-5">
        Country Available: {countries.length}
      </h1>
      <h5 className="mb-5">Patching Data From Rest Country API</h5>
      <div className="component-container">
        {countries.map((country) => (
          <Country key={country.capital} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
