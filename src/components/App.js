import React, { useState } from "react";
import Map from "./Map";
import Places from "./Places";
import "../Styling/index.css";
import AddData from "./AddData";
import { data } from "./data";
import Path from "./Path";

const App = () => {
  const [dark, setDark] = useState(false);
  const [places, setPlaces] = useState([...data]);
  const [open, setOpen] = useState(false);
  return (
    <div>
      <button onClick={() => setDark(!dark)}>Dark</button>
      <Map dark={dark} data={places} />
      <Places data={places} />
      <Path data={places} />
      <button onClick={() => setOpen(true)}>Add</button>
      <AddData
        open={open}
        setOpen={setOpen}
        data={places}
        setData={setPlaces}
      />
    </div>
  );
};

export default App;
