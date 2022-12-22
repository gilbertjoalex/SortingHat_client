import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function SortingHat(props) {
  const [isShown, setIsShown] = useState(false);
  const [attribute, setAttribute] = useState("Select an attribute");

  const handleClick = (event) => {
    setIsShown((current) => !current);
  };
  const handleAttributeChange = (e) => {
    setAttribute(e.target.value);
  };

  let houses = [
    { label: "Brave", value: "Gryffindor" },
    { label: "Patient", value: "Hufflepuff" },
    { label: "Wise", value: "Ravenclaw" },
    { label: "Best", value: "Slytherin" },
  ];
  return (
    <div className="sortinghat">
      <h3>Sorting Hat</h3>
      <button onClick={handleClick}>What describes you most? </button>
      {isShown && (
        <div>
          <h4>Attributes </h4>
          {attribute}

          <select onChange={handleAttributeChange}>
            <option value="Select an attribute">
              {" "}
              -- Select your defining attribute --{" "}
            </option>
            {houses.map((house) => (
              <option value={""}>{house.label}</option>
            ))}
          </select>
          <button
            onClick={() => {
              if (handleAttributeChange === attribute[0]) {
              }
              // dispatch(postBid(amount, id)); // GIJSBERT REFORMED
              if (handleAttributeChange === attribute[1]) {
              }
              // dispatch(postBid(amount, id)); // GIJSBERT REFORMED
              if (handleAttributeChange === attribute[2]) {
              }
              // dispatch(postBid(amount, id)); // GIJSBERT REFORMED
              if (handleAttributeChange === attribute[3]) {
              } else {
                console.log(attribute, "-------");
              }
            }}
          >
            {" "}
            Let the Sorting begin!
          </button>
          {/* <p>
            {houses &&
              houses.map((house) => {
                return <p> You have selected: {house.value} </p>;
              })}
          </p> */}
          <p></p>
        </div>
      )}
    </div>
  );
}

{
  /* // <select name="selectList" id="selectList">
            //   <option value="Brave">Brave</option>{" "}
            //   <option value="Patient">Patient</option>
            //   <option value="Wize">Wize</option>{" "}
            //   <option value="First">First</option>
            // </select>
        //   </div> */
}

// </div>
//   )}
// </div>
