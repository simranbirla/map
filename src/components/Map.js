import React, { useEffect, useState } from "react";
import ReactMapGL, { Marker, Popup } from "react-map-gl";

const Map = ({ dark, data }) => {
  const [viewport, setViewport] = useState({
    latitude: 18.711,
    longitude: 72.83,
    width: "100vw",
    height: "50vh",
    zoom: 10,
  });
  const [selectedPark, setSelectedPark] = useState(null);

  const mapStyle = dark
    ? "mapbox://styles/ssbirla/ckiehcmqj3ni819s4rvn9os39"
    : "mapbox://styles/ssbirla/ckiehei1v3naa1antx62bndhl";

  useEffect(() => {
    const listener = (e) => {
      if (e.key === "Escape") {
        setSelectedPark(null);
      }
    };
    window.addEventListener("keydown", listener);

    return () => {
      window.removeEventListener("keydown", listener);
    };
  }, []);

  return (
    <div>
      <ReactMapGL
        {...viewport}
        mapboxApiAccessToken={
          "pk.eyJ1Ijoic3NiaXJsYSIsImEiOiJja2lkYWJ2dXAwcTMxMnNwb284d3dxeGthIn0.9dElaglD9L71AmD3WmQdzw"
        }
        mapStyle={mapStyle}
        onViewportChange={(viewport) => {
          setViewport(viewport);
        }}
      >
        {data
          ? data.map((park) => (
              <Marker
                key={park.id}
                latitude={park.Latitude}
                longitude={park.Longitude}
              >
                <button
                  className="marker-btn"
                  onClick={(e) => {
                    e.preventDefault();
                    setSelectedPark(park);
                  }}
                >
                  HERE
                </button>
              </Marker>
            ))
          : null}

        {selectedPark ? (
          <Popup
            latitude={selectedPark.Latitude}
            longitude={selectedPark.Longitude}
            onClose={() => {
              setSelectedPark(null);
            }}
          >
            <div>
              <h2>{selectedPark.Name}</h2>
              <img src={selectedPark.image} />
            </div>
          </Popup>
        ) : null}
      </ReactMapGL>
    </div>
  );
};

export default Map;
