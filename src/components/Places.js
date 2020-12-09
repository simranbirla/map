import React from "react";
import "../Styling/Places.css";

const Places = ({ data, dark }) => {
  const places = data
    ? data.map((place) => {
        return (
          <div
            key={place.id}
            className="places__main"
            style={dark ? { borderColor: "#182F25" } : {}}
          >
            <img src={place.image} alt={place.Name} />
            <p>{place.Name}</p>
          </div>
        );
      })
    : null;

  return (
    <div
      className="places"
      style={
        dark
          ? { backgroundColor: "black", color: "#74C8A4" }
          : { backgroundColor: "whitesmoke" }
      }
    >
      {places ? places : null}
    </div>
  );
};

export default Places;
