import React from "react";

const Places = ({ data }) => {
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
