import React from "react";
import { GoogleMap, useLoadScript } from "@react-google-maps/api";

const API_KEY = "AIzaSyBG7hTxAymvTF0a1kra5kKDBMF9nqBmKdc";

const Map = () => {
  const libraries = ["places"];
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: API_KEY,
    libraries,
  });

  const Mapstyle = {
    height: "50vh",
    width: "50wh",
    margin: "auto",
  };

  const center = {
    lat: 43.6532,
    lng: -79.3832,
  };

  if (loadError) {
    return (
      <div>
        Error loading map
        {console.log(loadError)}
      </div>
    );
  }

  if (!isLoaded) {
    return <div>Loading</div>;
  }

  return (
    <div>
      {console.log(process.env.REACT_APP_GOOGLE_MAPS_API)}
      This is where map should be
      <GoogleMap
        mapContainerStyle={Mapstyle}
        zoom={8}
        center={center}
      ></GoogleMap>
    </div>
  );
};

export default Map;
