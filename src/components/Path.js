import React, { useState, useEffect } from "react";
import kruskal_algo from "./kruskal_algo";
import kruskal_arr from "./distanceMatrix";

const Path = ({ data, dark }) => {
  const [out, setOut] = useState();
  const [weight, setWeight] = useState();
  useEffect(() => {
    const matrix = kruskal_arr(data);
    const output = kruskal_algo(matrix, data.length);
    const distance = output.reduce((acc, val) => {
      return { weight: acc.weight + val.weight };
    });
    setWeight(distance.weight.toFixed(2));

    setOut(output);
    return () => {
      setOut();
    };
  }, [data]);

  return (
    <div
      className="mst"
      style={dark ? { color: "#61C8A4" } : { color: "black" }}
    >
      <h2>MST : Reach all places in less time</h2>
      <h3>
        Map the places on the map and travel accordingly for lesser distance
      </h3>
      {out
        ? out.map((place, index) => {
            return (
              <div key={index} className="mst__div">
                {data[place.source].Name} go to {data[place.destination].Name}{" "}
              </div>
            );
          })
        : null}
      <h3>Total Distance :{weight ? weight + " km " : null}</h3>
    </div>
  );
};

export default Path;
