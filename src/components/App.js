import React, { useState } from "react";
import Map from "./Map";
import Places from "./Places";
import "../Styling/index.css";
import AddData from "./AddData";
import { data } from "./data";
import Path from "./Path";
import WbSunnyIcon from "@material-ui/icons/WbSunny";
import NightsStayIcon from "@material-ui/icons/NightsStay";
import PlusIcon from "@material-ui/icons/AddCircle";

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
      <Places data={places} dark={dark} setData={setPlaces} />
      <Path data={places} dark={dark} />
      <button
        style={
          dark
            ? { color: "White", background: "#182F25" }
            : { color: "black", background: "#87DDE8" }
        }
        onClick={() => setOpen(true)}
        className="add__btn"
      >
        Add data <PlusIcon />
      </button>
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
