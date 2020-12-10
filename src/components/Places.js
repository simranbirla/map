import React from "react";
import "../Styling/Places.css";
import MinusIcon from "@material-ui/icons/HighlightOff";

const Places = ({ data, dark, setData }) => {
  const removePlace = (id) => {
    const arr = data.filter((place) => place.id !== id);
    setData([...arr]);
  };

  const places = data
    ? data.map((place) => {
        return (
          <div
            key={place.id}
            className="places__main"
            style={
              dark
                ? {
                    boxShadow:
                      "4px 4px 2px rgba(16, 107, 107, 0.5) ,-4px -4px 2px rgba(16, 107, 107, 0.5)",
                  }
                : {}
            }
          >
            <img src={place.image} alt={place.Name} />
            <button onClick={() => removePlace(place.id)}>
              <MinusIcon />{" "}
            </button>
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
