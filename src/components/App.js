import React, { useState } from "react";
import Map from "./Map";
import Places from "./Places";
import "../Styling/index.css";
import { data } from "./data";
import Path from "./Path";

const App = () => {
  const [dark, setDark] = useState(false);
  const [places, setPlaces] = useState([...data]);

  return (
    <div>
      <button onClick={() => setDark(!dark)}>Dark</button>
      <Map dark={dark} data={places} />
      <Places data={places} />
      <Path data={places} />
      <button
        onClick={() =>
          data.push({
            Name: "Kalyan",
            Latitude: 19.24,
            Longitude: 73.123,
          })
        }
      >
        Add
      </button>
    </div>
  );
};

export default App;
