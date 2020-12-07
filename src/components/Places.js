import React from "react";
import { data } from "./data";

const Places = () => {
  const places = data
    ? data.map((place) => {
        return (
          <div key={place.id}>
            <img
              src={place.image}
              alt={place.Name}
              style={{ width: "200px", height: "200px" }}
            />
            <p>{place.Name}</p>
          </div>
        );
      })
    : null;

  return <div>{places ? places : null}</div>;
};

export default Places;
