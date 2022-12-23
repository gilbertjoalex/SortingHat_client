import React from "react";

import { NavLink, Link } from "react-router-dom";

export default function DetailsBox(props) {
  return (
    <div className="detailsbox">
      <p>
        <Link to={`/details/${props.id}`}>
          <h2>{props.name}</h2>
          <img src={props.symbol} alt={""} width="400" ratio="16/9" />{" "}
        </Link>
      </p>
      <span>
        <p>Founder: {props.founder}</p>
        <p>Members: {props.members}</p> <p></p>
      </span>
    </div>
  );
}
