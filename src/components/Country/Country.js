import React from "react";
import "./Country.css";

const Country = (props) => {
  const { name, flag, capital, population } = props.country;
  return (
    <div className="country">
      <h2>{name}</h2>
      <img src={flag} alt="" />
      <h4>
        Capital is: <span className="text-warning">{capital}</span>
      </h4>
      <h4>
        Population: <span className="text-danger">{population}</span>
      </h4>
    </div>
  );
};

export default Country;
