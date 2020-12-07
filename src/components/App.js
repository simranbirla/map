import React, { useState } from "react";
import Map from "./Map";
import Places from "./Places";
import "../Styling/index.css";
import distace_matrix from "./distanceMatrix";
import kruskal_algo from "./kruskal_algo";
import { data } from "./data";
import kruskal_arr from "./distanceMatrix";

const App = () => {
  const [dark, setDark] = useState(false);
  kruskal_algo(kruskal_arr, data.length);

  return (
    <div>
      <button onClick={() => setDark(!dark)}>Dark</button>
      <Map dark={dark} />
      <Places />
    </div>
  );
};

export default App;
