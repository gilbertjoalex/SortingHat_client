import React from "react";
import { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";

export default function SortingHat(props) {
  const [isShown, setIsShown] = useState(false);
  const [attribute, setAttribute] = useState("Select an attribute");
  console.log(attribute, "this is house based on attribute");

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
  console.log(houses.value);
  return (
    <div className="sortinghat">
      <h2>Sorting Hat</h2>
      <button onClick={handleClick}>What describes you most? </button>
      {isShown && (
        <div>
          <h4>Attributes </h4>

          <select onChange={handleAttributeChange}>
            <option value="Select an attribute">
              {" "}
              -- Select your defining attribute --{" "}
            </option>
            {houses.map((house) => (
              <option value={house.value}>{house.label}</option>
            ))}
          </select>
          <button
            onClick={() => {
              if (attribute === "Gryffindor") {
                return <h2> You are Gryffindor</h2>;
              }
              // dispatch(postBid(amount, id)); // GIJSBERT REFORMED
              if (handleAttributeChange === attribute[1]) {
                return <h1> You are Hufflepuff!</h1>;
              }
              // dispatch(postBid(amount, id)); // GIJSBERT REFORMED
              if (handleAttributeChange === attribute[2]) {
                return <h1> You are Ravenclaw!</h1>;
              }
              // dispatch(postBid(amount, id)); // GIJSBERT REFORMED
              if (handleAttributeChange === attribute[3]) {
                return <h1> You are Slytherin!</h1>;
              } else {
                console.log(attribute, "-------");
              }
            }}
          >
            {" "}
            Let the Sorting begin!
          </button>

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
        //   </h1> */
}

// </h1>
//   )}
// </h1>
