import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import Map from "./Map";
import Places from "./Places";
import "../Styling/index.css";
import AddData from "./AddData";
import { data } from "./data";
import Path from "./Path";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";

const App = () => {
  const [dark, setDark] = useState(false);
  const [places, setPlaces] = useState([...data]);
  const [open, setOpen] = useState(false);
  return (
    <div
      className="app"
      style={
        dark ? { backgroundColor: "black" } : { backgroundColor: "whitesmoke" }
      }
    >
      <button onClick={() => setDark(!dark)} className="dark">
        {dark ? (
          <WbSunnyIcon color="secondary" fontSize="large" />
        ) : (
          <NightsStayIcon color="primary" fontSize="large" />
        )}
      </button>
      <Map dark={dark} data={places} />
      <Places data={places} dark={dark} />
      <Path data={places} />
      <Button variant="contained" color="primary" onClick={() => setOpen(true)}>
        Add data
      </Button>
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
